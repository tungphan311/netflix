import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { FORM_KEY_REVIEW } from "../../../state/reducers/formReducer";
import ReviewInput from "../../Input/ReviewInput";
import Textarea from "../../Input/Textarea";
import { require, headline, body } from "../../../utils/formValidate";

function ReviewForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field
        name="headline"
        placeholder="Write a headline for you review here"
        component={ReviewInput}
        validate={[require, headline]}
      />
      <Field
        name="body"
        placeholder="Write your review here"
        rows="6"
        className="textarea--input"
        component={Textarea}
        validate={[require, body]}
      />

      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

ReviewForm = reduxForm({
  form: FORM_KEY_REVIEW,
  touchOnBlur: false,
  enableReinitialize: true
})(ReviewForm);

ReviewForm = connect(
  (state, { headline, body }) => ({
    initialValues: {
      headline,
      body
    }
  }),
  null
)(ReviewForm);

export default ReviewForm;
