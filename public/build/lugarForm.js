(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lugarForm"],{

/***/ "./assets/css/select2.scss":
/*!*********************************!*\
  !*** ./assets/css/select2.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/lugarForm.js":
/*!********************************!*\
  !*** ./assets/js/lugarForm.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_select2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/select2.scss */ "./assets/css/select2.scss");
/* harmony import */ var _css_select2_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_select2_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var select2_dist_js_select2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2/dist/js/select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2_dist_js_select2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2__WEBPACK_IMPORTED_MODULE_2__);


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



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
    $("#btnAbrirModalConfirmarIndustria").hide();
  } //PRINCIPAL


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
  }); //lista de paises solo aparece si checkbox exporta es checked

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
  }); //HABILITACION

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
      $("#divHabilitacion").show(); //si es "Inicio de tramite"

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
  }); //CERTIFICADO DE APTITUD AMBIENTAL

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
  }); //PRODUCCION
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
  }); // Residuos especiales

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
  }); // efluentes liquidos

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
  }); //emisiones gaseosas

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
  }); //denuncias y reclamos

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
  }); //Domicilio Select con Dependencia

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
      success: function success(html) {
        if (!html) {
          $departamentoTarget.find('select').remove();
          $departamentoTarget.addClass('d-none');
          return;
        } // Replace the current field and show


        $departamentoTarget.html(html).removeClass('d-none');
        $("#domicilio_departamento").select2(); // Departamento -> localidad

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
            success: function success(html) {
              if (!html) {
                $localidadTarget.find('select').remove();
                $localidadTarget.addClass('d-none');
                return;
              } // Replace the current field and show


              $localidadTarget.html(html).removeClass('d-none');
              $("#domicilio_localidad").select2(); //Localidad -> calle

              var $localidadSelect = $('.js-industria-form-localidad');
              var $calleTarget = $('.js-calle-target');
              $localidadSelect.on('change', function () {
                if ($localidadSelect.val() === '') {
                  $calleTarget.find('select').remove();
                  $calleTarget.addClass('d-none');
                }

                $.ajax({
                  url: $localidadSelect.data('calle-url'),
                  data: {
                    id: $localidadSelect.val()
                  },
                  success: function success(html) {
                    if (!html) {
                      $calleTarget.find('select').remove();
                      $calleTarget.addClass('d-none');
                      return;
                    } // Replace the current field and show


                    $calleTarget.html(html).removeClass('d-none');
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

  if ($('.js-industria-form-departamento').length) {
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
        success: function success(html) {
          if (!html) {
            $localidadTarget.find('select').remove();
            $localidadTarget.addClass('d-none');
            return;
          } // Replace the current field and show


          $localidadTarget.html(html).removeClass('d-none');
          $("#domicilio_localidad").select2(); //Localidad -> calle

          var $localidadSelect = $('.js-industria-form-localidad');
          var $calleTarget = $('.js-calle-target');
          $localidadSelect.on('change', function () {
            if ($localidadSelect.val() === '') {
              $calleTarget.find('select').remove();
              $calleTarget.addClass('d-none');
            }

            $.ajax({
              url: $localidadSelect.data('calle-url'),
              data: {
                id: $localidadSelect.val()
              },
              success: function success(html) {
                if (!html) {
                  $calleTarget.find('select').remove();
                  $calleTarget.addClass('d-none');
                  return;
                } // Replace the current field and show


                $calleTarget.html(html).removeClass('d-none');
                $("#domicilio_calle").select2();
              }
            });
          });
        }
      });
    });
  }

  if ($('.js-industria-form-localidad').length) {
    var $localidadSelect = $('.js-industria-form-localidad');
    var $calleTarget = $('.js-calle-target');
    $localidadSelect.on('change', function () {
      if ($localidadSelect.val() === '') {
        $calleTarget.find('select').remove();
        $calleTarget.addClass('d-none');
      }

      $.ajax({
        url: $localidadSelect.data('calle-url'),
        data: {
          id: $localidadSelect.val()
        },
        success: function success(html) {
          if (!html) {
            $calleTarget.find('select').remove();
            $calleTarget.addClass('d-none');
            return;
          } // Replace the current field and show


          $calleTarget.html(html).removeClass('d-none');
          $("#domicilio_calle").select2();
        }
      });
    });
  }

  var i,
      items = $('.nav-link'),
      pane = $('.tab-pane');
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

function funcionCalle($localidadSelect, $calleTarget) {
  console.log('llego');
}

/***/ })

},[["./assets/js/lugarForm.js","runtime","vendors~app~dashboard~datepicker~grilla_default~image_cropper~lugarForm~select2","vendors~dashboard~grilla_default~image_cropper~lugarForm","vendors~lugarForm~select2","vendors~grilla_default~lugarForm"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVzRGVwb3NpdG9MYWJlbCIsImNzcyIsImhpZGUiLCJjbGljayIsInZhbCIsImRhdGEiLCJtb2RhbCIsImVzQ29uc3VsdGEiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFqYXgiLCJ1cmwiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJsZW5ndGgiLCJpIiwiaXRlbXMiLCJwYW5lIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciIsInN1Ym1pdCIsImV2ZW50IiwiZnVuY2lvbkNhbGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBQ0E7QUFDQUQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLGVBQWUsR0FBR0osQ0FBQyxDQUFDLCtCQUFELENBQXZCO0FBQ0FJLGlCQUFlLENBQUNDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCO0FBQ0FMLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxJQUFyQjtBQUNBTixHQUFDLENBQUMsbUJB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MkIsUUFBakIsQ0FBMEIsUUFBMUI7QUFDQTNCLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCaUMsV0FBckIsQ0FBaUMsUUFBakM7QUFDSCxDQXRpQkQ7QUF1aUJBakMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjZDLE1BQWpCLENBQXdCLFVBQVVDLEtBQVYsRUFBaUI7QUFDckM5QyxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjJCLFFBQXJCLENBQThCLFFBQTlCO0FBQ0EzQixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCaUMsV0FBakIsQ0FBNkIsUUFBN0I7QUFDQWpDLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCVSxLQUE5QixDQUFvQyxNQUFwQztBQUNILENBSkQ7O0FBS0EsU0FBU2tDLGNBQVQsQ0FBd0I1QixJQUF4QixFQUE4QjtBQUMxQixNQUFJQSxJQUFKLEVBQVU7QUFDTmhCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CO0FBQ0FOLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJnQixJQUFqQjtBQUNILEdBSEQsTUFHTztBQUNIaEIsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmdCLElBQW5CO0FBQ0FoQixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTSxJQUFqQjtBQUNIO0FBQ0o7O0FBR0QsU0FBU3lDLFlBQVQsQ0FBc0JWLGdCQUF0QixFQUF3Q0MsWUFBeEMsRUFBc0Q7QUFDbEQxQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBRUgsQyIsImZpbGUiOiJsdWdhckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmltcG9ydCAnLi4vY3NzL3NlbGVjdDIuc2Nzcyc7XHJcbmltcG9ydCBzZWxlY3QyIGZyb20gJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyJztcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVzRGVwb3NpdG9MYWJlbCA9ICQoXCJsYWJlbFtmb3I9J2x1Z2FyX2VzRGVwb3NpdG8nXVwiKTtcclxuICAgIGVzRGVwb3NpdG9MYWJlbC5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XHJcbiAgICAkKFwiLmhpZGVQcm9kdWNjaW9uXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYnRuRWxpbWluYXJMdWdhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNoaWRkZW5JZEx1Z2FyXCIpLnZhbCgkKHRoaXMpLmRhdGEoXCJsdWdhcklkXCIpKTtcclxuICAgICAgICAkKFwiI21vZGFsRWxpbWluYXJMdWdhclwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkFicmlyTW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjbW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNkaXZDb25maXJtYXJcIikuaGlkZSgpO1xyXG4gICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcclxuICAgIHZhciBlc0NvbnN1bHRhID0gJChcIiNoaWRkZW5Fc0NvbnN1bHRhXCIpLnZhbCgpID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKGVzQ29uc3VsdGEpO1xyXG4gICAgaWYgKGVzQ29uc3VsdGEpIHtcclxuICAgICAgICAkKFwiI2x1Z2FyX2d1YXJkYXJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY29uZmlybWFyXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGlmICgkKFwiI2luZHVzdHJpYV9lc0NvbmZpcm1hZG9cIikudmFsKCkgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfZ3VhcmRhckluZHVzdHJpYVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfY29uZmlybWFySW5kdXN0cmlhXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2J0bkFicmlyTW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4vL1BSSU5DSVBBTFxyXG4gICAgJChcIi5zZWFyY2hhYmxlZHJvcGRvd25cIikuc2VsZWN0MigpO1xyXG4gICAgaWYgKCQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKFwiXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX0NVUlRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3BvdGVuY2lhVG90YWxVdGlsaXphZGFcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgJCgnI2J0bkRpc3Bvc2ljaW9uTm8nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAkKCcjYnRuQ2VydE5vJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vbGlzdGEgZGUgcGFpc2VzIHNvbG8gYXBhcmVjZSBzaSBjaGVja2JveCBleHBvcnRhIGVzIGNoZWNrZWRcclxuICAgIGlmICghJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2x1Z2FyX3BhaXNlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4vL0hBQklMSVRBQ0lPTlxyXG4gICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnJykge1xyXG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9sZWdham9fc2VfaFwiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvSGFiaWxpdGFkbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1ByaW1hcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvU2VjdW5kYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9Fc3BlY2lmaWNvXCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX21hdGVyaWFQcmltYVwiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9pbnN1bW9zXCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3Byb2R1Y3RvRmluYWxcIikudmFsKCcnKTtcclxuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIC8vc2kgZXMgXCJJbmljaW8gZGUgdHJhbWl0ZVwiXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJzM1MDc1Jykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSAhPT0gXCJcIikge1xyXG4gICAgICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpID09PSBcIjM1MDc1XCIpIHtcclxuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xyXG4gICAgfVxyXG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcclxuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fdGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XHJcbiAgICAgICAgJChcIiNtb2RhbE5vSGFiaWxpdGFkb1wiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSk7XHJcbiAgICAvL0NFUlRJRklDQURPIERFIEFQVElUVUQgQU1CSUVOVEFMXHJcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XHJcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcclxuICAgIH1cclxuICAgICQoXCIjYnRuRGlzcG9zaWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcnKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuRGlzcG9zaWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCcnKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcclxuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKCQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfbnVtZXJvXCIpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XHJcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XHJcbiAgICB9XHJcbiAgICAkKFwiI2J0bkNlcnRTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJycpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJycpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuQ2VydE5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoJycpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XHJcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XHJcbiAgICB9KTtcclxuICAgIC8vUFJPRFVDQ0lPTlxyXG4gICAgLy8gUmVzaWR1b3MgaW5kdXN0cmlhbGVzXHJcbiAgICAkKFwiI2J0blJlc2lkdW9zSW5kdXN0cmlhbGVzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0blJlc2lkdW9zSW5kdXN0cmlhbGVzTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5FZmx1ZW50ZXNMaXF1aWRvc1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5FZmx1ZW50ZXNMaXF1aWRvc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuVHJhdGFtaWVudG9QcmV2aW9TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5UcmF0YW1pZW50b1ByZXZpb05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5SZXNpZHVvc0VzcGVjaWFsZXNTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5SZXNpZHVvc0VzcGVjaWFsZXNOb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuRW1pc2lvbmVzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkVtaXNpb25lc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuRGVudW5jaWFzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkRlbnVuY2lhc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3Jlc2lkdW9JbmR1c3RyaWFsXCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0luZHVzdHJpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICQoJyNsdWdhcl9kZXN0aW5vVnVlbGNvVGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFJlc2lkdW9zIGVzcGVjaWFsZXNcclxuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0VzcGVjaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAkKCcjbHVnYXJfY29ycmllbnRlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGVmbHVlbnRlcyBsaXF1aWRvc1xyXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9lbWlzaW9uZXMgZ2FzZW9zYXNcclxuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb0VtaXNpb25HYXNlb3NhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9kZW51bmNpYXMgeSByZWNsYW1vc1xyXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZGVudW5jaWFzRXNwZWNpZmljYWNpb25lc1wiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9Eb21pY2lsaW8gU2VsZWN0IGNvbiBEZXBlbmRlbmNpYVxyXG4gICAgdmFyICRwcm92aW5jaWFTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tcHJvdmluY2lhJyk7XHJcbiAgICB2YXIgJGRlcGFydGFtZW50b1RhcmdldCA9ICQoJy5qcy1kZXBhcnRhbWVudG8tdGFyZ2V0Jyk7XHJcbiAgICAkcHJvdmluY2lhU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkcHJvdmluY2lhU2VsZWN0LnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkcHJvdmluY2lhU2VsZWN0LmRhdGEoJ2RlcGFydGFtZW50by11cmwnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgcHJvdmluY2lhOiAkcHJvdmluY2lhU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2RlcGFydGFtZW50b1wiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBEZXBhcnRhbWVudG8gLT4gbG9jYWxpZGFkXHJcbiAgICAgICAgICAgICAgICB2YXIgJGRlcGFydGFtZW50b1NlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKTtcclxuICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkVGFyZ2V0ID0gJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRkZXBhcnRhbWVudG9TZWxlY3QudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGRlcGFydGFtZW50b1NlbGVjdC5kYXRhKCdsb2NhbGlkYWQtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19sb2NhbGlkYWRcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb2NhbGlkYWQgLT4gY2FsbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYWxsZVRhcmdldCA9ICQoJy5qcy1jYWxsZS10YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGxvY2FsaWRhZFNlbGVjdC52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkbG9jYWxpZGFkU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCgnLmpzLWluZHVzdHJpYS1mb3JtLWRlcGFydGFtZW50bycpLmxlbmd0aClcclxuICAgIHtcclxuICAgICAgICB2YXIgJGRlcGFydGFtZW50b1NlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKTtcclxuICAgICAgICB2YXIgJGxvY2FsaWRhZFRhcmdldCA9ICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0Jyk7XHJcbiAgICAgICAgJGRlcGFydGFtZW50b1NlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCRkZXBhcnRhbWVudG9TZWxlY3QudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICRkZXBhcnRhbWVudG9TZWxlY3QuZGF0YSgnbG9jYWxpZGFkLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19sb2NhbGlkYWRcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vTG9jYWxpZGFkIC0+IGNhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tbG9jYWxpZGFkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjYWxsZVRhcmdldCA9ICQoJy5qcy1jYWxsZS10YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYWxpZGFkU2VsZWN0LnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkbG9jYWxpZGFkU2VsZWN0LmRhdGEoJ2NhbGxlLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkbG9jYWxpZGFkU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICgkKCcuanMtaW5kdXN0cmlhLWZvcm0tbG9jYWxpZGFkJykubGVuZ3RoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xyXG4gICAgICAgIHZhciAkY2FsbGVUYXJnZXQgPSAkKCcuanMtY2FsbGUtdGFyZ2V0Jyk7XHJcbiAgICAgICAgJGxvY2FsaWRhZFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2FsaWRhZFNlbGVjdC52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJGxvY2FsaWRhZFNlbGVjdC5kYXRhKCdjYWxsZS11cmwnKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJGxvY2FsaWRhZFNlbGVjdC52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fY2FsbGVcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBpLCBpdGVtcyA9ICQoJy5uYXYtbGluaycpLCBwYW5lID0gJCgnLnRhYi1wYW5lJyk7XHJcbiAgICAkKCcuYnRuTmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgkKGl0ZW1zW2ldKS5oYXNDbGFzcygnYWN0aXZlJykgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBlc0NvbnN1bHRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkZpbmFsaXphclwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAyICYmIGVzQ29uc3VsdGEpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJvZHVjY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMgJiYgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuRmluYWxpemFyXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgKyAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJChwYW5lW2ldKS5yZW1vdmVDbGFzcygnc2hvdyBhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQocGFuZVtpICsgMV0pLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5idG5QcmV2aW91cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCQoaXRlbXNbaV0pLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDQgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJpbmNpcGFsXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgLSAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJChwYW5lW2ldKS5yZW1vdmVDbGFzcygnc2hvdyBhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQocGFuZVtpIC0gMV0pLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2J0bkZpbmFsaXphclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIoZmFsc2UpO1xyXG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5QcmluY2lwYWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xyXG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xyXG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XHJcbiAgICAgICAgaWYgKGVzQ29uc3VsdGEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xyXG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5Qcm9kdWNjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlc0NvbnN1bHRhKTtcclxuICAgICAgICBpZiAoIWVzQ29uc3VsdGEpIHtcclxuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjZGl2U3Bpbm5lclwiKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKFwiI2RpdkZvcm1Db250ZW50XCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxufSk7XHJcbiQoXCIjZm9ybXVsYXJpb1wiKS5zdWJtaXQoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAkKFwiI2RpdkZvcm1Db250ZW50XCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoXCIjZGl2U3Bpbm5lclwiKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKFwiI21vZGFsQ29uZmlybWFySW5kdXN0cmlhXCIpLm1vZGFsKCdoaWRlJyk7XHJcbn0pO1xyXG5mdW5jdGlvbiBzaG93QnRuR3VhcmRhcihzaG93KSB7XHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2Rpdkd1YXJkYXJcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNkaXZHdWFyZGFyXCIpLmhpZGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZ1bmNpb25DYWxsZSgkbG9jYWxpZGFkU2VsZWN0LCAkY2FsbGVUYXJnZXQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsbGVnbycpO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=