import axios from "axios";
import { Person } from '../models/people';


export function fetchPeople(){
    return axios.get<Array<Person>>('http://localhost:5000/people');
}

export function postPerson(person: Person){
    return axios.post<Person>('http://localhost:5000/people', person)
}