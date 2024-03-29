import Image from "next/image";
import React from "react";
import { SearchResults as InfoCardProps } from "../pages/search";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = (props: InfoCardProps) => {
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={props.img}
          alt='no pic'
          layout='fill'
          objectFit='cover'
          className='rounded-xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{props.location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl'>{props.title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>
          {props.description}
        </p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            {props.star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>
              {props.price}
            </p>
            <p className='text-right font-extralight'>{props.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
