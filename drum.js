            //Mouse click event
var b=document.querySelectorAll(".box");
for(var i=0;i<b.length;i++)
{
    b[i].addEventListener("click",function(){
        start(this.innerHTML);
        animation(this.innerHTML);
    });
}
// for(var i=0;i<b.length;i++)
// {
//     b[i].addEventListener("click",abc);
// }


            //KeyPress event
document.addEventListener("keypress",function(event){   //e
    start(event.key);       //e.key
    animation(event.key);
});
document.addEventListener("keyup",function(event){   //e
    animationremove(event.key);
});
// document.addEventListener("keypress",start);


function start(key)   //function start(event)
{
    switch(key)       //switch(event.key)
    {
        case 'w':
            var audio1 = new Audio("/sounds/sound1.wav");
            audio1.play(); 
            break;
        case 'a':
            var audio2 = new Audio("/sounds/sound2.wav");
            audio2.play(); 
            break;
        case 's':
            var audio3 = new Audio("/sounds/sound3.wav");
            audio3.play(); 
            break;
        case 'd':
            var audio4 = new Audio("/sounds/sound4.wav");
            audio4.play();   
            break;
        case 'j':
            var audio5 = new Audio("/sounds/sound5.wav");
            audio5.play(); 
            break;
        case 'k':
            var audio6 = new Audio("/sounds/sound6.wav");
            audio6.play(); 
            break;
        case 'l':
            var audio7 = new Audio("/sounds/sound7.wav");
            audio7.play();  
    }
}

function animation(key)
{
    var x=document.querySelector('#'+key);
    x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed");
    },200)
}



// function animationremove(key)
// {
//     document.querySelector('#'+key).classList.remove("pressed");
// }


//function abc()
// {
//     var c=this.innerHTML;
//     switch(c)
//     {
//         case 'w':
//             var audio1 = new Audio("/sounds/sound1.wav");
//             audio1.play(); 
//             break;
//         case 'a':
//             var audio2 = new Audio("/sounds/sound2.wav");
//             audio2.play(); 
//             break;
//         case 's':
//             var audio3 = new Audio("/sounds/sound3.wav");
//             audio3.play(); 
//             break;
//         case 'd':
//             var audio4 = new Audio("/sounds/sound4.wav");
//             audio4.play();   
//             break;
//         case 'j':
//             var audio5 = new Audio("/sounds/sound5.wav");
//             audio5.play(); 
//             break;
//         case 'k':
//             var audio6 = new Audio("/sounds/sound6.wav");
//             audio6.play(); 
//             break;
//         case 'l':
//             var audio7 = new Audio("/sounds/sound7.wav");
//             audio7.play();  
//     }