import React from 'react';
import Navbra from '../component/Navbra/Navbra.component';


const dlayout = (Component) => 
    ({...props}) => {
    return (<div>
        <Navbra />
        <Component {...props} />
    </div>);
    
};
export default dlayout;