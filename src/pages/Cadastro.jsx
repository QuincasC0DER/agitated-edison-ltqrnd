import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(email, password, nome, sobrenome, nascimento);
      navigate("/login");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Este e-mail já está em uso.");
      } else if (err.code === "auth/weak-password") {
        setError("A senha deve ter pelo menos 6 caracteres.");
      } else {
        setError("Erro ao cadastrar: " + err.message);
      }
    }
    setLoading(false);
  }

  return (
    <div style={styles.container}>
      <h2>Cadastro</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Sobrenome"
          required
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <br />
        <br />
        <input
          type="date"
          placeholder="Data de nascimento"
          required
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={loading}>
          Cadastrar
        </button>
      </form>
      <p>
        Já tem conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "50px auto",
    padding: "0 20px",
  },
};
