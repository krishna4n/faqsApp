import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-containers">
            {faqsList.map(eachItem => (
              <FaqItem faq={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
