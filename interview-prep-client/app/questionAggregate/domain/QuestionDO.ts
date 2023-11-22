import { QuestionDTO } from "../model/QuestionDTO";

export class QuestionDO {
    private _listOfQuestionAndAnswers: QuestionDTO[];
    private _newQuestion: QuestionDTO;

    constructor(listOfQuestionAndAnswers: QuestionDTO[], newQuestion: QuestionDTO) {
        this._listOfQuestionAndAnswers = listOfQuestionAndAnswers
        this._newQuestion = newQuestion;
    }

    get listOfQuestionsAndAnswers(): QuestionDTO[] {
        return this._listOfQuestionAndAnswers;
    }

    public updateListOfQuestionAndAnswers(list: QuestionDTO[]): QuestionDO {
        const response = this.clone();
        response._listOfQuestionAndAnswers = list;
        return response;
    }

    private clone(): QuestionDO {
        return new QuestionDO(this._listOfQuestionAndAnswers, this._newQuestion);
    }
}