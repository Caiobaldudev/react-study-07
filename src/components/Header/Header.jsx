import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header)

// React.memo
// Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependam de estados diferentes.