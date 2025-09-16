import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Calender from '../components/Calender';
const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [showRadios, setShowRadios] = useState(false);
  const handleApplyFilter = () => {
    if (selectedOption === 'Classroom') {
      navigate('/classroom');
    } else if (selectedOption === 'TimeTable') {
      navigate('/timetable');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#f5f5f5', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <div style={{ flex: 1, margin: '0 24px' }}>
          <input type="text" placeholder="Search..." style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span title="Notifications" style={{ fontSize: '20px', cursor: 'pointer' }}>&#128276;</span>
          <span title="Messages" style={{ fontSize: '20px', cursor: 'pointer' }}>&#128172;</span>
        </div>
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', padding: '16px' }}>
            <div onClick={() => navigate('/students')} style={{ margin: '16px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#d9dee4ff', color: '#fff', cursor: 'pointer', width: 'fit-content', flexDirection: 'row', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ color: '#0c86a5ff' }}>Students</h2>
                
            </div>
            <div onClick={() => navigate('/teachers')} style={{ margin: '16px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#d9dee4ff', color: '#fff', cursor: 'pointer', width: 'fit-content', flexDirection: 'row', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ color: '#0c86a5ff' }}>Teachers</h2>
              <span style={{ fontSize: '24px', color: '#0c86a5ff' }}>&#x21D2;</span>
            </div>
            <div onClick={() => navigate('/parents')} style={{ margin: '16px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#d9dee4ff', color: '#fff', cursor: 'pointer', width: 'fit-content', flexDirection: 'row', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ color: '#0c86a5ff' }}>Parents</h2>
              <span style={{ fontSize: '24px', color: '#0c86a5ff' }}>&#x21D2;</span>
            </div>
            <div onClick={() => navigate('/earnings')} style={{ margin: '16px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#d9dee4ff', color: '#fff', cursor: 'pointer', width: 'fit-content', flexDirection: 'row', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ color: '#0c86a5ff' }}>Earnings</h2>
              <span style={{ fontSize: '24px', color: '#0c86a5ff' }}>&#x21D2;</span>
            </div>
          </div>
          <div>
            <div>
              <h3 style={{ marginLeft: '24px', color: '#0c86a5ff' }}>Recent Activities</h3>
              <div style={{ margin: '16px', padding: '24px', borderRadius: '16px', background: '#e3f2fd', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', width: '320px', maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: '#1976d2', marginBottom: '8px' }}>Students</h3>
                <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Total Students: 500</p>
                <div style={{ width: '100%', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ width: '70px', color: '#1976d2', fontWeight: 'bold' }}>Male</span>
                    <div style={{ flex: 1, background: '#bbdefb', borderRadius: '8px', height: '18px', marginLeft: '8px', position: 'relative' }}>
                      <div style={{ width: '60%', background: '#1976d2', height: '100%', borderRadius: '8px' }}></div>
                      <span style={{ position: 'absolute', right: '8px', top: '2px', color: '#1976d2', fontWeight: 'bold', fontSize: '12px' }}>60%</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '70px', color: '#e91e63', fontWeight: 'bold' }}>Female</span>
                    <div style={{ flex: 1, background: '#f8bbd0', borderRadius: '8px', height: '18px', marginLeft: '8px', position: 'relative' }}>
                      <div style={{ width: '40%', background: '#e91e63', height: '100%', borderRadius: '8px' }}></div>
                      <span style={{ position: 'absolute', right: '8px', top: '2px', color: '#e91e63', fontWeight: 'bold', fontSize: '12px' }}>40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginLeft: '24px', marginTop: '16px' }}>
             <div>
    <input type="checkbox" id="showRadios" checked={showRadios} onChange={e => setShowRadios(e.target.checked)} />
    <label htmlFor="showRadios" style={{ marginLeft: '8px', color: '#0c86a5ff' }}>Classroom Details</label>
  </div>
          {showRadios && (
            <div>
              <input type="radio" id="option1" name="options" value="Classroom" checked={selectedOption === 'Classroom'} onChange={() => setSelectedOption('Classroom')} />
              <label htmlFor="option1" style={{ marginRight: '16px', color: '#0c86a5ff' }}>Classroom</label>
              <input type="radio" id="option2" name="options" value="TimeTable" checked={selectedOption === 'TimeTable'} onChange={() => setSelectedOption('TimeTable')} />
              <label htmlFor="option2" style={{ color: '#0c86a5ff' }}>TimeTable</label>
              <button style={{ marginLeft: '24px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#0c86a5ff', color: '#fff', cursor: 'pointer' }} onClick={handleApplyFilter}>Apply</button>
            </div>
          )}
            </div>
          </div>
        </div>
        <aside style={{ width: '260px', background: '#f0f4f8', boxShadow: '0 0 8px rgba(0,0,0,0.05)', padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 72px)' }}>
          <h3 style={{ color: '#0c86a5ff' }}>Event Calendar</h3>
          <Calender />
        </aside>
      </div>
    </div>
  )
}

export default Dashboard