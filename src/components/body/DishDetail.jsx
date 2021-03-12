import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{marginTop:"20px"}}>
                <CardImg top src={props.dish.image} slt={props.dish.name} />
                <CardBody style={{textAlign: "left"}} >
                    <CardTitle> {props.dish.name} </CardTitle>
                    <CardText> 
                        <p> {props.dish.description} </p>
                        <p> {props.dish.price}/- </p>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                    <br/>
                    <CommentForm dishId={props.dish.id} /> 
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;