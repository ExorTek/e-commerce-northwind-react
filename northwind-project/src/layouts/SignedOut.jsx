import React from 'react';
import {Button, Menu} from 'semantic-ui-react';

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary> Sign Up </Button>
                <Button onClick={signIn} secondary style={{marginLeft: '0.5em'}}>Sign In</Button>
            </Menu.Item>
        </div>
    )
}
