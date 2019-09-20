const DateValue = require ("./DateValue");
let uniqueDate = [];
const myData = DateValue.DataVal;

// Extracting unique date from DataVal
myData.map(item => {
	let a = uniqueDate.indexOf(item.date);
	if (a == -1) {
		uniqueDate.push(item.date);
	}
});

//Group data be date
uniqueDate.map(date => {
	console.log(' DATE: ' + date);
	myData.map(item => {
		if (item.date === date) {
			console.log('    	File Name:' + item.fileName);
			console.log('    	Email:' + item.email);
		}
	});
});