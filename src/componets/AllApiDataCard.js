import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react'

export class AllApiDataCard extends Component {
    render() {
        return (
            <div style={{display:'flex' , flexWrap:'wrap' ,alignContent:'space-between', justifyContent:'center'}}>
            {this.props.show && this.props.allApiColorData.map((favData,index)=>{
              return(
                <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={favData.imageUrl} />
                <Card.Body>
                  <Card.Title>{favData.title}</Card.Title>
                  {this.props.auth0.isAuthenticated && <Button variant="primary" onClick={()=> this.props.addColorToFav(index)}>Add to Fave</Button>}
                </Card.Body>
              </Card>
              )
            })}

        </div>
        )
    }
}

export default withAuth0(AllApiDataCard)
