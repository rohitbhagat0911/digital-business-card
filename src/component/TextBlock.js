
// import Tooltip from '@mui/material/Tooltip';

const TextBlock = ({text, title}) => {
    return (
        <div>
            <div className="p-style">
            {/* <span>About</span> */}
            {/* <Tooltip placement="right-start" sx={{ width: 500, height: 200, font}} title="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." arrow>
            
           <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
 
           </Tooltip> */}
          <span className="a-style" >{title}</span>

<div className="tooltip"> {text}
 
  <span className="tooltiptext">{text}
 </span>
</div>

            </div>
          
       
        </div>
    )
}

export default TextBlock
