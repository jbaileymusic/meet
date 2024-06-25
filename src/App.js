// src/App.js

import { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import mockData from './mock-data';
import './App.css';

const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleNumberOfEventsChange = (number) => {
    setNumberOfEvents(number);
  };

 return (
   <div className="App">
    <CitySearch />
    <NumberOfEvents 
        numberOfEvents={numberOfEvents} 
        onNumberOfEventsChange={handleNumberOfEventsChange} 
      />
    <EventList events={mockData.slice(0, numberOfEvents)}/>
   </div>
 );
}

export default App;
