module.exports=function(app){
	var Project = app.loopback.getModel('project');
	
    
   /* Category.settings.acls = [{ principalType: 'ROLE',
    principalId: '$everyone',
    permission: 'DENY' },
  { principalType: 'ROLE',
    principalId: '$projectAdmin',
    permission: 'ALLOW',
    property: '__create__cards' },
  { principalType: 'ROLE',
    principalId: '$projectMember',
    permission: 'ALLOW',
    property: '__create__cards' },
  { principalType: 'ROLE',
    principalId: '$projectAdmin',
    permission: 'ALLOW',
    property: '__destroyById__cards' },
  { principalType: 'ROLE',
    principalId: '$projectMember',
    permission: 'ALLOW',
    property: '__destroyById__cards' },
  { principalType: 'ROLE',
    principalId: '$authenticated',
    permission: 'ALLOW',
    property: 'prototype$updateAttributes' }];	*/

//app.models.user.settings.acls = require('./user-acls.json');

//console.log(app.models.user.settings.acls);
	//console.log(Project.settings.acls);
	//console.log(Card.settings.acls);
	//console.log(Category.settings.acls);
};