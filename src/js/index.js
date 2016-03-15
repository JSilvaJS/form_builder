// Javascript Entry Point

import $ from 'jquery';
import data from './form_data';
import { text, select, textArea } from './template';

// var inputInfoToTemplate = {
// 	'label':firstName
// }


// data.forEach(function(inputInfo){
// $('.content_zone').append(text(inputInfo));

// });



var dataTypeToTemplate = {
	'text': text,
	'email':text,
	'select': select,
	'textarea':textArea,
	'tel':text
}

data.forEach(function(inputInfo) {
	var template = dataTypeToTemplate[inputInfo.type];
	var html = template(inputInfo);
	$('.content_zone').append(html);
});








// import $ from 'jquery';

// import users from './users';

// import { manager, employee, customer, cool } from './templates';

// var $app = $('.app');

// var userTypeToTemplate = {
//   'Manager': manager,
//   'Employee': employee,
//   'Customer': customer
// }

// users.forEach(function(user) {
//   var template = userTypeToTemplate[user.type];
//   var html = template(user);
//   $app.append( html );
// });