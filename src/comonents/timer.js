import React, {useEffect,useRef,useState} from 'react';
import './timer.css';

const  Timer=()=> {
  const [timerDays, setTimmerDays] = useState('000');
  const [timerHours, setTimmerHours] = useState('00');
  const [timerMinutes, setTimmerMinutes] = useState('00');
  const [timerSeconds, setTimmerSeconds] = useState('00');

  let interval =useRef();

  const startTimer = () => {
    const countdownDate = new Date('October 2 2021 000:00:00').getTime();

    interval = setInterval(()=> {
       const now = new Date().getTime();
       const distance = countdownDate - now;

       const days = Math.floor(distance/ (1000*60*60*24));
       const hours = Math.floor((distance %(1000*60*60*24)/(1000*60*60)));
       const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
       const seconds = Math.floor((distance %(1000*60)) / 1000);

       if(distance < 0){
            //stop our timer
            clearInterval(interval.current);
       }else{
         //update our timer
         setTimmerDays(days);
         setTimmerHours(hours);
         setTimmerMinutes(minutes);
         setTimmerSeconds(seconds);
       }


    },1000 );
  };
  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
   <section className="timer-container">
     <section className="timer">
       <div>
         <span className="fas fa-user-clock timer-icon"></span>
         <h2>Countdown Timer</h2>
         <p>Countdown to a really special date.Debosmita's Birthday!</p>
       </div>
       <div className="itsjexa">
         <section>
           <p>{timerDays}</p>
           <p><small>Days</small></p>
         </section>
         <span>:</span>
         <section>
           <p>{timerHours}</p>
           <p><small>Hours</small></p>
         </section>
         <span>:</span>
         <section>
           <p>{timerMinutes}</p>
           <p><small>Minutes</small></p>
         </section>
         <span>:</span>
         <section>
           <p>{timerSeconds}</p>
           <p><small>Seconds</small></p>
         </section>
          </div>

     </section>
   </section>
  );
}

export default Timer;