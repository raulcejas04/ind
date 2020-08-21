import '../css/image_cropper.scss';
const $ = require('jquery');

import Cropper from 'cropperjs/dist/cropper';
let cropper;
let file;
var preview = document.getElementById('imagen');
var fileInput = document.getElementById('foto_perfil_imagen');

// trae el archivo elegido, destruye el cropper anterior si ya existe, y muestra el modal
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            if (cropper) {
                cropper.destroy();
            }
            $('#cropping-modal').modal('show');
             console.log("executing");
            file = reader.result;


        };

        reader.readAsDataURL(input.files[0]);
    }
}

//cada vez que cambia el archivo subido llama a readURL
$("#foto_perfil_imagen").change(function () {
    readURL(this);
});

$(".custom-file-input").on("change", function() {
   
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$("#btnCropAgain").click(function () {
    if (cropper) {
        cropper.destroy();
    }
    $('#cropping-modal').modal('show');
});
// una vez que el modal termino de mostrarse, carga el archivo en 
// el img dentro del modal
// (cropper.js no funciona bien si no se hace esto)
$('#cropping-modal').on('shown.bs.modal', function () {
    preview.src = file;
});

// al cerrar el modal guarda las coordenadas del corte
$('#cropping-modal').on('hidden.bs.modal', function () {
    var data = cropper.getData(true);
    $("#foto_perfil_x").val(data.x);
    $("#foto_perfil_y").val(data.y);
    $("#foto_perfil_alto").val(data.height);
    $("#foto_perfil_ancho").val(data.width);
});

//cuando se carga el img del modal, se instancia un cropper
preview.addEventListener('load', function (event) {

    cropper = new Cropper(preview, {
        initialAspectRatio: 1 / 1,
        aspectRatio: 1 / 1,
        viewMode: 2 / 1,
        cropBoxResizable: true,
        minContainerWidth: 200,
        minContainerHeight: 200,
        minCanvasWidth: 200,
        minCanvasHeight: 200,
        dragMode: 'move'
    });
});
