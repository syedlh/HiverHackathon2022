import React, { Component } from 'react';
import { ParentWrapper } from '../ui/components/ParentWrapper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userObject: [
                {
                    id: 0,
                    name: 'Luqman',
                    point: Math.random(),
                    img: 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'
                },
                {
                    id: 1,
                    name: 'abhishek',
                    point: Math.random(),
                    img: 'https://cdn1.iconfinder.com/data/icons/random-115/24/person-1024.png'
                },
                {
                    id: 2,
                    name: 'girish',
                    point: Math.random(),
                    img: 'https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg'
                },
                {
                    id: 3,
                    name: 'debarshi',
                    point: Math.random(),
                    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000'
                },
                {
                    id: 4,
                    name: 'personalShark',
                    point: Math.random(),
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6hq-8i6KlNzyy1sBSBhAUESuGEYl3-qKTg&usqp=CAU'
                }
            ],
        };
    }



    render() {
        return (
            <div><ParentWrapper props={this.state} /></div>
        );
    }
}

export default App;