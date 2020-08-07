import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='header'>
                <h1>
                    Rob's Boot Selection
                </h1>
                <div className='links'>
                    <Link to='/main'>See all the Boots</Link>
                    <Link to='/'>Go Home</Link>
                </div>
            </div>
        )
    }
}