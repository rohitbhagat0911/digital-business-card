import PropTypes from 'prop-types'
import { FaEnvelope } from 'react-icons/fa'
const Button = ({Name}) => {
    return (
        <div >  
              
            <div className='rl-box ml-box'>    
            <FaEnvelope fill='black' size={14} style={{position: 'relative', top: '2px', right: '6px'}} />
             {Name} 
             </div>       

            
         </div>
    )
}

Button.propTypes = {
    Name: PropTypes.string.isRequired,
} 

export default Button
