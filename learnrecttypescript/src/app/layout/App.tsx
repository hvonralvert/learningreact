import { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";
import { IEvent } from "../api/sampleData";
import "./styles.css";

function App() {
  const [formOpen, setFormOpen] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<IEvent|undefined>(undefined);

  function selectEvent(event: any) {
    console.log("props");
    setSelectedEvent(event);
    setFormOpen(true);
  }

  return (
    <div className="App">
      <Navbar setFormOpen={setFormOpen} setSelectedEvent={setSelectedEvent} ></Navbar>
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={selectEvent}
        ></EventDashboard>
      </Container>
    </div>
  );
}

export default App;
