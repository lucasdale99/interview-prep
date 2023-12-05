"use client";
import { useDispatch } from "react-redux";
import { Question as QuestionModel } from "../models/Question";

interface IQuestionAndAnswerProps {
    questionDTO: QuestionModel;
}

export const Question = ({questionDTO}: IQuestionAndAnswerProps) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        //dispatch();
    }

    const onEdit = () => {
        //dispatch();
    }

    if(questionDTO.isEdit){
        return (
            <div className="flex p-5 bg-gray-800 rounded m-5  items-center justify-between">
                <div className="flex flex-grow">
                    <div className="flex flex-grow flex-col">
                        <input className="flex py-1 m-2 p-2 rounded-md text-base text-black" value={questionDTO.question}/>
                        <textarea className="flex py-1 m-2 p-2 rounded-md text-base text-black" rows={6} value={questionDTO.answer}></textarea>
                    </div>
                </div>
                <div className="flex flex-grow justify-end">
                    <button onClick={onEdit} className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-400 mr-2">Save</button>
                    <button onClick={onDelete} className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-400 mr-2">Delete</button>
                    <button onClick={() => questionDTO.updateIsEditQuestion(!questionDTO.isEdit)} className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="p-5 bg-gray-800 rounded m-5 flex items-center justify-between">
                <div className="flex flex-row">
                    <div>
                        <div className="flex flex-col m-2">
                            <p className="flex py-1 font-bold">
                                {questionDTO.question}
                            </p>
                            <p className="flex py-1 text-base">
                                {questionDTO.answer}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={() => questionDTO.updateIsEditQuestion(!questionDTO.isEdit)} className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-400">Edit</button>
            </div>
        )
    }
    
}