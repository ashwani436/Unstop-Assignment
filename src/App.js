import { useState, React } from "react";
import PreventRerendring from "./components/PreventRendering/PreventRerendring";
import ContextParent from "./components/ContextApi/ContextParent";
import ComponentHasError from "./components/ErrorBoundry/ComponentHasError";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import Child from "./components/Higherorder/Child";
import HigherOrder from "./components/Higherorder/HigherOrder";

function App() {
  const [text, setText] = useState(0);
  
  return (
    <div>
      {/*************************** How to Prevent Re-Rendering using memo=>React Memo is a higher-order component that wraps around a 
                                              component to memoize the rendered output and avoid unnecessary renderings  ***************************/}
      {/* <PreventRerendring/> */}
  
      
      {/*********************************** Context API ************/}
      {/* <ContextParent/> */}
      
      {/* ******************************** ERROR BOUNDRY*******************************************/}
      {/* <ErrorBoundary>
        <ComponentHasError />
        </ErrorBoundary> */}
      
      
      {/* HOC */}
      {/* <HigherOrder comp={Child} /> */}

    </div>
  );
}



export default App;