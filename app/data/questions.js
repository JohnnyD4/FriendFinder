// $(document).ready(function() {

// 	var counter = 0;

// 	var qAnda = [
// 		{	
// 			'quest': 'I travel often within a year',
// 			'ans1': '<input type: "radio" name = "1" value="1">1',
// 			'ans2': '<input type: "radio" name = "2" value="2">2',
// 			'ans3': '<input type: "radio" name = "3" value="3">3',
// 			'ans4': '<input type: "radio" name = "4" value="4">4',
// 			'ans5': '<input type: "radio" name = "5" value="5">5',
// 		},

// 		{	
// 			'quest': 'I want to go to the mountains',
// 			'ans1': '<input type: "radio" name = "1" value="1">1',
// 			'ans2': '<input type: "radio" name = "2" value="2">2',
// 			'ans3': '<input type: "radio" name = "3" value="3">3',
// 			'ans4': '<input type: "radio" name = "4" value="4">4',
// 			'ans5': '<input type: "radio" name = "5" value="5">5',
// 		},

// 		{	
// 			'quest': 'I want to go to the beaches',
// 			'ans1': '<input type: "radio" name = "1" value="1">1',
// 			'ans2': '<input type: "radio" name = "2" value="2">2',
// 			'ans3': '<input type: "radio" name = "3" value="3">3',
// 			'ans4': '<input type: "radio" name = "4" value="4">4',
// 			'ans5': '<input type: "radio" name = "5" value="5">5',
// 		},

// 		{	
// 			'quest': 'I travel out of the country',
// 			'ans1': '<input type: "radio" name = "1" value="1">1',
// 			'ans2': '<input type: "radio" name = "2" value="2">2',
// 			'ans3': '<input type: "radio" name = "3" value="3">3',
// 			'ans4': '<input type: "radio" name = "4" value="4">4',
// 			'ans5': '<input type: "radio" name = "5" value="5">5',
// 		}
// 	];

// 	askQuestions();

// 	function askQuestions() {

// 		$(".questions").html(qAnda[counter].quest);
// 		$(".answers").html(qAnda[counter].ans1);
// 		$(".answers").append(qAnda[counter].ans2);
// 		$(".answers").append(qAnda[counter].ans3);
// 		$(".answers").append(qAnda[coutner].ans4);
// 		$(".answers").append(qAnda[coutner].ans5);
// 	}

// 	$(".answers").on("click", function () {

		

// 		if (counter > qAnda.length) {


// 		} else {

// 			counter++;

// 			askQuestions();

// 		}

// 	})



// })