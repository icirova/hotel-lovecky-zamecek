import "./MenuItem.css"

export const MenuItem = ({name, price}) => {
  return  <div className="menu__item">
  <p className="menu__name">{name}</p>
  <p className="menu__price">{price} Kč</p>
</div>
}
