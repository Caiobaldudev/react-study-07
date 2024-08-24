import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.children}
    </button>
  );
};

// npm install prop-types

// PropTypes
// O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Button;

// defaultProps
// Podemos definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. Isso faz parte do React.

Button.deafultProps = {
  margin: "10px",
};
