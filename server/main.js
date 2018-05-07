
import {Accounts }from 'meteor/accounts-base';


Accounts.onCreateUser((options, user) => {
   console.log(options);
   console.log('-----------------------------------');
   console.log(user);



   // Roles.addUsersToRoles(user._id, ['student']);
   user.role = options.role;

   return user;
});