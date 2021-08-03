import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import '../MyFavorites.css';

export class MyFavDataCard extends Component {
    render() {
        return (
            <div style={{display:'flex' , flexWrap:'wrap' ,alignContent:'space-between', justifyContent:'center'}}>
              {this.props.show && this.props.myFavData.map((favData,index)=>{
                return(
                  <Card key={index} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={favData.imageUrl} />
                  <Card.Body>
                    <Card.Title>{favData.title}</Card.Title>
                    <Button style={{marginRight:'20px'}} variant="primary" onClick={()=> this.props.deleteFromFavData(index)}>Delete</Button>
                    <Button variant="primary"onClick={()=> this.props.showUpdateModal(index)}>Update</Button>
                  </Card.Body>
                </Card>
                )
              })}

          </div>
        )
    }
}

export default MyFavDataCard
