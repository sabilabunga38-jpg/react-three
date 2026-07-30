import { useState } from "react";

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h3>React Lanjutan - Conditional Rendering</h3>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : isLoggedIn ? (
        <>
          <h2>Welcome! 👋</h2>
          <p className="dashboard">Ini adalah Dashboard.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p className="message">Silakan Login</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default Conditional;