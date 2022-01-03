import React, { useState } from "react"
import PageTitle from "../components/PageTitle"


const categorias = [
  'Limpeza',
  'Escritorio',
  'Informatica',
  'Higiene Pessoal'
]


const cadastroProduto = () => {
  const [form, setForm] = useState({    
    Descricao:'',
    Categoria:'',   
})

const [ sucess, setSuccess ] = useState(false)
const [ retorno, setRetorno ] = useState({})

const save = async() =>{
      
    try {
        const response = await fetch ('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
      const data = await response.json()
        setSuccess(true)
        setRetorno(data)
           
    } catch (error) {
           console.log(error)
    }
      
}

const onChange = evt => {

        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
}

  
  return (
    <div className="container m-4">
      <div className="mb-10 font-bold text-3xl text-gray-700">
        <h2>Cadastro de Produto</h2>
      </div>
      <form className="w-5/6 ">
    
        <label className="block tracking-wide text-gray-700 text-2xl font-bold mb-2" htmlFor="Produto">
          Descrição
        </label>
        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Descricao"
              type="text"
              name="Descricao"
              placeholder="Nome do Produto"
              value={form.Descricao}
              onChange={onChange}
        />

        <select name='Categoria' value={form.Categoria} onChange={onChange} className="text-gray-700 w-60 h-10 mt-5">
          <option>Escolha uma categoria</option>
          {categorias.map(Categoria => <option value={Categoria} key={Categoria}>{Categoria}</option>)}

        </select>
        <div className="mt-10">
        <button onClick={save} className='mt-4 bg-blue-400 px-12 py-4 font-bold rounded-lg hover: shadow'>Salvar</button>
        </div>
        
    
      </form>
    </div>
  )
}

export default cadastroProduto
