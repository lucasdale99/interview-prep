import { IAPIGateway } from "../../infrastructure/apiGateway/IAPIGateway";
import { It, Mock, Times } from "moq.ts";
import { QuestionAndAnswerGateway } from "./QuestionAndAnswerGateway";
import { QuestionDTO } from "../model/QuestionDTO";

describe("QuestionAndAnswerGateway", () => {
    let questionAndAnswerGateway: QuestionAndAnswerGateway;
    let apiGateway: Mock<IAPIGateway>;
    let listOfQuestions: QuestionDTO[];

    beforeEach(() => {
        apiGateway = new Mock<IAPIGateway>();
        questionAndAnswerGateway = new QuestionAndAnswerGateway(apiGateway.object());
        listOfQuestions = [
            new QuestionDTO(1, "test?", "yes", false),
            new QuestionDTO(2, "test2?", "no", false)
        ]
    })

    it("makes a call to the correct api gateway at getQuestionAndAnswers method", async () => {
        //Arrange
        apiGateway.setup(x => x.get(It.IsAny<string>()))
            .returns(Promise.resolve(listOfQuestions));
            
        //Act
        await questionAndAnswerGateway.getQuestionAndAnswers();

        //Assert
        apiGateway.verify(x => x.get(It.IsAny<string>()), Times.Once())
    })
});