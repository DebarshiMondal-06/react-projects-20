import Axios from 'axios';
import React, { useState, useEffect, useReducer } from 'react';
import Coin from './Coin';
import './style.css';

const reducer = (state, action) => {
  if (action.type === 'Add_Coins') {
    return { ...state, coins: action.payload, message: '' }
  };
  if (action.type === 'Initial_Load') {
    return { ...state, message: 'Loading......', result: true }
  };
  if (action.type === 'No_Data_Found') {
    return { ...state, message: 'No Data Found!!!', result: false };
  };
  if (action.type === 'Load_More') {
    return { ...state, loadMore: action.payload }
  };
  if (action.type === 'Hide_Input') {
    return { ...state, hideInput: action.payload }
  }
}
const initialState = {
  coins: [],
  loadMore: 5,
  result: false,
  message: '',
  hideInput: false
};



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState('');



  useEffect(() => {
    dispatch({ type: 'Initial_Load' });
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`;
    Axios.get(url)
      .then(res => {
        dispatch({ type: 'Add_Coins', payload: res.data });
      })
      .catch(err => dispatch({ type: 'No_Data_Found' }));
  }, []);

  useEffect(() => {
    if (search) {
      dispatch({ type: 'Hide_Input', payload: true });
    } else {
      dispatch({ type: 'Hide_Input', payload: false });
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  let filteredCoins = [];
  filteredCoins = state.coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  });

  
  const loadEvent = (e) => {
    e.preventDefault();
    if (state.loadMore < (state.coins.length)) {
      dispatch({ type: 'Load_More', payload: state.loadMore + 5 });
    }
  }



  return <section className='coin-app'>
    <div className='coin-search'>
      <h1 className="coin-text">Search a Currency</h1>
      <form>
        <input
          type="text"
          placeholder='Search'
          onChange={handleChange}
          className="form-control coin-input"
        />
      </form>
      <p className='h4'> {state.result ? state.message : state.message} </p>
      {
        filteredCoins.map(coin => {
          return <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        }).slice(0, state.loadMore)
      }
      <div className='p-4 btn-load text-left'>
        {
          (state.hideInput) ? ''
            : state.coins.length > 0 ? (
              <button onClick={loadEvent} className='btn btn-white text-success'>
                {(state.loadMore < (state.coins.length)) ? 'Load 5 more' : 'End!!!'}
              </button>
            ) : ''
        }
      </div>
    </div>
  </section>
}

export default App;









