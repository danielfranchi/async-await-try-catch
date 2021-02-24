import { Route, Switch} from 'react-router-dom'
import Cadastro from './pages/Cadastro/Cadastro'
import Home from './pages/Home/Home'
import Carrinho from './pages/Carrinhos/Carrinhos'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Cadastro} />
      <Route path="/home" exact component={Home} />
      <Route path="/carrinho/:id" exact component={Carrinho} />
    </Switch>
  )
}

export default Routes