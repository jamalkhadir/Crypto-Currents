import Coins from './Coins'

export default function CoinList({filteredCoins}){
    return (
        <>
            {filteredCoins?.map(coin => {
                return (
                    <Coins
                        image = {coin.image}
                        name = {coin.name}
                        symbol = {coin.symbol}
                        id = {coin.id}
                        price = {coin.current_price}
                        priceChange = {coin.price_change_percentage_24h}
                        low = {coin.low_24h}
                        high = {coin.high_24h}
                        key = {coin.id}
                    />
                )
            })}
        </>
    )
}