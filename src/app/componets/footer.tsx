import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#f0f0f0] py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blogboard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
