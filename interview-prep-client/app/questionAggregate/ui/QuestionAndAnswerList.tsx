import { QuestionDTO } from "../model/QuestionDTO"
import { QuestionAndAnswer } from "./QuestionAndAnswer"

interface IQuestionAndAnswerListProps {
    questions: QuestionDTO[]
}

export const QuestionAndAnswerList = ({questions}: IQuestionAndAnswerListProps) => {
    return (
        <>
            {questions?.map((x: QuestionDTO, index: number) => 
                <QuestionAndAnswer key={index + 1} question={x.question} answer={x.answer} number={index + 1} isEdit={x.isEdit}/>
            )}
        </>
    )
}