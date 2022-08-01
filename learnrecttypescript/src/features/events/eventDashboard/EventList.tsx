import EventListItem from './eventListItem';

export default function EventList(events:any[],selectEvent:any) {
    return (
        <>
            {events.map(event=> {
                return <EventListItem event={event} key={event.id} selectEvent={selectEvent}></EventListItem>
            })}
        </>
    )

}