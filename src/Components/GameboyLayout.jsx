import React, { useState } from "react";

export const GameboyLayout = ({
  children,
  playButton,
  pauseButton,
  clear,
  seed,
  slow,
  fast,
  boxSize,
}) => {
  const [playing, setplaying] = useState(true);
  const [cleared, setcleared] = useState(false);

  return (
    <div className="case">
      <div className="case-head">
        <div></div>
      </div>
      <div className="case-body">
        <div className="case-screen">
          <div className="screen">{children}</div>
        </div>
        <div className="buttons">
          <div className="vary-buttons">
            <div className="speed-buttons">
              <button onClick={() => fast()}></button>
              <button onClick={() => slow()}></button>
            </div>
            <div className="size-buttons">
              <button
                onClick={() => {
                  boxSize(1);
                }}
              ></button>
              <button
                onClick={() => {
                  boxSize(2);
                }}
              ></button>
            </div>
          </div>
          <div className="switch-buttons">
            <button
              onClick={() => {
                cleared ? seed() : clear();
                setcleared(!cleared);
                console.log(cleared);
              }}
            ></button>
            <button
              onClick={() => {
                playing ? pauseButton() : playButton();
                setplaying(!playing);
                console.log(playing);
              }}
            ></button>
          </div>
          <div className="dull-buttons">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};
