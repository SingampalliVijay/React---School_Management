import React from 'react'

const classes = [
  { name: 'Class 1' },
  { name: 'Class 2' },
  { name: 'Class 3' },
  { name: 'Class 4' },
  { name: 'Class 5' },
  { name: 'Class 6' },
];

const periods = [
  { name: 'Telugu', time: '09:00 - 10:00', teacher: 'Mr. Smith' },
  { name: 'Mathematics', time: '10:00 - 11:00', teacher: 'Ms. Johnson' },
  { name: 'Hindi', time: '11:00 - 12:00', teacher: 'Mr. Lee' },
  { name: 'Social Studies', time: '12:00 - 01:00', teacher: 'Ms. Davis' },
  { name: 'English', time: '01:00 - 02:00', teacher: 'Mr. Brown' },
  { name: 'Physical Science', time: '02:00 - 03:00', teacher: 'Ms. Wilson' },
];

const ClassRoom = () => {
  return (
    <div style={{ padding: '32px' }}>
      <h2 style={{ color: '#0c86a5ff', marginBottom: '24px' }}>Classrooms & Periods</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        {classes.map((cls) => (
          <div key={cls.name} style={{ background: '#e3f2fd', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
            <h3 style={{ color: '#1976d2', marginBottom: '16px' }}>{cls.name}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px', background: '#bbdefb', color: '#1976d2' }}>Period Name</th>
                  <th style={{ textAlign: 'left', padding: '8px', background: '#bbdefb', color: '#1976d2' }}>Timings</th>
                  <th style={{ textAlign: 'left', padding: '8px', background: '#bbdefb', color: '#1976d2' }}>Teacher</th>
                </tr>
              </thead>
              <tbody>
                {periods.map(period => (
                  <tr key={period.name}>
                    <td style={{ padding: '8px', borderBottom: '1px solid #90caf9' }}>{period.name}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #90caf9' }}>{period.time}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #90caf9' ,textAlign: period?.teacher ? 'left' : 'center'}}>{period?.teacher ? period.teacher : '--'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassRoom