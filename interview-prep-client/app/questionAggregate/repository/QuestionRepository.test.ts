import { QuestionAndAnswerRepository } from "./QuestionRepository";
import { IQuestionGateway } from '../gateway/IQuestionGateway';
import { Mock, Times } from "moq.ts";
import { QuestionDTO } from '../model/QuestionDTO';

describe("QuestionAndAnswerRepository", () => {
    let questionAndAnswerRepo: QuestionAndAnswerRepository;
    let gateway: Mock<IQuestionGateway>;
    let questionAndAnswerListDTO: QuestionDTO[];

    beforeEach(() => {
        gateway = new Mock<IQuestionGateway>();
        questionAndAnswerRepo = new QuestionAndAnswerRepository(gateway.object())
        questionAndAnswerListDTO = [new QuestionDTO(1, "", "", false), new QuestionDTO(2, "", "", false)]
    })

    it("gets data transfer object of questionandanswerlist and translates it to the domain object.", () => {
        //Arrange
        gateway
        .setup(instance => instance.getQuestionAndAnswers())
        .returns(Promise.resolve(questionAndAnswerListDTO))

        //Act
        questionAndAnswerRepo.getQuestionAndAnswers();

        //Assert
        gateway.verify(x => x.getQuestionAndAnswers(), Times.Once())
    })
});