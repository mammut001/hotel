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

    return (
      <div className="rounded-lg border-2 flex flex-col hover:border-green-700 hover:cursor-pointer w-full">
          <div className="flex flex-col w-full">
              <div className="w-full">
                  <div className=" mt-4 mr-4 ml-4 flex justify-center">
                      <Avatar className="w-15 h-15 lg:w-28 lg:h-28">
                          <AvatarImage alt={ROOM_DATA.rooms[id].name} src={ROOM_DATA.rooms[id].imageUrl} />
                          <AvatarFallback>{ROOM_DATA.rooms[id].id}</AvatarFallback>
                      </Avatar>
                  </div>
                  {amenities.map((amenity) => (
                    <Badge
                      className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight mr-2 mb-2 ml-2 "
                      variant="secondary"
                      key={amenity}
                    >
                        {amenity}
                    </Badge>
                  ))}
                  <hr className="my-4 border-t border-gray-300 w-full" />
                  <div className="flex flex-row items-center justify-center mt-4 mb-4 px-4">
                      <p className="text-center h-8 flex items-center justify-center mb-0">
                          {price} CAD / Night
                      </p>

                      <button
                        onClick={handleSelect}
                        className="bg-gray-400 hover:bg-black text-sm text-white font-bold h-8 px-4 rounded flex items-center ml-2">
                          View rates
                      </button>

                  </div>

              </div>


          </div>
      </div>
    );


}