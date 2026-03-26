const BASE_URL = "https://portfolio-fullstack-pld6.onrender.com";

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/api/projects`);
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
