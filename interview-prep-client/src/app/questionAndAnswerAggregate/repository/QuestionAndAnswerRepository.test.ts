import { QuestionAndAnswerRepository } from "./QuestionAndAnswerRepository";
import { IQuestionAndAnswerGateway } from '../gateway/IQuestionAndAnswerGateway';
import { Mock, Times } from "moq.ts";
import { QuestionAndAnswerDTO } from '../model/QuestionAndAnswerDTO';
import { QuestionAndAnswerDO } from '../domain/QuestionAndAnswerDO';

describe("QuestionAndAnswerRepository", () => {
    let questionAndAnswerRepo: QuestionAndAnswerRepository;
    let gateway: Mock<IQuestionAndAnswerGateway>;
    let questionAndAnswerListDTO: QuestionAndAnswerDTO[];
    let questionAndAnswerDO: QuestionAndAnswerDO;

    beforeEach(() => {
        gateway = new Mock<IQuestionAndAnswerGateway>();
        questionAndAnswerRepo = new QuestionAndAnswerRepository(gateway.object())
        questionAndAnswerListDTO = [new QuestionAndAnswerDTO(1, "", ""), new QuestionAndAnswerDTO(2, "", "")]
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