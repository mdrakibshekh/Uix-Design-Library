"use client";

import React from "react";
import { 
    User, 
    Settings, 
    CreditCard, 
    LogOut, 
    Plus, 
    Users, 
    Zap,
    LifeBuoy,
    Cloud,
    Mail,
    MessageSquare,
    BookOpen,
    ChevronDown,
    HelpCircle,
    Share2,
    Trash2
} from "lucide-react";
import { GitHub } from "@/components/foundations/social-icons";
import { Dropdown } from "./dropdown";
import { Avatar } from "../avatar/avatar";
import { Button } from "../buttons/button";

export const SimpleDropdownDemo = () => {
    return (
        <Dropdown.Root>
            <Button color="secondary" size="md">Options</Button>
            <Dropdown.Popover>
                <Dropdown.Menu>
                    <Dropdown.Item label="Profile" />
                    <Dropdown.Item label="Settings" />
                    <Dropdown.Item label="Logout" />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownWithIconsDemo = () => {
    return (
        <Dropdown.Root>
            <Button color="secondary" size="md" iconTrailing={ChevronDown}>Actions</Button>
            <Dropdown.Popover>
                <Dropdown.Menu>
                    <Dropdown.Item label="Edit" icon={Settings} />
                    <Dropdown.Item label="Duplicate" icon={Plus} />
                    <Dropdown.Item label="Delete" icon={LogOut} />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownWithSelectionDemo = () => {
    const [selected, setSelected] = React.useState<string>("option1");
    return (
        <Dropdown.Root>
            <Button color="secondary" size="md">Select Option</Button>
            <Dropdown.Popover>
                <Dropdown.Menu selectionMode="single" selectedKeys={[selected]} onSelectionChange={(keys) => setSelected(keys as any)}>
                    <Dropdown.Item id="option1" label="Option 1" />
                    <Dropdown.Item id="option2" label="Option 2" />
                    <Dropdown.Item id="option3" label="Option 3" />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const MegaMenuDemo = () => {
    return (
        <Dropdown.Root>
            <Button color="secondary" size="md">Resources</Button>
            <Dropdown.Popover className="w-[480px]">
                <div className="grid grid-cols-2 p-2">
                    <div className="flex flex-col gap-1">
                        <div className="shadow-none ring-0">
                            <div>
                                <div className="px-3 py-2 text-xs font-semibold text-fg-brand-primary uppercase tracking-wider">
                                    Resources
                                </div>
                                <div className="cursor-pointer px-2.5 py-2 rounded-md hover:bg-primary_hover transition duration-100 ease-linear">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="size-4 stroke-[2.25px] text-fg-quaternary" />
                                        <div>
                                            <span className="text-sm font-semibold text-secondary">Blog</span>
                                            <span className="block text-xs text-tertiary font-normal">Latest news and articles</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer px-2.5 py-2 rounded-md hover:bg-primary_hover transition duration-100 ease-linear">
                                    <div className="flex items-center gap-2">
                                        <HelpCircle className="size-4 stroke-[2.25px] text-fg-quaternary" />
                                        <div>
                                            <span className="text-sm font-semibold text-secondary">Help Center</span>
                                            <span className="block text-xs text-tertiary font-normal">Tutorials and guides</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer px-2.5 py-2 rounded-md hover:bg-primary_hover transition duration-100 ease-linear">
                                    <div className="flex items-center gap-2">
                                        <Users className="size-4 stroke-[2.25px] text-fg-quaternary" />
                                        <div>
                                            <span className="text-sm font-semibold text-secondary">Customer Stories</span>
                                            <span className="block text-xs text-tertiary font-normal">See how others use UIX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 bg-secondary rounded-md p-2">
                        <p className="px-2 py-1 text-xs font-semibold text-tertiary uppercase tracking-wider">Featured</p>
                        <div className="p-2 flex flex-col gap-3">
                            <div className="group cursor-pointer">
                                <div className="aspect-video rounded-md bg-brand-secondary mb-2 flex items-center justify-center overflow-hidden">
                                    <Zap className="size-8 text-fg-brand-primary animate-pulse" />
                                </div>
                                <p className="text-sm font-semibold text-primary group-hover:text-brand-secondary">What's new in UIX 2.0</p>
                                <p className="text-xs text-tertiary mt-1">Discover the latest features and improvements.</p>
                            </div>
                            <Button size="sm" color="blue" className="w-fit p-0" variant="ghost">Read more →</Button>
                        </div>
                    </div>
                </div>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownWithAvatarsAndDescriptionsDemo = () => {
    return (
        <Dropdown.Root>
            <Button color="secondary" size="md" iconTrailing={ChevronDown}>Assign User</Button>
            <Dropdown.Popover className="w-72">
                <Dropdown.Menu>
                    <Dropdown.Item 
                        label="Olivia Rhye" 
                        description="Product Designer" 
                        avatarUrl="https://i.pravatar.cc/150?u=olivia" 
                    />
                    <Dropdown.Item 
                        label="Phoenix Baker" 
                        description="Engineering Manager" 
                        avatarUrl="https://i.pravatar.cc/150?u=phoenix" 
                    />
                    <Dropdown.Item 
                        label="Lana Steiner" 
                        description="Frontend Developer" 
                        avatarUrl="https://i.pravatar.cc/150?u=lana" 
                    />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownWithSubmenusDemo = () => {
    return (
        <Dropdown.Root>
            <Button color="secondary" size="md" iconTrailing={ChevronDown}>More Actions</Button>
            <Dropdown.Popover className="w-56">
                <Dropdown.Menu>
                    <Dropdown.Item label="Share" icon={Users} />
                    <Dropdown.Item label="Download" icon={Cloud} />
                    <Dropdown.Separator />
                    <Dropdown.SubmenuTrigger>
                        <Dropdown.Item label="Invite users" icon={Plus} />
                        <Dropdown.Popover placement="right top">
                            <Dropdown.Menu>
                                <Dropdown.Item label="Email" icon={Mail} />
                                <Dropdown.Item label="Message" icon={MessageSquare} />
                                <Dropdown.Item label="Twitter" icon={Share2} />
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown.SubmenuTrigger>
                    <Dropdown.Item label="Settings" icon={Settings} />
                    <Dropdown.Separator />
                    <Dropdown.Item label="Delete" icon={Trash2} variant="danger" />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownWithSelectionModesDemo = () => {
    const [selectedItems, setSelectedItems] = React.useState<any>(new Set(["email"]));
    const [theme, setTheme] = React.useState<any>(new Set(["light"]));

    return (
        <div className="flex gap-4">
            {/* Checkbox selection */}
            <Dropdown.Root>
                <Button color="secondary" size="md" iconTrailing={ChevronDown}>Notifications</Button>
                <Dropdown.Popover className="w-56">
                    <Dropdown.Menu 
                        selectionMode="multiple" 
                        selectedKeys={selectedItems} 
                        onSelectionChange={setSelectedItems}
                    >
                        <Dropdown.Section>
                            <Dropdown.SectionHeader className="px-3 py-1.5 text-xs font-semibold text-tertiary uppercase">Preferences</Dropdown.SectionHeader>
                            <Dropdown.Item id="email" label="Email" selectionIndicator="checkbox" />
                            <Dropdown.Item id="push" label="Push" selectionIndicator="checkbox" />
                            <Dropdown.Item id="sms" label="SMS" selectionIndicator="checkbox" />
                        </Dropdown.Section>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown.Root>

            {/* Radio selection */}
            <Dropdown.Root>
                <Button color="secondary" size="md" iconTrailing={ChevronDown}>Theme</Button>
                <Dropdown.Popover className="w-48">
                    <Dropdown.Menu 
                        selectionMode="single" 
                        selectedKeys={theme} 
                        onSelectionChange={setTheme}
                    >
                        <Dropdown.Item id="light" label="Light" selectionIndicator="radio" />
                        <Dropdown.Item id="dark" label="Dark" selectionIndicator="radio" />
                        <Dropdown.Item id="system" label="System" selectionIndicator="radio" />
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown.Root>
            
            {/* Toggle selection */}
            <Dropdown.Root>
                <Button color="secondary" size="md" iconTrailing={ChevronDown}>Settings</Button>
                <Dropdown.Popover className="w-56">
                    <Dropdown.Menu>
                        <Dropdown.Item id="public" label="Public Profile" selectionIndicator="toggle" />
                        <Dropdown.Item id="marketing" label="Marketing Emails" selectionIndicator="toggle" />
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown.Root>
        </div>
    );
};

export const ProfileDropdownDemo = () => {
    return (
        <Dropdown.Root>
            <Button 
                className="w-fit bg-tertiary/20 border border-border-secondary text-secondary hover:bg-tertiary/40 hover:border-border-secondary/60"
                color="secondary"
                iconLeading={(props) => <Avatar size="xs" src="https://i.pravatar.cc/150?u=rakib" alt="Rakib Shekh" {...props} />}
                iconTrailing={ChevronDown}
            >
                My Account
            </Button>
            <Dropdown.Popover className="w-64">
                <Dropdown.Menu>
                    <Dropdown.Section>
                        <Dropdown.SectionHeader className="px-3 py-2 border-b border-border-secondary mb-1">
                            <p className="text-sm font-semibold text-secondary">Rakib Shekh</p>
                            <p className="text-xs text-tertiary/60">rakib@example.com</p>
                        </Dropdown.SectionHeader>
                        
                        <Dropdown.Item label="View Profile" icon={User} />
                        <Dropdown.Item label="Settings" icon={Settings} addon="⌘S" />
                        <Dropdown.Item label="Billing" icon={CreditCard} />
                    </Dropdown.Section>
                    
                    <Dropdown.Separator />
                    
                    <Dropdown.Section>
                        <Dropdown.Item label="Team" icon={Users} />
                        <Dropdown.Item label="Invite Users" icon={Plus} />
                    </Dropdown.Section>
                    
                    <Dropdown.Separator />
                    
                    <Dropdown.Section>
                        <Dropdown.Item label="GitHub" icon={GitHub} />
                        <Dropdown.Item label="Support" icon={LifeBuoy} />
                        <Dropdown.Item label="API" icon={Cloud} />
                    </Dropdown.Section>
                    
                    <Dropdown.Separator />
                    
                    <Dropdown.Item label="Log out" icon={LogOut} className="text-error-primary" />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};
