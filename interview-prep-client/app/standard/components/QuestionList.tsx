"use client";
import { QuestionDTO } from "../model/QuestionDTO"
import { Question} from "./Question"

interface IQuestionAndAnswerListProps {
    questions: QuestionDTO[]
}

export const QuestionAndAnswerList = ({questions}: IQuestionAndAnswerListProps) => {

    return (
        <>
            {questions?.toReversed().map((questionDTO: QuestionDTO, index: number) => 
                <Question key={questionDTO.id} questionDTO={questionDTO} number={index + 1}/>
            )}
        </>
    )
}