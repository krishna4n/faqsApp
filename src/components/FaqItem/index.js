import './index.css'

const Faq = props => {
  const {faq, clickedButton} = props
  console.log(faq)
  const isClicked = false
  const onButtonClick = () => {
    clickedButton(faq.id, isClicked)
  }

  const iconImage = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const iconAlt = isClicked ? 'minus' : 'plus'

  return (
    <li className="each-item">
      <div className="item-header">
        <p className="item-question-text">{faq.questionText}</p>
        <button type="button" className="icon-button" onClick={onButtonClick}>
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

export default Faq
