import { FaLinkedin } from 'react-icons/fa'
import PropTypes from 'prop-types'

const linkedin = ({Name}) => {
    return (
        <div>
              <div className='rl-box ln-box'>
                  
               <FaLinkedin style={{position: 'relative', top: '1px', right: '2px'}}/> {Name} 
              </div> 
        </div>
    )
}

linkedin.propTypes = {
    Name: PropTypes.string.isRequired,
} 

export default linkedin
