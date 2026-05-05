"use client";

import { TextEditor } from "./text-editor";

export const TextEditorPreview = () => (
    <div className="w-full scale-90 origin-top">
        <TextEditor className="min-h-[100px]" placeholder="Start typing..." />
    </div>
);

export const TextEditorFullDemo = () => (
    <div className="w-full max-w-3xl">
        <TextEditor placeholder="Write your thoughts here..." />
    </div>
);

export const TextEditorCompactDemo = () => (
    <div className="w-full max-w-2xl">
        <TextEditor className="min-h-[150px]" placeholder="Add a comment..." />
    </div>
);

export const TextEditorDemo = () => {
    return (
        <div className="flex flex-col gap-12 w-full max-w-3xl">
            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-primary">Post Editor</p>
                <TextEditor placeholder="Write your thoughts here..." />
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-primary">Comment Editor (Compact)</p>
                <TextEditor className="min-h-[150px]" placeholder="Add a comment..." />
            </div>
        </div>
    );
};
