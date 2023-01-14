import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Layout(props) {
  return (
    <div style={{height:"inherit"}}>
    <ResponsiveAppBar/>
      <div>{props.children}</div>
    </div>
  );
}
export default Layout;
