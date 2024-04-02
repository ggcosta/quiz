import { Question } from "@/interfaces/types";
import Video from "../Video";
import { useState } from "react";
import AnswersGrid from "../answerScreen/AnswersGrid";

const Question = ({
  question: { videoPath, answers },
  handleQuestionEnd,
}: {
  question: Question;
  handleQuestionEnd: (correct?: boolean) => void;
}) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <>
      {!showAnswers && (
        <Video path={videoPath} handleEnd={() => setShowAnswers(true)} />
      )}
      {showAnswers && (
        <div className="relative">
          <Video
            path={videoPath}
            useLoop={true}
            handleEnd={handleQuestionEnd}
          />
          <AnswersGrid answers={answers} handleAnswer={handleQuestionEnd}/>
        </div>
        )}
    </>
  );
};

export default Question;
