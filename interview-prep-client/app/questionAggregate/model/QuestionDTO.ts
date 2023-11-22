export class QuestionDTO {
    private _id: number;
    private _question: string;
    private _answer: string;
    private _isEdit: boolean;

    constructor(id: number, question: string, answer: string, isEdit: boolean = false){
        this._id = id;
        this._question = question;
        this._answer = answer;
        this._isEdit = isEdit;
    }

    get id() {
        return this._id;
    }

    get question() {
        return this._question;
    }

    get answer() {
        return this._answer;
    }

    get isEdit() {
        return this._isEdit;
    }

    public updateIsEditQuestion(isEdit: boolean): QuestionDTO {
        const response = this.clone();
        response._isEdit = isEdit;
        return response;
    }

    private clone(): QuestionDTO {
        return new QuestionDTO(this._id, this._question, this._answer, this._isEdit);
    }
}