import { Question } from "@/interfaces/types";
import Video from "./Video";

const Question = ({ data } : { data : Question}) => {
  const videoPath = data.videoPath;
  const answers = data.answers;

  return (
    <div>
      <Video  path={videoPath}/>
    </div>
  );
};

export default Question;