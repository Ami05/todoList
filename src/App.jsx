import React from "react";

const App = () =>{

return    
    <>
        <div className = "main_div"></div> 
        <div className = "center_div">
            <br />
            <h1> ToDo List</h1>
            <br/>
            <input type ="text" placeholder = 'Add an Item'/>
            <button> + </button>

            <ol>
                <li> buy</li>
            </ol>

        </div>
    </>
}

export default App; 