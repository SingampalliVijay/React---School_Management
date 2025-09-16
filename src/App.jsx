import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './screens/Dashboard';
import Students from './screens/Students';
import Teachers from './screens/Teachers';
import Parents from './screens/Parents';
import Earnings from './screens/Earnings';
import Timetable from './screens/Timetable';
import ClassRoom from './screens/ClassRoom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/classroom" element={<ClassRoom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App