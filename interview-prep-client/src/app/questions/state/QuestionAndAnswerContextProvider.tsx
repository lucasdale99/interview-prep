import { QuestionAndAnswerContext } from "./QuestionAndAnswerContext"
import {QuestionAndAnswerDO} from "../domain/QuestionAndAnswerDO";
import { ReactNode, useState } from 'react';

interface IQuestionAndAnswerContextProviderProps {
    children: ReactNode
}

export const QuestionAndAnswerContextProvider = ({children}: IQuestionAndAnswerContextProviderProps) => {
    const [questionAndAnswerDO, setQuestionAndAnswerDO] = useState(new QuestionAndAnswerDO([], false))

    return (
        <QuestionAndAnswerContext.Provider value={{
            questionAndAnswerDO,
            setQuestionAndAnswerDO
        }}>
            {children}
        </QuestionAndAnswerContext.Provider>
    )
}