export class QuestionItem {
    private _question: string;
    private _answer: string;

    constructor(question: string, answer: string){
        this._question = question;
        this._answer = answer;
    }

    public get Question(): string{
        return this._question;
    }

    public get Answer(): string{
        return this._answer;
    }
}