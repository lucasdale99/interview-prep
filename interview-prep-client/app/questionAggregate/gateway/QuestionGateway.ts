import { IAPIGateway } from "../../infrastructure/apiGateway/IAPIGateway";
import { QuestionDTO } from "../model/QuestionDTO";
import { IQuestionGateway } from "./IQuestionGateway";

export class QuestionGateway implements IQuestionGateway {
    private baseURL: string = 'Questions';
    private readonly _apiGateway: IAPIGateway;

    constructor(apiGateway: IAPIGateway){
        this._apiGateway = apiGateway;
    }

    public async getQuestionAndAnswers(): Promise<QuestionDTO[]> {
        return await this._apiGateway.get(`${this.baseURL}`);
    }

    public async addQuestion(addQuestion: QuestionDTO): Promise<void> {
        await this._apiGateway.post(`${this.baseURL}`, addQuestion);
    }
}