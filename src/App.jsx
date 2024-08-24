import React from "react";
import Button from "./components/Button/Button";
import Contato from "./components/Contato/Contato";
const Contato = React.lazy(() => import("./components/Contato/Contato"));

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      {/* PropTypes */}
      <Button width={300}>Clique Aqui</Button>
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
