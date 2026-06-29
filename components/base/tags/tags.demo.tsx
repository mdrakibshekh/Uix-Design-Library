"use client";

import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Tag, TagGroup, type TagItem, TagList } from "@/components/base/tags/tags";

export const DefaultDemo = ({ isCompact = false }: { isCompact?: boolean }) => {
    return (
        <TagGroup label="Tags" size="md">
            <TagList className="flex gap-2">
                <Tag>Label</Tag>
                {!isCompact && <Tag avatarSrc="https://flagcdn.com/au.svg">Label</Tag>}
                <Tag avatarSrc="https://i.pravatar.cc/150?u=olivia">Label</Tag>
                {!isCompact && <Tag dot={true}>Label</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CloseXDemo = () => {
    const [tags, setTags] = useState<TagItem[]>([
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", dot: true },
    ]);

    return (
        <TagGroup
            label="Tags"
            size="md"
            onRemove={(keys) => {
                setTags(tags.filter((tag) => !keys.has(tag.id)));
            }}
        >
            <TagList className="flex flex-col items-start gap-4 md:flex-row" items={tags}>
                {(item) => <Tag {...item}>{item.label}</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CountDemo = () => {
    return (
        <TagGroup label="Tags" size="md">
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag count={5}>Label</Tag>
                <Tag avatarSrc="https://flagcdn.com/au.svg" count={5}>
                    Label
                </Tag>
                <Tag avatarSrc="https://i.pravatar.cc/150?u=olivia" count={5}>
                    Label
                </Tag>
                <Tag dot={true} count={5}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const CheckboxDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));

    return (
        <TagGroup label="Tags" size="md" selectionMode="multiple" selectedKeys={selectedTags} onSelectionChange={setSelectedTags}>
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag id="tag-01">Label</Tag>
                <Tag id="tag-02" avatarSrc="https://flagcdn.com/au.svg">
                    Label
                </Tag>
                <Tag id="tag-03" avatarSrc="https://i.pravatar.cc/150?u=olivia">
                    Label
                </Tag>
                <Tag id="tag-04" dot={true}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const CheckboxCloseXDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));
    const [tags, setTags] = useState<TagItem[]>([
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", dot: true },
    ]);

    return (
        <TagGroup
            label="Tags"
            size="md"
            selectionMode="multiple"
            selectedKeys={selectedTags}
            onSelectionChange={setSelectedTags}
            onRemove={(keys) => {
                setTags(tags.filter((tag) => !keys.has(tag.id)));
            }}
        >
            <TagList className="flex flex-col items-start gap-4 md:flex-row" items={tags}>
                {(item) => <Tag {...item}>{item.label}</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CheckboxCountDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));

    return (
        <TagGroup label="Tags" size="md" selectionMode="multiple" selectedKeys={selectedTags} onSelectionChange={setSelectedTags}>
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag id="tag-01" count={5}>
                    Label
                </Tag>
                <Tag id="tag-02" avatarSrc="https://flagcdn.com/au.svg" count={5}>
                    Label
                </Tag>
                <Tag id="tag-03" avatarSrc="https://i.pravatar.cc/150?u=olivia" count={5}>
                    Label
                </Tag>
                <Tag id="tag-04" dot={true} count={5}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Small */}
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://flagcdn.com/au.svg">Label</Tag>
                    <Tag avatarSrc="https://i.pravatar.cc/150?u=olivia">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>

            {/* Medium */}
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://flagcdn.com/au.svg">Label</Tag>
                    <Tag avatarSrc="https://i.pravatar.cc/150?u=olivia">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>

            {/* Large */}
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://flagcdn.com/au.svg">Label</Tag>
                    <Tag avatarSrc="https://i.pravatar.cc/150?u=olivia">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>
        </div>
    );
};

export const ColorsDemo = () => {
    const colors = ["gray", "brand", "error", "warning", "success", "indigo", "purple", "blue-light", "pink", "orange"] as const;
    
    return (
        <div className="flex flex-col gap-8">
            <TagGroup label="Colors gray">
                <TagList className="flex flex-wrap gap-4">
                    {colors.map(color => (
                        <Tag key={color} color={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</Tag>
                    ))}
                </TagList>
            </TagGroup>
            <TagGroup label="Colors dot">
                <TagList className="flex flex-wrap gap-4">
                    {colors.map(color => (
                        <Tag key={color} color={color} dot={true}>{color.charAt(0).toUpperCase() + color.slice(1)}</Tag>
                    ))}
                </TagList>
            </TagGroup>
            <TagGroup label="Colors count">
                <TagList className="flex flex-wrap gap-4">
                    {colors.map(color => (
                        <Tag key={color} color={color} count={5}>{color.charAt(0).toUpperCase() + color.slice(1)}</Tag>
                    ))}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const Default = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://flagcdn.com/w80/au.png", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia" },
        { id: "tag-04", label: "Label", dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CloseX = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", onClose: () => {} },
        { id: "tag-02", label: "Label", onClose: () => {}, avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", onClose: () => {}, avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", onClose: () => {}, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const Count = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", count: 5 },
        { id: "tag-02", label: "Label", count: 5, avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", count: 5, avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", count: 5, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxDefault = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxCloseX = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", onClose: () => {} },
        { id: "tag-02", label: "Label", onClose: () => {}, avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", onClose: () => {}, avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", onClose: () => {}, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxCount = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", count: 5 },
        { id: "tag-02", label: "Label", count: 5, avatarSrc: "https://flagcdn.com/au.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", count: 5, avatarSrc: "https://i.pravatar.cc/150?u=olivia" },
        { id: "tag-04", label: "Label", count: 5, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};
