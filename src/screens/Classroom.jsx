import React, { useState } from 'react';

const initialRooms = [
  { type: 'Principal Room', places: 0 },
  { type: 'Teachers Room', places: 0 },
  ...Array.from({ length: 6 }, (_, i) => ({
    type: `Classroom ${i + 1}`,
    places: 4,
    filled: [false, false, false, false],
  })),
  { type: 'Extra Room 1', places: 0 },
  { type: 'Extra Room 2', places: 0 },
];

const ClassRoom = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [isEditing, setIsEditing] = useState(false);

  const togglePlace = (roomIdx, placeIdx) => {
    setRooms(prev =>
      prev.map((room, idx) =>
        idx === roomIdx
          ? {
            ...room,
            filled: room.filled.map((f, i) =>
              i === placeIdx ? !f : f
            ),
          }
          : room
      )
    );
  };

  return (
    <div style={{ padding: '32px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ color: '#0c86a5ff' }}>School Rooms</h2>
        <button
          style={{
            color: '#0c86a5ff',
            background: '#e0e0e0',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Done' : 'Edit'}
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div style={{ background: '#e3f2fd', borderRadius: '12px', padding: '24px', gridColumn: 'span 2' }}>
          <h3 style={{ color: '#1976d2' }}>Principal Room</h3>
        </div>
        <div style={{ background: '#e3f2fd', borderRadius: '12px', padding: '24px', gridColumn: 'span 2' }}>
          <h3 style={{ color: '#1976d2' }}>Teachers Room</h3>
        </div>
{rooms.slice(2, 8).map((room, idx) => (
  <div key={room.type} style={{ background: '#fffde7', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
    <h4 style={{ color: '#0c86a5ff', marginBottom: '16px', justifyContent: 'center' }}>{room.type}</h4>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {room.filled.slice(0, 2).map((isFilled, placeIdx) => (
          <button
            key={placeIdx}
            onClick={() => {
              if (isEditing) togglePlace(idx + 2, placeIdx);
            }}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              background: isFilled ? '#43a047' : '#e53935',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: isEditing ? 'pointer' : 'not-allowed',
              opacity: isEditing ? 1 : 0.6,
            }}
            disabled={!isEditing}
            title={isFilled ? 'Filled' : 'Empty'}
          >
            {placeIdx + 1}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {room.filled.slice(2, 4).map((isFilled, placeIdx) => (
          <button
            key={placeIdx + 2}
            onClick={() => {
              if (isEditing) togglePlace(idx + 2, placeIdx + 2);
            }}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              background: isFilled ? '#43a047' : '#e53935',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: isEditing ? 'pointer' : 'not-allowed',
              opacity: isEditing ? 1 : 0.6,
            }}
            disabled={!isEditing}
            title={isFilled ? 'Filled' : 'Empty'}
          >
            {placeIdx + 3}
          </button>
        ))}
      </div>
    </div>
  </div>
))}
        <div style={{ background: '#e3f2fd', borderRadius: '12px', padding: '24px', gridColumn: 'span 2' }}>
          <h3 style={{ color: '#1976d2' }}>Laboratory</h3>
        </div>
        <div style={{ background: '#e3f2fd', borderRadius: '12px', padding: '24px', gridColumn: 'span 2' }}>
          <h3 style={{ color: '#1976d2' }}>Meeting Room</h3>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;