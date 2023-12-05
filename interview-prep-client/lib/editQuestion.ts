'use server';
import { revalidateTag } from "next/cache";

type Question = {
    id: number;
    question: string;
    answer: string;
}

async function EditQuestion(question: Question) {
  try {
      await fetch(`https://localhost:7110/api/Questions/${question.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(question)
      });
      revalidateTag("questions");
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}

export default EditQuestion;