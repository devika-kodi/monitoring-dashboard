import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: "#ededed", minHeight: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}
