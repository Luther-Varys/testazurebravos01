import React from "react";

export class Home extends React.Component {






    render() {




        console.log(this.props.user);
        console.log(animal["name"]);
        var text = "something";       
        //var myUser = this.props.user;
        //<p>In a new Component! {this.props.user}</p>


        return (
            <div>
                <p>In a new Component! {this.props.name}</p>
                <p>In a new Component! name object {this.props.user.name}</p>
                <p>In a new Component! name object {this.props.user.hobbies[1]}</p>
                
                <p> {text}</p>    
                <p> {text}</p>    
            </div>
        );
    }




}