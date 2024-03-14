import React from 'react';
import MovieNavbra from '../component/Navbra/MovieNavbra.component';

const mlayout = (Component) => 
 ({...props}) => {
    return <div>
        <MovieNavbra />
        <Component {...props} />
    </div>;
    
}
export default mlayout;