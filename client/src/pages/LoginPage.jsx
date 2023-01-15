import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Button, Form, Input, Col, Row, Space } from "antd";

export default function LoginPage() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [errorState, setErrorState] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);

  //   Update form state on changes to the form
  const handleInputChange = (event) => {
    // console.log('handleInputChange event:', event[0])
    const { name, value } = event[0];
    setUserFormData({ ...userFormData, [name]: value });
    console.log("new userFormData is:", userFormData);
  };

  //   Log the user in
  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    console.log("handleFormSubmit event:", event);
    console.log("userFormData:", userFormData);

    try {
      const { data } = await login({
        variables: {
          ...userFormData,
        },
      });

      // console.log('login data.login.user.savedBooks:', data.login.user.savedBooks);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setErrorState(true);
    }

    // Wipe the form
    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="loginPage">
      <h1>This is the login page!</h1>
      <Form
        name="basic"
        labelCol={{ span: 4, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
        initialValues={{ remember: true }}
        onFieldsChange={handleInputChange}
        onFinish={handleFormSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Row justify="center">
            <Col span={4}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>

            <Col span={4}>
              <Button type="primary" htmlType="submit">
                Create an account!
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}
