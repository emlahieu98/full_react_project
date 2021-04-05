import React from 'react'
import data from './data'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
const Profile = () => {
  let { name } = useParams();
  const result = data.find((item) => item.name === name);
  return (
    <main>
      <div class="profile">
        <div class="card">
          <img src={result.image} alt={result.name} class="card__image" />
          <p class="card__name">{result.name}</p>
          <div class="grid-container">
            <div class="grid-child-posts">Date of birth :</div>
            <div class="grid-child-followers">{result.dateOfBirth}</div>
          </div>
          <ul class="social-icons">
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-codepen"></i>
              </a>
            </li>
          </ul>
          <button class="btn draw-border">Follow</button>
          <button class="btn draw-border">Message</button>
        </div>
      </div>
    </main>
  );
}

export default Profile
