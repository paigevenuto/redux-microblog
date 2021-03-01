import { useState } from "react";

function useFields(initialState) {
  /*
   *Assigns state to a set of key/value pairs to use for the form data.
   *Returns that state, a change handler, and a function to clear the form
   */

  const [formData, setFormData] = useState(initialState);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  };

  return [formData, handleChange, resetFormData];
}

export default useFields;
