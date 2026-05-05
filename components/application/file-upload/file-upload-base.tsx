"use client";

import type { ComponentProps, ComponentPropsWithRef } from "react";
import { useId, useRef, useState } from "react";
import type { FileIcon } from "@untitledui/file-icons";
import { FileIcon as FileTypeIcon } from "@untitledui/file-icons";
import { CheckCircle, Trash01, UploadCloud02, XCircle, Camera01 } from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";

/**
 * Returns a human-readable file size.
 * @param bytes - The size of the file in bytes.
 * @returns A string representing the file size in a human-readable format.
 */
export const getReadableFileSize = (bytes: number) => {
    if (bytes === 0) return "0 KB";

    const suffixes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return Math.floor(bytes / Math.pow(1024, i)) + " " + suffixes[i];
};

interface FileUploadDropZoneProps {
    /** The class name of the drop zone. */
    className?: string;
    /**
     * A hint text explaining what files can be dropped.
     */
    hint?: string;
    /**
     * Disables dropping or uploading files.
     */
    isDisabled?: boolean;
    /**
     * Specifies the types of files that the server accepts.
     * Examples: "image/*", ".pdf,image/*", "image/*,video/mpeg,application/pdf"
     */
    accept?: string;
    /**
     * Allows multiple file uploads.
     */
    allowsMultiple?: boolean;
    /**
     * Maximum file size in bytes.
     */
    maxSize?: number;
    /**
     * Variant of the drop zone.
     */
    variant?: "default" | "compact" | "modern" | "minimal" | "image";
    /**
     * Callback function that is called with the list of dropped files
     * when files are dropped on the drop zone.
     */
    onDropFiles?: (files: FileList) => void;
    /**
     * Callback function that is called with the list of unaccepted files
     * when files are dropped on the drop zone.
     */
    onDropUnacceptedFiles?: (files: FileList) => void;
    /**
     * Callback function that is called with the list of files that exceed
     * the size limit when files are dropped on the drop zone.
     */
    onSizeLimitExceed?: (files: FileList) => void;
}

export const FileUploadDropZone = ({
    className,
    hint,
    isDisabled,
    accept,
    allowsMultiple = true,
    maxSize,
    variant = "default",
    onDropFiles,
    onDropUnacceptedFiles,
    onSizeLimitExceed,
}: FileUploadDropZoneProps) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    const variantStyles = {
        default: "relative flex flex-col items-center gap-4 rounded-2xl bg-primary px-8 py-10 text-tertiary border-2 border-dashed border-secondary",
        compact: "relative flex flex-col items-center gap-3 rounded-xl bg-primary px-6 py-6 text-tertiary border-2 border-dashed border-secondary",
        modern: "relative flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-secondary px-8 py-10 text-tertiary border-2 border-dashed border-secondary shadow-lg",
        minimal: "relative flex flex-col items-center gap-2 rounded-lg bg-primary px-4 py-4 text-tertiary border border-secondary",
        image: "relative flex flex-col items-center gap-4 rounded-2xl bg-primary px-8 py-12 text-tertiary border-2 border-dashed border-secondary",
    };

    const isFileTypeAccepted = (file: File): boolean => {
        if (!accept) return true;

        // Split the accept string into individual types
        const acceptedTypes = accept.split(",").map((type) => type.trim());

        return acceptedTypes.some((acceptedType) => {
            // Handle file extensions (e.g., .pdf, .doc)
            if (acceptedType.startsWith(".")) {
                const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
                return extension === acceptedType.toLowerCase();
            }

            // Handle wildcards (e.g., image/*)
            if (acceptedType.endsWith("/*")) {
                const typePrefix = acceptedType.split("/")[0];
                return file.type.startsWith(`${typePrefix}/`);
            }

            // Handle exact MIME types (e.g., application/pdf)
            return file.type === acceptedType;
        });
    };

    const handleDragIn = (event: React.DragEvent<HTMLDivElement>) => {
        if (isDisabled) return;

        event.preventDefault();
        event.stopPropagation();
        setIsDraggingOver(true);
    };

    const handleDragOut = (event: React.DragEvent<HTMLDivElement>) => {
        if (isDisabled) return;

        event.preventDefault();
        event.stopPropagation();
        setIsDraggingOver(false);
    };

    const processFiles = (files: File[]): void => {
        // Reset the invalid state when processing files.
        setIsInvalid(false);

        const acceptedFiles: File[] = [];
        const unacceptedFiles: File[] = [];
        const oversizedFiles: File[] = [];

        // If multiple files are not allowed, only process the first file
        const filesToProcess = allowsMultiple ? files : files.slice(0, 1);

        filesToProcess.forEach((file) => {
            // Check file size first
            if (maxSize && file.size > maxSize) {
                oversizedFiles.push(file);
                return;
            }

            // Then check file type
            if (isFileTypeAccepted(file)) {
                acceptedFiles.push(file);
            } else {
                unacceptedFiles.push(file);
            }
        });

        // Handle oversized files
        if (oversizedFiles.length > 0 && typeof onSizeLimitExceed === "function") {
            const dataTransfer = new DataTransfer();
            oversizedFiles.forEach((file) => dataTransfer.items.add(file));

            setIsInvalid(true);
            onSizeLimitExceed(dataTransfer.files);
        }

        // Handle accepted files
        if (acceptedFiles.length > 0 && typeof onDropFiles === "function") {
            const dataTransfer = new DataTransfer();
            acceptedFiles.forEach((file) => dataTransfer.items.add(file));
            onDropFiles(dataTransfer.files);
        }

        // Handle unaccepted files
        if (unacceptedFiles.length > 0 && typeof onDropUnacceptedFiles === "function") {
            const unacceptedDataTransfer = new DataTransfer();
            unacceptedFiles.forEach((file) => unacceptedDataTransfer.items.add(file));

            setIsInvalid(true);
            onDropUnacceptedFiles(unacceptedDataTransfer.files);
        }

        // Clear the input value to ensure the same file can be selected again
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        if (isDisabled) return;

        handleDragOut(event);
        processFiles(Array.from(event.dataTransfer.files));
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        processFiles(Array.from(event.target.files || []));
    };

    return (
        <div
            data-dropzone
            onDragOver={handleDragIn}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragEnd={handleDragOut}
            onDrop={handleDrop}
            className={cx(
                variantStyles[variant],
                "transition-all duration-200 ease-in-out",
                isDraggingOver && "border-brand-500 bg-brand-50/10 dark:bg-brand-900/10",
                isDisabled && "cursor-not-allowed opacity-60 bg-secondary/50",
                className,
            )}
        >
            <FeaturedIcon 
                icon={variant === "image" ? Camera01 : UploadCloud02} 
                color="brand" 
                theme="modern" 
                size="lg" 
                className={cx(isDisabled && "grayscale")} 
            />

            <div className="flex flex-col gap-2 text-center max-w-sm">
                <div className="flex flex-col items-center gap-1.5">
                    <input
                        ref={inputRef}
                        id={id}
                        type="file"
                        className="peer sr-only"
                        disabled={isDisabled}
                        accept={accept}
                        multiple={allowsMultiple}
                        onChange={handleInputFileChange}
                    />
                    <div className="flex items-center gap-1 font-semibold text-sm">
                        <button 
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 underline-offset-4 hover:underline transition-all"
                            disabled={isDisabled}
                        >
                            Click to upload
                        </button>
                        <span className="text-secondary">or drag and drop</span>
                    </div>
                </div>
                <p className={cx("text-xs font-medium text-quaternary leading-relaxed transition-colors", isInvalid && "text-error-primary")}>
                    {hint || (variant === "image" ? "PNG, JPG or GIF (max. 800x400px)" : "SVG, PNG, JPG or GIF (max. 800x400px)")}
                </p>
            </div>
        </div>
    );
};

export interface FileListItemProps {
    /** The name of the file. */
    name: string;
    /** The size of the file. */
    size: number;
    /** The upload progress of the file. */
    progress: number;
    /** Whether the file failed to upload. */
    failed?: boolean;
    /** The type of the file. */
    type?: ComponentProps<typeof FileIcon>["type"];
    /** The class name of the file list item. */
    className?: string;
    /** The variant of the file icon. */
    fileIconVariant?: ComponentProps<typeof FileTypeIcon>["variant"];
    /** The function to call when the file is deleted. */
    onDelete?: () => void;
    /** The function to call when the file upload is retried. */
    onRetry?: () => void;
}

export const FileListItemProgressBar = ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }: FileListItemProps) => {
    const isComplete = progress === 100;

    return (
        <motion.li
            layout="position"
            className={cx(
                "relative flex gap-4 rounded-2xl bg-primary p-4 ring-1 ring-secondary shadow-sm transition-all duration-200 group",
                failed && "ring-2 ring-error-500",
                className,
            )}
        >
            <div className="relative">
                <FileTypeIcon className="size-10 shrink-0 dark:hidden" type={type ?? "empty"} theme="light" variant={fileIconVariant ?? "default"} />
                <FileTypeIcon className="size-10 shrink-0 not-dark:hidden" type={type ?? "empty"} theme="dark" variant={fileIconVariant ?? "default"} />
                {isComplete && (
                    <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-0.5">
                        <CheckCircle className="size-3.5 text-success-500 fill-success-50 dark:fill-success-900/50" />
                    </div>
                )}
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
                <div className="flex w-full items-start justify-between">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-primary tracking-tight">{name}</p>
                        <p className="mt-0.5 text-xs font-medium text-tertiary">{getReadableFileSize(size)}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        {!failed && !isComplete && (
                            <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 tabular-nums">{progress}%</span>
                        )}
                        <ButtonUtility 
                            color="tertiary" 
                            tooltip="Remove" 
                            icon={Trash01} 
                            size="xs" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity" 
                            onClick={onDelete} 
                        />
                    </div>
                </div>

                {!failed && (
                    <div className="mt-2.5 w-full">
                        <ProgressBar 
                            labelPosition="none" 
                            max={100} 
                            min={0} 
                            value={progress} 
                            className="h-1.5"
                        />
                    </div>
                )}

                {failed && (
                    <div className="mt-2 flex items-center gap-3">
                        <span className="text-xs font-bold text-error-600 flex items-center gap-1">
                            <XCircle className="size-3" /> Upload failed
                        </span>
                        <button 
                            onClick={onRetry} 
                            className="text-xs font-bold text-brand-600 hover:text-brand-700 underline"
                        >
                            Retry
                        </button>
                    </div>
                )}
            </div>
        </motion.li>
    );
};

export const FileListItemProgressFill = ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }: FileListItemProps) => {
    const isComplete = progress === 100;

    return (
        <motion.li layout="position" className={cx("relative flex gap-4 overflow-hidden rounded-2xl bg-primary p-4 shadow-sm group", className)}>
            {/* Progress fill. */}
            <div
                style={{ transform: `translateX(-${100 - progress}%)` }}
                className={cx(
                    "absolute inset-0 size-full bg-brand-50/40 dark:bg-brand-900/10 transition-transform duration-300 ease-out", 
                    isComplete && "opacity-0"
                )}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            />
            {/* Inner ring. */}
            <div
                className={cx(
                    "absolute inset-0 size-full rounded-[inherit] ring-1 ring-secondary transition duration-100 ease-linear ring-inset",
                    failed && "ring-2 ring-error-500",
                )}
            />
            
            <div className="relative">
                <FileTypeIcon className="size-10 shrink-0 dark:hidden" type={type ?? "empty"} theme="light" variant={fileIconVariant ?? "solid"} />
                <FileTypeIcon className="size-10 shrink-0 not-dark:hidden" type={type ?? "empty"} theme="dark" variant={fileIconVariant ?? "solid"} />
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col justify-center">
                <div className="flex w-full items-start justify-between">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-primary tracking-tight">{name}</p>
                        <p className="mt-0.5 text-xs font-medium text-tertiary">
                            {failed ? "Failed to upload" : getReadableFileSize(size)}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        {!failed && isComplete && <CheckCircle className="size-4 text-success-500" />}
                        <ButtonUtility 
                            color="tertiary" 
                            tooltip="Remove" 
                            icon={Trash01} 
                            size="xs" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity" 
                            onClick={onDelete} 
                        />
                    </div>
                </div>

                {failed && (
                    <button 
                        onClick={onRetry} 
                        className="mt-1 text-xs font-bold text-brand-600 hover:text-brand-700 underline text-left"
                    >
                        Try again
                    </button>
                )}
            </div>
        </motion.li>
    );
};

const FileUploadRoot = (props: ComponentPropsWithRef<"div">) => (
    <div {...props} className={cx("flex flex-col gap-5", props.className)}>
        {props.children}
    </div>
);

const FileUploadList = (props: ComponentPropsWithRef<"ul">) => (
    <ul {...props} className={cx("flex flex-col gap-3.5", props.className)}>
        <AnimatePresence initial={false}>{props.children}</AnimatePresence>
    </ul>
);

export const FileUpload = {
    Root: FileUploadRoot,
    List: FileUploadList,
    DropZone: FileUploadDropZone,
    ListItemProgressBar: FileListItemProgressBar,
    ListItemProgressFill: FileListItemProgressFill,
};
