import './index.css'

const DenominationItem = props => {
  const {eachDenomination, moneyDeduction} = props
  const {value} = eachDenomination

  const currencyClicked = () => {
    moneyDeduction(value)
  }

  return (
    <li className="list-styling">
      <button type="button" className="value-button" onClick={currencyClicked}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
