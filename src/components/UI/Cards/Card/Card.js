import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Card.module.css'
import {Link} from "react-router-dom";


const card = (props) => {
    return (
       
        <div>
            <Card className={classes.Card}>
                <Card.Header as="h5">{props.name}</Card.Header>
                <Card.Body>
                    <h6>Fund Raised: ₹ {props.fund}</h6>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Link to="/somewhere"><Button size="sm" variant="info" >Go somewhere</Button></Link>
                </Card.Body>
            </Card>

          
        
        </div>
      
    )
}

export default card;