var userScore = 0;
var computerScore = 0;
var userScore_div = $("#userScore");
var computerScore_div = $("#computerScore");
var score_div = document.querySelector('.score');
var result_div = document.querySelector('.result');
var rock_div = $('#r');
var paper_div = $('#p');
var scissors_div = $('#s');


// cache = storing something for future use

// Below shows in the console what icon was clicked on

function getComputerChoice(){
	var choices = ['r', 'p', 's'];

	// random number between 0 and 3
	var randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];

}


function game(userChoice){
	var computerChoice = getComputerChoice();

	var rock = '<i class="fa fa-4x fa-hand-rock-o" aria-hidden="true"></i>';
	var paper = '<i class="fa fa-4x fa-hand-paper-o" aria-hidden="true"></i>';
	var scissors = '<i class="fa fa-4x fa-hand-scissors-o" aria-hidden="true"></i>';


	switch(userChoice + computerChoice){

		case 'rs':
			$('#userChoiceBox').html(rock);
			$('#computerChoiceBox').html(scissors);
			$('#userScore').html(userScore++);
			$('.result').html('<p>Rock crushes scissors. You win!</p>')

			var winsUser = userScore++ ;
			var loserComputer = computerScore--;
			var userCh = 'rock';
			var computerCh = 'scissors';

			  database.ref().push({
			  	playerOne:{
			  		 winsUser: winsUser,
		        	userChoice: userCh,
		        dateAdded: firebase.database.ServerValue.TIMESTAMP
			  	}
		       
		      });

		      database.ref().push({
		      	playerTwo:{
		        Computerloses: loserComputer,
		        computerChoice: computerCh,
		        dateAdded: firebase.database.ServerValue.TIMESTAMP
		    		}
		      });



			// databasePlayerOne.push().set(winner);
			// database.push().set(loser);
			// database.push().set(userCh);
			// database.push().set(computerCh);

			// var newPostRef = postListRef.push();
			// newPostRef.set({
			//    			var playerOne = {
			// 	choice: 'rock',
			// 	name: 'user',
			// 	wins: userScore++
			// } // ...
			// });



			break;
		case 'pr':
			$('#userChoiceBox').html(paper);
			$('#computerChoiceBox').html(rock);
			$('#userScore').html(userScore++);
			$('.result').html('<p>Paper covers rock. You win!</p>')



	
			break;
		case 'sp':
			$('#userChoiceBox').html(scissors);
			$('#computerChoiceBox').html(paper);
			$('#userScore').html(userScore++);
			$('.result').html('<p>Scissors cuts paper. You win!</p>')

	

			break;
		case 'rp':
			$('#userChoiceBox').html(rock);
			$('#computerChoiceBox').html(paper);
			$('#computerScore').html(computerScore++);
			$('.result').html('<p>Rock smashes paper. You lose!</p>')



			break;
		case 'ps':
			$('#userChoiceBox').html(paper);
			$('#computerChoiceBox').html(scissors);
			$('#computerScore').html(computerScore++);
			$('.result').html('<p>Scissors cuts paper. You lose!</p>')

	
			break;
		case 'sr':
			$('#userChoiceBox').html(scissors);
			$('#computerChoiceBox').html(rock);
			$('#computerScore').html(computerScore++);
			$('.result').html('<p>Rock smashes scissors. You lose!</p>')


			break;
		case 'rr':
			$('#userChoiceBox').html(rock);
			$('#computerChoiceBox').html(rock);
			$('.result').html('<p>Its a draw!</p>')

		
			break;


		case 'pp':
			$('#userChoiceBox').html(paper);
			$('#computerChoiceBox').html(paper);
			$('.result').html('<p>Its a draw!</p>')

			break;
		case 'ss':
			$('#userChoiceBox').html(scissors);
			$('#computerChoiceBox').html(scissors);
			$('.result').html('<p>Its a draw!</p>')

			break;
	}
}

game();

function main(){

	rock_div.on('click', function(){
	game('r');
	})

	paper_div.on('click', function(){
		game('p');
	})

	scissors_div.on('click', function(){
		game('s');
	})
}

main();


// var databasePlayerOne = firebase.database().ref().child('Player One');

// databasePlayerOne.on('child-added', snap => console.log(snap.val()));


// Get a reference to the database service
var database = firebase.database();

// Create a new post reference with an auto-generated id



