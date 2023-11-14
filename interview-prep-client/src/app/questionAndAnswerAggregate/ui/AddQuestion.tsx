'use client';
import { QuestionAndAnswerContext } from "../state/QuestionAndAnswerContext";
import { useContext } from 'react';

export const AddQuestion = () => {
    const {questionAndAnswerDO, setQuestionAndAnswerDO} = useContext(QuestionAndAnswerContext);

    const addQuestion = () => {
        setQuestionAndAnswerDO(prevState => prevState?.updateIsAddQuestionPopup(true))
    }

    return (
        <div className="flex justify-center my-5">
            <button onClick={addQuestion} className="px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-400">Add Question</button>
            {
                questionAndAnswerDO.isAddQuestionPopup ?
                <div>Ha ha!</div> : null
            }
        </div>
    )
}