const $ = require('jquery');

$(document).ready(function () {
    //PRINCIPAL
    $("#lugar_esProduccion").change(function () {
        if ($(this).is(':checked')) {
            $("#tabCertAptitudAmbiental").hide();
            $("#tabProduccion").hide();
        } else {
            $("#tabCertAptitudAmbiental").show();
            $("#tabProduccion").show();
        }
    });
    //lista de paises solo aparece si checkbox exporta es checked
    if (!$("#lugar_esExportador").is(':checked')) {
        $("#divSeleccionPaises").hide();
    }
    $("#lugar_esExportador").change(function () {
        if ($(this).is(':checked')) {
            $("#divSeleccionPaises").show();
        } else {
            $('#lugar_paises').val(null).trigger('change');
            $("#divSeleccionPaises").hide();
        }
    });

    //PRODUCCION
    if (!$("#lugar_tieneEfluentesLiquidos").is(':checked')) {
        $("#divTratamientoPrevioVuelco").hide();
    }
    ;
    if (!$("#lugar_tieneEmisionesGaseosas").is(':checked')) {
        $("#divTipoEmisionGaseosa").hide();
    }
    ;
    $("#lugar_tieneEfluentesLiquidos").change(function () {

        if ($(this).is(':checked')) {
            $("#divTratamientoPrevioVuelco").show();
        } else {
            $("#divTratamientoPrevioVuelco").hide();
            $("#lugar_tieneTratamientoPrevioVuelco").prop('checked', false);
        }
    }
    );
    $("#lugar_tieneEmisionesGaseosas").change(function () {

        if ($(this).is(':checked')) {
            $("#divTipoEmisionGaseosa").show();
        } else {
            $("#divTipoEmisionGaseosa").hide();
        }
    }
    );

});
