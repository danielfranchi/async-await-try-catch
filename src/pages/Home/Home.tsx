import React from 'react';
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'

import { Provider } from 'react-redux'
import { store } from '../../store/store'
import toast, { Toaster } from 'react-hot-toast'

import '../Home/Home.scss'


const Home = () => {

  interface Bebidas{
    description: string,
    id: number,
    image: string,
    price: string
    title: string
  }

  const [bebidas, setBebidas] = React.useState<Bebidas[]>([])
  const token = localStorage.getItem("token")

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const getHome = async () => {
    try {
      const request = await axios.get('http://localhost:4000/beers', {headers: headers})
      setBebidas(request.data)
    } catch(erro) {
      if(erro.response.status === 404) {
       toast.error('Erro 404')
      }
    }
  }

  React.useEffect(() => {
    getHome()
  }, [])

  return (
    <div className='home'>
      <Helmet>
        <title>Produtos</title>
      </Helmet>

      <Toaster />

      <Provider store={store}>
          <Header />
      </Provider>
      
      <div className='beers-list'>
        {bebidas !== null && bebidas.map((item: Bebidas) => (
          <div key={item.id} className='beer'>
            <img src={item.image} alt={item.title} />
            <h3>{item.description}</h3>
            <span>{item.title}</span>
            <small>{item.price}</small><br/>
            <Link to={`carrinho/${item.id}`}>Comprar</Link>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default Home;
