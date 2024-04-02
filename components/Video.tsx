import { useEffect } from "react";

const Video = ({
  path,
  handleEnd,
  useLoop,
  isStandBy,
}: {
  path: string;
  handleEnd: (correct?: boolean) => void;
  useLoop?: boolean;
  isStandBy?: boolean;
}) => {
  useEffect(() => {
    const handlePress = (event: Event) => {
      if (event.type === "click" || event.type === "touchstart") {
        console.log("TOCASTE");
        handleEnd();
      }
    };

    if (isStandBy) {
      document.addEventListener("click", handlePress);
      document.addEventListener("touchstart", handlePress);
    }
    return () => {
      if (isStandBy) {
        document.removeEventListener("click", handlePress);
        document.removeEventListener("touchstart", handlePress);
      }
    };
  }, [handleEnd, isStandBy]);

  const handleVideoEnd = () => {
    if (useLoop) return;
    handleEnd();
  };

  return (
    <div className="block">
      <video autoPlay muted={false} loop={useLoop} onEnded={handleVideoEnd}>
        <source src={path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
