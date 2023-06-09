import React from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';


function App() {
  return (
      <div className='App'>
        <DocTitleOne />
        <DocTitleTwo/>
      </div>
    );
}

export default App;
