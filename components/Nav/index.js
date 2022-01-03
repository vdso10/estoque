
import React from 'react'
import Link from 'next/link'
import { FiBarChart2, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';


const Nav = () =>{
    return(
        <>

        <aside className="menu-area">
            <nav className="menu">
                <Link href="/">                    
                    <a>Dashboard</a> 
                </Link>
                <Link href="/novoProduto">            
                    <a>Cadastrar Produtos</a>
                </Link>
                <Link href="/entradaProduto">            
                    <a>Entrada Produtos</a>
                </Link>
                <Link href="/saidaProduto">            
                    <a>Saida Produtos</a>
                </Link>
                <Link href="/estoque">            
                    <a>Estoque</a>
                </Link>
            </nav>
        </aside>
        </>

    )
}

export default Nav
