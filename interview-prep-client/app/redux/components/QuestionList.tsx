"use client";
import { Question as QuestionModel } from "../models/Question"
import { Question } from "./Question"

interface IQuestionAndAnswerListProps {
    questions: QuestionModel[]
}

export const QuestionList = ({questions}: IQuestionAndAnswerListProps) => {
    return (
        <>
            {questions?.map((questionDTO: QuestionModel) => 
                <Question key={questionDTO.id} questionDTO={questionDTO}/>
            )}
        </>
    )
}