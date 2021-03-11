import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    // console.log("mapStateToProps: ",state);
    return{
        a: state.dishes
    }
}
class Home extends Component{
    componentDidMount(){
        console.log("Home Props: ",this.props);
        this.props.dispatch({
            type: 'TEST',
            str: "Imdadul Haque"
        })
    }
    componentDidUpdate(){
        console.log("Home props Updated: ", this.props);
    }
    render(){
        document.title = 'Restaurant';
        return(
            <div>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);