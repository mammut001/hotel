"use client";
import { useEffect, useRef } from "react";
import { useConfirmationStore } from "@/store/useConfirmationStore";
import { fetchConfirmations } from "@/app/service/loadConfirmation";

export default function ClientInitializer() {
  const { loadConfirmationObjectsOnStart } = useConfirmationStore();
  const hasLoaded = useRef(false);
  useEffect(() => {
    const loadData = async () => {
      try {
        if (hasLoaded.current)
          return
        hasLoaded.current = true
        const data = await fetchConfirmations()
        await loadConfirmationObjectsOnStart(data['data'])
      } catch (error) {
        console.error("Failed to load confirmations:", error)
      }
    };

    loadData().then(r => console.log(r))
  }, [loadConfirmationObjectsOnStart]);

  return null
}
