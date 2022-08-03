import { Button, Container, Image, Menu } from "semantic-ui-react";

interface IProps {
  setFormOpen: any;
  setSelectedEvent: any;
}

export default function Navbar(props: IProps) {

  const { setFormOpen, setSelectedEvent } = props;

  function createNewEvent(){
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header style={{ marginRight: 15 }}>
          <Image src="/asssets/logo.png" alt="logo"></Image>Re-events
        </Menu.Item>
        <Menu.Item name="Events"></Menu.Item>
        <Menu.Item>
          <Button
            onClick={() => createNewEvent()}
            positive
            inverted
            content="Create evebt"
          ></Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login"></Button>
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5rem" }}
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
