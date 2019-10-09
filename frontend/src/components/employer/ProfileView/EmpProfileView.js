import React from 'react';
import Navbar from '../../Navbar';
import ProfileContainer from '../ProfileContainer';
import SmallCard from './SmallCard';
import LargeCard from './LargeCard';


//This is the profile of the company the students will view when they click to find out more
// about the company

const EmpProfileView =(props)=> {
    return (
    <div>
        <Navbar/>
        <div className= "wrapper">
            <ProfileContainer username="PegasusSim" buttonText="Find out more"/>
            <div className="card">
                <div className="card-body">
                    <div className = "row">
                        <SmallCard title="Company Size" text="500-1000 employees"/>
                        <SmallCard title="Founded" text ="1972"/>
                        <SmallCard title= "Industry" text = "Software Engineering"/>
                    </div>
                    <br/>
                    <div className = "row">
                        <LargeCard title="Brief Overview">
                            At PegasusSIM, we believe in recruiting and training talent, regardless of the amount of experience an individual has.
                            We provide fully paid training, along with healthcare insurance and gym benefits becuase we truly care about the health
                            and wellbeing of our dear employees.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare tempus nulla. 
                            In hac habitasse platea dictumst. Integer lectus leo, tincidunt sit amet rhoncus nec, blandit sit amet purus. Nulla tristique, elit ut molestie mattis, massa purus fermentum ligula, et mattis urna odio et quam. 
                            Aenean in ex id quam scelerisque dictum non ut purus. Nullam volutpat tellus vitae leo rutrum, sit amet semper ipsum maximus. 
                            Etiam semper molestie nibh, a mollis ligula maximus eget. Nulla facilisi.

                            Proin in mauris turpis. Ut pellentesque ante et orci blandit, vel laoreet ipsum viverra. 
                            Vestibulum in quam eget enim accumsan elementum. Donec arcu tortor, vehicula ut gravida nec, venenatis in dui. 
                            Praesent rhoncus lorem nec facilisis rutrum. Nunc tellus ante, ullamcorper at erat nec, posuere tincidunt odio. 
                            Aliquam erat volutpat. Etiam ultrices dolor sed volutpat suscipit. Phasellus in enim dictum, condimentum odio vel, pulvinar erat. Quisque eu urna et ante scelerisque commodo a nec nisi. Nulla sit amet nulla quis velit fermentum facilisis.
                            Sed quis dolor nec mauris pellentesque vestibulum. Ut elit orci, tempor ac odio sit amet, malesuada pretium urna. Mauris vel felis lacinia, suscipit diam quis, cursus urna. Proin a porta orci.
                        </LargeCard>
                    </div>

                    <div className = "row">
                        <LargeCard title="Jobs Available">
                           
                        </LargeCard>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
};

export default EmpProfileView;
