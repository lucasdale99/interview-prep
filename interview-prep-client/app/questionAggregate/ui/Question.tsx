import { ChangeEvent, useContext, useState } from "react";
import { QuestionDTO } from "../model/QuestionDTO";
import { ServiceContext } from "../../infrastructure/serviceProvider/ServiceContextProvider";

interface IQuestionAndAnswerProps {
    questionDTO: QuestionDTO;
    number: number;
}

export const Question = ({questionDTO, number}: IQuestionAndAnswerProps) => {
    const {QuestionService} = useContext(ServiceContext);
    const {answer, question} = questionDTO;
    const [editedQuestion, setEditedQuestion] = useState(questionDTO.question);
    const [editedAnswer, setEditedAnswer] = useState(questionDTO.answer);
    const [isEdit, setIsEdit] = useState(false);

    // Event handlers for input changes
    const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEditedQuestion(event.target.value);
    };

    const handleCancel = () => {
        setEditedAnswer(questionDTO.answer);
        setEditedQuestion(questionDTO.question);
        setIsEdit(!isEdit)
    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedAnswer(event.target.value);
    };

    const saveQuestion = async () => {
        // Create updated DTO
        const updatedQuestionDTO = new QuestionDTO(questionDTO.id, editedQuestion, editedAnswer);
        
        // Pass to editQuestion
        await QuestionService.editQuestion(updatedQuestionDTO);
    };

    const deleteQuestion = async () => {

    }

    if(isEdit){
        return (
            <div className="flex p-5 bg-gray-800 rounded m-5  items-center justify-between">
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-center pr-5">
                            <p className="text-xl">{number}</p>
                    </div>
                    <div className="flex flex-grow flex-col pr-5">
                        <input className="flex py-1 m-2 p-2 rounded-md text-base text-black focus-visible:outline-2 outline-purple-500" value={editedQuestion} onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuestionChange(e)}/>
                        <textarea className="flex py-1 m-2 p-2 rounded-md text-base text-black focus-visible:outline-2 outline-purple-500" rows={6} value={editedAnswer} onChange={handleAnswerChange}></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-col">
                        <button onClick={saveQuestion} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md my-2">Save</button>
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