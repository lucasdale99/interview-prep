"use client";
import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react';
import AddQuestion from '../../../lib/addQuestion';


export default function AddQuestionForm() {
    const [formData, setFormData] = useState({question: "", answer: ""});
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await AddQuestion(formData)
        }
        catch(e: unknown){
            console.error("Failed to submit question and answer.")
        }
        setFormData({question: "", answer: ""});
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`p-5 bg-gray-800 rounded my-4 flex flex-column items-center`}>
            <div className={`flex flex-col flex-grow mx-2 transition-all duration-500 overflow-hidden`}>
                <label className="text-lg mx-4">Add a question</label>
                <div className="flex justify-between mx-2">
                    <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
                        <input className="flex flex-grow py-2 m-2 rounded-md px-2 text-black focus-visible:outline-2 outline-purple-500" name="question" value={formData.question} onChange={handleChange} placeholder="Question" />
                        <input className="py-2 mx-2 rounded-md m-2 px-2 text-black flex-grow focus-visible:outline-2 outline-purple-500" name="answer" value={formData.answer} onChange={handleChange} placeholder="Answer" />
                        <button className="px-4 py-2 rounded-md m-2 bg-violet-500 hover:bg-violet-400 ml-2" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}