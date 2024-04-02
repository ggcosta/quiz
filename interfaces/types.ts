export interface Phase {
  type: "standBy" | "intro" | "question" | "output";
  videoPath: string;
  answers?: Answer[];
}

export interface ProgramData {
  standByPath: string;
  introPath: string;
  numQuestionsToAsk: number;
  questions: Question[];
}

export interface Question {
  videoPath: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  correct: boolean;
}
