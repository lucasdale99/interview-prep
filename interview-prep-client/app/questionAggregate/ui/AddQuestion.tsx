"use server";

import { submitQuestion } from "../../actions/submitQuestion";
import { QuestionItem } from "../model/QuestionItem";

export const AddQuestion = () => {
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Access the form and its values
        const form = event.currentTarget;
        const questionItem = new QuestionItem(form.question.value, form.answer.value);
        if (!questionItem.Question || !questionItem.Answer) return;

        await submitQuestion(questionItem);
    }

    return (
        <div className={`p-5 bg-gray-800 rounded m-5 flex flex-column items-center`}>
            <div className={`flex flex-col flex-grow mx-2 transition-all duration-500 overflow-hidden`}>
                <label className="text-lg mx-4">Add a question</label>
                <div className="flex justify-between mx-2">
                    <form className="flex flex-col flex-grow" onSubmit={onSubmit}>
                        <input className="flex flex-grow py-2 m-2 rounded-md px-2 text-black focus-visible:outline-2 outline-purple-500" name="question" placeholder="Question" />
                        <input className="py-2 mx-2 rounded-md m-2 px-2 text-black flex-grow focus-visible:outline-2 outline-purple-500" name="answer" placeholder="Answer" />
                        <button className="px-4 py-2 rounded-md m-2 bg-violet-500 hover:bg-violet-400 ml-2" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}