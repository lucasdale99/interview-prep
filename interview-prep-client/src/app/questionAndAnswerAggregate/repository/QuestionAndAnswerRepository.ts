import { IQuestionAndAnswerGateway } from "../gateway/IQuestionAndAnswerGateway";
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";
import { IQuestionAndAnswerRepository } from "./IQuestionAndAnswerRepository";

export class QuestionAndAnswerRepository implements IQuestionAndAnswerRepository {
    private readonly _gateway: IQuestionAndAnswerGateway;

    constructor(gateway: IQuestionAndAnswerGateway){
        this._gateway = gateway;
    }
    
    public async getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]> {
        return await this._gateway.getQuestionAndAnswers();
    }
}