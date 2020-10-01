import React, { useEffect, useState } from "react";
import { AutoComplete, Col, Image, Input, Tooltip, Row } from "antd";
import { AimOutlined } from "@ant-design/icons";
import styled from "styled-components";
import axios from "axios";

function Home({ history }) {
  const [options, setOptions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const getAreaDataAndCreateOption = async () => {
    const data = await (await axios.get("/statics/area")).data;

    const optionArr = data.map((item) => ({
      key: item._id,
      label: item.name,
      value: item.name.toString(),
    }));
    setOptions(optionArr);
  };

  useEffect(() => {
    getAreaDataAndCreateOption();
    return () => {};
  }, []);

  const handleSearch = (search) => {
    const data = options.filter((item) =>
      item.label.toLowerCase().startsWith(search.toLowerCase()),
    );
    setFiltered(data);
  };

  const onSelect = (value) => {
    history.push("/jobs", { area: value });
  };

  const handleAreaSearch = async () => {
    const data = (await axios.get("https://freegeoip.app/json/")).data;
    console.log(data);
  };
  return (
    <HeroCover>
      <Col md={14} sm={24} xs={24} style={{ padding: 100 }}>
        <HeroHeading>Find a tutor today!</HeroHeading>
        <HeroSubheading>
          Book one-on-one lessons with verified tutors in your area
        </HeroSubheading>
        <br />
        <AutoComplete
          onSelect={onSelect}
          style={{
            width: "80%",
          }}
          onSearch={handleSearch}
          options={filtered}
        >
          <Input.Search
            prefix={
              <Tooltip title="Search Your Area" color="geekblue">
                <AimOutlined onClick={handleAreaSearch} />
              </Tooltip>
            }
            size="large"
            placeholder="Search Location"
            enterButton
          />
        </AutoComplete>
      </Col>
      <Col md={10} sm={24} xs={24}>
        <Image preview={false} width={"100%"} src={`assets/hero.jpg`} />
      </Col>
    </HeroCover>
  );
}

const HeroCover = styled(Row)`
  height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const HeroHeading = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;
const HeroSubheading = styled.p`
  font-size: 20px;
`;

export default Home;
