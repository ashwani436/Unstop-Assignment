import { useState, React } from "react";
import PreventRerendring from "./components/PreventRendering/PreventRerendring";
import ContextParent from "./components/ContextApi/ContextParent";
import ComponentHasError from "./components/ErrorBoundry/ComponentHasError";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import TempParent from "./components/UseMemoExample/TempConvertor";
import Form from "./components/Form";
import withLoading from "./components/Higherorder/withLoading";
import DisplayData from "./components/Higherorder/Display";

function App() {

  const WrapperComponent = withLoading(DisplayData);
  
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
      <h1>Higher Order Component</h1>
      <WrapperComponent/>
    
      {/* <Form /> */}
    </div>
  );
}



export default App;