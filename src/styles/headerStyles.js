import styled from 'styled-components/macro'

import {Link as RouterLink} from 'gatsby'


export const Header = styled.header`
   
`
export const Nav = styled.nav`
    display:flex;
    justify-content: flex-end;
    margin-right:25px;
`
export const Ul = styled.ul`
 
`
export const ListItem = styled.li`
    list-style: none;
    
`

export const Link = styled(RouterLink)`
    text-decoration:none;
    font-size:var(--font-small);
    color:var(--font-color);
`