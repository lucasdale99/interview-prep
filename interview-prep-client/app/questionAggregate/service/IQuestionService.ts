import { QuestionDO } from "../domain/QuestionDO";
import { QuestionDTO } from "../model/QuestionDTO";

export interface IQuestionService {
    getQuestions(): Promise<QuestionDTO[]>;
    addQuestion(): Promise<void>;
    editQuestion(questionDTO: QuestionDTO): Promise<void>;
}