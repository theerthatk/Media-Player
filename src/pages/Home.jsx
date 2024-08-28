import React from 'react'
import {Row,Col} from 'react-bootstrap'
import AddVideo from '../components/AddVideo'
import Category from '../components/Category'
import Videos from '../components/Videos'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <div className='d-flex justify-content-between p-4'>
   <h1>Videos</h1>
   <Link to='/his'>Watch History</Link>
   </div>
   
   <div className='container-fluid'>
    <Row>
      <Col sm={12} md={1}>
      <AddVideo/>
      </Col>
      <Col sm={12} md={8}>
      <Videos/>
      </Col>
      <Col sm={12} md={3}>
      <Category/>
      </Col>
    </Row>
    
   </div>
  
   </>
  )
}

export default Home