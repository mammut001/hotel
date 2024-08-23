"use client"
import { Section } from "@/components/ui/section";
import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";


export default function Confirmation() {
  const language = useLanguageStore(state => state.language);

  const content = language === "english"
    ? "Welcome to the Confirmation page!"
    : "Bienvenue sur la page de confirmation !";

  return (
    <main className="container mx-auto p-4">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <h1 className="text-2xl font-bold text-center">Confirmations</h1>
        <p className="text-center font-mono text-sm text-muted-foreground">
          {content}
        </p>

      </section>

    </main>
  );
}
