"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { useEffect, useState } from "react";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    title, description, isOpen, onClose, children
}) => {


    // const [domLoaded, setDomLoaded] = useState(false);

    // useEffect(() => {
    //     setDomLoaded(true);
    // }, []);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <>
            {/* {domLoaded && ( */}
                <Dialog open={isOpen} onOpenChange={onChange}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        <div>
                            {children}
                        </div>
                    </DialogContent>
                </Dialog>
            {/* )} */}

        </>
    )
}