import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import { Header, Icon, List } from 'semantic-ui-react';


function App() {

  const [activites, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Activities').then((res) => {
      console.log(res.data);
      setActivities(res.data)
    }).catch((err) => {
      console.log(err.message);

    });
  }, [])

  return (
    <div className="App">
      <Header as='h2' icon>
        <Icon name='users' />
        <Header.Content>Reactivites</Header.Content>
      </Header>
      <List>
        {
          activites.map((activity: any) =>
            <List.Item key={activity.id}>{activity.title}</List.Item>
          )
        }
      </List>
      <ul>

      </ul>

    </div>
  );
}

export default App;
