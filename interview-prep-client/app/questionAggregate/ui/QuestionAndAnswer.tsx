
interface IQuestionAndAnswerProps {
    question: string;
    answer: string;
    number: number;
    isEdit: boolean;
}

export const QuestionAndAnswer = ({question, answer, number, isEdit}: IQuestionAndAnswerProps) => {

    const editQuestion = () => {
    }

    const saveQuestion = () => {
        
    }


    if(isEdit){
        return (
            <div className="flex p-5 bg-gray-800 rounded m-5  items-center justify-between">
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-center pr-5">
                            <p className="text-xl">{number}</p>
                    </div>
                    <div className="flex flex-grow flex-col">
                        <input className="flex py-1 m-2 p-2 rounded-md text-base text-black" value={question}/>
                        <textarea className="flex py-1 m-2 p-2 rounded-md text-base text-black" rows={6} value={answer}></textarea>
                    </div>
                </div>
                <div className="flex flex-grow justify-end">
                    <button onClick={saveQuestion} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md mr-2">Save</button>
                    <button onClick={editQuestion} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md">Cancel</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="p-5 bg-gray-800 rounded m-5 flex items-center justify-between">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center pr-5">
                            <p className="text-xl">{number}</p>
                    </div>
                    <div>
                        <div className="flex flex-col m-2">
                            <p className="flex py-1 font-bold">
                                {question}
                            </p>
                            <p className="flex py-1 text-base">
                                {answer}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={editQuestion} className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-md">Edit</button>
            </div>
        )
    }
    
}