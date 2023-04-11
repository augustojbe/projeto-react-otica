import React from "react";
import './style.css'

export default function Topo(){
    return(

        <header > 
            <div className="limitar-secao">
                <img className="img" src="../assests/logo.png" />
                <nav>
                    <a href="#produtos">PRODUTOS</a>  
                    <a href="#sobre">SOBRE</a> 
                    <a href="#contato">CONTATO</a> 
                </nav>
            </div>
             
         </header>
    )
}