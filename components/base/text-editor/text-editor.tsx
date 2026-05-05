"use client";

import React, { useState } from "react";
import { 
    Bold, 
    Italic, 
    List, 
    ListOrdered, 
    Link2, 
    Image as ImageIcon,
    Type,
    AlignCenter,
    AlignLeft,
    AlignRight,
    Undo,
    Redo,
    Maximize2
} from "lucide-react";
import { cx } from "@/utils/cx";

export const TextEditor = ({ className, placeholder = "Start typing..." }: { className?: string; placeholder?: string }) => {
    const [content, setContent] = useState("");

    const toolbarGroups = [
        [
            { icon: Undo, label: "Undo" },
            { icon: Redo, label: "Redo" },
        ],
        [
            { icon: Type, label: "Text Style" },
            { icon: Bold, label: "Bold" },
            { icon: Italic, label: "Italic" },
        ],
        [
            { icon: List, label: "Bullet List" },
            { icon: ListOrdered, label: "Ordered List" },
        ],
        [
            { icon: AlignLeft, label: "Align Left" },
            { icon: AlignCenter, label: "Align Center" },
            { icon: AlignRight, label: "Align Right" },
        ],
        [
            { icon: Link2, label: "Insert Link" },
            { icon: ImageIcon, label: "Insert Image" },
        ],
    ];

    return (
        <div className={cx(
            "flex flex-col rounded-xl border border-border bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all focus-within:ring-2 focus-within:ring-utility-brand-600/20 focus-within:border-utility-brand-600",
            className
        )}>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 border-b border-border bg-utility-gray-50/50 dark:bg-slate-800/50 p-1.5">
                {toolbarGroups.map((group, i) => (
                    <React.Fragment key={i}>
                        <div className="flex items-center gap-0.5">
                            {group.map((item, j) => (
                                <button
                                    key={j}
                                    type="button"
                                    title={item.label}
                                    className="p-2 rounded-md text-fg-quaternary hover:bg-utility-gray-100 dark:hover:bg-slate-700 hover:text-fg-primary transition-colors"
                                >
                                    <item.icon className="size-4" />
                                </button>
                            ))}
                        </div>
                        {i < toolbarGroups.length - 1 && (
                            <div className="w-px h-4 bg-border mx-1" />
                        )}
                    </React.Fragment>
                ))}
                <div className="flex-1" />
                <button className="p-2 rounded-md text-fg-quaternary hover:bg-utility-gray-100 dark:hover:bg-slate-700 transition-colors">
                    <Maximize2 className="size-4" />
                </button>
            </div>

            {/* Editor Area */}
            <div className="relative flex-1 min-h-[200px]">
                <textarea
                    className="w-full h-full min-h-[200px] p-4 bg-transparent resize-y focus:outline-none text-fg-primary placeholder:text-fg-quaternary"
                    placeholder={placeholder}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-border text-xs text-fg-quaternary bg-utility-gray-50/30 dark:bg-slate-800/30">
                <div className="flex gap-4">
                    <span>{content.length} characters</span>
                    <span>{content.split(/\s+/).filter(Boolean).length} words</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-utility-success-500" />
                    <span>Saved</span>
                </div>
            </div>
        </div>
    );
};
