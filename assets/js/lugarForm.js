const $ = require('jquery');

$(document).ready(function () {

    $("#lugar_esProduccion").change(function () {
        if ($(this).is(':checked')) {
            $("#tabCertAptitudAmbiental").hide();
            $("#tabProduccion").hide();
        } else {
            $("#tabCertAptitudAmbiental").show();
            $("#tabProduccion").show();
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
