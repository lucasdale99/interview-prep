export class QuestionAndAnswerDTO {
    private _question: string;
    private _answer: string;

    constructor(question: string, answer: string){
        this._question = question;
        this._answer = answer;
    }

    get question() {
        return this._question;
    }

    get answer() {
        return this._answer;
    }
}