import { ChangeEvent, FormEvent, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formStyle: React.CSSProperties = {
    backgroundColor: "#E3B505",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  const nameStyle: React.CSSProperties = {
    border: ".25rem solid #01baef",
    borderRadius: ".25rem",
    color: "#01baef",
    display: "flex",
    flexDirection: "row",
    fontSize: "1.5rem",
    marginBottom: ".5rem",
    padding: ".25rem",
    width: "50rem",
  };
  const emailStyle: React.CSSProperties = {
    border: ".25rem solid #01baef",
    borderRadius: ".25rem",
    color: "#01baef",
    display: "flex",
    flexDirection: "row",
    fontSize: "1.5rem",
    marginBottom: ".5rem",
    padding: ".25rem",
    width: "50rem",
  };
  const messageStyle: React.CSSProperties = {
    border: ".25rem solid #01baef",
    borderRadius: ".25rem",
    color: "#01baef",
    display: "flex",
    flexDirection: "row",
    fontSize: "1.5rem",
    marginBottom: ".5rem",
    padding: ".25rem",
    width: "50rem",
  };
  const submitStyle: React.CSSProperties = {
    backgroundColor: "#2a2c24",
    border: ".25rem solid #01baef",
    borderRadius: ".25rem",
    color: "#01baef",
    display: "flex",
    flexDirection: "row",
    fontSize: "1.5rem",
    marginBottom: ".5rem",
    padding: ".25rem",
    width: "50rem",
  };
  const resultsStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    fontSize: "1.5rem",
    marginBottom: ".5rem",
    width: "50rem",
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b2de8932-e63d-47d9-be1b-440a5fc76ee4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => setResult(""), 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => setResult(""), 2000);
    }
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const field = event.currentTarget.getAttribute("name") ?? "";
    const value = event.currentTarget.value;

    setFormData({ ...formData, [field]: value });
  };

  const { name, email, message } = formData;

  if (result) {
    return <span style={resultsStyle}>{result}</span>;
  }
  return (
    <div>
      <div className="contactHeader">
        <h3
          style={{
            fontSize: "2.25rem",
            margin: ".5rem auto",
            textAlign: "center",
          }}
        >
          Contact Me
        </h3>
      </div>
      <div className="contactForm">
        <form onSubmit={onSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            style={nameStyle}
            onChange={onChange}
            value={name}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            style={emailStyle}
            onChange={onChange}
            value={email}
          />
          <textarea
            name="message"
            required
            placeholder="Message..."
            style={messageStyle}
            onChange={onChange}
            value={message}
          ></textarea>

          <button type="submit" style={submitStyle}>
            Submit Form
          </button>
        </form>
      </div>
      <style>
        {`::placeholder {
  color: "#01baef",
}`}
      </style>
    </div>
  );
}
