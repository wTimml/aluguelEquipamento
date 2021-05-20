import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './screens/login'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = 'App'>

        {/* Sidebar aqui fora do switch */}

              <Switch>
                  <Route exact path='/' component={Login} />



                  {/* Exemplo de route passando params */}
                  {/* <Route path='/signup' render={(props) => <SignUp {...props} handle_signup={this.handle_signup}/>}/>   */}
              </Switch>

       {/* Footer aqui  */}
  

      </div>   
    </BrowserRouter>
  )
}

export default App;
