const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validataPasseord = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

const validataForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validataPasseord(password);

  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("Username is not valid!");
  } else if (!passwordResult) {
    alert("Password must be between 4 and 20 characters!");
  }
};

export default validataForm;
