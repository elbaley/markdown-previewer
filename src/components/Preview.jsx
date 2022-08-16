import Markdown from "marked-react";
import styled from "styled-components";

const Preview = () => {
  return (
    <Wrapper>
      <Markdown
        breaks={true}
        source='# Marked in browser\n\nRendered by **marked**.'
      />
      <h1>Test Header</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, quas?</p>
      <h2>Another Header!</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, rerum
        laboriosam.
      </p>
    </Wrapper>
  );
};

export default Preview;

const Wrapper = styled.section`
  background-color: #252829;
`;
