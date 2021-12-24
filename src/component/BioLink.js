import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

import Tooltip from '@mui/material/Tooltip'

const BioLink = () => {
    return (
        <div>
            <div className="tp-lr-lw-brdr">

                <div style={{display: 'flex', columnGap: '2.5em'}}>
              <Tooltip title='Twitter' arrow>
                <div className='icon-bg'>
                   
                <FaTwitter />  </div>
            </Tooltip>

            <Tooltip title='Instagram' arrow>
                <div className='icon-bg'>
                   
                <FaInstagram />  </div>
            </Tooltip>
                
            <Tooltip title='Github' arrow>
                <div className='icon-bg'>
                   
                <FaGithub />  </div>
            </Tooltip>
                  
            </div>


              
                </div>

               
           
        </div>
    )
}

export default BioLink
