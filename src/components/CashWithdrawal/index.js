import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  moneyDeduction = value => {
    this.setState(prevState => ({
      initialAmount: prevState.initialAmount - value,
    }))
  }

  render() {
    const {initialAmount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="sarah-withdrawal-profile-bg-container">
        <div className="sarah-bank-account-profile-card">
          <div className="sarah-profile">
            <div className="profile-image">{initial}</div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-details-container">
            <p className="account-balance-title">Your Balance</p>
            <div className="balance-container">
              <p className="amount">{initialAmount}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-header">Withdraw</p>
          <p className="add-amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                eachDenomination={eachDenomination}
                key={eachDenomination.id}
                moneyDeduction={this.moneyDeduction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
