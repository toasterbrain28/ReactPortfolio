const Header = () => {
    return (
      <header
        style={{
          backgroundColor: "#0D3B66", 
          color: "#786F52", 
          textAlign: "center", 
          padding: "20px 0",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h1 
          style={{
            margin: "0", 
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          My Portfolio
        </h1>
        <p
          style={{
            fontSize: "1rem", 
            marginTop: "5px", 
            fontStyle: "italic", 
            color: "#A3B8C6"
          }}
        >
          A showcase of my web development skills
        </p>
        {/* Add NavTabs or any other header elements here */}
      </header>
    );
  };
  
  export default Header;
  