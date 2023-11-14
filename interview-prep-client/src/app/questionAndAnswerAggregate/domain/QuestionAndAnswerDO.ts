import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export class QuestionAndAnswerDO {
    private _listOfQuestionAndAnswers: QuestionAndAnswerDTO[];
    private _isAddQuestionPopup: boolean;

    constructor(listOfQuestionAndAnswers: QuestionAndAnswerDTO[], isAddQuestionPopup: boolean) {
        this._listOfQuestionAndAnswers = listOfQuestionAndAnswers
        this._isAddQuestionPopup = isAddQuestionPopup
    }

    get listOfQuestionsAndAnswers(): QuestionAndAnswerDTO[] {
        return this._listOfQuestionAndAnswers;
    }

    get isAddQuestionPopup(): boolean {
        return this._isAddQuestionPopup;
    }

    public updateIsAddQuestionPopup(isAddQuestion: boolean): QuestionAndAnswerDO {
        const response = this.clone();
        response._isAddQuestionPopup = isAddQuestion;
        return response;
    }

    public updateListOfQuestionAndAnswers(list: QuestionAndAnswerDTO[]): QuestionAndAnswerDO {
        const response = this.clone();
        response._listOfQuestionAndAnswers = list;
        return response;
    }


    private clone(): QuestionAndAnswerDO {
        return new QuestionAndAnswerDO(this._listOfQuestionAndAnswers, this._isAddQuestionPopup)
    }
}
