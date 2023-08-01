import * as yup from "yup";
import { checkUser } from "../../api/userApi";

export const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .max(16, "Username should not exceed more than 16 characters")
    .test("existingUsername", "Username already exists", () => {}),
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide valid email adress"),
  firstName: yup
    .string()
    .required("First name is required")
    .matches(
      /[^0-9!-\/:-@[-`{-~\s]/,
      '"First name can only contain Thai or English alphabets'
    ),
  lastName: yup
    .string()
    .notRequired()
    .matches(
      /[^0-9!-\/:-@[-`{-~\s]/,
      "Last name can only contain Thai or English alphabets"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters")
    .max(16, "Password should not exceed more than 16 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password should include at least one lowercase, uppercase, number and special character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm password again")
    .oneOf([yup.ref("password")], "Password does not match"),
  phoneNumber: yup
    .string()
    .notRequired()
    .max(16, "Phone number is too long")
    .matches(/[0-9]/, "Please provide valid phone number"),
});
