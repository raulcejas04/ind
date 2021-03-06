const $ = require('jquery');

$(document).ready(function () {
    console.log("loaded js");
    //formato de las flechas de ordenamiento
    $("th").each(function () {
        handleArrows($(this));
    });
    // submit cuando se cambia el ordenamiento
    $("th").click(function () {
        submitNewSort($(this));
    });
    //submit cuando cambia la cantidad de registros a mostrar
    // regresa a la primer pagina
    $("#form_pageSize").change(function () {
        $("#form_pageNum").val(1);
        $("#formBusqueda").submit();
    });
    //muestra la siguiente pagina
    $("#btnPageNext").click(function () {

        var pagenum = $(this).data('pagenum');
        var pagesize = $(this).data('pagesize');
        var totalRecords = $(this).data('totalrecords');
        var totalPages = Math.ceil(totalRecords / pagesize);
        if (pagenum + 1 <= totalPages) {
            $("#form_pageNum").val(pagenum + 1);
            $("#formBusqueda").submit();
        }
    });
    //muestra la pagina anterior
    $("#btnPageBack").click(function () {
        var pagenum = $(this).data('pagenum');
        if (pagenum - 1 >= 1) {
            $("#form_pageNum").val(pagenum - 1);
            $("#formBusqueda").submit();
        }
    });

    //Abrir modal exportar
    $("#btnAbrirModal").click(function () {
        $("#modalExportar").modal('show');
    });

    //Mostrar modal para confirmar eliminacion
    $(".btnOpenModal").click(function () {
        $("#hiddenId").val($(this).data("eliminarId"));
        $("#modalEliminar").modal('show');
    });
    
    //Mostrar modal para confirmar reseteo de contraseña
    $(".btnOpenModalReseteo").click(function () {
        $("#hiddenId").val($(this).data("reseteoId"));
        $("#modalReseteo").modal('show');
    });

    $("#divSpinner").addClass('d-none')
    $("#divContent").removeClass('d-none');

});

$("#formBusqueda").submit(function (event) {
    $("#divContent").addClass('d-none');
    $("#divSpinner").removeClass('d-none');
    $("#modalEliminar").modal('hide');
});

function submitNewSort($column) {
    var newSortColumn = $column.data('nombre');
    //si se mantiene la columna, se cambia la direccion de orden
    //si no se mantiene la columna, se cambia la columna y se setea direccion de orden a ASC
    if (newSortColumn === $("#form_sortColumn").val()) {
        if ($("#form_sortOrder").val() === "ASC") {
            $("#form_sortColumn").val(newSortColumn);
            $("#form_sortOrder").val("DESC");
        } else {
            $("#form_sortColumn").val(newSortColumn);
            $("#form_sortOrder").val("ASC");
        }
    } else if (newSortColumn === $("#defaultSortColumn").val()) {
        //la primera vez que carga, se expone el valor por default en caso de que 
        // quiera ordenar por esa misma columna en el orden inverso
        $("#form_sortColumn").val(newSortColumn);
        $("#form_sortOrder").val("DESC");
    } else {
        $("#form_sortColumn").val(newSortColumn);
        $("#form_sortOrder").val("ASC");
    }
    $("#formBusqueda").submit();
}

function handleArrows($th) {
    var columna = $th.data('nombre');

    if (columna === $("#form_sortColumn").val() || columna === $("#defaultSortColumn").val()) {
        if ($("#form_sortOrder").val() === "ASC" || $("#form_sortOrder").val() === "") {
            //mostrar flecha para arriba, esconder flecha para abajo           
            $th.find("span").addClass("fa-sort-up");
        } else {
            //mostrar flecha para abajo, esconder flecha para arriba
            $th.find("span").addClass("fa-sort-down");
        }
    }
}