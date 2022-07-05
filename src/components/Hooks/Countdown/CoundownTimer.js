import React from 'react';
import Clock from './Clock';
import { useCountdown } from './useCountdown';


const ExpiredNotice = () => {
  return (
    <>
    <div className="text-center text-success">
      <span>Available</span>
    </div>
    </>
    
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
    <div className="d-flex justify-content-evenly align-items-center pb-0">
        <Clock value={days} type={'d'} isDanger={days <= 3} />
        <p>:</p>
        <Clock value={hours} type={'h'} isDanger={false} />
        <p>:</p>
        <Clock value={minutes} type={'m'} isDanger={false} />
        <p>:</p>
        <Clock value={seconds} type={'s'} isDanger={false} />
    </div>
    </>
    
  );
};

const CountdownTimer = ({ lastDonate }) => {
    const [days, hours, minutes, seconds] = useCountdown(lastDonate);

    if (days + hours + minutes + seconds <= 0) {
      return <ExpiredNotice />;
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
}

export default CountdownTimer