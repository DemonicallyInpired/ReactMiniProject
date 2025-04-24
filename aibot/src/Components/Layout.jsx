import Navbar from "./Navbar/Navbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";
import { ToggleContext } from "../../utils/contexts";
import { ResetContext } from "../../utils/contexts";
export default function Layout() {
  const [toggle, setToggle] = useState(false);
  const [reset, setReset] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle: toggle, setToggle: setToggle }}>
      <ResetContext.Provider value={{ reset, setReset }}>
        <Grid
          container
          sx={{
            minHeight: { xs: "105vh", md: "100vh", sm: "100vh", lg: "100vh" },
          }}
        >
          <Grid sx={{ height: "10%" }} size={{ xs: 12 }}>
            <Navbar />
          </Grid>
          <Grid
            sx={{ height: { md: "90%", xs: "100%" } }}
            container
            size={{ xs: 12 }}
          >
            <Grid size={{ xs: 0, md: 0.15 * 12 }}>
              <SideBar />
            </Grid>
            <Grid size={{ xs: 12, md: 0.85 * 12 }}>
              <Outlet />
            </Grid>
          </Grid>
        </Grid>
      </ResetContext.Provider>
    </ToggleContext.Provider>
  );
}
