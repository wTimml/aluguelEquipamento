import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import TelaTestes from './telas/tela de testes.js'
import Login from './telas/login'
import {Cores} from './constantes/cores'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = 'App' style={{background: Cores.primariaEscura, color:Cores.secundaria}}>
        {/* Sidebar aqui fora do switch */}
          
              <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/telatestes' component={TelaTestes} />



                  {/* Exemplo de route passando params */}
                  {/* <Route path='/signup' render={(props) => <SignUp {...props} handle_signup={this.handle_signup}/>}/>   */}
              </Switch>

       {/* Footer aqui  */}
  

      </div>   
    </BrowserRouter>
  )
}

export default App;
