import { ProgramData } from "@/interfaces/types";
import { useState, useMemo } from "react";
import Phase from "./Phase";
import { handlePhases } from "@/pages/utils/phaseHandlerAux";

const PhaseHandler = ({ data }: { data: ProgramData }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [presentationRerun, setPresentationRerun] = useState(false);
  const [score, setScore] = useState(0);
  const standByPath = data.standByPath;
  const introPath = data.introPath;
  const numQuestionsToAsk = data.numQuestionsToAsk;
  const questions = data.questions;

  const phases = useMemo(
    () => handlePhases(standByPath, introPath, questions, numQuestionsToAsk),
    [introPath, numQuestionsToAsk, questions, standByPath, presentationRerun]
  );

  const handlePhaseEnd = (correct: boolean = false) => {
    if (correct) {
      setScore(score + 1);
      console.log("Correct answer");
    } else {
      console.log("Wrong answer or not a question phase");
    }
    if (currentPhase === phases.length - 1) {
      console.log("Program ended");
      setPresentationRerun(true);
      return;
    }
    const nextPhase = currentPhase + 1;
    console.log("Phase ended, moving to next phase");
    setCurrentPhase(nextPhase);
    console.log("Next phase: ", nextPhase);
  };

  const handleReset = () => {
    setPresentationRerun(false);
    setScore(0);
    setTimeout(() => {
      setCurrentPhase(0);
    }, 100);
  };

  return (
    <>
      {presentationRerun ? (
        <div className=" h-full flex flex-col justify-evenly items-center alig">
          <h1 className="text-black block text-4xl">
            Score: {`${score}/${numQuestionsToAsk}`}
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-2 px-4 rounded-full w-2/6 h-28"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      ) : (
        <Phase
          key={currentPhase}
          phaseData={phases[currentPhase]}
          handlePhaseEnd={handlePhaseEnd}
        />
      )}
    </>
  );
};

export default PhaseHandler;
