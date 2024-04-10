"use server";
export async function getQuestions() {
  //Need to remove this if I plan to deploy to a production server
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  //I don't like fetching like this, this needs to call a service
  const response = await fetch(`${process.env.API_URL}/api/Questions`, {
    cache: 'no-cache',
    next: {
      tags: ['questions']
    }
  });

  try {
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return response.json();
  }
  catch(error){
    console.error(error);
  }
}