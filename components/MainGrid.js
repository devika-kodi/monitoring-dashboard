import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Breakdown from "../components/Breakdown";

import Donut from "./Donut";
import BarChart from "./BarChart";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop: "20px"}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Donut />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <BarChart />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <h1>Errors</h1>
            <Stack spacing={2}>
              <Button color="primary" variant="contained">
                <Link href="/errors/roller">
                  <a>Error in Roller</a>
                </Link>
              </Button>
              <Button color="primary" variant="contained">
                <Link href="/errors/length">
                  <a>Error in Length</a>
                </Link>
              </Button>
              <Button color="primary" variant="contained">
                <Link href="/errors/thickness">
                  <a>Error in Thickness</a>
                </Link>
              </Button>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <h2>Downtime</h2>
            <Breakdown />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
