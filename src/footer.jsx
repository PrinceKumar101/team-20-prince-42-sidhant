import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 MyApp. All rights reserved.</p>

      <div style={styles.links}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "auto",
    padding: "20px",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
  },
  links: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
};

export default Footer;