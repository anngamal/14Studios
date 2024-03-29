import React, { useState } from 'react';
import axios from 'axios';
import contactusImg from "./Images/banner-contact.jpg"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    phone_number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit_form', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company_name: '',
        phone_number: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='mainContactusDiv'> 
      <div>
        <h2>.</h2>
      </div>

      <div className='contactusFirstDiv'>
        <img className='contactusImg' src={contactusImg} />
        <h1 className='contactusH1'>Contact Us</h1>
      </div>


      <div className="contactusDiv">
  <div className='contactusBeforeForm'>
    <h2 className='contactusBeforeFormH2'>Have any queries?</h2>
    <h1 className='contactusBeforeFormH1'>We're here to help</h1>
    <p className='contactusBeforeFormP'> ----------studio14@gmail.com---------</p>
  </div>
  <div className='contactusFormDiv'>
    <h2 className='formH2'>Don't be a stranger!</h2>
  <form className='contactusForm' onSubmit={handleSubmit}>
    <div className="input-group">
      <input className='contactusInputName' type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input className='contactusInputEmail' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
    </div>
    <input className='contactusInput' type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required /><br />
    
    <input className='contactusInputMessage' type="text" name="company_name" placeholder="Message" value={formData.company_name} onChange={handleChange} required /><br />
    <button className='contactusButton' type="submit">Submit</button>
  </form>
</div>

</div>

    </div>

  );
}
