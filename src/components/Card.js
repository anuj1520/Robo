import React from 'react';
import 'tachyons' ;


const Card=(props)=>{

	return(
		<div className='bg-light-green dib br3 pa3 ma3 grow'>
	 <img alt ='robo' src= {`https://robohash.org/${props.id}?300*300`} /> 

		 <div>
		 <h1>{props.name}</h1>
		 <p1>
		
			{props.email}
		 </p1>
		 </div>
		</div>

	);
}


export default Card;