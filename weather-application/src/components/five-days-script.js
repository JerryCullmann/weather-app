import React from 'react';
import CardDays from './CardDays';

const Fivedaysscript = ({ dataFive }) => {

  let itemList = [];

  let j = 0;
  for (let i = 0; i < dataFive.list.length; i += 8, j += 8) {
    itemList.push(<CardDays dataFive={dataFive} j={j} i={i} />);
  }

return(
  itemList.map((item)=>{
    return item;
  })
)


 
};
export default Fivedaysscript;