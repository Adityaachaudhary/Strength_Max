import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Generator from './components/Generator';
import Workout from './components/Workout';
import { generateWorkout } from './utils/functions';
//import BmiCalculator from './components/BmiCalculator'; // Correct import path for BmiCalculator

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);

    window.location.href = '#workout';
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white">
        {/* Header Section */}
        <Header />

        {/* Main content for Hero Section and Workout Generator */}
        <main className="flex flex-col text-sm sm:text-base">
          <Routes>
            {/* Route for Home Page (Hero Section + Generator) */}
            <Route path="/" element={
              <>
                <HeroSection />
                <Generator
                  poison={poison}
                  setPoison={setPoison}
                  muscles={muscles}
                  setMuscles={setMuscles}
                  goal={goal}
                  setGoal={setGoal}
                  updateWorkout={updateWorkout}
                />
                {workout && <Workout workout={workout} />}
              </>
            } />
            
            {/* Route for BMI Calculator */}
            {/* <Route path="/bmi-calculator" element={<BmiCalculator />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
