import React from 'react';

export default function Layout({children}) {
  return (
    <div  
    className='top'
    // className='from-slate-800 to-slate-500 bg-gradient-to-r text-zinc-300 w-full '
    >
        {children}
    </div>
  );
}
