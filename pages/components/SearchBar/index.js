import styles from './Search.module.css'

const SearchBar = ({...info}) => {
  return (
    <div className = {styles.coinsearch}>
        <input className = {styles.coininput} {...info}/>
    </div>
  )
}

export default SearchBar