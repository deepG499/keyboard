let typed=[""];
window.addEventListener("keydown", () => {document.getElementById("typedText").focus()});

document.addEventListener("keydown", function(event){
    let keySound= new Audio("./key.mp3");
    keySound.play();
    // console.log(event);
    console.log(event.code);
    if(event.key){
        let keyPressed="." + event.code;
        // console.log(keyPressed);
        document.querySelector(keyPressed).classList.add("hover");
        setTimeout(function(){
            document.querySelector(keyPressed).classList.remove("hover");
        },250);
    }

    let keyDip= event.code;
    switch (keyDip) {
    case Backspace:
        typed.pull(event.key);
        break;
    case AltLeft:
        // event.preventDefault();
        let escKey= new KeyboardEvent("keydown", {
            key:"Escape"
        });
        document.dispatchEvent(escKey);
        break;
    default:
        typed.push(event.key);
    }
        // typed.push(event.key);
        console.log(typed);
        document.querySelector("textarea").value= typed ;
    })