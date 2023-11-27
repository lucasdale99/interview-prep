import { QuestionDTORedux } from "../models/QuestionDTORedux"
import { Question } from "./Question"

interface IQuestionAndAnswerListProps {
    questions: QuestionDTORedux[]
}

export const QuestionList = ({questions}: IQuestionAndAnswerListProps) => {
    return (
        <>
            {questions?.map((questionDTO: QuestionDTORedux, index: number) => 
                <Question key={index + 1} questionDTO={questionDTO} number={index + 1}/>
            )}
        </>
    )
}