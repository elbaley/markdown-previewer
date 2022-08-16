import styled from "styled-components";
import MarkdownEditor from "./components/MarkdownEditor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <MarkdownEditor />
        <Preview />
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  background: #ccc;

  margin-top: 4rem;
  height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: 1fr 1fr;

  .one {
    background: blue;
  }
  .two {
    background: green;
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
