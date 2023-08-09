import * as yup from "yup";

export const uploadRoomValidationSchema = yup.object().shape({
  name: yup.string().required("Room name is required"),
  price_per_night: yup
    .number()
    .integer("Please provide valid number")
    .positive("Please provide valid number"),
  guest: yup.number(),
  bedroom: yup.number().required("Bedroom number is required"),
  bathroom: yup.number().required("Bathroom number is required"),
  wifi: yup.bool().notRequired(),
  description: yup.string().notRequired(),
});
