import React from 'react'

import {Header,Ul,ListItem,Link,Nav} from '../styles/headerStyles'


const Head = () => {
    return ( 
        <Header>
            <Nav>
                <Ul><ListItem><Link to='#'>Home</Link></ListItem></Ul>
                <Ul><ListItem><Link to='#'>About</Link></ListItem></Ul>
                <Ul><ListItem><Link to='#'>Contact</Link></ListItem></Ul>
            </Nav>
        </Header>
     );
}
 
export default Head;