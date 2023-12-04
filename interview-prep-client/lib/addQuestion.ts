'use server';
import { revalidateTag } from "next/cache";

type FormData = {
  question: string;
  answer: string;
}

async function AddQuestion(formData: FormData) {
  try {
      await fetch(`https://localhost:7110/api/Questions`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
      });
      revalidateTag("questions");
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}

export default AddQuestion;