import React from "react";
import { Row } from "antd";
import CardCover from "./CardCover";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { updateEduInfo } from "../redux/userReducer/user_actions";
import axios from "axios";

function SingleEducation({ edu, updateEduInfo, proPage }) {
  const { educationInfo, _id } = useSelector(({ user }) => user.user);
  const removeEdu = () => {
    const newEducation = educationInfo.filter((data) => data._id !== edu._id);
    const token = window.localStorage.getItem("token");
    updateEduInfo(newEducation);
    axios({
      url: `/users/${_id}`,
      method: "PUT",
      data: {
        educationInfo: newEducation,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <Row style={{ margin: "10px" }}>
      <CardCover hoverable>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{edu.degreeTitle}</h2>
          {!proPage && <CloseCircleOutlined onClick={removeEdu} />}
        </div>
        <h1>
          <b>Passing Year:</b>
          {edu.yearOfPassing}
        </h1>
        <p>
          <b>{edu.instituteName}</b>
        </p>
        <p>{edu.group}</p>
      </CardCover>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateEduInfo: (data) => dispatch(updateEduInfo(data)),
});

export default connect(null, mapDispatchToProps)(SingleEducation);
