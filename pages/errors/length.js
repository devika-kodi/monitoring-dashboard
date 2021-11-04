import LengthTable from "../../components/errors/LengthTable";
import Container from "@mui/material/Container";

export default function Error() {
  return (
    <>
      <Container maxWidth="sm">
        <h1>Error in Length</h1>
        <LengthTable />
      </Container>
    </>
  );
}
