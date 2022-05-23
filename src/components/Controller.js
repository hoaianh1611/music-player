import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Controller() {
  const { togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        height: "80px",
        width: "100%",
        display: "flex",
        paddingX: "84px",
        justifyContent: "space-around",
        borderRadius: "0px 0px 70px 70px",
      }}
    >
      <Button onClick={playPreviousTrack}>
        <SkipPreviousIcon
          fontSize="large"
          sx={{ color: "rgba(0, 0, 0, 0.54)" }}
        />
      </Button>
      <Button onClick={togglePlay}>
        <PlayCircleIcon
          sx={{
            color: "rgba(0, 0, 0, 0.54)",
            fontSize: "60px",
          }}
        />
      </Button>
      <Button onClick={playNextTrack}>
        <SkipNextIcon fontSize="large" sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
      </Button>
    </Box>
  );
}

export default Controller;
