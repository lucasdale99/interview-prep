'use server';
import { revalidateTag } from "next/cache";

type Question = {
    id: number;
    question: string;
    answer: string;
}

async function editQuestion(question: Question) {
    const response = await fetch(`${process.env.API_URL}Questions/${question.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(question)
    });
    revalidateTag("questions");
    
    try {
        if (!response.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to edit data')
        }
        return response.json();
      }
      catch(error){
        console.error(error);
      }
}

export default editQuestion;