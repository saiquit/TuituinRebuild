import React from "react";
import { Card } from "antd";
function CardCover(props) {
  const { children } = props;
  return (
    <Card
      {...props}
      style={{
        width: "100%",
        borderRadius: "15px",
        margin: "10px 5px",
        cursor: "auto",
        ...props.style,
      }}
    >
      {children}
    </Card>
  );
}

export default CardCover;
