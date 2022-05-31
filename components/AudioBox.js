import React from "react";

const AudioBox = ({title,src}) => {
  return (
    <div className="m-6 p-6 bg-citrorange border-2 border-black rounded-2xl">
      <p className="font-bold m-4 text-center text-2xl">
        {title}
      </p>
      <audio controls className="w-full" src={src}></audio>
    </div>
  );
};

export default AudioBox;
