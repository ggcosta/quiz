import { ProgramData } from "@/interfaces/types";
import { useState, useMemo } from "react";

const PhaseHandler = ({ data }: { data: ProgramData }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const standByVideo = data.standByVideo;
  const numQuestionsToAsk = data.numQuestionsToAsk;
  const questions = data.questions;

  return <h1>YO!</h1>;
};

export default PhaseHandler;
