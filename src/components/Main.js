import React from 'react'
import axios from 'axios'
import Boots from './Boots'

export default class Main extends React.Component{
    state = {
        boots:[]
    }
    //this function is automatically fired when the component mounts to retrieve our entire list of boots
    getBoots = () => {
        axios.get('/api/boots').then(res => {
            this.setState({
                boots: res.data
        })
        })
    }
    componentDidMount(){
        this.getBoots()
    }
    render(){
        console.log(this.state.boots)

        //mapping over out list of boots and returning a component which will display the data for each of our individual boots, then rendered in the return as the newBoots variable
        const newBoots = this.state.boots.map((el, i) => (
            <Boots key={i} data={el}/>
        ))
        return(
            <div>
                {newBoots}
            </div>
        )
    }
}