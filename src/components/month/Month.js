import React, { Component } from 'react';

import './Month.scss';

class month extends Component {
    state = {
        isShown: false
    }

    hoverHandler = () => {
        this.setState({
            isShown: true
        })
    }

    leaveHandler = () => {
        this.setState({
            isShown: false
        })
    }


    render() {
        let m = this.props.m;
        let color = 'transparent';
        (m.birthdays.length <= 2) ? color = 'grey' :
            (m.birthdays.length <= 6) ? color = '#5555f1' :
                (m.birthdays.length <= 10) ? color = '#3b9a3b' :
                    color = '#e85454';


        return (
            <div className="month"
                onMouseEnter={this.hoverHandler}
                onMouseLeave = {this.leaveHandler}
                style={{ background: color }}
            >

                {m.name} {`${m.birthdays.length} people`}
                {this.state.isShown ?
                    m.birthdays.map((e) =>
                        <div className='month-people' key={e.firstName+e.lastName}>
                            {e.firstName} {e.lastName}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default month;
