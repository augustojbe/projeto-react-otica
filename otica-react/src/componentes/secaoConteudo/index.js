import React from "react";
import SecaoCapa from "../secaoCapa";
import SecaoSobre from '../secaoSobre';
import SecaoProdutos from '../secaoProdutos';
import SecaoContato from '../secaoContato';


export default function Conteudo(){
    return(
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />

        </main>
    )
}