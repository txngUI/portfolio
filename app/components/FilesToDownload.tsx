"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDownToLine, Link } from "lucide-react";
import ContactButton from "./ContactButton";

const content = (
    <div className="flex flex-col justify-left items-left">
        <ContactButton
            text="CV Orienté Compétences"
            link="/documents/cv_oriente_competences.pdf"
            icon={<ArrowDownToLine size={20} />}
        />
        <ContactButton
            text="Recherche Informatique"
            link="/documents/recherche_informatique.pdf"
            icon={<ArrowDownToLine size={20} />}
        />
        <ContactButton
            text="Enquêtes Métiers"
            link="/documents/enquetes_metiers.pdf"
            icon={<ArrowDownToLine size={20} />}
        />
        <ContactButton
            text="Profil Professionnel"
            link="/documents/profil_professionnel.pdf"
            icon={<ArrowDownToLine size={20} />}
        />
    </div>
);

const CustomPopover: React.FC<{ content: React.ReactNode; title: string; children: React.ReactNode }> = ({ content, title, children }) => {
    const [visible, setVisible] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={popoverRef}>
            <div onClick={() => setVisible(!visible)}>{children}</div>
            {visible && (
                <div className="absolute z-10 w-64 p-4 mt-2 bg-background border border-bordercolor rounded shadow-lg">
                    <div className="font-bold mb-2">{title}</div>
                    {content}
                </div>
            )}
        </div>
    );
};

export default function FilesToDownload() {
    return (
        <CustomPopover content={content} title="Téléchargements">
            <Link size={24} className="hover:cursor-pointer ml-8" />
        </CustomPopover>
    );
}
