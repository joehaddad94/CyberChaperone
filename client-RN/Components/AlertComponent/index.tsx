import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify';

interface CustomToastProps {
  // Add any additional props you want to support
}

const Toast: React.FC<CustomToastProps & ToastContainerProps> = ({ ...toastContainerProps }) => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      {...toastContainerProps} // Spread any additional props you want to pass down
    />
  );
};

export default Toast;
