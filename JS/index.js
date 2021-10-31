
function applyAnimation( e ) {
  
    let content = document.getElementById("contentInicio");
    
    content.className = "";
    content.classList.add( e.target.id );
    
  }
  /*
  document.getElementById("appears").addEventListener( "click", applyAnimation, false );
  document.getElementById("cross").addEventListener( "click", applyAnimation, false );
  */
  document.getElementById("contentInicio").classList.add("appears");


  
  
  
	$(".setuser button").click(function(){
		let desiredName = $(".setuser .username").val();
		if(desiredName !== "" && desiredName !== null){
			$(".setuser").fadeOut(1000);
      $("#link").click(function(){
      })
		}else{
			alert("Porfavor elija un nombre");
		}
	});
