import React from 'react';
import "./Service.css";

import curtain from "../../assets/img/smart-curtain.jpg";



export default function Service() {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="service_box">
            <h1>Bizning xizmatlarimiz</h1>
            <p>HomeKit kompaniyamiz 2019-yilda tashkil topgan bo'lib ilk bor O'zbekistonda «HomeKit» nomi bilan ish boshlagan. Xizmatlarimiz turlari quyidagilardan iborat:</p>
            <div className="service_card_box">
              <div className="service_card">
                <div className="card_img">
                  <img src={curtain} alt="Mahkamov"/>
                </div>
                <div className="card_content">
                  <h1>HomeKit Aqlli Pardalari</h1>
                  <p>HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.</p>
                </div>
              </div>
              <div className='service-row'>
              <div className="service_card service_center_card">
                <div className="card_img">
                  <img src={curtain} alt="Mahkamov"/>
                </div>
                <div className="card_content">
                  <h1>HomeKit Aqlli Pardalari</h1>
                  <p>HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.</p>
                </div>
              </div>
              <div className="service_card service_center_card">
                <div className="card_img">
                  <img src={curtain} alt="Mahkamov"/>
                </div>
                <div className="card_content">
                  <h1>HomeKit Aqlli Pardalari</h1>
                  <p>HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.</p>
                </div>
              </div>
              </div>
              <div className="service_card">
                <div className="card_img">
                  <img src={curtain} alt="Mahkamov"/>
                </div>
                <div className="card_content">
                  <h1>HomeKit Aqlli Pardalari</h1>
                  <p>HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.</p>
                </div>
              </div>
              <div className="service_card">
                <div className="card_img">
                  <img src={curtain} alt="Mahkamov"/>
                </div>
                <div className="card_content">
                  <h1>HomeKit Aqlli Pardalari</h1>
                  <p>HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.</p>
                </div>
              </div>

            </div>
            <div className="service_banner_box">
              .ser
            </div>
          </div>

        </div>
        </div>
    </>
  )
}
