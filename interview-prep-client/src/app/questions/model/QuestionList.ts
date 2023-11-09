import { QuestionAndAnswerDTO } from "./QuestionAndAnswerDTO"

export class QuestionList {

    public static getListOfQuestions(){
        return [
            new QuestionAndAnswerDTO("What is TypeScript?", "TypeScript is a superset of JavaScript. It is an object-oriented and tightly typed programming language."),
            new QuestionAndAnswerDTO("Explain Arrays in TypeScript?", "A collection of values of the same data type is called an array. It's a kind that's been defined by the user. To store values of the same kind, you use arrays. Arrays are collections of values that are ordered and indexed. The indexing begins at zero, with the first element having index 0, the second having index 1, and so on."),
            new QuestionAndAnswerDTO("Give an example of generics in TypeScript?", "Generics allow for creating flexible components without compromising on type safety. They enable you to create functions, classes, or interfaces that can work with different types while still providing the benefits of static typing."),
            new QuestionAndAnswerDTO("List some benefits of TypeScript?", "Static typing, Code maintainability, Better tooling and editor support, and Large-scale application support, JavaScript ecosystem compatibility."),
            new QuestionAndAnswerDTO("Can we call a base class constructor from a child class?", "Yes, in TypeScript, you can call the base class constructor from a child class. When you create a child class that extends a base class, you can use the super() function within the child class constructor to invoke the parent class constructor."),
            new QuestionAndAnswerDTO("How does the array method reduce work?", "The reduce() method of Array instances executes a user-supplied reducer callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value."),
        ]
    }

}