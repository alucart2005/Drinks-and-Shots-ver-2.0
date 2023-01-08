const Drinks = ({ nameData }) => {

  return (
    <div className="card">
      <img src={nameData.strDrinkThumb} alt="" />
      <h2>{nameData.strDrink}</h2>
      <h2>{nameData.strCategory}</h2>
      <p>{nameData.strInstructions}</p>
    </div>
  )
}

export default Drinks
