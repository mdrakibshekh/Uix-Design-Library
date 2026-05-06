"use client";

import { DialogTrigger, ModalOverlay, Modal, Dialog } from "./modal";
import { Button } from "@/components/base/buttons/button";
import { InputBase, TextField } from "@/components/base/input/input";
import { cx } from "@/utils/cx";

const modalBody = "space-y-4 p-6";
const modalFooter = "flex flex-col gap-3 border-t border-secondary p-4 sm:flex-row sm:justify-end";

export const ConfirmationModal = () => (
    <DialogTrigger>
        <Button color="primary" size="sm">
            Open confirmation
        </Button>
        <ModalOverlay>
            <Modal className="max-w-md sm:rounded-[32px]">
                <Dialog className="space-y-5">
                    <div className="space-y-3 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-secondary">Confirmation</p>
                        <h3 className="text-xl font-semibold text-fg-primary">Delete workspace?</h3>
                        <p className="text-sm text-fg-secondary">This action cannot be undone. All project data, settings, and access will be removed immediately.</p>
                    </div>
                    <div className={modalFooter}>
                        <Button size="sm" color="secondary" className="w-full sm:w-auto">
                            Cancel
                        </Button>
                        <Button size="sm" color="destructive" className="w-full sm:w-auto">
                            Delete
                        </Button>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);

export const FormModal = () => (
    <DialogTrigger>
        <Button color="secondary" size="sm">
            Open profile form
        </Button>
        <ModalOverlay>
            <Modal className="max-w-lg sm:rounded-[32px]">
                <Dialog>
                    <div className="space-y-4 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-secondary">Profile details</p>
                        <h3 className="text-xl font-semibold text-fg-primary">Update your profile</h3>
                        <TextField label="Full name" size="md">
                            <InputBase placeholder="Olivia Rhye" />
                        </TextField>
                        <TextField label="Email address" size="md">
                            <InputBase type="email" placeholder="olivia@uix.design" />
                        </TextField>
                        <TextField label="Job title" size="md">
                            <InputBase placeholder="Product designer" />
                        </TextField>
                    </div>
                    <div className={modalFooter}>
                        <Button size="sm" color="secondary" className="w-full sm:w-auto">
                            Cancel
                        </Button>
                        <Button size="sm" color="primary" className="w-full sm:w-auto">
                            Save changes
                        </Button>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);

export const BottomSheetModal = () => (
    <DialogTrigger>
        <Button color="primary" size="sm">
            Open bottom sheet
        </Button>
        <ModalOverlay>
            <Modal className="fixed inset-x-0 bottom-0 mx-auto mb-0 max-w-xl rounded-t-3xl border border-secondary_alt bg-primary shadow-2xl sm:relative sm:inset-auto sm:mx-0">
                <Dialog>
                    <div className="space-y-4 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-secondary">Quick actions</p>
                        <h3 className="text-xl font-semibold text-fg-primary">Choose a delivery option</h3>
                        <div className="grid gap-3">
                            <Button size="sm" color="secondary" className="w-full justify-start">
                                Standard delivery
                            </Button>
                            <Button size="sm" color="secondary" className="w-full justify-start">
                                Express delivery
                            </Button>
                            <Button size="sm" color="secondary" className="w-full justify-start">
                                Pickup in store
                            </Button>
                        </div>
                    </div>
                    <div className="border-t border-secondary p-4">
                        <Button size="sm" color="primary" className="w-full">
                            Apply selection
                        </Button>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);

export const AlertModal = () => (
    <DialogTrigger>
        <Button size="sm" color="secondary">
            Open alert dialog
        </Button>
        <ModalOverlay>
            <Modal className="max-w-md sm:rounded-[32px]">
                <Dialog className="space-y-5">
                    <div className="space-y-3 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-secondary">Security alert</p>
                        <h3 className="text-xl font-semibold text-fg-primary">Suspicious login detected</h3>
                        <p className="text-sm text-fg-secondary">We noticed a new sign-in attempt from a different device. Review your recent activity or change your password.</p>
                    </div>
                    <div className={modalFooter}>
                        <Button size="sm" color="secondary" className="w-full sm:w-auto">
                            Dismiss
                        </Button>
                        <Button size="sm" color="primary" className="w-full sm:w-auto">
                            Review activity
                        </Button>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);
