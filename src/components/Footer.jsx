const styles = {
    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#0D3B66", // Subtle background color to match the theme
      color: "#FFFFFF", // White text for contrast
      borderTop: "1px solid #A3B8C6", // Light border to separate from content
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    paragraph: {
      margin: "5px 0",
      fontSize: "1rem",
    },
    link: {
      color: "#A3B8C6", // Light text color for links
      textDecoration: "none",
      margin: "0 10px", // Space between icons
      transition: "color 0.3s ease", // Smooth hover effect
    },
    logo: {
      width: "24px", // Standard size for icons
      height: "24px", // Keep the icons uniform
      display: "inline-block", // Align icons horizontally
    },
    copyright: {
      marginTop: "10px",
      fontSize: "0.875rem",
      color: "#A3B8C6", // Lighter color for the copyright text
    }
  };
  
  const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div>
          <p style={styles.paragraph}>
            <a
              href="https://github.com/toasterbrain28"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub Logo"
                style={styles.logo}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/talonbarkie"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/LinkedIn_Logo_2023.svg"
                alt="LinkedIn Logo"
                style={styles.logo}
              />
            </a>
           
          </p>
        </div>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Talon Barkie. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;