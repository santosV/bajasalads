$(document).ready(function(){ 
    alertify.set({ delay: 3000 });
    
     setTimeout(function() {
    $("#alert_inicial").fadeOut(1500);
    },5000);
    
    reset_img();

    $('.btnSiguientevalid').click(function(){
    var select=$("select option:selected").val();
    if(select=='nada'){
     alertify.error("Selecione tamaño de porción.");
     }else{
     $('.nav-tabs > .active').next('li').find('a').trigger('click');  
     $('html, body').animate({scrollTop: '0px'}, 50);
     }
    });
    
    $('.btnSiguiente').click(function(){
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 50);
       
    });

    $('.btnAtras').click(function(){
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 50);
    });
    

    });//fin document ready
 $('.btn-compra').click(function(){
    alertify.success("Añadido al carrito");                  
  });

function reset_img(){
    $("#porciones").imagepicker({
    hide_select: true,
    show_label: true
    });
    $("#pollos_mariscos").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#barra_fria").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#aderezos").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#extras").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
     $("#bebidas").imagepicker({
    hide_select: true,
    show_label: true
    });
$("#porciones").imagepicker({
    hide_select: true,
    show_label: true,
    selected: function(option){
        var values = this.val();
       if(values=='chico'){
         $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 1
     }); 
           $("#barra_fria").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 3
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 2
     });

        $("#extras").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
             limit: 1
     });
        
       }
         if(values=='mediano'){
               $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 2
     });  
         $("#barra_fria").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 4
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 3
     });

        $("#extras").imagepicker({
          limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
        limit: 1
     });
         }
        if(values=='grande'){
             $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 3
     });  
         $("#barra_fria").imagepicker({
         limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 5
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
         limit: 4
     });

        $("#extras").imagepicker({
          limit_reached: function(){alertify.error("Numero de ingredientes  de este tipo superado.");},
         hide_select: true,
         show_label: true,
             limit: 1
     });
        }
    }



    
 });
  
    
    };
