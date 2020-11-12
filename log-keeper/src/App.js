import React, { Fragment, useEffect } from 'react'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {

  useEffect(() => {
    M.AutoInit()
    // eslint-disable-next-line
  }, [])

  return (
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal/>
      </div>
      <AddBtn/>
      </Fragment>
  );
}

export default App;
