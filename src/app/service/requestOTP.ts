export const requestOTP =  async (phoneNumber:string) => {


  const response = await fetch(`http://localhost:8080/api/v1.1/requestOTP`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
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

