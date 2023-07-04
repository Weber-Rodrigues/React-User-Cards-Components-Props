import "./style.css";
import IconVerify from "../../assets/icon-verificado.png";

const UserCard = (props) => {
  return (
    <div className="user-card">
      {props.verificado && (
        <img className="icon-verify" src={IconVerify} alt="verify" />
      )}
      {props.children}
      <strong>{props.nome}</strong>
      <p>{props.cargo}</p>

      {props.seguindo === true ? (
        <button className="btn-card conectado">Conectado</button>
      ) : (
        <button className="btn-card conectar">Conectar</button>
      )}
    </div>
  );
};

export default UserCard;
