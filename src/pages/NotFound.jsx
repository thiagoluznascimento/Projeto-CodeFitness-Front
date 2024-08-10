import React from 'react'
import { Card } from 'react-bootstrap'
import erro404 from '../assets/Erro4.png'
import '../pages/styles/NotFound.css'

function NotFound() {
  return (
    <>
        <div className='container'>
            <Card>
                <Card.Img src={erro404} className="img-fluid" />
            </Card>
        </div>
    </>
  )
}

export default NotFound
