import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Users from './Users'
import './App.css'

function App() {

//React Router
  
    
       return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/users" element={<Users />} />
        {/*
        <Route path="/todos/:id" element={<UserCard />} />
        <Route path="/users/new" element={<CreateUser />} />
        <Route path="/todos/:id/edit" element={<EditUser />} />

        */}
      </Routes>
    </Router>

  
  )
}

export default App
