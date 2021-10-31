import { useState, useEffect } from "react";

//mui
import { CssBaseline, Grid } from "@mui/material";

//components
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

const App = () => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="border"
        >
          <Map setCoords={setCoords} coords={coords} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
