import { Answer } from "@/interfaces/types";

const AnswerButton = ({
  answer,
  handleAnswer,
}: {
  answer: Answer;
  handleAnswer: (correct: boolean) => void;
}) => {
  const handlePress = () => {
    console.log("Resposta: ", answer.correct);
    if (answer.correct) {
      handleAnswer(true);
    } else {
      handleAnswer(false);
    }
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-2 px-4 rounded-full w-5/6 z-10"
      onClick={handlePress}
    >
      {answer.answer}
    </button>
  );
};

export default AnswerButton;
