import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectMarkdown, setMdInput } from "../features/markdown/markdownSlice";

const MarkdownEditor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(selectMarkdown);
  return (
    <Wrapper>
      <div className='header'>
        <span className='title'>Markdown</span>
      </div>
      <div className='text'>
        <textarea
          onChange={(e) => {
            dispatch(setMdInput({ input: e.target.value }));
          }}
          value={markdown.mdInput}
          className='text-area'
        ></textarea>
      </div>
    </Wrapper>
  );
};

export default MarkdownEditor;

const Wrapper = styled.section`
  background: #1d1f20;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    background: black;
  }
  .title {
    color: white;
    background: #1d1f20;
    padding: 0 1rem;
    border-top: 1px solid #616369;
  }
  .text {
    flex-grow: 1;
    padding: 1rem 0 0 1rem;
  }

  .text-area {
    font-size: 1rem;
    background: #1d1f20;
    color: white;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    resize: none;
  }
  .text-area:focus-visible {
    outline: none;
  }

  @media (max-width: 768px) {
    border-left: none;
    border-bottom: 1px solid gray;
  }
`;
