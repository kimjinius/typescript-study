import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import './TabConmponent.css';

const tabs = [
  { index: 0, name: 'Tab1', content: <Tab1 /> },
  { index: 1, name: 'Tab2', content: <Tab2 /> },
  { index: 2, name: 'Tab3', content: <Tab3 /> },
];

const TabConmponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <ul className='ul-tab'>
        {tabs.map((el, idx) => (
          <li
            className={`li-tab ${activeTab === idx ? 'active-tab' : ''}`}
            key={el.index}
            onClick={() => {
              setActiveTab(idx);
            }}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <section>{tabs[activeTab].content}</section>
    </main>
  );
};

export default TabConmponent;
