import ThicknessTable from "../../components/errors/ThicknessTable";
import Container from "@mui/material/Container";

export default function Error() {
  return (
    <Container maxWidth="sm">
      <h1>Error in Thickness</h1>
      <ThicknessTable />
    </Container>
  );
}
