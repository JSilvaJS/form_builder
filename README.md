# Synopsis
The goal is to use [this data](https://tiy-learn-content.s3.amazonaws.com/e7d0316a-form_data.js) to generate a form via Javascript. 

# Sample Code
``` javascript
export function text(inputInfo) {
	return `
	<div class="text_div">
	<div class="pikachu"></div>
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
  		<option>Select Language<option>
  			${opsOptions}
  		</select>
  	</div>
  		`;
};


export function textArea (inputInfo) {
	return `
	<div class="textArea_div">
	<div class="pikachu"></div>
		<textarea type="${inputInfo.type}" id="${inputInfo.id}" placeholder="${inputInfo.label}"></textarea>
	</div>
	`;
}
```
# Deployed Code
[Check it out!](
tiy-2016q1-eh_cosmo-form_builder.surge.sh)
