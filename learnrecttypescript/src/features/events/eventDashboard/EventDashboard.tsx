import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { useState } from "react";

import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({ formOpen, setFormOpen }: any) {
    const [events, setEvents] = useState(sampleData);
    const [selectedEvent, setSelectedEvent]=useState(undefined);

    function createEvent(event: any) {
        setEvents([...events, event])
    }

    function selectEvent(event:any){
        console.log('props')
        setSelectedEvent(event);
        setFormOpen(true);
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent}></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen ? <EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={createEvent}></EventForm> : null}
            </Grid.Column>
        </Grid>
    )

}