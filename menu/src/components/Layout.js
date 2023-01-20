import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Layout(props) {
  return (
    <div style={{display:'inline-block', height:"100%", width:"100%"}}>
    <ResponsiveAppBar/>
      <div style={{display:'inline-block', height:"100%", width:"100%"}}>{props.children}</div>
    </div>
  );
}
export default Layout;
