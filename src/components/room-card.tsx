import {HOTEL_INFO, ROOM_DATA} from "@/data/room-data";
import { Badge } from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useLanguageStore} from "@/store/useLanguageStore";
import { useRouter } from 'next/navigation';

interface Props {
  id: number
  name: string;
  description: string;
  amenities: readonly string[];
  link?: string;
  price: number;
  availability: boolean;
}

export function RoomCard({ id, name, description, link, amenities,  price, availability}: Props) {
    const defaultLanguage = useLanguageStore(state => state.language)
    const router = useRouter();

    const roomAvailability =() =>{
        let res = ""
        if (defaultLanguage === "english"){
            if (availability){
                res =  "Available"
            }
            else{
                res = "Not Available"
            }
        }
        else{
            if (availability){
                res = "Disponible"
            }
            else{
                res = "Non disponible"
            }

        }
        return res
    }
    const handleSelect = ()=>{
        console.log("Name is" + name)
        router.push(`/rooms/${id}`)
    }
    return(

        <div onClick={handleSelect} className="rounded-lg border-2 flex hover:border-green-700 hover:cursor-pointer">
        <div>
            <h2 className="text-center">{name}</h2>
            <p className="ml-2">{description}</p>
            <p className="ml-2 border-2 inline-block rounded-lg	 border-green-700">${price} + tax{"   "}</p>
            <p className="ml-2">{defaultLanguage ==="english"?"Availability: ":"Disponibilité: "}{roomAvailability()}</p>
            <h3 className="ml-2">Amenities</h3>
            {
                amenities.map((amenity) =>(
                    <Badge
                        className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight mr-2 mb-2 ml-2"
                        variant="secondary"
                        key={amenity}>
                        {amenity}
                    </Badge>
                ))
            }
        </div>

        <div className="flex-col mt-4 mr-4 ml-4">
            <Avatar className="w-15 h-15 lg:w-28 lg:h-28">
                <AvatarImage alt={ROOM_DATA.rooms[id].name} src={ROOM_DATA.rooms[id].imageUrl}/>
                <AvatarFallback>{ROOM_DATA.rooms[id].id}</AvatarFallback>
            </Avatar>
        </div>

        </div>
  )
}