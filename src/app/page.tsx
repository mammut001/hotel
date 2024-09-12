"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, MapIcon, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

import { ROOM_DATA } from "@/data/room-data";
import { HOTEL_INFO } from "@/data/room-data";


import { RoomCard } from "@/components/room-card";
import { ChatWindow } from "@/components/chatWindow";


import { useChatWindowStore } from "@/store/useChatWindowStore";
import { useLanguageStore } from "@/store/useLanguageStore";


export default function Page() {
  const language = useLanguageStore((state) => state.language);
  const updateLanguage = useLanguageStore((state) => state.updateLang);
  const chatModalStatus = useChatWindowStore((state) => state.openStatus);
  const setChatWindowTrue = useChatWindowStore((state) => state.setOpen);
  const setChatWindowFalse = useChatWindowStore((state) => state.setClose);

  const handleChatWindow = () => {
    setChatWindowTrue();
  }


  const roomAmentities = (index: number) => {
    return language === "english"
      ? ROOM_DATA.rooms[index].amenities.map((amenity) => amenity.english)
      : ROOM_DATA.rooms[index].amenities.map((amenity) => amenity.french)
  }

  const roomDescription = (index: number) => {
    return language === "english"
      ? ROOM_DATA.rooms[index].description
      : ROOM_DATA.rooms[index].description_fr
  }

  const aboutContent = language === "french"
    ? HOTEL_INFO.description_fr
    : HOTEL_INFO.description
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold text-center">{HOTEL_INFO.name}</h1>
            <div className="space-x-2 cursor-pointer">
              <Badge className="print:text-[10px]" onClick={() => updateLanguage("french")}>
                Français
              </Badge>
              <Badge className="print:text-[10px]" onClick={() => updateLanguage("english")}>
                English
              </Badge>
            </div>

            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {aboutContent}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={HOTEL_INFO.location_url}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {HOTEL_INFO.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {HOTEL_INFO.email && (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`mailto:${HOTEL_INFO.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              )}
              {HOTEL_INFO.phone && (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`tel:${HOTEL_INFO.phone}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              )}
              {HOTEL_INFO.location_url && (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`${HOTEL_INFO.location_url}`}>
                    <MapIcon className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="flex-col">
            <Avatar className="size-28">
              <AvatarImage alt={HOTEL_INFO.name} src={HOTEL_INFO.avatar_url} />
              <AvatarFallback>{HOTEL_INFO.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Section>
          <h2 className="text-xl font-bold">Rooms</h2>
          {ROOM_DATA.rooms.map((room) => (
            <RoomCard
              key={room.id}
              id={room.id}
              name={room.name}
              description={roomDescription(room.id)}
              amenities={roomAmentities(room.id)}
              price={room.price}
              availability={room.available}
            />
          ))}
        </Section>
      </section>

      <Button
        variant="outline"
        onClick={handleChatWindow}
        className="fixed bottom-4 right-4 z-40 rounded-full p-3 shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110 hover:bg-green-500 hover:text-black"
        size="icon"
      >
        <MessageCircleMore className="h-6 w-6" />
      </Button>

      {chatModalStatus && <ChatWindow />}
    </main>
  );
}
