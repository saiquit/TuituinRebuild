import React from "react";
import { message, Modal } from "antd";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

function ApplyModal({ visible, setVisible, job }) {
  const userId = useSelector(({ user }) => user?.user?._id);

  const onFinish = async (values) => {
    const token = window.localStorage.getItem("token");

    try {
      if (!values.appicationMessage) {
        return message.error("Empty");
      }

      await axios.post(
        "/jobs/apply",
        {
          jobId: job._id,
          applicatentId: userId,
          appicationMessage: values.appicationMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setVisible(false);
    } catch (err) {
      message.error("Can't Apply Twice");
    }
  };

  return (
    <Modal
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={1000}
      footer={null}
    >
      <Form layout="vertical" name="details-form" onFinish={onFinish}>
        <Form.Item
          name="appicationMessage"
          label="Appilcation Message"
          rules={[{ type: "string" }]}
        >
          <Input.TextArea placeholder="Letter ....." rows={22} />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ApplyModal;
