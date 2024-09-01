"use client";
import React, { useEffect, useRef, useState } from "react";
import { useConfirmationStore } from "@/store/useConfirmationStore";
import { notFound } from "next/navigation";

export default function RoomPage({ params }: { params: { ConfirmationId: string } }) {
  const confirmationId = decodeURIComponent(params.ConfirmationId);
  const confirmationObjects = useConfirmationStore(state => state.confirmationObject);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("Loaded confirmation objects:", confirmationObjects)
  }, [confirmationObjects])

  useEffect(() => {
    if (confirmationObjects.length > 0) {
      setIsLoading(false)
    }
  }, [confirmationObjects]);

  const validConfirmationId = () => {
    return confirmationObjects.some((confirmationObject) => confirmationObject.uuid === confirmationId)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!validConfirmationId()) {
    console.log("UUID not found:", confirmationId)
    return notFound();
  }
  const selectedObject = confirmationObjects.filter(confirmationObject => confirmationObject.uuid === confirmationId)
  return (
    <main className="container mx-auto p-4 relative min-h-screen">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <p className="text-center font-mono text-sm text-muted-foreground">
          Hello your
          Confirmation ID is {selectedObject[0].uuid},
        </p>
        <p className="text-center font-mono text-sm text-muted-foreground">
          Check out date is {selectedObject[0].end},

        </p>
        <p className="text-center font-mono text-sm text-muted-foreground">
          Check in date is {selectedObject[0].start},

        </p>
        <p className="text-center font-mono text-sm text-muted-foreground">
          Check in date is {selectedObject[0].phoneNumber},

        </p>
      </section>
    </main>
  );
}
