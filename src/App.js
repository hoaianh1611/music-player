import { Container } from "@mui/system";
import React from "react";
import "./App.css";
import Controller from "./components/Controller";
import Footer from "./components/Footer";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <MusicPlayerProvider>
        <Container
          sx={{
            height: "500px",
            width: "300px",
            borderRadius: "70px",
            backgroundColor: "rgb(211, 187, 221)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "64px",
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
            boxShadow: "inset 5px 5px 15px 16px hsl(0deg 0% 100% / 55%)",
          }}
        >
          <TrackList />
          <Controller />
        </Container>
        <Footer />
      </MusicPlayerProvider>
    </ThemeProvider>
  );
}

export default App;
