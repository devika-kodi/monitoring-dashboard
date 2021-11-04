import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}
