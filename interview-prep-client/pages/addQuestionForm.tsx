import { FormEvent } from 'react'
 
export default function AddQuestionForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Convert FormData to a JSON object
    const questionItem = {
      Question: formData.get('question'),
      Answer: formData.get('answer')
    };

    try {
      const response = await fetch(`https://localhost:7110/api/Questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionItem)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
 
  return (
    <form className="flex flex-col flex-grow" onSubmit={onSubmit}>
        <input className="flex flex-grow py-2 m-2 rounded-md px-2 text-black focus-visible:outline-2 outline-purple-500" name="question" placeholder="Question"/>
        <input className="py-2 mx-2 rounded-md m-2 px-2 text-black flex-grow focus-visible:outline-2 outline-purple-500" name="answer" placeholder="Answer"/>
        <button className="px-4 py-2 rounded-md m-2 bg-violet-500 hover:bg-violet-400 ml-2" type="submit">Save</button>
    </form>
  )
}