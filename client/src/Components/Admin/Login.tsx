import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokenStorage } from "../../service/token.service";

import "../../styles/login.scss";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const hundleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login && password) {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok && response.status === 401) {
        return setError("Неверный логин или пароль!");
      }

      if (response.status === 500) {
        return setError("Не удалось авторизоваться, попробуйте снова");
      }
      const data = await response.json();

      setLogin("");
      setPassword("");

      if (data.role === "USER") {
        return setError("Нет доступа");
      }

      if (data) {
        saveTokenStorage(data.token);

        navigate("/admink");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={hundleSubmit} className="login">
        <h2 className="login__title">Вход</h2>
        <input
          className="login__input"
          type="text"
          name="login"
          placeholder="login"
          required
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          className="login__input"
          type="text"
          name="password"
          placeholder="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="login__btn"
          type="submit"
          disabled={!login || !password}
        >
          Sign In
        </button>
        {error && <p className="login__error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
