import React from 'react';
import Card from '../components/Card';

const CardList =({robots})=>{
return(<div> 
{
		robots.map((users,i)=>{
		 return(
		 <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
		 
		  )
                              }
		          )
   

    }
          </div>

      )    

/*

	return(
    <div>
     { robots.map((users,i) => {
        return(
          <div>
          <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
            
            </div>
        )
      })
}
      </div>
  ) */
  
}

export default CardList;