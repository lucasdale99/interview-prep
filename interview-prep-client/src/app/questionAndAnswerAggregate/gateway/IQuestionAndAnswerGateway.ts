import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export interface IQuestionAndAnswerGateway {
    getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]>;
}