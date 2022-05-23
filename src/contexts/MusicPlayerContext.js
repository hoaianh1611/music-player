import React, { useState } from "react";
import Track1 from "./track1.mp3";
import Track2 from "./track2.mp3";
import Track3 from "./track3.mp3";

const MusicPlayerContext = React.createContext();

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Forest Lullaby",
        file: Track1,
      },
      {
        name: "Melody of nature",
        file: Track2,
      },
      {
        name: "Price of Freedom",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  // console.log(state.tracks);
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
