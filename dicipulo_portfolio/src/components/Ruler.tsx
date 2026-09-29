import React from 'react';

const Ruler = ({ side = 'left', tickCount = 60 }) => {
  const isLeft = side === 'left';

  return (
    <div
      aria-hidden="true"
      className={` fixed top-0 bottom-0 py-8 flex flex-col gap-3 pointer-events-none ${
        isLeft ? 'left-0 items-start' : 'right-0 items-end'
      }`}
    >
      {Array.from({ length: tickCount }).map((_, index) => {
        const isMajor = index % 5 === 0;

        return (
          <div
            key={index}
            className={`h-px bg-blue-600 ${isMajor ? 'w-12' : 'w-8'}`}
          />
        );
      })}
    </div>
  );
};

export default Ruler;