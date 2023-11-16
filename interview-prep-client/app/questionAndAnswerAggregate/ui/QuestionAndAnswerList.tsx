import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO"
import { QuestionAndAnswer } from "./QuestionAndAnswer"

interface IQuestionAndAnswerListProps {
    questions: QuestionAndAnswerDTO[]
}

export const QuestionAndAnswerList = ({questions}: IQuestionAndAnswerListProps) => {
    return (
        <>
            {questions?.map((x: QuestionAndAnswerDTO, index: number) => 
                <QuestionAndAnswer key={index + 1} question={x.question} answer={x.answer} number={index + 1} isEdit={x.isEdit}/>
            )}
        </>
    )
}