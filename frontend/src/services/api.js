export const fetchProjects = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
};