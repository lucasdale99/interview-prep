import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO"
import { QuestionAndAnswer } from "./QuestionAndAnswer"

interface IQuestionAndAnswerListProps {
    list: QuestionAndAnswerDTO[]
}

export const QuestionAndAnswerList = ({list}: IQuestionAndAnswerListProps) => {
    return (
        <>
            {list.map((x: QuestionAndAnswerDTO, index: number) => 
                <QuestionAndAnswer key={index + 1} question={x.question} answer={x.answer} number={index + 1}/>
            )}
        </>
    )
}