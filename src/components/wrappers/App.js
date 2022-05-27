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

    componentDidMount() {
        setInterval(() => {
            fetch("http://192.168.1.91:3001/", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "if-none-match": "W/\"125-L/4lw21OtiuZ8y/hfFJvku0jIB0\"",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        }).then((response) => {
            return (response.json());
        }).then(json => {
            const { success, data } = json;
            if (success) {
                this.setState({
                    userObject: data
                })
            }
        });
        }, 5000);
    }

    render() {
        return (
            <div><ParentWrapper props={this.state} /></div>
        );
    }
}

export default App;