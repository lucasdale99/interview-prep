"use client";
import { ChangeEvent, useState, MouseEvent } from "react";
import { QuestionDTO } from "../model/QuestionDTO";
import DeleteQuestion from "../../../lib/deleteQuestion";
import EditQuestion from "../../../lib/editQuestion";

interface IQuestionAndAnswerProps {
    questionDTO: QuestionDTO;
}

type Question = {
    id: number
    question: string;
    answer: string;
}

export const Question = ({ questionDTO }: IQuestionAndAnswerProps) => {
    const { answer, question } = questionDTO;
    const [editedQuestion, setEditedQuestion] = useState({ id: questionDTO.id, question: questionDTO.question, answer: questionDTO.answer } as Question);
    const [isEdit, setIsEdit] = useState(false);
    const [flip, setFlip] = useState(true);


    // Event handlers for input changes
    const handleQuestionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditedQuestion({ ...editedQuestion, [event.target.name]: event.target.value });
    };

    const handleCancel = () => {
        setEditedQuestion({ id: questionDTO.id, question: questionDTO.question, answer: questionDTO.answer } as Question);
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

    const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsEdit(!isEdit);
    }

    if (isEdit) {
        return (
            <div className="flex relative flex-row my-4">
                <div className="p-4 bg-gray-800 rounded flex grow items-center">
                    <div className="flex flex-grow">
                        <div className="flex grow flex-col pr-5">
                            <input className="flex py-1 m-2 p-2 rounded-md text-base text-black focus-visible:outline-2 outline-purple-500" name="question" value={editedQuestion.question} onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuestionChange(e)} />
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
            </div>
        )
    }
    else {
        return (
            <div className="flex relative flex-row my-4">
                <div className={`p-4 bg-gray-800 rounded flex grow items-center cursor-pointer card ${flip ? '' : 'flip'}`} onClick={() => setFlip(!flip)}>
                    <div className="absolute inset-0 front inline-flex grow justify-between items-center p-5">
                        <p className="flex grow py-1 font-bold">
                            {question}
                        </p>
                        <button onClick={handleEditButtonClick} className="flex items-center mr-2 bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md">Edit</button>
                    </div>
                    <div className="flex grow back max-h-[120px] overflow-y-auto">
                        <p className="flex py-1 text-base">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}