$(document).ready(function() {
	// var turn = "<span style='color:red'>X</span>";
	var turn = "X";
	var computersTurn = "O";
	var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
	var gameOn = false;
	var count = 0;


	$("#x").click(function() {
		turn = "X";
		computersTurn = "O";
		$("#x").addClass("btn-primary");
		$("#o").removeClass("btn-primary");
		//reset();
	});

	$("#o").click(function() {
		turn = "O";
		computersTurn = "X";
		$("#o").addClass("btn-primary");
		$("#x").removeClass("btn-primary");
		//reset();
	});


	function computerTurn(){
		var taken = false;
		while(taken===false && count != 5){
			// random turn for computer
			var computersMove = Math.floor(Math.random() * 9) + 1; 
			var move = $("#"+computersMove).text();
			if(move){
				$("#"+computersMove).text(computersTurn);
				taken = true;
				turns[computersMove] = computersTurn;
			}
		}
	}


	function playerTurn(turn, id){
		//console.log(id);
		//console.log(turn);
		document.getElementById(id).innerHTML = turn;
		//var buttonClicked = $("#"+id).text();
		//console.log(buttonClicked);
		// if(buttonClicked){
			count++;
			turns[id] = turn;
			//console.log($("#"+id));
			//document.getElementById(id).innerHTML = turn;
			//console.log(turn);
			$("#"+id).text(turn);
			findWhoWins(turns, turn);
			if (gameOn === false){
				computerTurn();
				findWhoWins(turns, computersTurn)
			}
		// }
	}


	$("#reset").click(function(){
		//var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
		$(".btn-lg").html("");
		//count = 0;
		//gameOn = false;

	});


	$(".btn-lg").click(function() {
		var buttonID = $(this).attr("id");
		//console.log(buttonID);
		playerTurn(turn, buttonID);
	});

	function findWhoWins(turns, currentTurn){
		//console.log(turns);
		if(turns[1] === currentTurn && turns[2] === currentTurn && turns[3] === currentTurn){
			gameOn = true;
			// reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[4] === currentTurn && turns[5] === currentTurn && turns[6] === currentTurn){
			gameOn = true;
			//reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[7] === currentTurn && turns[8] === currentTurn && turns[9] === currentTurn){
			gameOn = true;
			// reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[1] === currentTurn && turns[5] === currentTurn && turns[9] === currentTurn){
			gameOn = true;
			// reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[3] === currentTurn && turns[5] === currentTurn && turns[7] === currentTurn){
			gameOn = true;
			// reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[1] === currentTurn && turns[4] === currentTurn && turns[7] === currentTurn){
			gameOn = true;
			// reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[2] === currentTurn && turns[5] === currentTurn && turns[8] === currentTurn){
			gameOn = true;
			// reset();
			alert("Player " + currentTurn + " wins!");
		}
		else if(turns[3] === currentTurn && turns[6] === currentTurn && turns[9] === currentTurn){
			gameOn = true;
			//reset();
			alert("Player " + currentTurn + " wins!");
		}
		else {
			gameOn = false;
		}
	}

});