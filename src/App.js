import React from 'react';
import { Drawer } from 'antd';
import 'antd/dist/antd.css';
import 'react-calendar/dist/Calendar.css';
import './styles/App.css';
import DiaryList from './components/DiaryList';
import Calendar from 'react-calendar';

class App extends React.Component {

  showDrawer = () => {
    this.setState({
      visible: true
    })
  }

  disableDrawer = () => {
    this.setState({
      visible: false
    })
  }

  onDateChange = (value) => {
    this.setState({date: value});
  }

  state = {
    visible: false,
    date: new Date(),
  }

  
  render() {
    return (
      <>
        <div className="windowContainer">
          <DiaryList />
          <div className="calendarContainer">
            <Calendar 
                onChange={this.onDateChange}
                value={this.state.date}
            />
          </div>
        </div>
      </>
    )
  }
}

export default App;
