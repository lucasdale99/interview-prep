'use server';
import { revalidateTag } from "next/cache";

async function DeleteQuestion(id: number) {
  try {
      await fetch(`https://localhost:7110/api/Questions/${id}`, {
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

export default DeleteQuestion;