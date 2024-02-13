import React from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import TabConmponent from './components/tabs/TabConmponent';
import DateRangePicker from './components/DateRangePicker';
import BoardEditor from './components/BoardEditor';



function App() {
  return (
    <div>
      <ChartComponent/>
      <TabConmponent/>
      <DateRangePicker/>
      <BoardEditor/>
    </div>
  );
}

export default App;
