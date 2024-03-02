import React from 'react';
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }

        console.log('constructor');
    }

    componentDidMount(){
        console.log('mount');
    }

    componentWillUnmount(){
        console.log('unmount');
    }
    render(){
        console.log('render');
        return(
            <div>
                <h2>This is from Class.</h2>
            </div>
        )
    }
}

export default ProfileClass;