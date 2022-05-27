import React, { Component } from 'react';
import { ParentWrapper } from '../ui/components/ParentWrapper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userObject: [],
        };
    }

    handleApi = () => {
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
    }

    componentDidMount() {
        this.handleApi();
        setInterval(() => {
            this.handleApi();
        }, 5000);
    }

    render() {
        return (
            <div><ParentWrapper props={this.state} /></div>
        );
    }
}

export default App;