import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email non valide")
    .matches(/[.]/, "Entrez un format malewa@mail.fr")
    .required("l'adresse email est obligatoire"),
  password: yup
    .string()
    // .min(6, ({ min }) => `Mot de passe doit avoir au moins ${min} caractères`)
    .required("Le mot de passe est obligatoire"),
});

// SignUp.js
export const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, ({ min }) => `Le nom doit contenir minimum ${min} caractères`)
    .required("Le nom utilisateur est obligatoire"),
  email: yup
    .string()
    .email("Format email non valide")
    .matches(/[.]/, "Entrez un format malewa@mail.fr")
    .required("l'adresse email est obligatoire"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "au moin une minuscule")
    .matches(/\w*[A-Z]\w*/, "au moin une majuscule")
    .matches(/\d/, "au moins un nombre")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>?]/, "au moin un caractere special")
    .min(8, ({ min }) => `au moin ${min} caractères`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "mot de passe incompatible")
    .required("Confirmé votre mot de passe"),
});

// BlogForm.js
export const blogValidationSchema = yup.object().shape({
  name: yup.string().required("Nom du produit obligatoire"),
  price: yup.string().required("Champ obligatoire"),
  photo: yup.string().required("Photo is required"),
});
