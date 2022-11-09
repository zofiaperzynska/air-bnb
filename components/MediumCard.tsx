import { CardData as MediumCardProps } from "../pages";
import Image from "next/image";

import React from "react";

const MediumCard = (props: MediumCardProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform trasition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image
          src={props.img}
          layout='fill'
          alt='no photo'
          className='rounded-xl'
        />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default MediumCard;
