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
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
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

},[["./assets/js/lugarForm.js","runtime","vendors~app~datepicker~image_cropper~lugarForm~select2","vendors~lugarForm~select2","vendors~image_cropper~lugarForm","vendors~lugarForm"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVzRGVwb3NpdG9MYWJlbCIsImNzcyIsImhpZGUiLCJjbGljayIsInZhbCIsImRhdGEiLCJtb2RhbCIsImVzQ29uc3VsdGEiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFqYXgiLCJ1cmwiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJsZW5ndGgiLCJpIiwiaXRlbXMiLCJwYW5lIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciIsInN1Ym1pdCIsImV2ZW50IiwiZnVuY2lvbkNhbGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBQ0E7QUFDQUQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLGVBQWUsR0FBR0osQ0FBQyxDQUFDLCtCQUFELENBQXZCO0FBQ0FJLGlCQUFlLENBQUNDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCO0FBQ0FMLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxJQUFyQjtBQUNBTixHQUFDLENBQUMsbUJB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MkIsUUFBakIsQ0FBMEIsUUFBMUI7QUFDQTNCLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCaUMsV0FBckIsQ0FBaUMsUUFBakM7QUFDSCxDQXRpQkQ7QUF1aUJBakMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjZDLE1BQWpCLENBQXdCLFVBQVVDLEtBQVYsRUFBaUI7QUFDckM5QyxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjJCLFFBQXJCLENBQThCLFFBQTlCO0FBQ0EzQixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCaUMsV0FBakIsQ0FBNkIsUUFBN0I7QUFDQWpDLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCVSxLQUE5QixDQUFvQyxNQUFwQztBQUNILENBSkQ7O0FBS0EsU0FBU2tDLGNBQVQsQ0FBd0I1QixJQUF4QixFQUE4QjtBQUMxQixNQUFJQSxJQUFKLEVBQVU7QUFDTmhCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CO0FBQ0FOLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJnQixJQUFqQjtBQUNILEdBSEQsTUFHTztBQUNIaEIsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmdCLElBQW5CO0FBQ0FoQixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTSxJQUFqQjtBQUNIO0FBQ0o7O0FBR0QsU0FBU3lDLFlBQVQsQ0FBc0JWLGdCQUF0QixFQUF3Q0MsWUFBeEMsRUFBc0Q7QUFDbEQxQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBRUgsQyIsImZpbGUiOiJsdWdhckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5pbXBvcnQgJy4uL2Nzcy9zZWxlY3QyLnNjc3MnO1xuaW1wb3J0IHNlbGVjdDIgZnJvbSAnc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDInO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBlc0RlcG9zaXRvTGFiZWwgPSAkKFwibGFiZWxbZm9yPSdsdWdhcl9lc0RlcG9zaXRvJ11cIik7XG4gICAgZXNEZXBvc2l0b0xhYmVsLmNzcygnY29sb3InLCAnYmxhY2snKTtcbiAgICAkKFwiLmhpZGVQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAkKFwiLmJ0bkVsaW1pbmFyTHVnYXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2hpZGRlbklkTHVnYXJcIikudmFsKCQodGhpcykuZGF0YShcImx1Z2FySWRcIikpO1xuICAgICAgICAkKFwiI21vZGFsRWxpbWluYXJMdWdhclwiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQWJyaXJNb2RhbENvbmZpcm1hckluZHVzdHJpYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcbiAgICB2YXIgZXNDb25zdWx0YSA9ICQoXCIjaGlkZGVuRXNDb25zdWx0YVwiKS52YWwoKSA9PT0gXCIxXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc29sZS5sb2coZXNDb25zdWx0YSk7XG4gICAgaWYgKGVzQ29uc3VsdGEpIHtcbiAgICAgICAgJChcIiNsdWdhcl9ndWFyZGFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jb25maXJtYXJcIikuaGlkZSgpO1xuICAgIH1cbiAgICBpZiAoJChcIiNpbmR1c3RyaWFfZXNDb25maXJtYWRvXCIpLnZhbCgpID09PSBcIjFcIikge1xuICAgICAgICAkKFwiI2luZHVzdHJpYV9ndWFyZGFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfY29uZmlybWFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNidG5BYnJpck1vZGFsQ29uZmlybWFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICB9XG4vL1BSSU5DSVBBTFxuICAgICQoXCIuc2VhcmNoYWJsZWRyb3Bkb3duXCIpLnNlbGVjdDIoKTtcbiAgICBpZiAoJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX0NVUlRcIikudmFsKFwiXCIpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9wb3RlbmNpYVRvdGFsVXRpbGl6YWRhXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjYnRuRGlzcG9zaWNpb25ObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkKCcjYnRuQ2VydE5vJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vbGlzdGEgZGUgcGFpc2VzIHNvbG8gYXBhcmVjZSBzaSBjaGVja2JveCBleHBvcnRhIGVzIGNoZWNrZWRcbiAgICBpZiAoISQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3BhaXNlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuLy9IQUJJTElUQUNJT05cbiAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbGVnYWpvX3NlX2hcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9IYWJpbGl0YWRvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1ByaW1hcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1NlY3VuZGFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0VzcGVjaWZpY29cIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX21hdGVyaWFQcmltYVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25faW5zdW1vc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcHJvZHVjdG9GaW5hbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAvL3NpIGVzIFwiSW5pY2lvIGRlIHRyYW1pdGVcIlxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnMzUwNzUnKSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSA9PT0gXCIzNTA3NVwiKSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICAgICAgJChcIiNtb2RhbE5vSGFiaWxpdGFkb1wiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgIC8vQ0VSVElGSUNBRE8gREUgQVBUSVRVRCBBTUJJRU5UQUxcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5EaXNwb3NpY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5DZXJ0U2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkNlcnROb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG4gICAgLy9QUk9EVUNDSU9OXG4gICAgLy8gUmVzaWR1b3MgaW5kdXN0cmlhbGVzXG4gICAgJChcIiNidG5SZXNpZHVvc0luZHVzdHJpYWxlc1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUmVzaWR1b3NJbmR1c3RyaWFsZXNOb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5FZmx1ZW50ZXNMaXF1aWRvc1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRWZsdWVudGVzTGlxdWlkb3NOb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5UcmF0YW1pZW50b1ByZXZpb1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blRyYXRhbWllbnRvUHJldmlvTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blJlc2lkdW9zRXNwZWNpYWxlc1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5SZXNpZHVvc0VzcGVjaWFsZXNOb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkVtaXNpb25lc1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRW1pc2lvbmVzTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRGVudW5jaWFzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5EZW51bmNpYXNOb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3Jlc2lkdW9JbmR1c3RyaWFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9JbmR1c3RyaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2Rlc3Rpbm9WdWVsY29UaXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gUmVzaWR1b3MgZXNwZWNpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9Fc3BlY2lhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9jb3JyaWVudGVzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZWZsdWVudGVzIGxpcXVpZG9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZW1pc2lvbmVzIGdhc2Vvc2FzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb0VtaXNpb25HYXNlb3NhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9kZW51bmNpYXMgeSByZWNsYW1vc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2RlbnVuY2lhc0VzcGVjaWZpY2FjaW9uZXNcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0RvbWljaWxpbyBTZWxlY3QgY29uIERlcGVuZGVuY2lhXG4gICAgdmFyICRwcm92aW5jaWFTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tcHJvdmluY2lhJyk7XG4gICAgdmFyICRkZXBhcnRhbWVudG9UYXJnZXQgPSAkKCcuanMtZGVwYXJ0YW1lbnRvLXRhcmdldCcpO1xuICAgICRwcm92aW5jaWFTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkcHJvdmluY2lhU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkcHJvdmluY2lhU2VsZWN0LmRhdGEoJ2RlcGFydGFtZW50by11cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm92aW5jaWE6ICRwcm92aW5jaWFTZWxlY3QudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fZGVwYXJ0YW1lbnRvXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAvLyBEZXBhcnRhbWVudG8gLT4gbG9jYWxpZGFkXG4gICAgICAgICAgICAgICAgdmFyICRkZXBhcnRhbWVudG9TZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tZGVwYXJ0YW1lbnRvJyk7XG4gICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRUYXJnZXQgPSAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LmRhdGEoJ2xvY2FsaWRhZC11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2xvY2FsaWRhZFwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb2NhbGlkYWQgLT4gY2FsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1sb2NhbGlkYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhbGxlVGFyZ2V0ID0gJCgnLmpzLWNhbGxlLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRsb2NhbGlkYWRTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRsb2NhbGlkYWRTZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKCQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKS5sZW5ndGgpXG4gICAge1xuICAgICAgICB2YXIgJGRlcGFydGFtZW50b1NlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKTtcbiAgICAgICAgdmFyICRsb2NhbGlkYWRUYXJnZXQgPSAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpO1xuICAgICAgICAkZGVwYXJ0YW1lbnRvU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCRkZXBhcnRhbWVudG9TZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LmRhdGEoJ2xvY2FsaWRhZC11cmwnKSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fbG9jYWxpZGFkXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9Mb2NhbGlkYWQgLT4gY2FsbGVcbiAgICAgICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tbG9jYWxpZGFkJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY2FsbGVUYXJnZXQgPSAkKCcuanMtY2FsbGUtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYWxpZGFkU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGxvY2FsaWRhZFNlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2NhbGxlXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xuICAgICAgICB2YXIgJGNhbGxlVGFyZ2V0ID0gJCgnLmpzLWNhbGxlLXRhcmdldCcpO1xuICAgICAgICAkbG9jYWxpZGFkU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJGxvY2FsaWRhZFNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAkbG9jYWxpZGFkU2VsZWN0LmRhdGEoJ2NhbGxlLXVybCcpLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICRsb2NhbGlkYWRTZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgaSwgaXRlbXMgPSAkKCcubmF2LWxpbmsnKSwgcGFuZSA9ICQoJy50YWItcGFuZScpO1xuICAgICQoJy5idG5OZXh0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQoaXRlbXNbaV0pLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDAgJiYgZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5GaW5hbGl6YXJcIikudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAyICYmIGVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByb2R1Y2Npb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMyAmJiAkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuRmluYWxpemFyXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgKyAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpXSkucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2kgKyAxXSkuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmJ0blByZXZpb3VzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKGl0ZW1zW2ldKS5oYXNDbGFzcygnYWN0aXZlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDQgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJpbmNpcGFsXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgLSAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpXSkucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2kgLSAxXSkuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI2J0bkZpbmFsaXphclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKGZhbHNlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blByaW5jaXBhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgIGlmIChlc0NvbnN1bHRhICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blByb2R1Y2Npb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coZXNDb25zdWx0YSk7XG4gICAgICAgIGlmICghZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcblxuICAgIH0pO1xuXG4gICAgJChcIiNkaXZTcGlubmVyXCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKFwiI2RpdkZvcm1Db250ZW50XCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn0pO1xuJChcIiNmb3JtdWxhcmlvXCIpLnN1Ym1pdChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAkKFwiI2RpdkZvcm1Db250ZW50XCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKFwiI2RpdlNwaW5uZXJcIikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoXCIjbW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikubW9kYWwoJ2hpZGUnKTtcbn0pO1xuZnVuY3Rpb24gc2hvd0J0bkd1YXJkYXIoc2hvdykge1xuICAgIGlmIChzaG93KSB7XG4gICAgICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZHdWFyZGFyXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5oaWRlKCk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGZ1bmNpb25DYWxsZSgkbG9jYWxpZGFkU2VsZWN0LCAkY2FsbGVUYXJnZXQpIHtcbiAgICBjb25zb2xlLmxvZygnbGxlZ28nKTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=