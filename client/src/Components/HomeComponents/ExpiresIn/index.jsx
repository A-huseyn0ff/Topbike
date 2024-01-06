import React, { useEffect, useState } from 'react';
import './expiresin.scss';

const ExpiresIn = () => {
  const [expireData, setExpireData] = useState([]);

  useEffect(() => {
    const fetchExpiresData = async () => {
      try {
        const res = await fetch("http://localhost:3169/navbar");
        const jsonExpireData = await res.json();
        setExpireData(jsonExpireData);
      } catch (error) {
        console.error("Error fetching expire data:", error);
      }
    };

    fetchExpiresData();
  }, []);

  const calculateTimeLeft = () => {
    const expirationDate = new Date("January 12, 2024 00:00:00").getTime();
    const difference = expirationDate - new Date().getTime();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
  
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expireData[0]?.expiresin[0]?.expirationDate));

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(expireData[0]?.expiresin[0]?.expirationDate));
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [timeLeft, expireData]);

  return (
    <>
      {expireData.map((item, index) => (
        <section className='expiresin' key={index}>
          {item.expiresin.map((expire) => (
            <>
              <img src={expire.image} alt="" />
              <div className='expire_txt'>
              <p style={{color:'#ff0000',fontSize:'60px',marginBottom:'20px'}}>{expire.title}</p>
                <div className='expire'>
                  <div className='time'>
                    <span style={{ fontSize: '36px', color: '#ff0000' }}>{timeLeft.days}</span>
                    Days
                  </div>
                  <div className='time'>
                    <span style={{ fontSize: '36px', color: '#ff0000' }}>{timeLeft.hours}</span>
                    Hours
                  </div>
                  <div className='time'>
                    <span style={{ fontSize: '36px', color: '#ff0000' }}>{timeLeft.minutes}</span>
                    Mins
                  </div>
                  <div className='time'>
                    <span style={{ fontSize: '36px', color: '#ff0000' }}>{timeLeft.seconds}</span>
                    Sec
                  </div>
                </div>
                <p style={{fontSize:'28px',paddingTop:'30px'}}>{expire.subtitle}</p>
<p style={{color:'#ff0000',fontSize:'20px',paddingTop:'30px'}}>{expire.promocode}</p>
     <a href="">{expire.btn}</a>
              </div>
              </>
          ))}
        </section>
      ))}
    </>
  );
};

export default ExpiresIn;
