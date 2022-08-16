import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Markdown Previewer</h2>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  height: 4rem;
  font-weight: 600;
  background-color: rgb(36, 36, 36);
  /* border-bottom: 1px solid rgb(211, 214, 218); */
  position: fixed;
  top: 0px;
  z-index: 1;
  text-align: center;
  h2 {
    color: white;
  }
`;
