const Video = ({ path }: { path: string }) => {
  const handleVideoEnd = () => {
    console.log("here");
  };

  return (
    <>
      <video
        autoPlay
        muted={false}
        // loop={useLoop}
        onEnded={handleVideoEnd}
      >
        <source src={path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
