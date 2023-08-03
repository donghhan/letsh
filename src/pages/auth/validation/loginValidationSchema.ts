import * as yup from "yup";
import Cookie from "js-cookie";
import { instance } from "../../../api/axios";

export const checkUsernameExists = async (username: string) => {
  try {
    const response = await instance.get("users/check-username/", {
      params: { username },
    });

    const { usernameExists } = response.data;

    if (!usernameExists) {
      return false;
    } else {
      return true;
    }
  } catch (error: any) {
    return error.message;
  }
};

export const checkPassword = async (username: string, password: string) => {
  try {
    const response = await instance.post(
      "users/check-password/",
      { username, password },
      { headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" } }
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .max(16, "Check your username length")
    .test(
      "is-username-exists",
      "Username does not exists",
      checkUsernameExists
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters")
    .max(16, "Password should not exceed more than 16 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password should include at least one lowercase, uppercase, number and special character"
    )
    .test("is-password-correct", "Password does not exist", checkPassword),
});
