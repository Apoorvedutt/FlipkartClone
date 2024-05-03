// How to get Data in Javasscript by the help of DOM Manipulation and EventListener

// have made a function which get the userName(InputTag) & userNumber value.

let getUserData = JSON.pa;
function SignUp() {
  let userName = document.getElementById("enterData").value;
  console.log(userName);

  let userNumber = document.getElementById("enterNumber").value;
  console.log(userNumber);

  // This is the validation for the Number Input .
  if (userNumber.length == 0) {
    alert("Enter mobile Number");
  } else if (userNumber.length != 10) {
    alert("Please fill the 10 digit only");
  } else {
    // Created an object 

    let userData = {
      userName: userName,
      userNumber: userNumber,
    };

    // Created an Empty array
    let users = [];
    users.push(userData);
    localStorage.setItem("usersdata", JSON.stringify(users));
  }
}
