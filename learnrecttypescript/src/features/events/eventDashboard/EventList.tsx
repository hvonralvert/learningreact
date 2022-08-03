import { IEvent } from '../../../app/api/sampleData';
import EventListItem from './eventListItem';

interface EventsProps {
    events: IEvent[];
    selectEvent: any;
    deleteEvent:(event:IEvent)=>(void)
}

export default function EventList(props: EventsProps) {
    const { events, selectEvent,deleteEvent } = props;
    return (
        <>

            {
                events.map(event => {
                    return <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent}></EventListItem>
                })
            }
        </>
    )

}