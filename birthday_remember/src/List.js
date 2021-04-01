import React from 'react'
import {Link} from 'react-router-dom'
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        console.log(person.dateOfBirth);
        return (
          <article className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className="person_list">
              <div>
                <h4 className="person_name">{person.name}</h4>
                <p>{person.name} years</p>
              </div>
              <Link to={`/profile`}>
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
