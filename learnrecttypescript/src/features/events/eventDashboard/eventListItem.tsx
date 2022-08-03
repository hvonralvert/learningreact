import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import { IEvent } from "../../../app/api/sampleData";
import EventListAttendee from "./eventListAttendee";

interface IProps {
  event: IEvent;
  selectEvent: (event: IEvent) => void;
  deleteEvent: (event: IEvent) => void;
}

export default function EventListItem(props: IProps) {
  const { event, selectEvent, deleteEvent } = props;

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={event.hostPhotoURL}
            ></Item.Image>
            <Item.Content>
              <Item.Header content="Event Title"></Item.Header>
              <Item.Description>Hosted by boib</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock"></Icon>
          {event.date}
          <Icon name="marker"></Icon>
          {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee
              attendee={attendee}
              key={attendee.id}
            ></EventListAttendee>
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <span>{event.description}</span>
      </Segment>
      <Segment>
        <Button
          onClick={() => selectEvent(event)}
          color="teal"
          floated="right"
          content="View"
        ></Button>
        <Button
          onClick={() => deleteEvent(event)}
          color="red"
          floated="right"
          content="Delete"
        ></Button>
      </Segment>
    </Segment.Group>
  );
}
