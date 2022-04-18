import React from 'react';

const Service = ({service}) => {
    const { id, name,img,  description, price } = service;
    return (
        <div class="col">
        <div class="card h-100">
          <img src={img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p>Hire price : {price}</p>
          </div>
        </div>
      </div>
    );
};

export default Service;