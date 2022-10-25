import styles from "./Coins.module.css"
import Link from "next/link"

const Coins = ({image, name, symbol, id, price, priceChange, low, high}) => {
  return (
    <Link href = "/coin/[id]" as = {`/coin/${id}`}>
      <a>
      <div className = {styles.coin_container}>
        <div className = {styles.coin_row}>
          <div className = {styles.coin}>
            <img src={image} alt="" className={styles.coin_image}/>
            <h1 className={styles.coin_h1}>{name}</h1>
            <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.coin_info}>
            <p className={styles.coin_price}>${price}</p>
            {priceChange < 0 ? (
              <p className={styles.coin_percent,styles.red}>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className={styles.coin_percent,styles.green}>
                {priceChange.toFixed(2)}%
              </p>
            )}
            <p className={styles.coin_low}>Low (24h): ${low}</p>
            <p className={styles.coin_high}>
              High (24h): ${high}
            </p>
          </div>
        </div>
    </div>
    </a>
    </Link>
  )
}

export default Coins