//mui
import { CssBaseline, Grid } from "@mui/material";

//components
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
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
        >
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
