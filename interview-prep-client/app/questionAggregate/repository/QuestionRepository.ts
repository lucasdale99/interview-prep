import { IQuestionGateway } from "../gateway/IQuestionGateway";
import { QuestionDTO } from "../model/QuestionDTO";
import { IQuestionAndAnswerRepository } from "./IQuestionRepository";

export class QuestionAndAnswerRepository implements IQuestionAndAnswerRepository {
    private readonly _gateway: IQuestionGateway;

    constructor(gateway: IQuestionGateway){
        this._gateway = gateway;
    }
    
    public async getQuestionAndAnswers(): Promise<QuestionDTO[]> {
        return await this._gateway.getQuestionAndAnswers();
    }

    public async addQuestion(): Promise<void> {
        const newQuestion: QuestionDTO = new QuestionDTO(0, "question", "answer", false);
        await this._gateway.addQuestion(newQuestion);
    }
}