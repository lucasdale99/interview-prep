"use client";
import { QuestionAndAnswerContext } from "./QuestionAndAnswerContext"
import {QuestionAndAnswerDO} from "../../questionAndAnswerAggregate/domain/QuestionAndAnswerDO";
import { ReactNode, useState } from 'react';
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

interface IQuestionAndAnswerContextProviderProps {
    children: ReactNode
}

export const QuestionAndAnswerContextProvider = ({children}: IQuestionAndAnswerContextProviderProps) => {
    const [questionAndAnswerDO, setQuestionAndAnswerDO] = useState(new QuestionAndAnswerDO([], new QuestionAndAnswerDTO(1, "", "", false)))

    return (
        <QuestionAndAnswerContext.Provider value={{
            questionAndAnswerDO,
            setQuestionAndAnswerDO
        }}>
            {children}
        </QuestionAndAnswerContext.Provider>
    )
}

