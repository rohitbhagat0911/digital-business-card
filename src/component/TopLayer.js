import BioLink from './BioLink';
import Email from './Email';
import Laura from './image/Laura.png';
import Linkedin from './Linkedin';
import TextBlock from './TextBlock'

const TopLayer = () => {

   const about = 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
   const intrest_desc = 'Food expert. Music scolar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Tarvel geek. Pop cultural ninja. Coffe fantic.'
   return (
       <div>
          <img src={Laura} className='img-style' alt='profilePicture' />
             <div className='tp-lr-brdr'>
                 <h3>Laura Smith</h3>
                 <p className='occupation-style'>Frontend Devloper</p>
                 <p className='sl-style'>laurasmith.website</p>
                 <div style={{display: 'flex', paddingLeft:'1.4em',columnGap: '0.9em'}}> 
                  <Email Name='Email' />
                  <Linkedin Name='LinkedIn'/>
                </div>
                <TextBlock title='About' text = {about} />
                <TextBlock className='intrest-style' title='Interests' text = {intrest_desc} />
             </div>
             <BioLink  />
         
             
           
       </div>
    )
}

export default TopLayer
