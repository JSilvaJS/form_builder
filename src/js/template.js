

export function text(inputInfo) {
	return `
	<div class="text_div">
		<input type="${inputInfo.type}" id="${inputInfo.id}" placeholder="${inputInfo.label}">
	</div>
	`;
}

export function select(inputInfo) {
	var ops = inputInfo.options;

	var opsOptions = ops.map(function(op){
		return `<option>${op.label}</option>`;
	});


	opsOptions = opsOptions.join('')

	return `
	<div class="select_div">
	  	<label for="${inputInfo.id}""><label>
  		<select id="${inputInfo.id}">
  		<option>Select Language</option>
  			${opsOptions}
  		</select>
  	</div>
  		`;
};


export function textArea (inputInfo) {
	return `
	<div class="textArea_div">
		<textarea type="${inputInfo.type}" id="${inputInfo.id}" placeholder="${inputInfo.label}"></textarea>
	</div>
	`;
}












// export function manager(user) {
  
//   var subs = user.subordinates;

//   var subsHtml = subs.map(function(sub) {
//     return `<li>${sub}</li>`;
//   });

//   subsHtml = subsHtml.join('');

//   return `
//     <div class="user manager">
//       <div class="first-name">${user.firstName}</div>
//       <div class="last-name">${user.lastName}</div>
//       <div class="employee-id">${user.employeeId}</div>
//       <div class="role">${user.role}</div>
//       <ul class="subordinates">
//         ${subsHtml}
//       </ul>
//     </div>
//   `;
// }

// export function employee(user) {
//   return `
//     <div class="user employee">
//       <div class="first-name">${user.firstName}</div>
//       <div class="last-name">${user.lastName}</div>
//       <div class="employee-id">${user.employeeId}</div>
//       <div class="role">${user.role}</div>
//       <div class="sales-record">${user.salesRecord}</div>
//     </div>
//   `;
// }

// export function customer(user) {
//   var purs = user.purchaseHistory;

//   var pursHtml = purs.map(function(pur) {
//     return `<li>${pur}</li>`;
//   });

//   pursHtml = pursHtml.join('');

//   return `
//     <div class="user customer">
//       <div class="first-name">${user.firstName}</div>
//       <div class="last-name">${user.lastName}</div>
//       <ul class="purchase-history">
//         ${pursHtml}
//       </ul>
//     </div>
//   `;
// }