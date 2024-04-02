import { Question, Phase } from "@/interfaces/types";

const shuffleArray = (array: any[], numElements: number): any[] => {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numElements);
};

const getShuffledQuestions = (
  questions: Question[],
  numQuestions: number
): Question[] => {
  return shuffleArray(questions, numQuestions);
};

const handlePhases = (
  standByPath: string,
  introPath: string,
  questions: Question[],
  numQuestions: number
): Phase[] => {
  const standByPhase: Phase = {
    type: "standBy",
    videoPath: standByPath,
  };

  const introPhase: Phase = {
    type: "intro",
    videoPath: introPath,
  };

  const unphasedQuestions = getShuffledQuestions(questions, numQuestions);

  const questionPhases: Phase[] = unphasedQuestions.map((question) => {
    return {
      type: "question",
      videoPath: question.videoPath,
      answers: question.answers,
    };
  });

  const phases = [standByPhase, introPhase, ...questionPhases ]

  return phases;
};
export { handlePhases };
