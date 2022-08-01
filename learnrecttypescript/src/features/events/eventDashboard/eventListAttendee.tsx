import { Image, List } from "semantic-ui-react";

export default function EventListAttendee(props:any) {
    return (

        <List.Item>
            <Image size='mini' circular src={props.attendee.photoURL}></Image>
        </List.Item>
    )
}