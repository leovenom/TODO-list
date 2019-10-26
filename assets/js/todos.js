//Check Off Specific todo by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
    //simplifiquei tudo com o css .completed acima ou teria que escrever td isso.
    // //if li is gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     //turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // //else
    // else {
    //             //turn it gray
    // $(this).css({
    //     color: "gray",
    //     textDecoration: "line-through"
    //     //ou assim, separadamente
    //     // $(this).css("color", "gray");
    //     // $(this).css("text-decoration", "line-through");
    //     });
    // }
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //13 se refere ao ENTER
        //grabbing new todo text from input
        var todotext = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todotext + "</li>")
    }
});

$("#container").on("click", "i", function(){
    $("input[type='text']").fadeToggle();
});