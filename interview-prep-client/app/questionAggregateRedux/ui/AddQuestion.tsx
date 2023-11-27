import { useState } from 'react';
import AddQuestionForm from '../../../pages/addQuestionForm';


export const AddQuestion = () => {
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
                <AddQuestionForm/>
            </div>
        </div>
    )
}