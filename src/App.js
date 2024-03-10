import React from 'react';
import './App.css';

function App() {

  let currentDate=new Date();
  currentDate=currentDate.getHours();
  let greeting='';
  let styles={};
  let textCenter={
    display:'flex',
    justifyContent:'center',

    marginTop:'300px',
    
  };
  let h1={
    border:'2px solid black',
    padding:'15px',
    borderRadius:'10px',
    backgroundColor:'bisque'
  }
  if(currentDate>=1 && currentDate <12){
    greeting="Good Morning";
    styles.color= "green";
  }else if(currentDate>=12 && currentDate<19){
    greeting="Good Afternoon";
    styles.color="blue";
  }else{
    greeting="Good Night";
    styles.color= "purple";
  }
  return (
   <>
      <div style={textCenter}>
      <h1 style={h1}>Hello <span style={styles}>{greeting}</span></h1> 
      </div>
   </>
  );
}

export default App;
