import React from "react";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="Home" style={homeStyle}>
      <div className="intro">
        <h4 style={introHeadingStyle}>Hello World</h4>
        <p style={introDescriptionStyle}>
          My name is Ryan Hernandez-French and I am a software engineer based
          out of Detroit, MI. I have a wide range of experience after working
          for different companies across different industries. I enjoy being
          challenged in my roles by taking on new projects, by learning new
          skills or technology, or by finding solutions to complex issues. As a
          SWE I like to work across teams to build common understanding while
          also providing new perspectives amongst the technical team. While
          writing high quality code is my main goal, I do well in explaining
          technical issues/solutions to non technical team members and being a
          resource for newer engineers to learn/grow in their roles.
        </p>
      </div>
      <div className="foldersContainer" style={foldersContainerStyle}>
        <h3>Projects:</h3>
        <div className="folders" style={foldersStyle}>
          <div className="folder">
            <span className="material-symbols-outlined" style={folderStyle}>
              folder
            </span>
            <span>Project 1</span>
          </div>
          <div className="folder">
            <span className="material-symbols-outlined" style={folderStyle}>
              folder
            </span>
            <span>Project 2</span>
          </div>
          <div className="folder">
            <span className="material-symbols-outlined" style={folderStyle}>
              folder
            </span>
            <span>Project 3</span>
          </div>
          <div className="folder">
            <span className="material-symbols-outlined" style={folderStyle}>
              folder
            </span>
            <span>Project 4</span>
          </div>
        </div>
      </div>
      <div className="Contact">
        <Contact />
      </div>
    </div>
  );
}

const homeStyle: React.CSSProperties = {
  padding: "5rem",
};
const introHeadingStyle: React.CSSProperties = {
  fontSize: "4rem",
  textAlign: "center",
};
const introDescriptionStyle: React.CSSProperties = {
  borderTop: ".5rem solid #E3B505",
  borderBottom: ".5rem solid #E3B505",
  fontSize: "1.25rem",
  padding: "1rem",
  textAlign: "center",
};

const foldersContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  textAlign: "center",
};

const foldersStyle: React.CSSProperties = {
  borderBottom: ".5rem solid #E3B505",
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
  paddingBottom: ".5rem",
};

const folderStyle: React.CSSProperties = {
  color: "#01BAEF",
  fontSize: "8rem",
};

export default Home;
