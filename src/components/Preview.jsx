import Markdown from "marked-react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMarkdown } from "../features/markdown/markdownSlice";
import Lowlight from "react-lowlight";
import "highlight.js/styles/dark.css";
import "react-lowlight/common";

//syntax highlighter config
const renderer = {
  code(snippet, lang) {
    const found = Lowlight.hasLanguage(lang);
    return (
      <Lowlight
        key={this.elementId}
        language={found ? lang : undefined}
        value={snippet}
      />
    );
  },
};
const Preview = () => {
  const markdown = useSelector(selectMarkdown);
  return (
    <Wrapper>
      <div className='header'>
        <span className='title'>Preview</span>
      </div>
      <Markdown renderer={renderer} value={markdown.mdInput} />
    </Wrapper>
  );
};

export default Preview;

const Wrapper = styled.section`
  background-color: #252829;
  overflow: scroll;
  .header {
    width: 100%;
    background: black;
    position: sticky;
    top: 0;
  }
  .title {
    color: white;
    background: #1d1f20;
    padding: 0 1rem;
    border-top: 1px solid #616369;
  }
`;
