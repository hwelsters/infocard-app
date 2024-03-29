import React, { Fragment } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "components/Loader";
import FormContainer from "components/FormContainer";
import { forgotPassword } from "state/ducks/auth/actions";
import * as types from "state/ducks/auth/types";
import { multilanguage } from "redux-multilanguage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPasswordPage = ({ strings }) => {
  const dispatch = useDispatch();

  const { success, loading, message } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    const { email } = data;
    dispatch(forgotPassword(email));
  };

  return (
    <Fragment>
      <FormContainer>
        <h1>{strings["Forgot Password"]}</h1>
        <p>
          {
            strings[
              "Please enter an email address, and we will send you a reset password link."
            ]
          }
        </p>

        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Form.Group controlId="email">
            <Form.Label>{strings["Email Address"]}</Form.Label>
            <Form.Control
              {...register("email")}
              placeholder="email"
            ></Form.Control>
          </Form.Group>
          <p className="validation-color">{errors.email?.message}</p>
          <Button type="submit" variant="primary">
            {loading ? <Loader /> : strings["Send Link"]}
          </Button>
        </Form>
      </FormContainer>
      <Modal show={success}>
        <Modal.Header closeButton>
          <Modal.Title>{strings["Email Sent"]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: types.AUTH_RESET });
            }}
          >
            {strings["Close"]}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default multilanguage(ForgotPasswordPage);
