const API_URL = "https://portfolio-fullstack-pld6.onrender.com/api";

export const fetchProjects = async () => {
  const res = await fetch(`${API_URL}/projects`);
  return res.json();
};


export const sendContact = async (data) => {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
