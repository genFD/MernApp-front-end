import React from 'react';
import './UserItem.css';
import Avatar from '../../Shared/Components/Uielements/Avatar';
import { Link } from 'react-router-dom';
import Card from '../../Shared/Components/Uielements/Card';
function UsersItem({ image, name, placeCount, id }) {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${id}/places`}>
          <div className='user-item__image'>
            <Avatar image={image} alt={name} />
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UsersItem;
