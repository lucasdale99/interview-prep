"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { QuestionDTO } from "../model/QuestionDTO";
import DeleteQuestion from "../../../lib/deleteQuestion";
import EditQuestion from "../../../lib/editQuestion";

interface IQuestionAndAnswerProps {
    questionDTO: QuestionDTO;
    number: number;
}

type Question = {
    id: number
    question: string;
    answer: string;
}

export const Question = ({questionDTO, number}: IQuestionAndAnswerProps) => {
    const {answer, question} = questionDTO;
    const [editedQuestion, setEditedQuestion] = useState({id: questionDTO.id, question: questionDTO.question, answer: questionDTO.answer} as Question);
    const [isEdit, setIsEdit] = useState(false);


    // Event handlers for input changes
    const handleQuestionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditedQuestion({...editedQuestion, [event.target.name]: event.target.value });
    };

    const handleCancel = () => {
        setEditedQuestion({id: questionDTO.id, question: questionDTO.question, answer: questionDTO.answer} as Question);
        setIsEdit(!isEdit)
    }

    const deleteQuestion = async () => {
        await DeleteQuestion(questionDTO.id);
        setIsEdit(false);
    }

    const handleEdit = async () => {
        await EditQuestion(editedQuestion)
        setIsEdit(false);
    }

    if(isEdit){
        return (
            <div className="flex bg-gray-800 rounded items-center m-5 p-5 justify-between">
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-center pr-5">
                            <p className="text-xl">{number}</p>
                    </div>
                    <div className="flex flex-grow flex-col pr-5">
                        <input className="flex py-1 m-2 p-2 rounded-md text-base text-black focus-visible:outline-2 outline-purple-500" name="question" value={editedQuestion.question} onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuestionChange(e)}/>
                        <textarea className="flex py-1 m-2 p-2 rounded-md text-base text-black focus-visible:outline-2 outline-purple-500" name="answer" rows={6} value={editedQuestion.answer} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleQuestionChange(e)}></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-col">
                        <button onClick={handleEdit} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md my-2">Save</button>
                        <button onClick={deleteQuestion} className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md my-2">Delete</button>
                        <button onClick={handleCancel} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md my-2">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="p-5 bg-gray-800 rounded m-5 flex items-center justify-between">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center pr-5">
                            <p className="text-xl">{number}</p>
                    </div>
                    <div>
                        <div className="flex flex-col m-2">
                            <p className="flex py-1 font-bold">
                                {question}
                            </p>
                            <p className="flex py-1 text-base">
                                {answer}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsEdit(!isEdit)} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md">Edit</button>
            </div>
        )
    }
    
}