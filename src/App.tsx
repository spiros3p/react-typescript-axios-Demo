import React, { useEffect, useState } from 'react';
import './App.scss';
import List from './components/List';
import AddPerson from './components/AddPerson';
import { Person } from './models/people';
import { fetchPeople, postPerson } from './API/people';

export interface IState {
  people: Array<Person>
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([]);

  useEffect(() => {
    fetchPeople()
      .then(
        res => {
          setPeople(res.data);
        },
        error => {
          console.error(error);
        }
      )
  }, [])

  const addPerson = (person: Person): void => {
    postPerson(person)
      .then(
        res => {
          setPeople([...people, res.data])
          console.info("Added person to the List!")
          console.info(res.data);
        },
        error => {
          console.error(error);
        }
      )
  }

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddPerson onAdd={addPerson}/>
    </div>
  );
} 

export default App;
