import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Breakdown from "../components/Breakdown";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>Pie Chart</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Production</Item>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Button color="primary" variant="contained">
              Error in Roller
            </Button>
            <Button color="primary" variant="contained">
              Error in Length
            </Button>
            <Button color="primary" variant="contained">
              Error in Thickness
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <Breakdown />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
