import {Component} from 'react';
import Header from './HeaderComponent';
import Welcome from './HomeComponent';
import Store from './StoreComponent';
import Footer from './FooterComponent';
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter, Link} from 'react-router-dom';
class Main extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/shop" component={Store}/>
                </Switch>
                <Footer/>  
            </div>
        );
    }

}

export default Main;