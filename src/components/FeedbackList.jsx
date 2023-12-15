import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import React from 'react'

function FeedbackList({feedback, handleDelete}){
    if(!feedback || feedback.length === 0){
        return(
            <p>No feedback Yet</p>
        )
    }
    return( 
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div key={item.id} initial={{opacity: 1}} animate={{opcity: 1}} exit={{opacity:  0}} >
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList