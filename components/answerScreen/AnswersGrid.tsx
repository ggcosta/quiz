import { Answer } from "@/interfaces/types";
import AnswerButton from "./AnswerButton";

const AnswersGrid = ({
  answers,
  handleAnswer,
}: {
  answers: Answer[];
  handleAnswer: (correct: boolean) => void;
}) => {
  const buttonOnClick = (answer: string) => {};

  return (
    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-10">
      {answers.map((answer, index) => {
        return (
          <AnswerButton
            key={index}
            answer={answer}
            handleAnswer={handleAnswer}
          />
        );
      })}
    </div>
  );
};

export default AnswersGrid;
