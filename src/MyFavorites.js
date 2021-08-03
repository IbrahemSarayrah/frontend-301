import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import MyFavDataCard from './componets/MyFavDataCard';
import UpdateFavDataModal from './componets/UpdateFavDataModal';
class MyFavorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
        show: false,
        myFavData: [],
        showModal:false,
        updateTitle:'',
        updateImageUrl:'',
        index:0,
    })
}

componentDidMount = async () => {
    let url = `${process.env.REACT_APP_SERVER}/myFav?email=${this.props.auth0.user.email}`

    let myFavData = await axios.get(url);

    this.setState({
        myFavData:myFavData.data,
        show:true
    })
    console.log(this.state.myFavData);
}


  deleteFromFavData= async (index)=>{

   let myFavData= await axios.delete(`${process.env.REACT_APP_SERVER}/delete/${index}?email=${this.props.auth0.user.email}`
    )
      this.setState({
        myFavData:myFavData.data
      })
  }

  
  showUpdateModal= async(index)=> {
    await this.setState({
      showModal:true,
      updateTitle:this.state.myFavData[index].title,
      updateImageUrl:this.state.myFavData[index].imageUrl,
      index:index
    })
    console.log(this.state.updateTitle);
  }


  UpdateFavData = async(event)=> {

    event.preventDefault();

    let updateObj ={

      updateTitle:event.target.updateTitle.value,
      updateImageUrl:event.target.updateImageUrl.value,
      email:this.props.auth0.user.email
    }
      let myFavData= await axios.put(`${process.env.REACT_APP_SERVER}/update/${this.state.index}?email=${this.props.auth0.user.email}`, updateObj)

      this.setState({
        myFavData:myFavData.data
      })
  }

  


  handleClose = ()=> {
    this.setState({
      showModal:false,
    })
  }




  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>

        <MyFavDataCard 
        show={this.state.show} 
        myFavData={this.state.myFavData} 
        deleteFromFavData={this.deleteFromFavData}
        showUpdateModal={this.showUpdateModal}
        />
        <UpdateFavDataModal
          show={this.state.showModal}
          handleClose={this.handleClose}
          updateTitle={this.state.updateTitle}
          updateImageUrl={this.state.updateImageUrl}
          UpdateFavData={this.UpdateFavData}
        />
      </>
    )
  }
}

export default withAuth0(MyFavorites);

