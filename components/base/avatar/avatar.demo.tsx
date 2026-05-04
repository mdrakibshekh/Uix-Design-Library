"use client";

import { User01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo";
import { AvatarAddButton, AvatarCompanyIcon } from "@/components/base/avatar/base-components";
import { AvatarCount } from "./base-components/avatar-count";

export const DefaultDemo = ({ isCompact = false }: { isCompact?: boolean }) => {
    return (
        <AvatarLabelGroup
            size="md"
            src="https://i.pravatar.cc/150?u=olivia"
            alt="Olivia Rhye"
            title="Olivia Rhye"
            subtitle={isCompact ? undefined : "olivia@uix.design"}
        />
    );
};

export const BaseDemo = () => {
    return <Avatar size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />;
};

export const StatusIndicatorDemo = () => {
    return (
        <div className="flex gap-8">
            <Avatar status="online" size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />
            <Avatar status="offline" size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />
        </div>
    );
};

export const CompanyLogoDemo = () => {
    return (
        <Avatar
            size="md"
            src="https://i.pravatar.cc/150?u=olivia"
            alt="Olivia Rhye"
            badge={<AvatarCompanyIcon src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=200&auto=format&fit=crop" alt="Layers Inc." size="md" />}
        />
    );
};

export const VerifiedDemo = () => {
    return <Avatar verified size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />;
};

export const PlaceholderDemo = () => {
    return <Avatar size="md" alt="Olivia Rhye" placeholderIcon={User01} />;
};

export const InitialsDemo = () => {
    return <Avatar size="md" alt="Olivia Rhye" initials="OR" />;
};

export const LabelGroupDemo = () => {
    return (
        <AvatarLabelGroup
            size="md"
            src="https://i.pravatar.cc/150?u=olivia"
            alt="Olivia Rhye"
            title="Olivia Rhye"
            subtitle="olivia@uix.design"
        />
    );
};

export const GroupDemo = () => {
    return (
        <div className="flex gap-2">
            <div className="flex -space-x-2">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=phoenix-baker"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=lana-steiner"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=demi-wilkinson"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=candice-wu"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=natali-craig"
                    alt="Natali Craig"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=drew-cano"
                    alt="Drew Cano"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=orlando-diggs"
                    alt="Orlando Diggs"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=andi-lane"
                    alt="Andi Lane"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=kate-morrison"
                    alt="Kate Morrison"
                />
                <Avatar
                    size="sm"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-sm font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="sm" />
        </div>
    );
};

export const ProfilePhotoDemo = () => {
    return (
        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />
            <AvatarProfilePhoto verified size="md" alt="Olivia Rhye" placeholderIcon={User01} />
            <AvatarProfilePhoto verified size="md" alt="Olivia Rhye" initials="OR" />
        </div>
    );
};

export const Group = () => (
    <div className="flex flex-col gap-4">
        <div className="flex gap-2">
            <div className="flex -space-x-1">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://i.pravatar.cc/150?u=sienna-hewitt"
                    alt="Sienna Hewitt"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://i.pravatar.cc/150?u=ammar-foley"
                    alt="Ammar Foley"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://i.pravatar.cc/150?u=pippa-wilkinson"
                    alt="Pippa Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://i.pravatar.cc/150?u=olly-schroeder"
                    alt="Olly Schroeder"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://i.pravatar.cc/150?u=mathilde-lewis"
                    alt="Mathilde Lewis"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://i.pravatar.cc/150?u=julius-vaughan"
                    alt="Julius Vaughan"
                />
                <Avatar
                    size="xs"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-xs font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="xs" />
        </div>
        <div className="flex gap-2">
            <div className="flex -space-x-2">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=sienna-hewitt"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=ammar-foley"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=pippa-wilkinson"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=olly-schroeder"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=mathilde-lewis"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=julius-vaughan"
                    alt="Natali Craig"
                />
                <Avatar
                    size="sm"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-sm font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="sm" />
        </div>
        <div className="flex gap-2">
            <div className="flex -space-x-3">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=sienna-hewitt"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=ammar-foley"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=pippa-wilkinson"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=olly-schroeder"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=mathilde-lewis"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=julius-vaughan"
                    alt="Natali Craig"
                />
                <Avatar
                    size="md"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-md font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="md" />
        </div>
    </div>
);

export const Default = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar size="xs" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar size="sm" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar size="lg" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar size="xl" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar size="2xl" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="xs"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="sm"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="md"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="lg"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="2xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="xs" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="sm" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="lg" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="2xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xs"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="sm"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="md"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="lg"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="2xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="xs" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="sm" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="lg" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar size="2xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
        </div>
    </div>
);

export const WithBorder = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar border size="xs" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar border size="sm" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar border size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar border size="lg" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar border size="xl" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar border size="2xl" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" focusable />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="xs"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="sm"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="md"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="lg"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="2xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    alt="Olivia Rhye"
                    focusable
                    badge={<AvatarCount count={5} />}
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="xs" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="sm" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="md" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="lg" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" status="online" />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="2xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="xs"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="sm"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="md"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="lg"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    border
                    size="2xl"
                    src="https://i.pravatar.cc/150?u=olivia"
                    focusable
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="xs" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="sm" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="md" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="lg" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar border size="2xl" src="https://i.pravatar.cc/150?u=olivia" focusable alt="Olivia Rhye" verified />
            </a>
        </div>
    </div>
);

export const Placeholder = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <Avatar size="xs" placeholderIcon={User01} />
            <Avatar size="sm" placeholderIcon={User01} />
            <Avatar size="md" placeholderIcon={User01} />
            <Avatar size="lg" placeholderIcon={User01} />
            <Avatar size="xl" placeholderIcon={User01} />
            <Avatar size="2xl" placeholderIcon={User01} />
        </div>

        <div className="flex items-start gap-8">
            <Avatar size="xs" status="online" placeholderIcon={User01} />
            <Avatar size="sm" status="online" placeholderIcon={User01} />
            <Avatar size="md" status="online" placeholderIcon={User01} />
            <Avatar size="lg" status="online" placeholderIcon={User01} />
            <Avatar size="xl" status="online" placeholderIcon={User01} />
            <Avatar size="2xl" status="online" placeholderIcon={User01} />
        </div>

        <div className="flex items-start gap-8">
            <Avatar
                size="xs"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="sm"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="md"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="lg"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="xl"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="2xl"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                placeholderIcon={User01}
            />
        </div>
    </div>
);

export const Initials = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <Avatar size="xs" initials="OR" />
            <Avatar size="sm" initials="OR" />
            <Avatar size="md" initials="OR" />
            <Avatar size="lg" initials="OR" />
            <Avatar size="xl" initials="OR" />
            <Avatar size="2xl" initials="OR" />
        </div>

        <div className="flex items-start gap-8">
            <Avatar size="xs" status="online" initials="OR" />
            <Avatar size="sm" status="online" initials="OR" />
            <Avatar size="md" status="online" initials="OR" />
            <Avatar size="lg" status="online" initials="OR" />
            <Avatar size="xl" status="online" initials="OR" />
            <Avatar size="2xl" status="online" initials="OR" />
        </div>

        <div className="flex items-start gap-8">
            <Avatar
                size="xs"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                initials="OR"
            />
            <Avatar
                size="sm"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                initials="OR"
            />
            <Avatar
                size="md"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                initials="OR"
            />
            <Avatar
                size="lg"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                initials="OR"
            />
            <Avatar
                size="xl"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                initials="OR"
            />
            <Avatar
                size="2xl"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                initials="OR"
            />
        </div>
    </div>
);

export const LabelGroup = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
            />
            <AvatarLabelGroup
                size="md"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
            />
            <AvatarLabelGroup
                size="lg"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
            />
        </div>

        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                status="online"
            />
            <AvatarLabelGroup
                size="md"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                status="online"
            />
            <AvatarLabelGroup
                size="lg"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                status="online"
            />
        </div>

        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
            />
            <AvatarLabelGroup
                size="md"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
            />
            <AvatarLabelGroup
                size="lg"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                badge={<AvatarCompanyIcon src="https://www.uix.design/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
            />
        </div>

        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                verified
            />
            <AvatarLabelGroup
                size="md"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                verified
            />
            <AvatarLabelGroup
                size="lg"
                src="https://i.pravatar.cc/150?u=olivia"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@uix.design"
                verified
            />
        </div>
    </div>
);

export const ProfilePhoto = () => (
    <div className="flex flex-col gap-16">
        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="sm" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />
            <AvatarProfilePhoto verified size="md" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />
            <AvatarProfilePhoto verified size="lg" src="https://i.pravatar.cc/150?u=olivia" alt="Olivia Rhye" />
        </div>

        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="sm" placeholderIcon={User01} />
            <AvatarProfilePhoto verified size="md" placeholderIcon={User01} />
            <AvatarProfilePhoto verified size="lg" placeholderIcon={User01} />
        </div>

        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="sm" initials="OR" />
            <AvatarProfilePhoto verified size="md" initials="OR" />
            <AvatarProfilePhoto verified size="lg" initials="OR" />
        </div>
    </div>
);
