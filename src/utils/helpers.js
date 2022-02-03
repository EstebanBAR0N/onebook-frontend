// retourne Vrai si email est une adresse email valide
export const isValidEmail = (email) => {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return true;
  }
  return false;
};

// retourne Vrai si tous les champs requis sont remplis
export const allFieldsAreFilledIn = (fields) => {
  for (const [key, value] of Object.entries(fields)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

export default { isValidEmail, allFieldsAreFilledIn };