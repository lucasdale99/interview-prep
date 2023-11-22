import { QuestionDTO } from "../model/QuestionDTO";
import { QuestionDO } from "./QuestionDO";


describe("QuestionAndAnswer Domain Object", () => {
    let questionDO: QuestionDO;

    beforeEach(() => {
        questionDO = new QuestionDO([], new QuestionDTO(1, "", "", false));
    });

    it("updates ListOfQuestionAndAnswers", () => {
        const list = [
            new QuestionDTO(1, "What if?", "Sure!", false),
            new QuestionDTO(2, "How bout now?", "Definitely!", false)
        ];
        const result = questionDO.updateListOfQuestionAndAnswers(list)
        expect(result.listOfQuestionsAndAnswers).toEqual(list);
        expect(result).toBeInstanceOf(QuestionDO);
    })

});