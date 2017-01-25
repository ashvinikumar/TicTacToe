$(document).ready(function() {
	// var turn = "<span style='color:red'>X</span>";
	var turn = "X";
	var computersTurn = "O";
	var turns = ["", "", "", "", "", "", "", "", ""];
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
		var placeTaken = false;
		while(placeTaken===false && count <= 5){
			//console.log(count);
			// random turn for computer
			var computersMove = Math.floor(Math.random() * 9) + 1; 
			//console.log("computersMove is: " + computersMove);
			var move = $("#"+computersMove).text();
			//console.log("move is: " + move);
			if(computersMove){
				if (turn==="X"){
					turn = "O";
					$("#"+computersMove).text(turn);
					placeTaken = true;
					turns[computersMove] = turn;
					turn = "X";
				}
				else if (turn==="O"){
					turn = "X";
					$("#"+computersMove).text(turn);
					placeTaken = true;
					turns[computersMove] = turn;
					turn = "O";
				}
			}
		}
	}


	function playerTurn(turn, id){
		var buttonClicked = $("#"+id)[0]["id"];
		// console.log(buttonClicked);
		// console.log("id is: " + id);
		if(buttonClicked===id && turns[id-1]===""){
			count++;
			// console.log("count is:" + count);

			turns[id-1] = turn;
			// console.log("turns is: " + turns);
			$("#"+id).text(turn);
			findWhoWins(turns, turn);
			if (gameOn === false){
				computerTurn();
				findWhoWins(turns, computersTurn)
			}
		}	
	}


	function clear(){
		$(".btn-lg").html("");
		turns = ["", "", "", "", "", "", "", "", ""];
		count = 0;
		gameOn = true;
	}

	$("#reset").click(function(){
		setTimeout(clear, 2000);
	});

	function reset(){
		setTimeout(clear, 3000);
	}


	$(".btn-lg").click(function() {
		var buttonID = $(this).attr("id");
		//console.log(buttonID);
		playerTurn(turn, buttonID);
	});

	function findWhoWins(turns, currentTurn){
		//console.log(turns);
		if(turns[0] === currentTurn && turns[1] === currentTurn && turns[2] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[3] === currentTurn && turns[4] === currentTurn && turns[5] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[6] === currentTurn && turns[7] === currentTurn && turns[8] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[0] === currentTurn && turns[4] === currentTurn && turns[8] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[2] === currentTurn && turns[4] === currentTurn && turns[6] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[0] === currentTurn && turns[3] === currentTurn && turns[6] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[1] === currentTurn && turns[4] === currentTurn && turns[7] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		else if(turns[2] === currentTurn && turns[5] === currentTurn && turns[8] === currentTurn){
			alert("Player " + currentTurn + " wins!");
			gameOn = false;
			reset();
		}
		// else {
		// 	gameOn = false;
		// }
		else if(turns[0].length>0 && turns[1].length>0 && turns[2].length>0 && turns[3].length>0 && turns[4].length>0 && turns[5].length>0 && turns[6].length>0 && turns[7].length>0 && turns[8].length>0) {
			alert("This was a DRAW...");
			gameOn = false;
			reset();
		}
	}

});