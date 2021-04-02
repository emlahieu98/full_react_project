import React from 'react'
import {Link} from 'react-router-dom'
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        let year = new Date().getFullYear();
        let person_year = person.dateOfBirth.slice(-4);
        let age = parseInt(year) - parseInt(person_year);
        return (
          <article className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className="person_list">
              <div>
                <h4 className="person_name">{person.name}</h4>
                <p>{age} years</p>
              </div>
              <Link to={`/profile/${person.name}`}>
                <i class="person_icon fa fa-stack-exchange"></i>
              </Link>
            </div>
          </article>
        ); 
      })}
    </>
  );
}

export default List
