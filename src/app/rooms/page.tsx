"use client"
import { Section } from "@/components/ui/section";
import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";


export default function Rooms() {
    const language = useLanguageStore(state => state.language);

    const content = language === "english"
        ? "Welcome to the new route page!"
        : "Bienvenue sur la nouvelle page de route !";

    return (
        <main className="container mx-auto p-4">
            <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
                <h1 className="text-2xl font-bold text-center">New Route</h1>
                <p className="text-center font-mono text-sm text-muted-foreground">
                    {content}
                </p>

            </section>

        </main>
    );
}
