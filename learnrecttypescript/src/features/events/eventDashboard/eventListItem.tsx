import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./eventListAttendee";

export default function EventListItem(event: any,selectEvent:any) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL}></Item.Image>
                        <Item.Content>
                            <Item.Header content='Event Title'></Item.Header>
                            <Item.Description>
                                Hosted by boib
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'></Icon>{event.date}
                    <Icon name='marker'></Icon>{event.venue}
                </span>
            </Segment>
            <Segment scondary>
                <List>
                    {event.attendees.map((attendee: any) =>
                        <EventListAttendee attendee={attendee} key={attendee.id}></EventListAttendee>
                    )}
                </List>
            </Segment>
            <Segment>
                <span>{event.description}</span>
                <Button onClick={()=>selectEvent(event)} color='teal' floated='right' content='View'></Button>
            </Segment>
        </Segment.Group>
    )
}