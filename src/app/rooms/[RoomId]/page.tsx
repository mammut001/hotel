"use client"
import { notFound } from 'next/navigation';
import {ROOM_DATA} from "@/data/room-data";
import {useLanguageStore} from "@/store/useLanguageStore";
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import PopUpWindow from "@/components/popup";
import {useModalStore} from "@/store/useModalStore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";
export default function RoomPage({ params }: { params: { RoomId: string } }) {
    const roomId = decodeURIComponent(params.RoomId)
    const maxRoomId = ROOM_DATA.rooms.length
    const defaultLanguage = useLanguageStore(state => state.language)
    const toggleModalOpen = useModalStore(state => state.setOpen)



    const validateRoomId = () => {
        let roomIdNumFormat = Number(roomId)
        return roomIdNumFormat >= 0 && roomIdNumFormat < maxRoomId
    }
    if(! validateRoomId()){
        return notFound()
    }

    const description = () =>
        defaultLanguage === "english"
            ? ROOM_DATA.rooms[Number(roomId)].description
            : ROOM_DATA.rooms[Number(roomId)].description_fr;
    return (

        <main className="container mx-auto p-4 relative min-h-screen">
            <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
                <h1 className="text-2xl font-bold text-center">{ROOM_DATA.rooms[Number(roomId)].name}</h1>
                <p className="text-center font-mono text-sm text-muted-foreground">
                    {description()}
                </p>
                {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                {/*    <DateCalendar*/}
                {/*    />*/}
                {/*</LocalizationProvider>*/}

            </section>

            <div className="fixed right-4 bottom-4">
                <Button onClick={()=>{toggleModalOpen()}} variant="outline" className="rounded-full p-3 shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:bg-green-500 hover:text-black" size="icon">
                    <Plus className="h-6 w-6"/>
                </Button>

            </div>
            <PopUpWindow/>
        </main>
    )
}
