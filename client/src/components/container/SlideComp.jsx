import React from 'react';

export default function SlideComp(props) {
  return (
    <React.Fragment>
      <div className="flex flex-col text-center bg-blue-700 border-[3px] rounded-2xl border-gray-400 md:border-4">
        <div className="w-32 h-32">
          <img className="w-full h-full" src={props.image} alt={props.image}  />
        </div>
        <div className="w-32">{props.type}</div>
        <div className="w-32">{props.name}</div>
      </div>
    </React.Fragment>
  )
}