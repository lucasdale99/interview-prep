"use server";
import { QuestionItem } from "../questionAggregate/model/QuestionItem";
export async function submitQuestion(questionItem: QuestionItem) {
  try {
    const response = await fetch(`https://localhost:7110/api/Questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questionItem)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}