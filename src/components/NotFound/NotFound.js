import React from 'react';
import "./NotFound.css"
const NotFound = () => {
    return (
        <div className='text-center'>
            <div className=''><svg xmlns="http://www.w3.org/2000/svg" className="icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
<h1>404</h1>
<h2>Page not found</h2>
        </div>
    );
};

export default NotFound;