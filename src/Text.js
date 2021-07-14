import React from "react";
  
const Text = () => {
  // Creating and initializing textInputRef variable as null 
  let textInputRef = null;
  
  // Callback function that will set ref for input field
  // Note: It can be used to set ref for any element
  const setTextInputRef = (element) => {
      textInputRef = element;
  };
  
  // This method will be used to focus textInput
  const textInputFocusHandler = () => {
  
    // If textInputRef is not null
    // otherwise it will throw an error
    if (textInputRef) {
      
      // Focusing input element
      textInputRef.focus();
    }
  };
  
  return (
    <div className="ui fluid icon input" style={{ padding: 16 }}>
      {/** Using setTextInputRef function so that
       *   textInputRef can be set as ref for this input field
       * */}
      <input 
        style={{ display: "block" }}
        ref={setTextInputRef}
        type="text"
        placeholder="Enter something"
      />
  
      {/** Attaching textInputFocusHandler 
           method to button click */}
      <button className="ui primary button" onClick={textInputFocusHandler}>
          Click me to focus input
      </button>
    </div>
  );
};
  
export default Text;
