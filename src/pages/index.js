import  React,{Fragment} from "react"

import Layout from "../components/layout"
import Particle from "../components/particle"

import  {GlobalStyles} from '../styles/GlobalStyle'


const IndexPage = () => (
  <Fragment>
    <GlobalStyles />
    <Layout />
    <Particle />
  </Fragment>

)

export default IndexPage
