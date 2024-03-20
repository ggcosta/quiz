import { Question } from "@/interfaces/types"

const shuffleArray = (array: any[], numElements: number): any[] => {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numElements);
};

const getQuestions = (questions: Question[], numQuestions: number): Question[] => {
  return shuffleArray(questions, numQuestions);
};

export { getQuestions };