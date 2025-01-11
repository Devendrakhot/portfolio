import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Devendra Khot. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
