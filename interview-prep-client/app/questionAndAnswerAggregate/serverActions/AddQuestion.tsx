import { revalidateTag } from "next/cache";
import { IQuestionAndAnswerService } from "../service/IQuestionAndAnswerService";

interface IAddQuestionProps {
    event: FormData,
    service: IQuestionAndAnswerService;
}

export async function addQuestion({event, service}: IAddQuestionProps) {
    await service.addQuestion(event);
    revalidateTag("questions");
}
