import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Message sent 🚀");
    setForm({ name: "", email: "",phone: "", message: "" });
  };

  return (
    <section style={styles.container}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Your Phone No." value={form.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} />
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    margin: "auto"
  }
};