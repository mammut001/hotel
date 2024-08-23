import { submitBody } from "@/store/useCheckinStore";
import dayjs from "dayjs";

export const submitReservation =  async (start:dayjs.Dayjs, end:dayjs.Dayjs, phoneNumber:string) => {


  const response = await fetch(`http://localhost:8080/api/v1.1/submitReservation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      start,
      end,
      phoneNumber
    }),
  })
  if (response.ok){
    console.log(response)
  }
  else{
    throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
  }

}

