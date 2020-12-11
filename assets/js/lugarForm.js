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
//HABILITACION
//  To-Do: 
//  Agregar funcionalidad dependiente del tipo de habilitacion seleccionado
//  Si es "Inicio de tramite" en Expediente de habilitación municipal  
//  solo se muestra el campo Número de expediente
//  Si es "Provisoria" o "Definitiva" se muestran los tres campos en
//  Expediente de habilitación municipal
    if ($("#lugar_habilitacion_expediente").val() === '') {
        $("#divHabilitacion").hide();
        $("#divTipoHabilitacion").hide();
    }
    $("#btnHabilitacionSi").click(function () {
        $("#divHabilitacion").show();
        $("#divTipoHabilitacion").show();
    });
    $("#btnHabilitacionNo").click(function () {
        $("#divHabilitacion").hide();
        $("#divTipoHabilitacion").hide();
        $("#lugar_habilitacion_expediente").val('');
        $("#lugar_habilitacion_numeroDecreto").val('');
        $("#lugar_habilitacion_fechaInicio").val('');
        $("#lugar_habilitacion_legajo_se_h").val('');
        $('#lugar_habilitacion_rubroHabilitado').val(null).trigger('change');
        $('#lugar_habilitacion_rubroPrimario').val(null).trigger('change');
        $('#lugar_habilitacion_rubroSecundario').val(null).trigger('change');
        $("#lugar_habilitacion_rubroEspecifico").val('');
        $("#lugar_habilitacion_materiaPrima").val('');
        $("#lugar_habilitacion_insumos").val('');
        $("#lugar_habilitacion_productoFinal").val('');
        $('#lugar_habilitacion_tipo').val(null).trigger('change');
        $("#modalNoHabilitado").modal('show');
    });


    //CERTIFICADO DE APTITUD AMBIENTAL
    if ($("#lugar_certAptitudAmb_dispocisionProvincial").val() === '') {
        $("#divDisposicion").hide();
    }
    $("#btnDisposicionSi").click(function () {
        $("#divDisposicion").show();
    });
    $("#btnDisposicionNo").click(function () {
        $("#divDisposicion").hide();
        $("#lugar_certAptitudAmb_dispocisionProvincial").val('');
        $("#lugar_certAptitudAmb_fechaOtorgDispProvincial").val('');
        $('#lugar_certAptitudAmb_categoria').val(null).trigger('change');
    });

    if ($("#lugar_certAptitudAmb_numero").val() === '') {
        $("#divCertAptitudAmbiental").hide();
    }
    $("#btnCertSi").click(function () {
        $("#divCertAptitudAmbiental").show();
    });
    $("#btnCertNo").click(function () {
        $("#divCertAptitudAmbiental").hide();
        $("#lugar_certAptitudAmb_numero").val('');
        $("#lugar_certAptitudAmb_fechaOtorgamiento").val('');
        $("#lugar_certAptitudAmb_fechaVencimiento").val('');
    });

    //PRODUCCION
    // Residuos industriales
    if (!$("#lugar_tieneResiduosIndustriales").is(':checked')) {
        $("#divResiduosIndustriales").hide();
    }
    $("#lugar_tieneResiduosIndustriales").change(function () {

        if ($(this).is(':checked')) {
            $("#divResiduosIndustriales").show();
        } else {
            $("#divResiduosIndustriales").hide();
            $("#lugar_tieneEfluentesLiquidos").prop('checked', false).trigger('change');
            $("#lugar_residuoIndustrial").val('');
            $('#lugar_tipoResiduoIndustrial').val(null).trigger('change');
            $('#lugar_destinoVuelcoTipo').val(null).trigger('change');
        }
    });

    // Residuos especiales
    if (!$("#lugar_tieneResiduosEspeciales").is(':checked')) {
        $("#divResiduosEspeciales").hide();
    }
    $("#lugar_tieneResiduosEspeciales").change(function () {

        if ($(this).is(':checked')) {
            $("#divResiduosEspeciales").show();
        } else {
            $("#divResiduosEspeciales").hide();
            $("#lugar_tieneEmisionesGaseosas").prop('checked', false).trigger('change');
            $('#lugar_tipoResiduoEspecial').val(null).trigger('change');
            $('#lugar_corrientes').val(null).trigger('change');
        }
    });
    // efluentes liquidos
    if (!$("#lugar_tieneEfluentesLiquidos").is(':checked')) {
        $("#divTratamientoPrevioVuelco").hide();
    }

    $("#lugar_tieneEfluentesLiquidos").change(function () {

        if ($(this).is(':checked')) {
            $("#divTratamientoPrevioVuelco").show();
        } else {
            $("#divTratamientoPrevioVuelco").hide();
            $("#lugar_tieneTratamientoPrevioVuelco").prop('checked', false);
        }
    });
    //emisiones gaseosas
    if (!$("#lugar_tieneEmisionesGaseosas").is(':checked')) {
        $("#divTipoEmisionGaseosa").hide();
    }

    $("#lugar_tieneEmisionesGaseosas").change(function () {

        if ($(this).is(':checked')) {
            $("#divTipoEmisionGaseosa").show();
        } else {
            $("#divTipoEmisionGaseosa").hide();
            $('#lugar_tipoEmisionGaseosa').val(null).trigger('change');
        }
    });

    //denuncias y reclamos
    if (!$("#lugar_tieneDenuncia").is(':checked')) {
        $("#divEspecificacionDenuncia").hide();
    }

    $("#lugar_tieneDenuncia").change(function () {

        if ($(this).is(':checked')) {
            $("#divEspecificacionDenuncia").show();
        } else {
            $("#lugar_denunciasEspecificaciones").val('');
            $("#divEspecificacionDenuncia").hide();
        }
    });

});
