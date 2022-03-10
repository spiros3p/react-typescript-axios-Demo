import React from 'react'
import { IState } from '../App';

interface IProps {
    people: IState["people"]
}

const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li key={person.id} className='List-item'>
                    <div className='List-header'>
                        <img className='List-img' src={person.img} alt={`${person.name} image`} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className='List-note'>{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul className='List'>
            {renderList()}
        </ul>
    )
}

export default List