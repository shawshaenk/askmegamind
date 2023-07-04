var responses = [ 
    "It is certain", 
    "Without a doubt", 
    "You may rely on it", 
    "Yes definitely", 
    "It is decidedly so", 
    "As I see it, yes", 
    "Most likely", 
    "Yes", 
    "Outlook good", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Better not tell you now", 
    "Ask again later", 
    "Cannot predict now", 
    "Concentrate and ask", 
    "Don’t count on it", 
    "Outlook not so good", 
    "My sources say no", 
    "Very doubtful", 
    "My reply is no"
];
var output;
var answer = document.getElementById("bubble");
var changeMegamind = document.getElementById("megamindimage");

function ask(){
    document.getElementById('questionbox').focus();
    answer = document.getElementById("bubble");

    if (document.getElementById("questionbox").value == ""){
        changeMegamind.src = "confusedmegamind.png";
        answer.innerHTML = "...";
        return;
    }

    answer = document.getElementById("bubble");
    changeMegamind = document.getElementById("megamindimage");

    answer.innerHTML = "Hmm..."
    changeMegamind.src = "megamindthinking.png";
    answer.setAttribute("style", "background-color:black;");

    setTimeout(function () {
        output = Math.floor(Math.random() * responses.length);
        answer.innerHTML = responses[output];
        if (output >= 0 && output <= 9){
            answer.setAttribute("style", "background-color:#006400;");
            changeMegamind.src = "happymegamind.png";
        }else if (output >= 10 && output <= 14){
            answer.setAttribute("style", "background-color:#F4BB44;");
            changeMegamind.src = "confusedmegamind.png";
        }else{
            answer.setAttribute("style", "background-color:#880808;");
            changeMegamind.src = "sadmegamind.png";
        }
    }, 1050);
}

function reset(){
    document.getElementById('questionbox').focus();
    document.getElementById('questionbox').value = '';
    answer.setAttribute("style", "background-color:#black;");
    answer.innerHTML = "Ask me a yes/no question"
    changeMegamind.src = "megamind.png";
}