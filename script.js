$(document).ready(function(){
    $("#slide figure img:eq(0)").show().addClass('ativo')
    var texto=$(".ativo").attr("alt")
    $("#slide").prepend("<p>"+texto+"</p>")

    function slide() {
        if ($(".ativo").next().length){
            $(".ativo").fadeOut().removeClass('ativo').next().fadeIn().addClass("ativo")
            
            $("#slide p").fadeOut().remove()
            var texto=$(".ativo").attr("alt")
            $("#slide").fadeIn().prepend("<p>"+texto+"</p>")
        
        }else{
            $(".ativo").fadeOut().removeClass("ativo")
            $("#slide figure img:eq(0)").fadeIn().addClass('ativo')
            
            $("#slide p").fadeOut().remove()
            var texto=$(".ativo").attr("alt")
            $("#slide").fadeIn().prepend("<p>"+texto+"</p>")
        }
    }

    setInterval(slide, 5000)
    $("#avancar").click(slide)  
    $("#voltar").click(function(){
        if($(".ativo").attr("alt")!="Google"){
            $(".ativo").fadeOut().removeClass("ativo").prev().fadeIn().addClass("ativo")
            $("#slide p").fadeOut().remove()
            var texto=$(".ativo").attr("alt")
            $("#slide").fadeIn().prepend("<p>"+texto+"</p>")
    
        }else {
            $(".ativo").fadeOut().removeClass("ativo")
            $("#slide figure img:eq(2)").fadeIn().addClass("ativo")
            $("#slide p").fadeOut().remove
            var texto=$(".ativo").attr("alt")
            $("#slide").fadeIn().prepend("<p>"+texto+"</p>")
        }
    })

    //botão google
    function irParaSlide1 (){
        $(".ativo").fadeOut().removeClass("ativo")
        $("#slide figure img:eq(0)").fadeIn().addClass("ativo")
        $("#slide p").fadeOut().remove()
        var texto=$(".ativo").attr("alt")
        $("#slide").fadeIn().prepend("<p>" +texto+ "</p>")
    }

    $("#gg").click(irParaSlide1)


    function irParaSlide2 (){
        $(".ativo").fadeOut().removeClass("ativo")
        $("#slide figure img:eq(1)").fadeIn().addClass("ativo")
        $("#slide p").fadeOut().remove()
        var texto=$(".ativo").attr("alt")
        $("#slide").fadeIn().prepend("<p>" +texto+ "</p>")
    }


    $("#fb").click(irParaSlide2)

    function irParaSlide3 (){
        $(".ativo").fadeOut().removeClass("ativo")
        $("#slide figure img:eq(2)").fadeIn().addClass("ativo")
        $("#slide p").fadeOut().remove()
        var texto=$(".ativo").attr("alt")
        $("#slide").fadeIn().prepend("<p>" +texto+ "</p>")
    }


    $("#ig").click(irParaSlide3)
})



