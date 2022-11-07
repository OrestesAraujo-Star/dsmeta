import react from "react"

import './styles.css';

function Cadastro() {
  return (
    <div className="dsmeta-logo-menu h1">

      <body>
        <h1>  Teste de Cadastro</h1>

        <form action="http://google.com/search" method="get" target="_blank" className="formlogin">

          <fieldset>
            <legend>Dados das Vendas</legend>
            <br></br>
            <br></br>

            <label htmlFor="vendedor">Nome_Vendedor</label>
            <input type="text"  id="vendedor" name="seller_name" autoFocus></input>
            <br></br>
            

            <label htmlFor="visitados">Qt_Visitados</label>
            <input type="text" id="visitados" name="visited" autoFocus></input>
            <br></br>

            <label htmlFor="vendas">Vendas_Realizadas</label>
            <input type="text" id="vendas" name="deals" autoFocus></input>
            <br></br>

            <label htmlFor="valor">Valor_Total_Vendas</label>
            <input type="text" id="valor" name="amount" autoFocus></input>
            <br></br>


            <label htmlFor="data">Data</label>
            <input type="text" id="data" name="date" autoFocus></input>
            <br></br>
            <br></br>

            <input type="submit" value="Gravar" className="btn"></input>
          </fieldset>

        </form>



        <form action="#" method="POST" target="_blank" className="formlogin">
          <fieldset>
            <legend>Login</legend>
            


            <label htmlFor="user">Digite seu usuário</label>
            <input type="text" id="user" name="user" ></input>
           
            <label htmlFor="pass">Digite a senha</label>
            <input type="password" id="pass" name="pass"></input>
            
            <input type="submit" value="Logar" className="btn"></input>

          </fieldset>








        </form>

      </body>
    </div>
  )




}

export default Cadastro;