import { Accounts } from 'meteor/accounts-base';

import '../imports/api/classes/classes.js';
import '../imports/api/courses/courses.js';


Accounts.onCreateUser((options, user) => {
   console.log(options);
   console.log('-----------------------------------');
   console.log(user);



   // Roles.addUsersToRoles(user._id, ['student']);
   user.role = options.role;

   return user;
});