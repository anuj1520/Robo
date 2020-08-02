import React from 'react';
const SearchBox =({searchChange})=>{

	return(
    <div classNamme ='pa2'>
    	<input
    	className ='pa3 ba b--green'  
    	type ="Search"
    	 placeholder ='Type Something'
        onChange ={searchChange}
        />
    </div>
    
		);
		



		
}


export default SearchBox;