import React from 'react';
import Confetti from 'react-confetti';

const ConfettiWrapper = ({ active }) => {
  if (!active) return null;

  const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']; // Customize confetti colors

  return <Confetti width={window.innerWidth} height={window.innerHeight} colors={colors} />;
};

export default ConfettiWrapper;