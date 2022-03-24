import React from "react";
import { FieldArray, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";

const SignUpSchema = Yup.object().shape({
  employee: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      MobileNo: Yup.string()
        .phone(null, true, "Invalid phone number")
        .required("Invalid Phone Number."),
      password: Yup.string()
        .required("This field is required")
        .min(6, "must be of 6 characters long."),
      confirmPassword: Yup.string()
        .required("This field is required")
        .min(6, "must be of 6 characters long")
        .oneOf([Yup.ref("password")], "Password must match"),
    })
  ),
});

interface MyFormValues {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  MobileNo: number;
  password: string;
  confirmPassword: string;
  department: string;
}

const SignupForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
    MobileNo: 0,
    password: "",
    confirmPassword: "",
    department: "",
  };
  return (
    <>
      <Formik
        initialValues={{
          employee: [initialValues],
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <h4>Add employee</h4>
              <FieldArray
                name="employee"
                render={(arrayHelper) => {
                  return (
                    <div>
                      {formik.values.employee.map((employee, index) => (
                        <>
                          <div className="mt" key={index}>
                            <div className="remove">
                              <button
                                type="button"
                                className="button-remove"
                                onClick={() => {
                                  arrayHelper.remove(index);
                                }}
                              >
                                Remove{" "}
                              </button>
                            </div>
                            <div className="card">
                              <div className="card-title">
                                {`employee ${index + 1}`}
                              </div>

                              <div className="card-body">
                                <div className="form-group">
                                  <label
                                    htmlFor={`employee.${index}.firstName`}
                                  >
                                    First Name
                                  </label>{" "}
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`employee.${index}.firstName`}
                                    id={`employee.${index}.firstName`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="field_error"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor={`employee.${index}.lastName`}>
                                    Last Name
                                  </label>{" "}
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`employee.${index}.lastName`}
                                    id={`employee.${index}.lastName`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="field_error"
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <label>Gender</label>
                                  <div>
                                    <div className="form-check form-check-inline">
                                      <Field
                                        type="radio"
                                        name={`employee.${index}.gender`}
                                        className="form-check-input"
                                        value="male"
                                        id={`employee.${index}.gender`}
                                      />
                                      <label
                                        className="form-check-label"
                                        for="male"
                                      >
                                        Male
                                      </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                      <Field
                                        type="radio"
                                        name={`employee.${index}.gender`}
                                        className="form-check-input"
                                        value="female"
                                        id={`employee.${index}.gender`}
                                      />

                                      <label
                                        className="form-check-label"
                                        for="female"
                                      >
                                        Female
                                      </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                      <Field
                                        type="radio"
                                        name={`employee.${index}.gender`}
                                        className="form-check-input"
                                        value="other"
                                        id={`employee.${index}.gender`}
                                      />

                                      <label
                                        className="form-check-label"
                                        for="other"
                                      >
                                        Other
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor={`employee.${index}.email`}>
                                    Email
                                  </label>{" "}
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`employee.${index}.email`}
                                    id={`employee.${index}.email`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="field_error"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor={`employee.${index}.email`}>
                                    MobileNo
                                  </label>{" "}
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`employee.${index}.MobileNo`}
                                    id={`employee.${index}.MobileNo`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.MobileNo}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="field_error"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor={`employee.${index}.password`}>
                                    password
                                  </label>{" "}
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`employee.${index}.password`}
                                    id={`employee.${index}.password`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="field_error"
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor={`employee.${index}.confirmPassword`}
                                  >
                                    confirmPassword
                                  </label>{" "}
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`employee.${index}.confirmPassword`}
                                    id={`employee.${index}.confirmPassword`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="field_error"
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <label
                                    htmlFor={`employee.${index}.department`}
                                  >
                                    Department
                                  </label>
                                  <Field
                                    as="select"
                                    name="department"
                                    className="form-control"
                                  >
                                    <option value="">Select</option>
                                    <option value={formik.values.department}>
                                      Development
                                    </option>
                                    <option value={formik.values.department}>
                                      Research
                                    </option>
                                    <option value={formik.values.department}>
                                      People Experience
                                    </option>
                                    <option value={formik.values.department}>
                                      Finance
                                    </option>
                                    <option value={formik.values.department}>
                                      Talent Acqusition
                                    </option>
                                    <option value="department-6">Other</option>
                                  </Field>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                      <div className="addButton">
                        <button
                          type="button"
                          className="add-button"
                          onClick={() =>
                            arrayHelper.insert(
                              formik.values.employee.length + 1,
                              {}
                            )
                          }
                        >
                          Add employee
                        </button>
                      </div>
                    </div>
                  );
                }}
              ></FieldArray>
            </div>
            <div className="submitdiv">
              <button type="submit" className="signin">
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
