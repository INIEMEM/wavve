import React from 'react';
import { Form, Input, Button, message } from 'antd';
import Axios from 'axios';

const Registration = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
     
      const response = await  Axios({
        method: 'post',
        url: `https://your-backend-endpoint.com/api/register`,
        data:{
          email: values.email,
          firstname: values.firstname,
          lastname: values.lastname,
          whatsAppNumber: values.whatsAppNumber,

        },
          
      });
      message.success('Registration successful!');
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      message.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex register-main" style={{height: '100vh'}}>
      <div className='register-image'>

      </div>
      <div style={{flex:1, padding:20}} >
        <h2>Registration Form</h2>
        <p style={{fontSize: '0.8rem'}}>Welcome! Take a moment to fill in your details and unlock personalized experiences crafted just for you. Start now!</p>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{  margin: '0 auto' }}
        >
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="WhatsApp Number"
            name="whatsAppNumber"
            rules={[{ required: true, message: 'Please enter your WhatsApp number' }]}
          >
            <Input placeholder="Enter your WhatsApp number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{backgroundColor: 'var(--primary-color)', color: 'white'}} block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
