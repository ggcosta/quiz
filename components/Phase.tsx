import { Phase } from "@/interfaces/types";
import Video from "./Video";
import Question from "./questionScreen/Question";
import { useEffect, useState } from "react";

const Phase = ({
  phaseData: { type, videoPath, answers },
  handlePhaseEnd,
}: {
  phaseData: Phase;
  handlePhaseEnd: (correct?: boolean) => void;
}) => {
  const isQuestionPhase = type === "question";
  const isStandByPhase = type === "standBy";

  let questionData: Question =
    isQuestionPhase && answers
      ? { videoPath, answers }
      : { videoPath: "", answers: [] };

  type === "question" && answers
    ? (questionData = {
        videoPath: videoPath,
        answers: answers,
      })
    : { videoPath: "", answers: [] };

  return (
    <>
      {isQuestionPhase ? (
        <Question question={questionData} handleQuestionEnd={handlePhaseEnd} />
      ) : (
        <Video
          path={videoPath}
          useLoop={isStandByPhase}
          isStandBy={isStandByPhase}
          handleEnd={handlePhaseEnd}
        />
      )}
    </>
  );
};

export default Phase;
