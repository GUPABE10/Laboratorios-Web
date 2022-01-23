$(document).ready(function() {

// Start your code from here
    var superheroes = [
        "batman", "spiderman", "Superman", "iron man", "Captain America", "flash", "Green lantern"
    ];

    superheroes.forEach(element => {
        let botones = $("#animal-buttons")
        let boton = $(`<button id= ${element} class="SH">`)
        //console.log(boton.attr( "id" ))
        boton.text(element)
        botones.append(boton)

    });

    $("#animal-buttons").on("click",".SH", function(e){
        //alert($(this).text())

        let recentGifs = $(".super-image")
        for (let i = 0; i < 10; i++) {
            recentGifs.parent().remove()
        }


        e.preventDefault()

        let peticion = {
            url:`https://api.giphy.com/v1/gifs/search?q=${$(this).text()}&api_key=DGPdyHrfsD0wiEA6jpIs708UZjBCO2AI&limit=10`,
            success: function (respuesta) {
              
                let gifs = $("#animals")
              
                respuesta.data.forEach(element => {
                    gifs.append(` <div class='animal-item'>  <p>Rating: ${element.rating}</p>
                                    <img src = '${element.images.fixed_height_still.url}' data-still = '${element.images.fixed_height_still.url}' data-animate = '${element.images.fixed_height.url}' data-state='still' class='super-image' /> 
                                </div>`)
              })
              
              
            } ,
            error: function () {
             console.log("No se ha podido obtener la información")   
            }
          }

        $.ajax(peticion)
    })


    $("#animals").on("click",".super-image", function(e){
        //alert("HOLA")
        let state = $(this).attr("data-state")

        if (state==='still') {
            $(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("data-state", "animate")
        } else{
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
        }
        
    })

    $("#animal-form").on("click","#add-animal", function(e){
        alert($(this).val())
        e.preventDefault()

        let recentGifs = $(".SH")
        superheroes.forEach(element => {
            recentGifs.remove()
        });

        superheroes.push($("#animal-input").val())

        superheroes.forEach(element => {
            let botones = $("#animal-buttons")
            let boton = $(`<button id= ${element} class="SH">`)
            //console.log(boton.attr( "id" ))
            boton.text(element)
            botones.append(boton)
    
        });
        
    })

});
