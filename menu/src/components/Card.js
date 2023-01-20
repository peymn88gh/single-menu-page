import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height:"200px"
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: 3,
          // width: '8rem',
          // height: '5rem',
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#fff" : "#101010",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "#fff",
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        {/* <CardActionArea> */}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              Welcome
            </Typography>
            <Typography variant="body2" color="#fff">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </div>
  );
}
