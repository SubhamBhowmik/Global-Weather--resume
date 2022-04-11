import React from "react";
 import { BrowserRouter as Router, Route, Switch,Link, NavLink, BrowserRouter } from "react-router-dom";
 import Demo from "./component/Basics/Demo";
import Demo1 from "./component/Basics/Demo1";
// import { Demo2 } from "./component/Basics/Demo2";
// import Navbar from "./component/Basics/Navbar";
 import Resturant from "./component/Basics/Resturant";
//import Resturant from "./component/Basics/Resturant";
// import UseState from "./component/hooks/useState";
//import UseEffect from "./component/hooks/useEffect";
// import UseReducer from "./component/hooks/UseReducer";
 // import Todo from "./component/todoreact/todo";
import Temp from "./component/weather/temp";
const App = () => {
  return (
   <>
    
     <Temp/>
   </>
   
    

  );

};

export default App;