import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { QuestionAndAnswerDO } from '../questionAggregate/domain/QuestionDO'
import { QuestionAndAnswerDTO } from '../questionAggregate/model/QuestionDTO'

interface IQuestionState {
    questionAndAnswerDO: QuestionAndAnswerDO
}

const initialState: IQuestionState = {
    questionAndAnswerDO: new QuestionAndAnswerDO([], new QuestionAndAnswerDTO(0, "", "", false))
}

//Defining the type of Question from the model directory
export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        addQuestion: (state) => {

        },
        editQuestion: (state) => {

        }
    }
})

export const {addQuestion, editQuestion} = questionSlice.actions;

export default  questionSlice.reducer;
