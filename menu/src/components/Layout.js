import { red } from "@mui/material/colors";
import React from "react";
import { makeStyles } from '@material-ui/styles';
const useStyle = makeStyles({
  cc: {
    backgroundColor: red
  }
})

function Layout(props) {
  const classes = useStyle()
  return (
    <div className={classes.cc}>
      <div>
        {props.children}
      </div>
    </div>
  );
}
export default Layout;
