import { useEffect, useState } from "react";

function UseEffect() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    console.log("Component UseEffect pertama kali dirender");

    const now = new Date();
    setDate(now.toLocaleString());
  }, []);

  const changeTitle = () => {
    document.title = "React V3 - UseEffect";
  };

  return (
    <div className="container">
      <h3>React Lanjutan - useEffect</h3>
      <p>Halaman dibuka pada:</p>
      <h2>{date}</h2>
      <button onClick={changeTitle}>Ubah Judul Browser</button>
    </div>
  );
}

export default UseEffect;