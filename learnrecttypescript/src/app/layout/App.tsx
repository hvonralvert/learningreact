import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/NavBar';
import './styles.css';

function App() {
  const [formOpen,setFormOpen]= useState(true);

  return (
    <div className="App">
      <Navbar setFormOpen={setFormOpen}></Navbar>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}></EventDashboard>
      </Container>
    </div>
  );
}

export default App;
