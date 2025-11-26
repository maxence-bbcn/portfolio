import * as yup from "yup";

export const contactSchema = yup.object().shape({
  lastname: yup.string().required("Veuillez saisir votre nom."),
  firstname: yup.string().required("Veuillez saisir votre prénom."),
  email: yup
    .string()
    .email("Veuillez saisir un email valide.")
    .required("Veuillez saisir votre adresse email."),
  message: yup.string().required("Veuillez saisir un message."),
});
