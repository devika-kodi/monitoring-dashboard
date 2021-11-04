import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import styled from "@emotion/styled";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar variant="dense">
          <Flex>
            <EqualizerIcon style={{ marginRight: "5px" }} />
            <Typography variant="h6" color="inherit" component="div">
              <Link href="/">
                <a>Monitoring Dashboard</a>
              </Link>
            </Typography>
          </Flex>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
