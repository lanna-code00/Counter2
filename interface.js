
var date_string;
function formatAMPM() {
    var der = new Date();
    var DD = ("0" + der.getDate()).slice(-2);
    var MM = ("0" + (der.getMonth() + 1)).slice(-2);
    var YYYY = der.getFullYear();
    var hh = ("0" + der.getHours()).slice(-2);
    var mm = ("0" + der.getMinutes()).slice(-2);
    var ss = ("0" + der.getSeconds()).slice(-2);
    date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
    document.getElementById("timing").innerHTML = date_string;
    setTimeout('formatAMPM()',1000)
}
formatAMPM();
  $(function(){
		   $('#menu1').hide();
			$('#menu').on('click', function(){
				$('#sidebar').css('width','230px')
				$('#sidebar').css('display','block');
				$('#menu').hide();
				$('#menu1').show();
        })
			$('#menu1').on('click', function(){
				$('#sidebar').hide();
				$('#sidebar').css('width','0')
				$('#menu').show();
				$('#menu1').hide();
    })
}())
function start(){
$('#welcomePage').fadeOut(2000)
document.getElementById('welcomePage').style.display = "none";
setTimeout('logIn()',1000)
}
setTimeout('start()',1000);
function logIn (){
    $('#mainPage').fadeIn(2000)
document.getElementById('mainPage').style.display = "";
document.getElementById('add').style.display = "";
document.getElementById('menuBar').style.display = ""
}
document.querySelector("#page-top > header > div.container.text-center.my-auto > h1");

// calculate page starts here ....

$(function(){
	$('#calculateButton').on('click',function(){
		$('#calculatePage').fadeIn(1000);
		$('#mainPage').css('display','none');
		$('#aboutPage').css('display','none');
		$('#calculatePage').css('display','block');
		$('#add').css('display','none');
	})
})
// calculate page ends here ....

// about page begins ....
$(function(){
	$('#aboutButton').on('click',function(){
		$('#aboutPage').fadeIn(1000);
		$('#mainPage').css('display','none');
		$('#aboutPage').css('display','block');
		$('#calculatePage').css('display','none');
		$('#add').css('display','none');
	})
})
// about page ends ....

// exit page starts from here.....

$(function(){
	$('#exit').on('click',function(){
		$('#exitPage').fadeIn(1000);
		$('#exitPage').css('display','block');
		$('#exitModal').css('display','none');
		$('#welcomePage').css('display','none');
		$('#menuBar').css('display','none');
		$('#sideBar').css('display','none');
		$('#mainPage').css('display','none');
		$('#aboutPage').css('display','none');
		$('#calculatePage').css('display','none');
		$('#add').css('display','none');
	})
})

// exit page ends here.....

$(function(){
	$('#allContainer').on('click',function(){
	$('#sidebar').css('display','none')
	})
})
    backToMainPage = () =>{
	$('#mainPage').fadeIn(1000);
	document.getElementById('mainPage').style.display = "";
	document.getElementById('calculatePage').style.display = "none";
	document.getElementById('add').style.display = "";
	$('#aboutPage').css('display','none');	
}
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { 
      event.target.innerHTML++;
    }

  });