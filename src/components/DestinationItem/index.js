import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {imgUrl, name} = eachDestination

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
