export default function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div style={styles.tech}>
        {project.techStack?.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>

      <div style={styles.buttons}>
        <a href={project.githubUrl} target="_blank">GitHub</a>
        <a href={project.liveUrl} target="_blank">Live</a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    background: "#111",
    borderRadius: "12px",
    border: "1px solid #222",
    width: "300px",
    transition: "0.3s"
  },
  hover: {
  transform: "translateY(-5px)"
},
  tech: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    fontSize: "12px",
    color: "#aaa"
  },
  buttons: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between"
  }
};