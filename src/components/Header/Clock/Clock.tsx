import React, {Component} from 'react';
import classes from './Clock.module.css';

type ClockState = {
    time: string;
}

const INTERVAL_SECOND = 1000

class Clock extends Component<null, ClockState> {
    timerID: number | undefined

    constructor(props: null) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), INTERVAL_SECOND)
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID)
        }
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        const {time} = this.state

        return (
            <div className={classes.clock}>
                {time}
            </div>
        )
    }
}

export default Clock;
