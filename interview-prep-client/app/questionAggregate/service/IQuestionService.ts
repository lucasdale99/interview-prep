import { QuestionDTO } from "../model/QuestionDTO";

export interface IQuestionService {
    getQuestions(): Promise<QuestionDTO[]>;
    addQuestion(): Promise<void>;
}