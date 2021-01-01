var object1 = prompt("What is your name?", "Someone");
var object2 = prompt("What is your age?", "23");
var object3 = prompt("What is your institution name?", "MIT");
var object4 = prompt("What is your department name?", "IT");
var object5 = prompt("What is your phone number?", "1234567890");

var user = {      
            name: object1,
            age: object2,
            institution: object3,
            department: object4,
            phoneNumber: object5
      };

var lengthOfObject = Object.keys(user).length;


document.querySelector('.object-button').addEventListener('click', function() {

      document.querySelector('.answer-part').innerHTML = 
      `<h3>You have given us ${lengthOfObject} information about you!</h3><br>` +

      `They are: <p style="font-size: 15px; font-weight: 500;">${Object.keys(user)}</p>` +

       `Now tell us through the below box which information do you wanna see and press the submit button <br><br>` +

      `<div class="input-group mb-3">

      <input type="text" class="form-control submission-form-control" placeholder="Tell Us" aria-label="Tell Us" aria-describedby="button-addon2">

      <button style="font-weight: bold;" class="btn btn-success submission-button" type="button" id="button-addon2">Submit</button>

      </div>`;

      document.querySelector('.submission-button').addEventListener('click', function() {
            var submitted = document.querySelector('input').value;

            var submitToLower = submitted.toLowerCase();
      
            if(submitToLower == 'name'){
                  document.querySelector('.answer-part').innerHTML = `<p>Your name is <b>${user.name}</b> as you have entered.</p>`
            }

            else if (submitToLower == 'age'){
                  document.querySelector('.answer-part').innerHTML = `<p>Your age is <b>${user.age}</b> as you have entered.</p>`
            }

            else if (submitToLower == 'institution'){
                  document.querySelector('.answer-part').innerHTML = `<p>Your institution name is <b>${user.institution}</b> as you have entered.</p>`
            }

            else if (submitToLower == 'department'){
                  document.querySelector('.answer-part').innerHTML = `<p>Your department name is <b>${user.department}</b> as you have entered.</p>`
            }

            else if (submitToLower == 'phone number' || submitToLower == 'phonenumber'){
                  document.querySelector('.answer-part').innerHTML = `<p>Your phone number is <b>${user.phoneNumber}</b> as you have entered.</p>`
            }

            else {
                  document.querySelector('.answer-part').innerHTML = "Shut The Fuck Up You Dumbass! Just don't press the button without filling up the fucking box."
            }
      
      })
})



