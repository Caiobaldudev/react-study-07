import React from "react";
import Header from "./components/Header/Header";
// import Button from "./components/Button/Button";
// import Contato from "./components/Contato/Contato";
const Contato = React.lazy(() => import("./components/Contato/Contato"));

function reducer(state, action){
  switch(action){
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }
  // if(action === 'aumentar'){
  //   return state + 1
  // }
  // if(action === 'diminuir'){
  //   return state - 1
  // }
  // return new Error("Error action não existe")
}

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0)
  const [state, dispatch] = React.useReducer(reducer, 0)


  return (
    <div>
      {/* Memo  */}
      {/* <Header/>
      <button onClick={() => setContar(contar + 1)}>{contar}</button> */}
      {/* --- */}

      {/* useReducer  */}
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <p>{state}</p>
      {/* --- */}

      {/* PropTypes */}
      {/* <Button width={300}>Clique Aqui</Button> */}
      {/* --- */}

      {/* Lazy & Suspense  */}
      {/* Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias. */}
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
      {/* --- */}
    </div>
  );
};

export default App;
