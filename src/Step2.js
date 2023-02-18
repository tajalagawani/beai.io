import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
      Project components:
        <textarea
          name="age"
          ref={register({ required: "This is required." })}
          style={{ width: "100%", height: "300px" , resize: "none" , border: "1px solid #ccc" , borderRadius: "4px" , padding: "12px 20px" , boxSizing: "border-box" , fontFamily: "Arial, Helvetica, sans-serif" , fontSize: "16px"}}
          label="Project Purpose"
        ></textarea>
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <label>
      Project scope:
        <textarea
          name="yearsOfExp"
          ref={register({ required: "This is required." })}
          style={{ width: "100%", height: "300px" , resize: "none" , border: "1px solid #ccc" , borderRadius: "4px" , padding: "12px 20px" , boxSizing: "border-box" , fontFamily: "Arial, Helvetica, sans-serif" , fontSize: "16px"}}
          label="Project Purpose"
        ></textarea>
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <label>
      Project architecture:
        <textarea
          name="yearsOfExp"
          ref={register({ required: "This is required." })}
          style={{ width: "100%", height: "300px" , resize: "none" , border: "1px solid #ccc" , borderRadius: "4px" , padding: "12px 20px" , boxSizing: "border-box" , fontFamily: "Arial, Helvetica, sans-serif" , fontSize: "16px"}}
          label="Project Purpose"
        ></textarea>
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
