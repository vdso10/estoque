//import '../../styles/logo.module.css'
import React from 'react'
import Link from 'next/link'
import { FiArchive } from 'react-icons/fi';

const Logo = () =>{
    return(
        
            <aside className="logo">
                <Link href="/">
                    <a>
                        <FiArchive size={50} color='#FFF'/>
                    </a>
                </Link>
            </aside>        
        
    )
}

export default Logo 