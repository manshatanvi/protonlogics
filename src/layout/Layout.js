import React from 'react';
const Layout = ({ children, hasClass }) => {
  return (
    <div className={`main-wrapper ${hasClass ? 'overflow-hidden' : null}`}>
      {children}
    </div>
  );
};

export default Layout;
