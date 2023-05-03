import React from 'react';

const Ship = ({ length, orientation, hitPositions = [] }) => {
  const renderPart = (index) => {
    const isHit = hitPositions.includes(index);
    return (
      <div key={index} className={`ship-part ${isHit ? 'hit' : ''}`}></div>
    );
  };

  return (
    <div className={`ship ${orientation}`}>
      {Array.from({ length }, (_, index) => renderPart(index))}
    </div>
  );
}

export default Ship;
