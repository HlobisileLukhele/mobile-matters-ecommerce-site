import React,{Component} from 'react';

export default class MainContent extends Component {
    state ={pageTitle:"Customers", customersCount:5};

    render(){
        return(
            <div>
                <h4 className="border-buttom m-1 p-1">{this.state.pageTitle}
                <span className="badge badge-secondary">{this.state.customersCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>
            </div>
        )
    }

    onRefreshClick = () => {
        console.log("refresh clicked ")
        this.setState({customersCount : 20});
    }
}