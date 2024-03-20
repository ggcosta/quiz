export interface ProgramData {
  standByVideo: string;
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
