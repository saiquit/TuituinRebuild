import React from "react";
import { Card } from "antd";
function CardCover({ children, ...props }) {
  return (
    <Card
      {...props}
      hoverable
      style={{ width: "100%", borderRadius: "15px", margin: "10px 5px" }}
    >
      {children}
    </Card>
  );
}

export default CardCover;
