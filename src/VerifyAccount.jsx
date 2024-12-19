import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';
import axios from 'axios';

const VerifyAccount = () => {
  const [form] = Form.useForm();
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [counter, setCounter] = useState(60);

 
  useEffect(() => {
    let timer;
    if (isResendDisabled && counter > 0) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }
    if (counter === 0) {
      setIsResendDisabled(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isResendDisabled, counter]);

  const handleOTPSubmit = async (values) => {
    try {
      const response = await axios.post('https://your-backend-endpoint.com/api/verify-otp', values);
      message.success('Account verified successfully!');
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      message.error('Invalid OTP. Please try again.');
    }
  };

  const handleResendOTP = async () => {
    try {
      await axios.post('https://your-backend-endpoint.com/api/resend-otp', { email: 'Iniemem@gmail.com' });
      message.success('OTP resent successfully!');
      setCounter(60);
      setIsResendDisabled(true);
    } catch (error) {
      console.error('Error:', error);
      message.error('Failed to resend OTP. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: 400, margin: '0 auto', padding: 20, textAlign: 'center' }}
    >
      <h2>Verify Your Account</h2>
      <p>Please enter the OTP sent to your email to verify your account.</p>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleOTPSubmit}
        style={{ marginTop: 20 }}
      >
        <Form.Item
          label="OTP Code"
          name="otp"
          rules={[{ required: true, message: 'Please enter the OTP code' }]}
        >
          <Input placeholder="Enter OTP code" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"  style={{backgroundColor: 'var(--primary-color)', color: 'white'}}
          block >
            Verify Account
          </Button>
        </Form.Item>
      </Form>

      <div style={{ marginTop: 20 }}>
        <Button
          type="link"
          onClick={handleResendOTP}
          disabled={isResendDisabled}
         
        >
          Resend OTP
        </Button>
        {isResendDisabled && (
          <p style={{ marginTop: 10 }}>Resend available in {counter}s</p>
        )}
      </div>
    </motion.div>
  );
};

export default VerifyAccount;
