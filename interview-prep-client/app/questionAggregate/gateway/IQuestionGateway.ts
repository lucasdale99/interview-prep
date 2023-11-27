import { QuestionDTO } from "../model/QuestionDTO";

export interface IQuestionGateway {
    getQuestionAndAnswers(): Promise<QuestionDTO[]>;
    addQuestion(addQuestion: QuestionDTO): Promise<void>;
}