import {useState} from 'react'
import Layout from './components/Layout'
import CoinList from './components/CoinList'
import SearchBar from './components/SearchBar'

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')
  const coinColl = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
    const searcher = eve => {
      eve.preventDefault()
      setSearch(eve.target.value.toLowerCase())
    }
  return (
    <Layout>
      <div className="coin_app">
      <SearchBar type = 'text' placeholder = 'Search...' 
      onChange = {searcher} />
      <CoinList filteredCoins={coinColl} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'
  )

  const filteredCoins = await response.json()
  return{
    props: {
      filteredCoins
    }
  }
}
