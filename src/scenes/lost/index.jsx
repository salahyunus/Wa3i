import React from "react";
import { Box, Button } from "@mui/material";
import LostGif from "../../resources/images/404.gif";
import { Link } from "react-router-dom";
import { homePath } from "../../paths";

const Lost = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${LostGif})`,
        backgroundSize: "cover",
        zIndex: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
      }}
    >
      <Link to={homePath} underline="none">
        <Button
          variant="contained"
          sx={{
            zIndex: 1,
            borderRadius: "50px",
            mt: " 45vh",
            height: "50px",
            "&:hover": {
              bgcolor: "#ffc107",
              color: "#121212",
            },
          }}
        >
          Take Me Home...
        </Button>
      </Link>
    </Box>
  );
};

export default Lost;
