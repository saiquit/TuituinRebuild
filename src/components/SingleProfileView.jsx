import React from "react";
import styled from "styled-components";

function SingleProfileView({ value, name }) {
  const arr = [];
  for (var key in value) {
    arr.push({ key: key, value: value[key] });
  }
  const renderValue = (value) => {
    if (typeof value === "string") {
      return value.replace("_", " ") + ".";
    } else if (typeof value === "object") {
      return value.toString().replace("_", " ") + ".";
    }
  };
  return (
    <div>
      <SectionName>{name}</SectionName>
      {arr.map(({ key, value }, i) => {
        let newKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, function (str) {
            return str.toUpperCase();
          });
        return (
          <ParagraphText key={i}>
            {newKey}:{" "}
            <span>
              <strong>{renderValue(value) || "Not given"}</strong>
            </span>
          </ParagraphText>
        );
      })}
    </div>
  );
}

export default SingleProfileView;

const SectionName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  color: #2b2b2c;
  position: relative;
  padding-left: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  &::after {
    position: absolute;
    content: "";
    width: 3px;
    background: orangered;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const ParagraphText = styled.p`
  font-size: 16px;
`;
