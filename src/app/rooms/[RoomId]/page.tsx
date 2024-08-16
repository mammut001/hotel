
import { notFound } from 'next/navigation';
import {ROOM_DATA} from "@/data/room-data";
import {number} from "prop-types";

export default function RoomPage({ params }: { params: { RoomId: string } }) {
    const roomId = decodeURIComponent(params.RoomId)
    const maxRoomId = ROOM_DATA.rooms.length
    const validateRoomId = () => {
        let roomIdNumFormat = Number(roomId)
        return roomIdNumFormat >= 0 && roomIdNumFormat < maxRoomId
    }
    if(! validateRoomId()){
        return notFound()
    }
    return (
        <div>
            RoomID:{roomId}
        </div>
    )
}
