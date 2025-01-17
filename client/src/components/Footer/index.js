import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer style={{ paddingTop: 75 }}>
      <Navbar
        className="shadow-sm justify-content-center"
        bg="light"
        variant="light"
        fixed="bottom"
      >
        <Navbar.Text>
          © 2020-2023{' '}
          <a
            href="https://github.com/shibayancodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shibayan bhattacharjee
          </a>
        </Navbar.Text>
      </Navbar>
    </footer>
  );
};

export default Footer;
