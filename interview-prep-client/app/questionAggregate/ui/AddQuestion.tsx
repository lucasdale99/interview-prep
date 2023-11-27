import AddQuestionForm from '../../../pages/addQuestionForm';

export const AddQuestion = () => {

    return (
        <div className={`p-5 bg-gray-800 rounded m-5 flex flex-column items-center`}>
            <div className={`flex flex-col flex-grow mx-2 transition-all duration-500 overflow-hidden`}>
                <label className="text-lg mx-4">Add a question</label>
                <div className="flex justify-between mx-2">
                    <AddQuestionForm/>
                </div>
            </div>
        </div>
    )
}