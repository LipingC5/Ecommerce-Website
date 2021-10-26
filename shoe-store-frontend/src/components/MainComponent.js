import {Component} from 'react';
import Header from './HeaderComponent';
import Welcome from './HomeComponent';
import Store from './StoreComponent';
import Footer from './FooterComponent';
import ShoePage from './ShoeComponent';
import AboutUs from './AboutUsComponent';
import Login from './LoginComponent';
import Contact from './ContactComponent';
import Cart from './CartComponent';
import PaymentForm from './PaymentFormComponent';
import signUp from './SignUpComponent';
import User from './UserComponent';
import EditProfile from './EditProfile';
import ShippingAddress from './EditShippingInfo';
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/Actions';


const mapStateToProps = (state) => {
      return{
          shoes: state.shoes.shoes,
          customer: state.customer.customer,
          cart: state.cart.cart,
          orders: state.orders.orders
      }
}


const mapDispatchToProps = (dispatch) => ({
    getDifferentShoes:() => {dispatch(actionCreators.getDifferentShoes())},
    getCustomer:() => {dispatch(actionCreators.getCustomer())},
    getCart: () => {dispatch(actionCreators.getCart(dispatch))},
    addShoeToCart: (shoe) => dispatch(actionCreators.addShoeToCart(shoe)),
    removeShoeFromCart: (shoe) => dispatch(actionCreators.removeShoeFromCart(shoe)),
    clearCart: () => dispatch(actionCreators.clearAllFromCart()),
    getOrders: () => dispatch(actionCreators.getOrders()),
    makeOrder: (paymentForm) => dispatch(actionCreators.makeOrder(paymentForm)),
    removeOrder: (orderId) => dispatch(actionCreators.removeOrder(orderId))
});




class Main extends Component {

    componentDidMount(){
        this.props.getDifferentShoes();
        this.props.getCustomer();
        this.props.getCart();
        this.props.getOrders();
     }

    render(){

        const ShoeWithId = ({match}) => {
            return(
              <ShoePage shoe={this.props.shoes[0].filter((shoe) => shoe.id === parseInt(match.params.shoeId,10))}
              addShoeToCart = {this.props.addShoeToCart} shoes={this.props.shoes}
              />
            );
          };

        return(
            <>
            <div>
                <Header/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/shop" component={() => <Store shoes = {this.props.shoes} addShoeToCart = {this.props.addShoeToCart}/>}/>
                    <Route path="/shoe/:shoeId" component={ShoeWithId}/>
                    <Route path="/aboutus" component={AboutUs}/> 
                    <Route path="/contactus" component={Contact}/> 
                    <Route path="/cart" component={() => <Cart cart = {this.props.cart} 
                    removeShoeFromCart={this.props.removeShoeFromCart} clearCart ={this.props.clearCart}/>}/> 
                    <Route path="/paymentform" component={() => <PaymentForm cart ={this.props.cart} 
                    makeOrder ={this.props.makeOrder}/>}/>
                    <Route path="/signupform" component={signUp}/>
                    <Route path="/user" component={() => <User customer = {this.props.customer} 
                    orders={this.props.getOrders} removeOrder={this.props.removeOrder}/> }/>
                    <Route path="/editprofile" component={EditProfile} />
                    <Route path="/editshipping" component={ShippingAddress} />
                </Switch>
                <Footer/>             
            </div>
            </>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));