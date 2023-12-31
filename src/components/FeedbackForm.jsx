import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState } from 'react'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [BtnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if(text===''){
      setBtnDisabled(true)
      setMessage(null)
    } else if(text!=='' && text.trim().length <= 10){
      setMessage('Message must be atleast 10 chracters')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)

      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='Write a review' value ={text}/>
          <Button type="submit" isDisabled={BtnDisabled}>Send</Button>
        </div>
        
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
  