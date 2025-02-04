import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Socials() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ryantf/",
      icon: <LinkedInIcon fontSize="large" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/RyanTF313",
      icon: <GitHubIcon fontSize="large" />,
    },
  ];
  return (
      <div className="Socials" style={{ flexDirection: "row",justifyContent:'space-around' , textAlign: 'center' } as React.CSSProperties}>
        {socials.map(social => {
          return (
            <a key={social.name} href={social.url} target="_blank" style={{display:'flex', alignItems: 'center', maxWidth: '10rem'}}>
              <span>{social.icon}</span>
              <span>{social.name}</span>
            </a>
          )
        })}
      </div>
  );
}

export default Socials;
