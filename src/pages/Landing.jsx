import React from 'react'
import {Row,Col}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
     <div className='container-fluid   d-flex align-items-center' style={{height:'100vh'}}>
      <Row>
        <Col className=' p-5' sm={12} md={6}>
        <h2>
        <i className="fa-solid fa-upload fa-beat  me-4" style={{color: "#FFD43B"}}></i>
        Media Player 2024
         </h2>
         <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione qui explicabo fugit quia illo, reprehenderit quam amet repellat atque temporibus? Odio modi doloremque et error nulla quisquam sint illum molestias!</p>
        <div className='d-grid'>
        <Link to='./home' className='btn btn-success'>Let's Go</Link>
        </div>
        </Col>
        <Col className='py-4' sm={12} md={6}>
        <img src='https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_640.png' className='img-fluid' alt='introimg'></img>
        </Col>
      </Row>

     </div>
     <div className='container-fluid mt-5'>
      <h3 className='my-3 text-center'>Features</h3>
      <div className='p-4 d-flex justify-content-around'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/f9/fd/ee/f9fdee9073b6b6c4ade999a359fbd012.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'}  src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
      <Card.Body>
        <Card.Title>Add categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'}  src="https://cdn.dribbble.com/users/398490/screenshots/3169752/wishlist.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='p-5'>
      <Row>
        <Col sm={12} md={7}>
        <h4>Simple and Faster</h4>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis numquam quaerat eius mollitia repudiandae aut doloribus earum tempore repellat perspiciatis, distinctio harum, dolorem vero cupiditate modi iste dolores id!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis! Vitae ipsum nam eaque laborum facere. Animi, a, tempore doloribus aliquid placeat voluptas ex numquam expedita, magnam quos at porro.</p>
        </Col>
        <Col sm={12} md={5}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ke90Tje7VS0?si=3MT-dLVnkQg9CCOi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
        
      </Row>

     </div>
    </>
  )
}

export default Landing