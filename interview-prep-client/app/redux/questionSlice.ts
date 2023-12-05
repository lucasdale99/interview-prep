import { createSlice } from '@reduxjs/toolkit'
import {Question as QuestionModel} from "./models/Question"

interface IQuestionState {
    questions: QuestionModel[]
}

const initialState: IQuestionState = {
    questions: [] as QuestionModel[]
}

//Defining the type of Question from the model directory
export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        
    }
})

export const {} = questionSlice.actions;

export default  questionSlice;
