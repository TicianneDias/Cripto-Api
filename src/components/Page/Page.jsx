import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './page.css'
import Coin from '../Coin/Coin'

function Page() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    })
    .catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='coinPage'>
      <div className="coin-search">
        <h1 className="coin-text">Buscar criptomoeda:</h1>
        <form>
          <input type="text" placeholder='Buscar..' className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol} 
            marketcap={coin.market_cap} 
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h.toFixed(2)}
            volume={coin.total_volume}
            />
        )
      })}
    </div>
  )
}

export default Page