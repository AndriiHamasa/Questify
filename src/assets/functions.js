export const getNameObj = (email) => {
  const nameObj = {
    firstLetter: email[0].toUpperCase(),
    name: email
  }
  const index = email.indexOf('@')
  

  if (index !== -1) {
    nameObj.name = email.slice(0, index)
    return nameObj
  }

  return nameObj
};
