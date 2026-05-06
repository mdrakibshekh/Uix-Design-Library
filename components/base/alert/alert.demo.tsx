"use client";

import { Button } from "@/components/base/buttons/button";
import { Alert } from "./alert";

export const AlertSolidDemo = () => (
    <Alert
        title="Success saved"
        description="Your changes were saved successfully. You can continue working with the latest updates now."
        tone="success"
        variant="solid"
        action={<Button size="sm" color="primary">View changes</Button>}
    />
);

export const AlertSoftInfoDemo = () => (
    <Alert
        title="Info available"
        description="You have new settings available for your account survey preferences."
        tone="info"
        variant="soft"
    />
);

export const AlertOutlineWarningDemo = () => (
    <Alert
        title="Attention required"
        description="Please verify your email address to keep your account secure."
        tone="warning"
        variant="outline"
    />
);

export const AlertGhostErrorDemo = () => (
    <Alert
        title="Unable to save"
        description="There was an error saving your work. Try again or contact support if the issue persists."
        tone="error"
        variant="ghost"
    />
);

export const AlertBrandLightDemo = () => (
    <Alert
        title="System update"
        description="A new product update is ready. Restart the application to apply the latest improvements."
        tone="brand"
        variant="soft"
        action={<Button size="sm" color="secondary">Restart</Button>}
    />
);
