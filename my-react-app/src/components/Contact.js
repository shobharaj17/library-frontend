import React from 'react'
import {

Heading,
ContactLink
    

} from "./ContactStyles";
function Contact() {
  return (
    <>
     < div className='about'></div>
    <h1 className='header'>Contact us</h1>
    
    <p className='write'>Write to Us:</p>
    <p className='write'>For any query regarding this website, please contact the Web Information Manager :</p><br/>
    <table >
<tr>
    <td>Name:</td>
    <td>Shobharaj H L</td>
    <ContactLink href="#">

Aim

</ContactLink>
</tr>
<tr>
    <td>Designation:</td>
    <td>Front-end Developer</td>

</tr>
<tr>
    <td>Email-id:</td>
    <td>shobharaj1a@gmail.com</td>
</tr>
<tr>
    <td>Phone No:</td>
    <td>123-456-789</td>
</tr>


    </table>
    <br/><br/><br/><br/>
    </>
  )
}

export default Contact