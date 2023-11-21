import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <>
      <section>
        <h2>Profile</h2>
        <img></img>
        <p>Username</p>
        <p>Email</p>
        <p>Delete</p>
      </section>

      {/* this should be tabs below*/}
      <section>
        <h2>Bookmarks</h2>
        <ul>
          <li>List of bookmarked recipes with medium preview</li>
        </ul>
      </section>

      <section>
        <h2>Ratings</h2>
        <ul>
          <li>List of rated recipes with small preview</li>
        </ul>
      </section>

      <section>
        <h2>Comments</h2>
        <ul>
          <li>List of comments with parent comment and recipe commented</li>
        </ul>
      </section>
    </>
  );
};

export default Profile;
