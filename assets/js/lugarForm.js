const $ = require('jquery');
import '../css/select2.scss';
import select2 from 'select2/dist/js/select2';
$(document).ready(function () {
    var esDepositoLabel = $("label[for='lugar_esDeposito']");
    esDepositoLabel.css('color', 'black');
    $(".hideProduccion").hide();
    $(".btnEliminarLugar").click(function () {
        $("#hiddenIdLugar").val($(this).data("lugarId"));
        $("#modalEliminarLugar").modal('show');
    });
    $("#btnAbrirModalConfirmarIndustria").click(function () {
        $("#modalConfirmarIndustria").modal('show');
    });
    $("#divConfirmar").hide();
    $("#btnPrev").hide();
    var esConsulta = $("#hiddenEsConsulta").val() === "1" ? true : false;
    console.log(esConsulta);
    if (esConsulta) {
        $("#lugar_guardar").hide();
        $("#lugar_confirmar").hide();
    }
    if ($("#industria_esConfirmado").val() === "1") {
        $("#industria_guardarIndustria").hide();
        $("#industria_confirmarIndustria").hide();
    }
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
            $("#lugar_fechaUltimaInpeccion").val("");
        } else {
            $("#tabCertAptitudAmbiental").hide();
            $("#tabProduccion").hide();
            $("#lugar_fechaUltimaInpeccion").val('01-01-1800');
            $("#lugar_CURT").val("");
            $("#lugar_potenciaTotalUtilizada").val("");
            $("#lugar_tieneResiduosIndustriales").prop('checked', false).trigger('change');
            $("#lugar_tieneResiduosEspeciales").prop('checked', false).trigger('change');
            $("#lugar_tieneDenuncia").prop('checked', false).trigger('change');
            $('#btnDisposicionNo').trigger('click');
            $('#btnCertNo').trigger('click');
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
    $("#lugar_habilitacion_tipo").change(function () {
        var selected = $(this).val();
        if (selected === '') {
            $("#divHabilitacion").hide();
            $("#lugar_habilitacion_fechaInicio").val('01-01-1800');
            $("#lugar_habilitacion_legajo_se_h").val('');
            $('#lugar_habilitacion_rubroHabilitado').val(null).trigger('change');
            $('#lugar_habilitacion_rubroPrimario').val(null).trigger('change');
            $('#lugar_habilitacion_rubroSecundario').val(null).trigger('change');
            $("#lugar_habilitacion_rubroEspecifico").val('');
            $("#lugar_habilitacion_materiaPrima").val('');
            $("#lugar_habilitacion_insumos").val('');
            $("#lugar_habilitacion_productoFinal").val('');
            $("#lugar_habilitacion_expediente").val('');
            $("#lugar_numeroDecreto").val('');
        } else {
            $("#divHabilitacion").show();
            //si es "Inicio de tramite"
            if (selected === '35075') {
                $("#divNoEnTramite").hide();
                $("#lugar_habilitacion_fechaInicio").val('01-01-1800');
                $("#lugar_numeroDecreto").val('');
            } else {
                $("#divNoEnTramite").show();
                $("#lugar_habilitacion_fechaInicio").val('');
            }
        }
    });
    if ($("#lugar_habilitacion_tipo").val() !== "") {
        if ($("#lugar_habilitacion_tipo").val() === "35075") {
            $("#divNoEnTramite").hide();
        } else {
            $("#divNoEnTramite").show();
        }
    }

    if ($("#lugar_habilitacion_expediente").val() === '') {
        $("#divHabilitacion").hide();
        $("#divTipoHabilitacion").hide();
        $("#lugar_habilitacion_tieneHabilitacion").val('no');
    } else {
        $("#lugar_habilitacion_tieneHabilitacion").val('si');
    }
    $("#btnHabilitacionSi").click(function () {
        $("#lugar_habilitacion_fechaInicio").val('');
        $("#divHabilitacion").show();
        $("#divTipoHabilitacion").show();
        $("#lugar_habilitacion_tipo").val(null).trigger('change');
        $("#lugar_habilitacion_tieneHabilitacion").val('si');
    });
    $("#btnHabilitacionNo").click(function () {
        $("#divHabilitacion").hide();
        $("#divTipoHabilitacion").hide();
        $('#lugar_habilitacion_tipo').val(null).trigger('change');
        $("#lugar_habilitacion_tieneHabilitacion").val('no');
        $("#modalNoHabilitado").modal('show');
    });
    //CERTIFICADO DE APTITUD AMBIENTAL
    if ($("#lugar_dispCatProvincial_numero").val() === '') {
        $("#divDisposicion").hide();
        $("#lugar_dispCatProvincial_fechaOtorgDispProv").val('01-01-1800');
        $('#lugar_dispCatProvincial_categoria').val(null).trigger('change');
        $("#lugar_dispCatProvincial_tieneCatProvincial").val('no');
    } else {
        $("#lugar_dispCatProvincial_tieneCatProvincial").val('si');
    }
    $("#btnDisposicionSi").click(function () {
        $("#divDisposicion").show();
        $("#lugar_dispCatProvincial_fechaOtorgDispProv").val('');
        $("#lugar_dispCatProvincial_tieneCatProvincial").val('si');
    });
    $("#btnDisposicionNo").click(function () {
        $("#divDisposicion").hide();
        $("#lugar_dispCatProvincial_numero").val('');
        $("#lugar_dispCatProvincial_fechaOtorgDispProv").val('01-01-1800');
        $('#lugar_dispCatProvincial_categoria').val(null).trigger('change');
        $("#lugar_dispCatProvincial_tieneCatProvincial").val('no');
    });
    if ($("#lugar_certAptitudAmb_numero").val() === '') {
        $("#divCertAptitudAmbiental").hide();
        $("#lugar_certAptitudAmb_fechaOtorgamiento").val('01-01-1800');
        $("#lugar_certAptitudAmb_fechaVencimiento").val('01-01-1800');
        $("#lugar_certAptitudAmb_tieneCertAptitudAmb").val('no');
    } else {
        $("#lugar_certAptitudAmb_tieneCertAptitudAmb").val('si');
    }
    $("#btnCertSi").click(function () {
        $("#divCertAptitudAmbiental").show();
        $("#lugar_certAptitudAmb_fechaOtorgamiento").val('');
        $("#lugar_certAptitudAmb_fechaVencimiento").val('');
        $("#lugar_certAptitudAmb_tieneCertAptitudAmb").val('si');
    });
    $("#btnCertNo").click(function () {
        $("#divCertAptitudAmbiental").hide();
        $("#lugar_certAptitudAmb_numero").val('');
        $("#lugar_certAptitudAmb_fechaOtorgamiento").val('01-01-1800');
        $("#lugar_certAptitudAmb_fechaVencimiento").val('01-01-1800');
        $("#lugar_certAptitudAmb_tieneCertAptitudAmb").val('no');
    });
    //PRODUCCION
    // Residuos industriales
    $("#btnResiduosIndustrialesSi").click(function () {
        $("#lugar_tieneResiduosIndustriales").prop('checked', true);
        $("#lugar_tieneResiduosIndustriales").trigger('change');
    });
    $("#btnResiduosIndustrialesNo").click(function () {
        $("#lugar_tieneResiduosIndustriales").prop('checked', false);
        $("#lugar_tieneResiduosIndustriales").trigger('change');
    });
    $("#btnEfluentesLiquidosSi").click(function () {
        $("#lugar_tieneEfluentesLiquidos").prop('checked', true);
        $("#lugar_tieneEfluentesLiquidos").trigger('change');
    });
    $("#btnEfluentesLiquidosNo").click(function () {
        $("#lugar_tieneEfluentesLiquidos").prop('checked', false);
        $("#lugar_tieneEfluentesLiquidos").trigger('change');
    });
    $("#btnTratamientoPrevioSi").click(function () {
        $("#lugar_tieneTratamientoPrevioVuelco").prop('checked', true);
    });
    $("#btnTratamientoPrevioNo").click(function () {
        $("#lugar_tieneTratamientoPrevioVuelco").prop('checked', false);
    });
    $("#btnResiduosEspecialesSi").click(function () {
        $("#lugar_tieneResiduosEspeciales").prop('checked', true);
        $("#lugar_tieneResiduosEspeciales").trigger('change');
    });
    $("#btnResiduosEspecialesNo").click(function () {
        $("#lugar_tieneResiduosEspeciales").prop('checked', false);
        $("#lugar_tieneResiduosEspeciales").trigger('change');
    });
    $("#btnEmisionesSi").click(function () {
        $("#lugar_tieneEmisionesGaseosas").prop('checked', true);
        $("#lugar_tieneEmisionesGaseosas").trigger('change');
    });
    $("#btnEmisionesNo").click(function () {
        $("#lugar_tieneEmisionesGaseosas").prop('checked', false);
        $("#lugar_tieneEmisionesGaseosas").trigger('change');
    });
    $("#btnDenunciasSi").click(function () {
        $("#lugar_tieneDenuncia").prop('checked', true);
        $("#lugar_tieneDenuncia").trigger('change');
    });
    $("#btnDenunciasNo").click(function () {
        $("#lugar_tieneDenuncia").prop('checked', false);
        $("#lugar_tieneDenuncia").trigger('change');
    });
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
    var i, items = $('.nav-link'), pane = $('.tab-pane');
    $('.btnNext').click(function () {

        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') === true) {
                break;
            }
        }
        if (i < items.length - 1) {
            if (i === 0 && esConsulta) {
                $("#btnHabilitacion").trigger('click');
            } else if (i === 1 && !$("#lugar_esProduccion").is(':checked')) {
                $("#btnFinalizar").trigger('click');

            } else if (i === 2 && esConsulta) {
                $("#btnProduccion").trigger('click');
            } else if (i === 3 && $("#lugar_esProduccion").is(':checked')) {
                $("#btnFinalizar").trigger('click');
            } else {
                $(items[i]).removeClass('active');
                $(items[i + 1]).addClass('active');
                $(pane[i]).removeClass('show active');
                $(pane[i + 1]).addClass('show active');
                $("#btnPrev").show();
                $("#btnNext").show();
            }
        }
    });
    $('.btnPrevious').click(function () {
        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') === true) {
                break;
            }
        }
        if (i !== 0) {
            if (i === 4 && !$("#lugar_esProduccion").is(':checked')) {
                $("#btnHabilitacion").trigger('click');
            } else if (i === 1) {
                $("#btnPrincipal").trigger('click');
            } else {
                $(items[i]).removeClass('active');
                $(items[i - 1]).addClass('active');
                $(pane[i]).removeClass('show active');
                $(pane[i - 1]).addClass('show active');
                $("#btnPrev").show();
                $("#btnNext").show();
            }
        }
    });

    $("#btnFinalizar").click(function () {
        showBtnGuardar(false);
        $("#btnPrev").show();
        $("#btnNext").hide();
    });
    $("#btnPrincipal").click(function () {
        showBtnGuardar(true);
        $("#btnPrev").hide();
        $("#btnNext").show();
    });
    $("#btnHabilitacion").click(function () {
        showBtnGuardar(true);
        $("#btnNext").show();
        if (esConsulta && !$("#lugar_esProduccion").is(':checked')) {
            $("#btnNext").hide();
        }
        $("#btnPrev").show();
    });
    $("#btnCertAptitudAmbiental").click(function () {
        showBtnGuardar(true);
        $("#btnPrev").show();
        $("#btnNext").show();
    });
    $("#btnProduccion").click(function () {
        showBtnGuardar(true);
        console.log(esConsulta);
        if (!esConsulta) {
            $("#btnNext").show();
        } else {
            $("#btnNext").hide();
        }
        $("#btnPrev").show();

    });
   
    $("#divSpinner").addClass('d-none');
    $("#divFormContent").removeClass('d-none');
});
$("#formulario").submit(function (event) {
    $("#divFormContent").addClass('d-none');
    $("#divSpinner").removeClass('d-none');
    $("#modalConfirmarIndustria").modal('hide');
});
function showBtnGuardar(show) {
    if (show) {
        $("#divConfirmar").hide();
        $("#divGuardar").show();
    } else {
        $("#divConfirmar").show();
        $("#divGuardar").hide();
    }
}
