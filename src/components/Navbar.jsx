import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { fonticon, logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import Login from "./Login";

const Navbar = () => (
  <Box sx={{ position: "sticky", top: 0, background: "#000" }}>
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "1500px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "160px",
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" height={45} />
        </Link>

        <Link to="/">
          <img src={fonticon} alt="fonticon" height={45} />
        </Link>
      </div>
        
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "600px",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            paddingRight: "20px",
          }}
        >
          <Login />
        </div>
        <SearchBar />
      </div>
    </Stack>
  </Box>
);
// |a| |b c|
export default Navbar;
