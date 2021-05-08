import React from 'react'
import Title from '../Components/Title';
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

export const ContactPage = () => {
  return (
    <div className="ContactPage">
      <Title title={'Contact'} span={'Contact'}/>
      <div className="contact-container">
        <div className="contact-sect">
          <ContactItem icon={phone} text1={'+63 920 632 8959'} title={'phone'}></ContactItem>
          <ContactItem icon={email} text1={'jrendelatorrejr@gmail.com'} title={'email'}></ContactItem>
          <ContactItem icon={location} text1={'Surigao del sur, Philippines'} title={'location'}></ContactItem>
        </div>
        <div className="map-sect">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22338.603843957826!2d126.30286170606121!3d8.208329846740085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fdb96ed9a28fed%3A0x8d256cb43302e1b9!2sBislig%2C%20Surigao%20del%20Sur!5e0!3m2!1sen!2sph!4v1620454557852!5m2!1sen!2sph" style={{border:0}} allowfullscreen="" loading="lazy" area-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>
    </div>
  )
}
