fetch("https://www.myntra.com/gateway/v2/user/profile", {
    method: "PUT",
    headers: {
      "x-meta-app": "channel=web;",
      
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      firstName: "",
      lastName: "",
      emailId: "",
      gender: "",
      nickname: "",
      alternatePhoneNumber: "",
      dob: ""
    })
  })
  .then(response => response.json())
  .then(data => alert(`NUMBER: ${data.phoneNumbers.join(", ")}\nEMAIL: ${data.emailId}`))
  .catch(error => alert("Error: " + error));
