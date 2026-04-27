import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  if (!userData) {
    return <p>Carregando dados do usuário...</p>;
  }

  return (
    <div style={styles.container}>
      <h1>
        Bem-vindo(a), {userData.nome} {userData.sobrenome}!
      </h1>
      <p>Data de nascimento: {userData.dataNascimento}</p>
      <p>E-mail: {userData.email}</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "50px auto",
    textAlign: "center",
    padding: "0 20px",
  },
};
