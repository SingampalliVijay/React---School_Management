import { useState } from 'react';
import Calendar from 'react-calendar';
const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ background: 'skyblue', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', minHeight: '200px', width: '80%' }}>
      <Calendar
        onChange={onChange}
        value={value}
        activeStartDate={new Date()}
      />
    </div>
  );
}

export default Calender;