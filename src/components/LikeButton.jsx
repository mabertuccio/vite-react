import React from "react";
import { Button } from "./Button.jsx";

export function LikeButton() {
  const [like, setLike] = React.useState(false);

  return (
    <Button
      onClick={() => {
        setLike(!like);
      }}
      className={like ? "button-blue" : "button-red"}
    >
      {like ? "You Liked It" : "Give Like"}
    </Button>
  );
}

LikeButton.PropTypes = {};
