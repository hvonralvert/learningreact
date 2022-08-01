import { Button, Container, Image, Menu } from "semantic-ui-react";


export default function Navbar({ setFormOpen }: any) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header style={{ marginRight: 15 }}>
                    <Image src="/asssets/logo.png" alt="logo"></Image>Re-events
                </Menu.Item>
                <Menu.Item name="Events"></Menu.Item>
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create evebt'></Button>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'></Button>
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5rem' }}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}