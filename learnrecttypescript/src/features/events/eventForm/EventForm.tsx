import cuid from "cuid";
import { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { IEvent } from "../../../app/api/sampleData";

interface IProps {
  setFormOpen: (open: boolean) => void;
  eventSubmit: (event: IEvent) => void;
  selectedEvent: IEvent | undefined;
}

export default function EventForm(props: IProps) {
  const { setFormOpen, eventSubmit, selectedEvent } = props;

  const newValues: IEvent = {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
    attendees: [],
    hostedBy: "Bob",
    id: cuid(),
    hostPhotoURL: "",
  };

  const inialValues = selectedEvent ?? newValues;

  const [values, setValues] = useState(inialValues);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function submitEventChanges() {
    eventSubmit(values);
  }

  return (
    <Segment>
      <Header content="Create new event"></Header>
      <Form onSubmit={submitEventChanges}>
        <Form.Field>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          ></input>
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          ></input>
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          ></input>
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          ></input>
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          ></input>
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            name="date"
            placeholder="Dates"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          ></input>
        </Form.Field>
        <Button
          type="submit"
          floated="right"
          positive
          content="Submit"
        ></Button>
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
