'use server';
import { revalidateTag } from "next/cache";

async function deleteQuestion(id: number) {
  try {
      await fetch(`${process.env.API_URL}Questions/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      revalidateTag("questions");
  } catch (error) {
      console.error('There was a problem with deleting this question:', error);
  }
}

export default deleteQuestion;