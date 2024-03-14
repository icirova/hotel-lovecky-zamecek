import "./Card.css"

export const Card = ({image, title, openDetail }) => {

  return <div className="card" onClick={openDetail}>
    <img className="card__image" src={`/components/Card/img/${image}`} />
    <div className="card__title">{title}</div>
  </div>
}
