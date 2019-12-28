
let son = document.getElementById("son");
let flexcontainer = document.getElementById("flex-container");



let parentflex = flexcontainer.children; 
let parentAudio = son.children;

 parentflex[0].addEventListener("click",Playme1); 
 parentflex[1].addEventListener("click",Playme2);
 parentflex[2].addEventListener("click",Playme3);
 parentflex[3].addEventListener("click",Playme4);
 parentflex[4].addEventListener("click",Playme5);
 parentflex[5].addEventListener("click",Playme6);


function Playme1() {

    parentAudio[0].currentTime = 0;
	parentAudio[0].play();

	}

	function Playme2() {

    parentAudio[1].currentTime = 0;
	parentAudio[1].play();

	}

function Playme3() {

     parentAudio[2].currentTime = 0;
	 parentAudio[2].play();

	}

    function Playme4() {

    parentAudio[3].currentTime = 0;
	parentAudio[3].play();

	}
	function Playme5() {

    parentAudio[4].currentTime = 0;
	parentAudio[4].play();

	}
	function Playme6() {
		
    parentAudio[5].currentTime = 0;
	parentAudio[5].play();

	}
	
	



	



