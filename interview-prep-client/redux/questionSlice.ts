import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { QuestionDORedux } from './models/QuestionDORedux'
import { QuestionDTORedux } from './models/QuestionDTORedux';

interface IQuestionState {
    questionDO: QuestionDORedux
}

const initialState: IQuestionState = {
    questionDO: new QuestionDORedux([], new QuestionDTORedux(0, "", "", false))
}

//Defining the type of Question from the model directory
export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        editQuestion: (state, action: PayloadAction<QuestionDTORedux>) => {
            const updatedQuestion = action.payload;
            // Find the index of the question to be updated
            const questionIndex = state.questionDO.listOfQuestionsAndAnswers.findIndex(
                q => q.id === updatedQuestion.id
            );
            if (questionIndex !== -1) {
                // Clone the current state
                const newQuestionDO = state.questionDO.clone();
                // Update the question
                newQuestionDO.listOfQuestionsAndAnswers[questionIndex] = updatedQuestion;
                // Update the state
                state.questionDO = newQuestionDO;
            }
        },
        deleteQuestion: (state, action: PayloadAction<QuestionDTORedux>) => {
            const updatedQuestion = action.payload;
            const filteredList = state.questionDO.listOfQuestionsAndAnswers.filter(x => x.id !== updatedQuestion.id); 
            state.questionDO.listOfQuestionsAndAnswers = filteredList;
        }
    }
})

export const {editQuestion, deleteQuestion} = questionSlice.actions;

export default  questionSlice;
