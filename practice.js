//magic 8 ball for vegans
//collection of answers


//random answer pushed to an empty array and then returned.
function askingAQuestion() {
	// let questionAsked = questionForm.questionInput.value;
	// alert(questionAsked);
	let answers = ["Nope", "For sure!", "Not in  a million years", "YES", "Really? Do you need to ask"]


	let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

	let result = [];
	result.push(randomAnswer);
	console.log(result);

	return result;
 



}

function init() {
	const resultToScreen = document.getElementById("screenId");

	resultToScreen.innerText = askingAQuestion ;

}








// //reset - needs to empty array
// window.addEventListener(click, function emptyMe(){
// 		//array.remove;
// 		// return array;

// });

// function remove(event){

// }









// window.addEventListener(click, random());






//**************************************practice of high order functions****************************

// use the reduce method in combination with the concat method to “flatten” an
//  array of arrays into a single array that has all the elements of the original arrays.
// // 


// let arrays = [[1, 2, 3], [4, 5], [6]];


// function flatten(){

// }






