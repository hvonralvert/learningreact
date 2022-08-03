import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { useState } from "react";

import { IEvent, sampleData } from "../../../app/api/sampleData";

interface IProps {
  formOpen: boolean;
  setFormOpen: (open: boolean) => void;
  selectedEvent: IEvent | undefined;
  selectEvent: (event: any) => void;
}

export default function EventDashboard(props: IProps) {
  const { formOpen, setFormOpen, selectEvent, selectedEvent } = props;
  const [events, setEvents] = useState<IEvent[]>(sampleData);

  function eventSubmit(event: IEvent) {
    const newEvent = !selectedEvent;
    if (newEvent) {
      createEvent(event);
    } else {
      updateEvent(event);
    }
  }

  function updateEvent(event: IEvent) {
    updatedEvents(
      events.map((evt) => (evt.id === event.id ? { ...event } : evt))
    );
  }

  function createEvent(event: IEvent) {
    updatedEvents([...events, event]);
  }

  function updatedEvents(events: IEvent[]) {
    setEvents(events);
    selectEvent(undefined);
    setFormOpen(false);
  }

  function deleteEvent(event:IEvent){
    updatedEvents(events.filter(evt=>evt.id!==event.id))
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent}></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen ? (
          <EventForm
            setFormOpen={setFormOpen}
            eventSubmit={eventSubmit}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
          ></EventForm>
        ) : null}
      </Grid.Column>
    </Grid>
  );
}
