import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email non valide")
    .matches(/[.]/, "Entrez un format malewa@mail.fr")
    .required("l'adresse email est obligatoire"),
  password: yup
    .string()
    .required("Le mot de passe est obligatoire"),
});

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
    .matches(/\d/, "au moins un chiffre")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>?]/, "au moin un caractere special")
    .min(8, ({ min }) => `au moin ${min} caractères`)
    .required("Champ obligatoire"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "mots de passes non identiques")
    .required("Confirmé votre mot de passe"),
});

export const newProductValidationSchema = yup.object().shape({
  name: yup.string().required("Nom du produit obligatoire").min(4, ({ min }) => `Ce champ doit contenir minimum ${min} caractères`),
  price: yup.number().required("Champ obligatoire"),
  photo: yup.string().required("Photo is required"),
});

export const cardValidation = yup.object().shape({
  carte: yup.string().max(16, ({ max }) => `Ce champ doit contenir ${max} caractères`).required('Champ requis'),
  crypto: yup.string().max(3, ({ max }) => `Ce champ doit contenir ${max} caractères`).required('Champ requis'),
  validation: yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Le format doit être MM/AA').required('Champ requis')
})
