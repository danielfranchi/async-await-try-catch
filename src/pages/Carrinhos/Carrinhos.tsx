import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../../store/store'


import Carrinho from '../../Components/Carrinho/Carinho'



const Carrinhos = () => {

  
  return (
     <Provider store={store}>
          <Carrinho />
        </Provider>
  );
}

export default Carrinhos;
