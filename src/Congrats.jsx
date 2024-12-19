import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

const Congrats = () => {
  const handleBackToWhatsApp = () => {
    window.location.href = 'https://wa.me'; // Replace with your WhatsApp link
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 20,
        textAlign: 'center',
        background: '#f9f9f9',
        borderRadius: 8,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        height: '100vh'
      }}
    >
      <h2>Account Already Exists</h2>
      <p>You already have an account. Please return to WhatsApp for further assistance or information.</p>

      <Button
        type="primary"
        size="large"
        style={{backgroundColor: 'var(--primary-color)', color: 'white', marginTop: 20}}
        onClick={handleBackToWhatsApp}
      >
        Go to WhatsApp
      </Button>
    </motion.div>
  );
};

export default Congrats;
