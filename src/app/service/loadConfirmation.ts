export const fetchConfirmations =  async () => {
  const response = await fetch(`http://localhost:8080/api/v1.1/retrieve_users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok){
    return await response.json()
  }
  else{
    console.log(`Server responded with ${response.status}: ${response.statusText}`)
    return []

  }

}

