import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AllApiDataCard from './componets/AllApiDataCard';

class AllDataAPI extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            allApiColorData: [],
            show: false,
            title:'',
            imageUrl:'',
        })
    }

    componentDidMount = async () => {

        let url = `${process.env.REACT_APP_SERVER}/colors`

        let allApiColorData = await axios.get(url)

        this.setState({
            allApiColorData: allApiColorData.data,
            show: true,
        })
        // console.log(this.state.allApiColorData);
    }

    addColorToFav= async(index)=>{

        await this.setState({
            title:this.state.allApiColorData[index].title,
            imageUrl:this.state.allApiColorData[index].imageUrl
        })
            let colorObj = {
                title:this.state.title,
                imageUrl:this.state.imageUrl,
                email:this.props.auth0.user.email
            }

            // console.log(colorObj);

            axios.post(`${process.env.REACT_APP_SERVER}/addToFav`, colorObj)
 
    }





    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <AllApiDataCard allApiColorData={this.state.allApiColorData} show={this.state.show} addColorToFav={this.addColorToFav} />
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
