import PropTypes from "prop-types";

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;