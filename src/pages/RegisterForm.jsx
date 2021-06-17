import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export const RegisterForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://avatars.githubusercontent.com/u/54851701?v=4' /> Sign Up
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='angle right' iconPosition='left' placeholder='First Name'/>
                    <Form.Input fluid icon='angle right' iconPosition='left' placeholder='Last Name'/>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>

                    <Button color='teal' fluid size='large'>
                        Register
                    </Button>
                </Segment>
            </Form>
            <Message>
                Do you hace an account? <a href='#'>Sign In</a>
            </Message>
        </Grid.Column>
    </Grid>
)
