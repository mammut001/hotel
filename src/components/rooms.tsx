import {ROOM_DATA} from "@/data/room-data";
import { Badge } from "@/components/ui/badge";

interface Props {
  id: number
  name: string;
  description: string;
  amenities: readonly string[];
  link?: string;
  price: number;
  availability: boolean;
}

export function Rooms({ id, name, description, link, amenities,  price, availability}: Props) {
  return(
    <div className="rounded-lg border-2 ">
      <h2 className="text-center">{name}</h2>
      <p className="ml-2">{description}</p>
      <p className="ml-2">${price} + tax</p>
      <p className="ml-2">Availability:{availability?"Available":"Not Available"}</p>
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
  )
}