import React from 'react'
import {Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/54851701?v=4"/>
                <Dropdown pointing="top left" text="Memet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="İnfo" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Sign out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
