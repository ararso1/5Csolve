$(document).ready(function(){
    $nav = $('.navbar');
    $toggleCollapse = $('.toggle-collapse');

    /* Click event for toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
})


/* function comment(){

    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;
    var message = document.getElementById('label');
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

    if(email !='' && text !='' ){
        if(regx.test(email) && text!=''){
            message.innerHTML='Thanks For your Comment';
            message.style.visibility="visible";
            message.style.color="green";
        }
        if(!regx.test(email)){
            message.innerHTML='Invalid email';
            message.style.visibility="visible";
            message.style.color="red";
        }
    }
    else{
        message.innerHTML='Please!, give your Valid Email and Comment';
        message.style.visibility="visible";
        message.style.color="red";
    }
    event.preventDefault();
}

function dropdown(){
    document.getElementById('head1').classList.toggle('show');
}

window.onclick = function(event){
    if(!event.target.matches('.dropbt')){
        var drop = document.getElementsByClassName('head');
        var i;
        for (i = 0; i < drop.length; i++){
            var openDrop = drop[i];
            if(openDrop.classList.contains('show'));{
                openDrop.classList.remove('show');
            }
        }
    }
}
 */
