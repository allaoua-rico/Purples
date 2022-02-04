import React from 'react';

export default function Layout({children}) {
  return (
    <div  
    className='top mui-fixed'
    
    >
        {children}
    </div>
  );
}
