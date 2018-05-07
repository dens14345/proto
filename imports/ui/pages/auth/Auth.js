import  './Auth.html';


Template.Auth.helpers({});

Template.Auth.events({

   'submit #loginForm'(e) {
      e.preventDefault();
      let input = e.target;

      let email = input.loginEmail.value
      let password =  input.loginPassword.value


      Meteor.loginWithPassword(email, password, (error, success) => {
         console.log(error);
         console.log(success);
      });



   },

   'submit #registerForm'(e) {
      e.preventDefault();
      let input = e.target;

      let email =  input.registerEmail.value
      let password  = input.registerPassword.value
      let role =  input.role.value

      console.log(input.registerEmail.value);
      console.log(input.registerPassword.value);
      console.log(input.role.value);

      Accounts.createUser({
         email,
         password,
         profile:{
            role: role
         },
         role
      });
   },

});
