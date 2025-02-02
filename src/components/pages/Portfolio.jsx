import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1 style={{ color: "#786F52" }}>Portfolio</h1>
      <div className="projects-container">
        <Project
          title="Automatic ReadME Generator"
          image={vehicleBuilderImage}
          githubLink="https://github.com/toasterbrain28/Readme_Generator"
        />
        <Project
          title="Employee Tracker"
          image={weatherDashboardImage}
          githubLink="https://github.com/toasterbrain28/EmployeeTracker2"
        />
      </div>
    </div>
  );
};

export default Portfolio;