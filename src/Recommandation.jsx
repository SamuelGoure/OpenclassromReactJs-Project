import React from 'react';

     const date = new Date().getMonth
       const verification = date <= -1 && date >= 5
      console.log( verification)

function  Recommandation  ()  {
    if(!verification) {
        
        return (
            <div>
                Nous sommes à l'hiver
            </div>
        );
    }
    return (
        <div>
            Nous ne sommes pas à l'hiver
        </div>
    );
};

export default Recommandation;