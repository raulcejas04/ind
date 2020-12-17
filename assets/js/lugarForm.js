const $ = require('jquery');
import '../css/select2.scss';
import select2 from 'select2/dist/js/select2';

$(document).ready(function () {
    //PRINCIPAL

    $(".searchabledropdown").select2();
    if ($("#lugar_esProduccion").is(':checked')) {
        $("#tabCertAptitudAmbiental").show();
        $("#tabProduccion").show();
    } else {
        $("#tabCertAptitudAmbiental").hide();
        $("#tabProduccion").hide();
    }
    $("#lugar_esProduccion").change(function () {
        if ($(this).is(':checked')) {
            $("#tabCertAptitudAmbiental").show();
            $("#tabProduccion").show();
        } else {
            $("#tabCertAptitudAmbiental").hide();
            $("#tabProduccion").hide();
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
    $("#lugar_habilitacion_tipo").change(function () {
        var selected = $(this).val();
        if (selected === '') {
            $("#divHabilitacion").hide();
        } else {
            $("#divHabilitacion").show();
            //si es "Inicio de tramite"
            if (selected === '35075') {
                $("#divNoEnTramite").hide();
            } else {
                $("#divNoEnTramite").show();
            }
        }
    });
    if ($("#lugar_habilitacion_expediente").val() === '') {
        $("#divHabilitacion").hide();
        $("#divTipoHabilitacion").hide();
    }
    $("#btnHabilitacionSi").click(function () {
        $("#divHabilitacion").show();
        $("#divTipoHabilitacion").show();
        $("#lugar_habilitacion_tipo").val(null).trigger('change');
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
    if ($("#lugar_dispocisionProvincial").val() === '') {
        $("#divDisposicion").hide();
    }
    $("#btnDisposicionSi").click(function () {
        $("#divDisposicion").show();
    });
    $("#btnDisposicionNo").click(function () {
        $("#divDisposicion").hide();
        $("#lugar_dispocisionProvincial").val('');
        $("#lugar_fechaOtorgDispProv").val('');
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
    //Domicilio Select con Dependencia
    var $provinciaSelect = $('.js-industria-form-provincia');
    var $departamentoTarget = $('.js-departamento-target');
    $provinciaSelect.on('change', function (e) {
        console.log($provinciaSelect.val());
        if ($provinciaSelect.val() === '') {
            $departamentoTarget.find('select').remove();
            $departamentoTarget.addClass('d-none');
            $('.js-localidad-target').find('select').remove();
            $('.js-localidad-target').addClass('d-none');
            $('.js-calle-target').find('select').remove();
            $('.js-calle-target').addClass('d-none');
        }
        $.ajax({
            url: $provinciaSelect.data('departamento-url'),
            data: {
                provincia: $provinciaSelect.val()
            },
            success: function (html) {
                if (!html) {
                    $departamentoTarget.find('select').remove();
                    $departamentoTarget.addClass('d-none');
                    return;
                }
                // Replace the current field and show
                $departamentoTarget
                        .html(html)
                        .removeClass('d-none');
                $("#domicilio_departamento").select2();
                // Departamento -> localidad
                var $departamentoSelect = $('.js-industria-form-departamento');
                var $localidadTarget = $('.js-localidad-target');
                $departamentoSelect.on('change', function (e) {
                    if ($departamentoSelect.val() === '') {
                        $localidadTarget.find('select').remove();
                        $localidadTarget.addClass('d-none');
                        $('.js-calle-target').find('select').remove();
                        $('.js-calle-target').addClass('d-none');
                    }
                    $.ajax({
                        url: $departamentoSelect.data('localidad-url'),

                        data: {
                            id: $departamentoSelect.val()
                        },
                        success: function (html) {
                            if (!html) {
                                $localidadTarget.find('select').remove();
                                $localidadTarget.addClass('d-none');
                                return;
                            }
                            // Replace the current field and show

                            $localidadTarget
                                    .html(html)
                                    .removeClass('d-none');
                            $("#domicilio_localidad").select2();
                            //Localidad -> calle
                            var $localidadSelect = $('.js-industria-form-localidad');
                            var $calleTarget = $('.js-calle-target');
                            $localidadSelect.on('change', function (e) {
                                if ($localidadSelect.val() === '') {
                                    $calleTarget.find('select').remove();
                                    $calleTarget.addClass('d-none');
                                }
                                $.ajax({
                                    url: $localidadSelect.data('calle-url'),

                                    data: {
                                        id: $localidadSelect.val()
                                    },
                                    success: function (html) {
                                        if (!html) {
                                            $calleTarget.find('select').remove();
                                            $calleTarget.addClass('d-none');
                                            return;
                                        }
                                        // Replace the current field and show

                                        $calleTarget
                                                .html(html)
                                                .removeClass('d-none');
                                        $("#domicilio_calle").select2();
                                    }
                                });
                            });
                        }
                    });
                });
            }
        });
    });


});
