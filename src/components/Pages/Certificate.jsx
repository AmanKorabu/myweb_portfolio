import React from 'react'
import c1 from '../images/certificates/javascript.jpg'
import c2 from '../images/certificates/AmanKorabu.png'
function Certificate() {
  return (
    <section class="certificate-section">
  <h2>Certificates 🏆</h2>
  <div class="certificates-container">
    <div class="certificate-card">
      <img src={c1} alt="Certificate 1"/>
      
    </div>
    <div class="certificate-card">
      <img src={c2} alt="Certificate 1"/>
      
    </div>
   
    
   
    
  </div>
</section>

  )
}

export default Certificate
