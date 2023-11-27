"use client";
import {QuestionDO} from "../domain/QuestionDO";
import {QuestionContext} from "../state/QuestionContext"
import { ReactNode, useState } from 'react';
import { QuestionDTO } from "../model/QuestionDTO";

interface IQuestionAndAnswerContextProviderProps {
    children: ReactNode
}

export const QuestionAndAnswerContextProvider = ({children}: IQuestionAndAnswerContextProviderProps) => {
    const [questionDO, setQuestionDO] = useState(new QuestionDO([], new QuestionDTO(1, "", "", false)))

    return (
        <QuestionContext.Provider value={{
            questionDO,
            setQuestionDO
        }}>
            {children}
        </QuestionContext.Provider>
    )
}

