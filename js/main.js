function chamar_cad(){
    $( "#cad" ).click(function (){ 
        $("#direita").fadeIn("fast");
        $("#img_esquerda").fadeIn("fast");
        $("#esquerda").slideUp(1500);
        $("#img_direita").slideUp(1500);
    });
}
function chamar_login(){
    $( "#login" ).click(function (){ 
        $("#esquerda").slideDown(1500);
        $("#img_direita").slideDown(1500);
        $("#direita").fadeOut("fast");
        $("#img_esquerda").fadeOut("fast");
    });
}
