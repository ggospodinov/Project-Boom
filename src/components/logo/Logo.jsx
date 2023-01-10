import React from "react";



export default function Logo ({type ="default"}){

  const  defaultLogoimg = "../images/logo.svg";
  const mutedLogoimg ="../images/logo-muted.svg";
  
  if (type ==="default"){
    return React.createElement("img", { src: defaultLogoimg }, null);
  }
   
      
      return React.createElement("img", { src: mutedLogoimg }, null);
  
    
}


