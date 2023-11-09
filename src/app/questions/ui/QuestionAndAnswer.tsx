interface IQuestionAndAnswerProps {
    question: string;
    answer: string;
    number: number;
}

export const QuestionAndAnswer = ({question, answer, number}: IQuestionAndAnswerProps) => {
    return (
        <div className="p-5 bg-gray-800 rounded m-5 flex flex-row">
            <div className="flex flex-col justify-center pr-5">
                <p className="text-xl">{number}</p>
            </div>
            <div className="flex flex-col">
                <p className="flex py-1 font-bold">
                    {question}
                </p>
                <p className="flex py-1 text-base">
                    {answer}
                </p>
            </div>
            
        </div>
    )
}