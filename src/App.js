import './App.scss';
import Month from './components/month/Month';
import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';


class App extends Component {
    state = {
      months: [
        { 
        name: 'Jan',
        birthdays: []
      },
        { 
        name: 'Feb',
        birthdays: []
      },
        { 
        name: 'Mar',
        birthdays: []
      },
        { 
        name: 'Apr',
        birthdays: []
      },
        { 
        name: 'May',
        birthdays: []
      },
        { 
        name: 'Jun',
        birthdays: [] 
      },
        { 
        name: 'Jul',
        birthdays: [] 
      },
        { 
        name: 'Aug',
        birthdays: [] 
      },
        { 
        name: 'Sep',
        birthdays: [] 
      },
        { 
        name: 'Okt',
        birthdays: [] 
      },
        { 
        name: 'Nov',
        birthdays: [] 
      },
        { 
        name: 'Dec',
        birthdays: [] 
      },
      ]
    }
    componentDidMount() {
      axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
        .then(res => {
          const persons = res.data;
          persons.map((person) => {
            let months = this.state.months;
            let curMonth = new Date(person.dob).getMonth();
            months[curMonth].birthdays.push(person);
            this.setState( { months });
            return true;
          })
        })

    };


    render() {
        return (
          <>
          {
            this.state.months.map((month) => (
              <Month
                m ={month}
                key = {month.name}
              />
            ))
          }
        </>
        );
    }
}

  export default App;
