"use client";
import { QuestionAndAnswerContext } from "./QuestionAndAnswerContext"
import {QuestionDO} from "../domain/QuestionDO";
import { ReactNode, useState } from 'react';
import { QuestionDTO } from "../model/QuestionDTO";

interface IQuestionAndAnswerContextProviderProps {
    children: ReactNode
}

export const QuestionAndAnswerContextProvider = ({children}: IQuestionAndAnswerContextProviderProps) => {
    const [questionDO, setQuestionDO] = useState(new QuestionDO([], new QuestionDTO(1, "", "", false)))

    return (
        <QuestionAndAnswerContext.Provider value={{
            questionDO,
            setQuestionDO
        }}>
            {children}
        </QuestionAndAnswerContext.Provider>
    )
}

