const submitToAPI = (event) => {
  const name = document.getElementById("name-input").value;
  const phoneNumber = document.getElementById("phone-input").value;
  const email = document.getElementById("email-input").value;
  const description = document.getElementById("description-input").value;

  const formContent = {
    name,
    phoneNumber,
    email,
    description,
  };

  console.log(formContent);

  return;
};
