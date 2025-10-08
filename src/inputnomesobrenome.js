import React, { useState } from 'react';

function InputNomeSobrenome() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <div>
      <label>
        Nome:
        <input type="text" value={nome} aria-describedby="idDescricao" onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
      </label>
<div id="idDescricao" aria-hidden="true">O nome deve possuir no máximo 50 caracteres</div>   	
 </div>
  );
}

export default InputNomeSobrenome;
