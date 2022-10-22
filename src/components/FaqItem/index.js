import './index.css'
import {Component} from 'react'

class Faq extends Component {
  state = {isClicked: false}

  onButtonClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {faq} = this.props
    const {isClicked} = this.state

    const iconImage = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconAlt = isClicked ? 'minus' : 'plus'

    return (
      <li className="each-item">
        <div className="item-header">
          <h1 className="item-question-text">{faq.questionText}</h1>
          <button
            type="button"
            className="icon-button"
            onClick={this.onButtonClick}
          >
            <img src={iconImage} alt={iconAlt} className="icon" />
          </button>
        </div>
        {isClicked && (
          <div className="bottom-item">
            <hr className="bar" />
            <p className="answer-text">{faq.answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default Faq
