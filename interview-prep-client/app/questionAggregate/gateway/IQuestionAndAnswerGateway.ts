import { QuestionDTO } from "../model/QuestionDTO";

export interface IQuestionAndAnswerGateway {
    getQuestionAndAnswers(): Promise<QuestionDTO[]>;
    addQuestion(addQuestion: QuestionDTO): Promise<void>;
}