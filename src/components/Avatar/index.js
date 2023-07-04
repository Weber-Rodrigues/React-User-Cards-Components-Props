import "./style.css";

const Avatar = (props) => {
  return props.seguindo === true ? (
    <img
      className="avatar-img img-conectado"
      src={props.avatar}
      alt="imagem-profile"
    />
  ) : (
    <img
      className="avatar-img img-conectar"
      src={props.avatar}
      alt="imagem-profile"
    />
  );
};

export default Avatar;
