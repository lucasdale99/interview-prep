import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";
import { QuestionAndAnswerDO } from "./QuestionAndAnswerDO";


describe("QuestionAndAnswer Domain Object", () => {
    let questionAndAnswerDO: QuestionAndAnswerDO;

    beforeEach(() => {
        questionAndAnswerDO = new QuestionAndAnswerDO([], new QuestionAndAnswerDTO(1, "", "", false));
    });

    it("updates ListOfQuestionAndAnswers", () => {
        const list = [
            new QuestionAndAnswerDTO(1, "What if?", "Sure!", false),
            new QuestionAndAnswerDTO(2, "How bout now?", "Definitely!", false)
        ];
        const result = questionAndAnswerDO.updateListOfQuestionAndAnswers(list)
        expect(result.listOfQuestionsAndAnswers).toEqual(list);
        expect(result).toBeInstanceOf(QuestionAndAnswerDO);
    })

});