import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}
  /${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <div>
      <p> date : {formattedDate}</p>
    </div>
  );
};

export default CurrentDate;
