import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'


class RandomQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        }
    }

    componentDidMount() {
        this.getNextQuote()
    }

    getNextQuote() {
        const url = "http://localhost:8085/quote/next";

        axios.get(url)
            .then(res => {
                const quotes_obj = (JSON.parse(res.data));
                console.log(quotes_obj.quote);
                this.setState({quote: quotes_obj.quote});
            })
            .catch(err => {
                alert(JSON.stringify(err));
            })
    }

    render() {
        const { quote } = this.state;
        return (
            <div id='wrapper'>
                <h1 className='title'>GoMotivated</h1>

                <div id='quote-box'>
                    <div id='text'><p>{quote}</p></div>
                </div>
                <div id='next-quote'>
                    <br/>
                    <Button basic color={"purple"} content="Next Quote" className="ui button" onClick={() => {return this.getNextQuote()}}/>
                </div>
            </div>
        )
    }
}

export default RandomQuote;