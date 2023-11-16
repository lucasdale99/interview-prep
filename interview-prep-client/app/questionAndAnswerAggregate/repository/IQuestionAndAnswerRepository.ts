import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";
import { FormEvent } from 'react';

export interface IQuestionAndAnswerRepository {
    getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]>;
    addQuestion(formEvent: FormData): Promise<void>;
}