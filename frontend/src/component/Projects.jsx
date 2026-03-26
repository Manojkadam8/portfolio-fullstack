import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    loadProjects();
  }, []);

  return (
    <section style={styles.container}>
      <h2>My Projects</h2>

      <div style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center"
  },
  grid: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  }
};