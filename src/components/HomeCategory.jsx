import React from "react";
import { Link } from "react-router-dom";

const HomeCategory = ({ name, img }) => {
  return (
    <div className="px-2 py-2">
       
      <div className="card" style={{ width: '25rem' }}>
  <div className="card-body">
  <Link to={`/codsoft-ecom/product-category/${name}`}>

    <div style={{ position: 'relative' }}>
      <img src={img} className="card-img-top" alt="..." />
      <button
        style={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: 20,
          width: 'auto'
        }}
      >
        Show More {name}
      </button>
    </div>
    </Link>

  </div>
</div>

    </div>
    
  );
};

export default HomeCategory;
