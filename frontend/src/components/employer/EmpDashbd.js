import React, {Component} from 'react';
import ProfileContainer from './ProfileContainer';
// import StatBoard from './StatBoard';
import './EmpDashbd.css';

//This is the dashboard which the employer will see after successfully logging in.
// It contains a Navbar (header bar), a Profile Container and a Statistics Board.

// class EmpDashbd extends Component{
//     constructor (props){
//         super (props);
//         this.state = {
//             homeVisible:true,
//             postJobVisible:false,
//             messageVisible:false
//         };
//         this.pjClickHandler=this.pjClickHandler.bind(this);
//         this.messagesClickHandler = this.messagesClickHandler.bind(this);
//     }

//     render(){
//         if (this.state.homeVisible){
//             return (
//             <div>
                
//                 <div className= "wrapper">
//                     <ProfileContainer username="PegasusSim" buttonText="Edit Profile"/>
//                     <div className="lineSeparator"/>
//                     <StatBoard pjHandler= {this.pjClickHandler} />
//                 </div>
                
//             </div>
//             )
//     }
//     else if (this.state.postJobVisible){
//         return (
//             <div>
//                 <PostJob/>
//             </div>
//         )
//     }


//     pjClickHandler(){
//         this.setState({
//             postJobVisible: true,
//             homeVisible:false
//         });
//     }

//     messagesClickHandler(){
//         this.setState({
//             messageVisible:true,
//             homeVisible:false
//         });
//     }
// };

// export default EmpDashbd



// MIN's code
class EmpDashbd extends Component {
    constructor() {
        super()
    }

    render () {
        return (
            <div>
                <h3>This is Employer App</h3>
            </div>
        )
    }
}

export default EmpDashbd