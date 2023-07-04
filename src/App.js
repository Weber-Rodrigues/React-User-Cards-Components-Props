import "./App.css";
import Avatar from "./components/Avatar";
import UserCard from "./components/UserCard/index.js";
import ProfileWeber from "./assets/perfil-png.png";
import ProfileLola from "./assets/lola.jpg";
import ProfileLuzia from "./assets/mae.jpg";
import ProfilePai from "./assets/pai.jpg";

const usuarios = [
  {
    id: 1,
    nome: "Weber Filho",
    avatar: ProfileWeber,
    cargo: "Desenvolvedor de Software",
    seguindo: false,
    verificado: false,
  },
  {
    id: 2,
    nome: "Lohraine Mayer",
    avatar: ProfileLola,
    cargo: "Cirurgiã-Dentista",
    seguindo: true,
    verificado: true,
  },
  {
    id: 3,
    nome: "Luzia Tomicha",
    avatar: ProfileLuzia,
    cargo: "Analista Judiciária",
    seguindo: false,
    verificado: false,
  },
  {
    id: 4,
    nome: "Weber Rodrigues Pereira",
    avatar: ProfilePai,
    cargo: "Servidor Público",
    seguindo: true,
    verificado: true,
  },
];

function App() {
  return (
    <div className="container">
      {usuarios.map((usuario) => (
        <UserCard
          key={usuario.id}
          nome={usuario.nome}
          cargo={usuario.cargo}
          seguindo={usuario.seguindo}
          verificado={usuario.verificado}
        >
          <Avatar avatar={usuario.avatar} seguindo={usuario.seguindo} />
        </UserCard>
      ))}
    </div>
  );
}

export default App;
