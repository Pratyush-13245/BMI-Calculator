import React,  { useState } from 'react'
import './App.css'

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');
  const calculateBMI = (e)=>
    {
      e.preventDefault()
      if (height && weight) 
        {
        const bmiValue = (weight / (height * height)).toFixed(2);
        setBMI(bmiValue);
        if (bmiValue < 18.5) {
          setMessage('Underweight');
        } else if (bmiValue < 24.9) {
          setMessage('Normal weight');
        } else if (bmiValue < 29.9) {
          setMessage('Overweight');
        } else {
          setMessage('Obese');
        }
      } 
      else {
        setMessage('Please enter valid height and weight');
      }
    };

    const resetForm = () => {
      setHeight('');
      setWeight('');
      setBMI(null);
      setMessage('');
    };

  return (
    <>  
      <div className='mainclass'>
        <h1 className='headingclass'>BMI Calculator </h1>
        <form onSubmit={calculateBMI}>
            <div className='childclass1'>
              <label className='heightLabel' > Height (in Meters)</label>
              <input type="number" value={height}  step={0.01} onChange={(e) => setHeight(e.target.value)} className='heightclass' placeholder="e.g. 1.75 cm" required />
             </div>

             <div className='childclass2'>
              <label className='WeightLabel' > Weight (in Meters)</label>
              <input type="number" value={weight}  step={0.1} onChange={(e) => setWeight(e.target.value)} className='Weightclass' placeholder="e.g. 15 kg" required />
             </div>

            <button className='buttonclass' type='Submiy'>Submit To Calculate</button>

        </form>
        {bmi && (
        <div>
          <p className="text-lg font-semibold">Your BMI: {bmi}</p>
          <p className="text-md mt-2">{message}</p>
          <button
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      )}
      </div>     

    </>
  )
}

export default BmiCalculator
