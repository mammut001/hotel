import { submitBody } from "@/store/useCheckinStore";

export const submitReservation =  async (checkinObject:submitBody) => {


  const response = await fetch(`http://localhost:8080/submitReservation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checkinObject
    }),
  })
  if (response.ok){
    console.log(response)
  }
  else{
    throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
  }

}

