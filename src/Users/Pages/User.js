import React from 'react';
import UsersList from '../Components/UsersList';
function User() {
  const USERS = [
    {
      id: 'u1',
      name: 'Hermkan',
      image: 'https://avatars.githubusercontent.com/u/89205089?v=4',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default User;
