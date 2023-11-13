import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";
import { IQuestionAndAnswerRepository } from "../repository/IQuestionAndAnswerRepository";
import { IQuestionAndAnswerService } from "./IQuestionAndAnswerService";

export class QuestionAndAnswerService implements IQuestionAndAnswerService {
    private readonly _repository: IQuestionAndAnswerRepository;

    constructor(repository: IQuestionAndAnswerRepository){
        this._repository = repository;
    }

    public async getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]> {
        return await this._repository.getQuestionAndAnswers();
    }
}