import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    console.log("mapStateToProps: ",state);
    return{
        a: state.dishes
    }
}
class Home extends Component{
    componentDidMount(){
        console.log("Home State: ",this.state);
        console.log("Home Props: ",this.props);
    }
    render(){
        document.title = 'Restaurant';
        return(
            <div>

            </div>
        );
    }
}

export default connect(mapStateToProps) (Home);