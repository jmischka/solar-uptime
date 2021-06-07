import React, { useEffect, useState } from 'react';
import UptimeButton from './components/UptimeButton';
import FormWrapper from './components/FormWrapper';
import useForm from './utils/useForm';
import tooltipReset from './utils/tooltipReset';
import SuccessCard from './components/SuccessCard';
import GlobalStyle from './components/styles/GlobalStyle';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [success, setSuccess] = useState(false);
  const [inputs, handleInputChange, handleRangeChange, handleCancelButton] = useForm({name: '', type: 'HTTP', url: '', importance: 'low', down: '20', alert: '5', resend: '0'});

  // SET RANGE TOOLTIPS AFTER SHOWFORM TRIGGER
  useEffect(() => {
    tooltipReset();
  }, [showForm]);

  // SHOWFORM TRIGGER
  const handleAddButton = (e) => {
    setShowForm(!showForm);
  }

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.name.length < 3 || inputs.url.length < 4) {
      alert('Please make sure all fields are properly filled out');
    } else {
      setSuccess(!success);
      setTimeout(() => {
        document.querySelector('.success-card').style.opacity = '0';
        setShowForm(false);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      }, 2500);
    }  
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        {(showForm)
        ? <FormWrapper handleAddButton={handleAddButton} inputs={inputs} handleInputChange={handleInputChange} handleRangeChange={handleRangeChange} handleCancelButton={handleCancelButton} handleSubmit={handleSubmit} />
        : <UptimeButton handleAddButton={handleAddButton} />
        }
        {(!success)
        ? null
        : <SuccessCard inputs={inputs} />
        }   
      </div>
    </React.Fragment>
  );
}

export default App;
