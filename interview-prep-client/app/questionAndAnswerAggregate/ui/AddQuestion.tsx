import { ServiceContext } from "../../infrastructure/serviceProvider/ServiceContextProvider";
import {addQuestion} from "../serverActions/AddQuestion";
import { useContext, useState } from 'react';

export const AddQuestion = () => {
    const {QuestionAndAnswerService} = useContext(ServiceContext);
    const [minimizeAddQuestionPrompt, setMinimizeAddQuestionPrompt] = useState(true);

    return (
        <div className={`p-5 bg-gray-800 rounded m-5 flex items-center`} onClick={() => setMinimizeAddQuestionPrompt(!minimizeAddQuestionPrompt)}>
            <div className={`flex flex-col flex-grow mx-2 transition-all duration-500 overflow-hidden ${minimizeAddQuestionPrompt ? 'max-h-6' : 'max-h-[500px]'}`}>
                <div className="flex justify-between mx-2">
                    <label className="text-lg">Add a question</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <form className="flex flex-col" action={(formData: FormData) => addQuestion({event: formData, service: QuestionAndAnswerService})} onClick={(e) => e.stopPropagation()} >
                    <input className="flex flex-grow py-2 m-2 rounded-md px-2 text-black focus-visible:outline-2 outline-purple-500" name="question" placeholder="Question"></input>
                    <input className="py-2 mx-2 rounded-md m-2 px-2 text-black flex-grow focus-visible:outline-2 outline-purple-500" name="answer" placeholder="Answer"></input>
                    <button className="px-4 py-2 rounded-md m-2 bg-gray-500 hover:bg-gray-400 ml-2" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}