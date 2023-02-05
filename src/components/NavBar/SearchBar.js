import "./SearchBar.scss"
import { IconSearch } from "../Icons/IconSearch"

const SearchBar = () => {
    const search = document.getElementById('search')
    console.log(search)
  return (
    <>
      <IconSearch id="search"/>
    </>
  )
}

export default SearchBar