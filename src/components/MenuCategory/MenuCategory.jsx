import "./MenuCategory.css"
import { MenuItem } from "../MenuItem/MenuItem"

export const MenuCategory = ({categoryTitle, categoryList}) => {
  return  <>
  <h3>{categoryTitle}:</h3>
  {categoryList.map(item => {
    return <MenuItem key={item.name} name={item.name} price={item.price}/>
    })} 

 </>
}
