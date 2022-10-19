import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  clickedButton = (id, isClicked) => {
    console.log(id, isClicked)
  }

  render() {
    const {faqsList} = this.props

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-containers">
            {faqsList.map(eachItem => (
              <FaqItem
                faq={eachItem}
                key={eachItem.id}
                clickedButton={this.clickedButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
