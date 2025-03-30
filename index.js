// Add your code here
function submitData(name, email) {
  const userData = { name, email };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error! Check your request.");
      }
      return response.json();
    })
    .then(data => {
      const idElement = document.createElement('p');
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}
