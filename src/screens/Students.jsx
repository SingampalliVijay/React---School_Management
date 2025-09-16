import React, { useState } from 'react';

const initialStudents = [
  { rollno: 1, name: 'Amit Kumar', address: 'Delhi', classno: '5', attendance: 92 },
  { rollno: 2, name: 'Priya Singh', address: 'Mumbai', classno: '6', attendance: 88 },
  { rollno: 3, name: 'Rahul Sharma', address: 'Chennai', classno: '5', attendance: 95 },
];

const Students = () => {
  const [students, setStudents] = useState(initialStudents);
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    rollno: '',
    name: '',
    address: '',
    classno: '',
    attendance: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewStudent(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    setStudents(prev => [
      ...prev,
      {
        ...newStudent,
        rollno: Number(newStudent.rollno),
        attendance: Number(newStudent.attendance),
      },
    ]);
    setShowModal(false);
    setNewStudent({
      rollno: '',
      name: '',
      address: '',
      classno: '',
      attendance: '',
    });
  };

  return (
    <div style={{ padding: '32px' }}>
      <h2 style={{ color: '#0c86a5ff', marginBottom: '24px' }}>Students</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr style={{ background: '#e3f2fd' }}>
            <th style={{ padding: '12px', border: '1px solid #90caf9' }}>Roll No</th>
            <th style={{ padding: '12px', border: '1px solid #90caf9' }}>Name</th>
            <th style={{ padding: '12px', border: '1px solid #90caf9' }}>Address</th>
            <th style={{ padding: '12px', border: '1px solid #90caf9' }}>Class No</th>
            <th style={{ padding: '12px', border: '1px solid #90caf9' }}>Attendance (%)</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.rollno}>
              <td style={{ padding: '12px', border: '1px solid #bbdefb' }}>{student.rollno}</td>
              <td style={{ padding: '12px', border: '1px solid #bbdefb' }}>{student.name}</td>
              <td style={{ padding: '12px', border: '1px solid #bbdefb' }}>{student.address}</td>
              <td style={{ padding: '12px', border: '1px solid #bbdefb' }}>{student.classno}</td>
              <td style={{ padding: '12px', border: '1px solid #bbdefb' }}>{student.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'right' }}>
        <button
          style={{
            padding: '10px 24px',
            background: '#0c86a5ff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={() => setShowModal(true)}
        >
          Add Student
        </button>
      </div>
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '32px',
            borderRadius: '12px',
            minWidth: '320px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ color: '#0c86a5ff', marginBottom: '16px' }}>Add Student</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="number"
                name="rollno"
                placeholder="Roll No"
                value={newStudent.rollno}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #90caf9' }}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newStudent.name}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #90caf9' }}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newStudent.address}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #90caf9' }}
              />
              <input
                type="text"
                name="classno"
                placeholder="Class No"
                value={newStudent.classno}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #90caf9' }}
              />
              <input
                type="number"
                name="attendance"
                placeholder="Attendance (%)"
                value={newStudent.attendance}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #90caf9' }}
              />
            </div>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                style={{
                  padding: '8px 20px',
                  background: '#e0e0e0',
                  color: '#0c86a5ff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '8px 20px',
                  background: '#0c86a5ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={handleAddStudent}
                disabled={
                  !newStudent.rollno ||
                  !newStudent.name ||
                  !newStudent.address ||
                  !newStudent.classno ||
                  !newStudent.attendance
                }
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
