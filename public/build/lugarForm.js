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

/***/ })

},[["./assets/js/lugarForm.js","runtime","vendors~app~datepicker~image_cropper~lugarForm~select2","vendors~lugarForm~select2","vendors~image_cropper~lugarForm","vendors~lugarForm"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVzRGVwb3NpdG9MYWJlbCIsImNzcyIsImhpZGUiLCJjbGljayIsInZhbCIsImRhdGEiLCJtb2RhbCIsImVzQ29uc3VsdGEiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFqYXgiLCJ1cmwiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJpIiwiaXRlbXMiLCJwYW5lIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciIsInN1Ym1pdCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBQ0E7QUFDQUQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLGVBQWUsR0FBR0osQ0FBQyxDQUFDLCtCQUFELENBQXZCO0FBQ0FJLGlCQUFlLENBQUNDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCO0FBQ0FMLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxJQUFyQjtBQUNBTixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk8s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QUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDYlgsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZ0IsSUFBZDtBQUNILEtBRkQsTUFFTztBQUNIaEIsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjTSxJQUFkO0FBQ0g7O0FBQ0ROLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2dCLElBQWQ7QUFFSCxHQVZEO0FBWUFoQixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCMkIsUUFBakIsQ0FBMEIsUUFBMUI7QUFDQTNCLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCaUMsV0FBckIsQ0FBaUMsUUFBakM7QUFDSCxDQTNjRDtBQTRjQWpDLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUI2QyxNQUFqQixDQUF3QixVQUFVQyxLQUFWLEVBQWlCO0FBQ3JDOUMsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIyQixRQUFyQixDQUE4QixRQUE5QjtBQUNBM0IsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmlDLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0FqQyxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QlUsS0FBOUIsQ0FBb0MsTUFBcEM7QUFDSCxDQUpEOztBQUtBLFNBQVNrQyxjQUFULENBQXdCNUIsSUFBeEIsRUFBOEI7QUFDMUIsTUFBSUEsSUFBSixFQUFVO0FBQ05oQixLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CTSxJQUFuQjtBQUNBTixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCZ0IsSUFBakI7QUFDSCxHQUhELE1BR087QUFDSGhCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnQixJQUFuQjtBQUNBaEIsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk0sSUFBakI7QUFDSDtBQUNKLEMiLCJmaWxlIjoibHVnYXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0ICcuLi9jc3Mvc2VsZWN0Mi5zY3NzJztcbmltcG9ydCBzZWxlY3QyIGZyb20gJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyJztcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXNEZXBvc2l0b0xhYmVsID0gJChcImxhYmVsW2Zvcj0nbHVnYXJfZXNEZXBvc2l0byddXCIpO1xuICAgIGVzRGVwb3NpdG9MYWJlbC5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XG4gICAgJChcIi5oaWRlUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgJChcIi5idG5FbGltaW5hckx1Z2FyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNoaWRkZW5JZEx1Z2FyXCIpLnZhbCgkKHRoaXMpLmRhdGEoXCJsdWdhcklkXCIpKTtcbiAgICAgICAgJChcIiNtb2RhbEVsaW1pbmFyTHVnYXJcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkFicmlyTW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI21vZGFsQ29uZmlybWFySW5kdXN0cmlhXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgJChcIiNkaXZDb25maXJtYXJcIikuaGlkZSgpO1xuICAgICQoXCIjYnRuUHJldlwiKS5oaWRlKCk7XG4gICAgdmFyIGVzQ29uc3VsdGEgPSAkKFwiI2hpZGRlbkVzQ29uc3VsdGFcIikudmFsKCkgPT09IFwiMVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKGVzQ29uc3VsdGEpO1xuICAgIGlmIChlc0NvbnN1bHRhKSB7XG4gICAgICAgICQoXCIjbHVnYXJfZ3VhcmRhclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgaWYgKCQoXCIjaW5kdXN0cmlhX2VzQ29uZmlybWFkb1wiKS52YWwoKSA9PT0gXCIxXCIpIHtcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfZ3VhcmRhckluZHVzdHJpYVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjaW5kdXN0cmlhX2NvbmZpcm1hckluZHVzdHJpYVwiKS5oaWRlKCk7XG4gICAgfVxuLy9QUklOQ0lQQUxcbiAgICAkKFwiLnNlYXJjaGFibGVkcm9wZG93blwiKS5zZWxlY3QyKCk7XG4gICAgaWYgKCQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9mZWNoYVVsdGltYUlucGVjY2lvblwiKS52YWwoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9DVVJUXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfcG90ZW5jaWFUb3RhbFV0aWxpemFkYVwiKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2J0bkRpc3Bvc2ljaW9uTm8nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgJCgnI2J0bkNlcnRObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2xpc3RhIGRlIHBhaXNlcyBzb2xvIGFwYXJlY2Ugc2kgY2hlY2tib3ggZXhwb3J0YSBlcyBjaGVja2VkXG4gICAgaWYgKCEkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsdWdhcl9wYWlzZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbi8vSEFCSUxJVEFDSU9OXG4gICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2xlZ2Fqb19zZV9oXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvSGFiaWxpdGFkbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9QcmltYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9TZWN1bmRhcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9Fc3BlY2lmaWNvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9tYXRlcmlhUHJpbWFcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2luc3Vtb3NcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3Byb2R1Y3RvRmluYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAgICAgLy9zaSBlcyBcIkluaWNpbyBkZSB0cmFtaXRlXCJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJzM1MDc1Jykge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgPT09IFwiMzUwNzVcIikge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgICAgICQoXCIjbW9kYWxOb0hhYmlsaXRhZG9cIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAvL0NFUlRJRklDQURPIERFIEFQVElUVUQgQU1CSUVOVEFMXG4gICAgaWYgKCQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuRGlzcG9zaWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5EaXNwb3NpY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG4gICAgaWYgKCQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfbnVtZXJvXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuQ2VydFNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5DZXJ0Tm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdubycpO1xuICAgIH0pO1xuICAgIC8vUFJPRFVDQ0lPTlxuICAgIC8vIFJlc2lkdW9zIGluZHVzdHJpYWxlc1xuICAgICQoXCIjYnRuUmVzaWR1b3NJbmR1c3RyaWFsZXNTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blJlc2lkdW9zSW5kdXN0cmlhbGVzTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRWZsdWVudGVzTGlxdWlkb3NTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkVmbHVlbnRlc0xpcXVpZG9zTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuVHJhdGFtaWVudG9QcmV2aW9TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgfSk7XG4gICAgJChcIiNidG5UcmF0YW1pZW50b1ByZXZpb05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgJChcIiNidG5SZXNpZHVvc0VzcGVjaWFsZXNTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUmVzaWR1b3NFc3BlY2lhbGVzTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5FbWlzaW9uZXNTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkVtaXNpb25lc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRlbnVuY2lhc1NpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRGVudW5jaWFzTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9yZXNpZHVvSW5kdXN0cmlhbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvSW5kdXN0cmlhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9kZXN0aW5vVnVlbGNvVGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFJlc2lkdW9zIGVzcGVjaWFsZXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvRXNwZWNpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfY29ycmllbnRlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGVmbHVlbnRlcyBsaXF1aWRvc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2VtaXNpb25lcyBnYXNlb3Nhc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9FbWlzaW9uR2FzZW9zYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZGVudW5jaWFzIHkgcmVjbGFtb3NcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNsdWdhcl9kZW51bmNpYXNFc3BlY2lmaWNhY2lvbmVzXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9Eb21pY2lsaW8gU2VsZWN0IGNvbiBEZXBlbmRlbmNpYVxuICAgIHZhciAkcHJvdmluY2lhU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLXByb3ZpbmNpYScpO1xuICAgIHZhciAkZGVwYXJ0YW1lbnRvVGFyZ2V0ID0gJCgnLmpzLWRlcGFydGFtZW50by10YXJnZXQnKTtcbiAgICAkcHJvdmluY2lhU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJHByb3ZpbmNpYVNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJHByb3ZpbmNpYVNlbGVjdC5kYXRhKCdkZXBhcnRhbWVudG8tdXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2lhOiAkcHJvdmluY2lhU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2RlcGFydGFtZW50b1wiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgLy8gRGVwYXJ0YW1lbnRvIC0+IGxvY2FsaWRhZFxuICAgICAgICAgICAgICAgIHZhciAkZGVwYXJ0YW1lbnRvU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWRlcGFydGFtZW50bycpO1xuICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkVGFyZ2V0ID0gJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGRlcGFydGFtZW50b1NlbGVjdC5kYXRhKCdsb2NhbGlkYWQtdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRkZXBhcnRhbWVudG9TZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19sb2NhbGlkYWRcIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTG9jYWxpZGFkIC0+IGNhbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tbG9jYWxpZGFkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYWxsZVRhcmdldCA9ICQoJy5qcy1jYWxsZS10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGxvY2FsaWRhZFNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGxvY2FsaWRhZFNlbGVjdC5kYXRhKCdjYWxsZS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGxvY2FsaWRhZFNlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2NhbGxlXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgaSwgaXRlbXMgPSAkKCcubmF2LWxpbmsnKSwgcGFuZSA9ICQoJy50YWItcGFuZScpO1xuICAgICQoJy5idG5OZXh0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQoaXRlbXNbaV0pLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDAgJiYgZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5GaW5hbGl6YXJcIikudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAyICYmIGVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByb2R1Y2Npb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMyAmJiAkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuRmluYWxpemFyXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgKyAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpXSkucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2kgKyAxXSkuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmJ0blByZXZpb3VzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKGl0ZW1zW2ldKS5oYXNDbGFzcygnYWN0aXZlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDQgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJpbmNpcGFsXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgLSAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpXSkucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2kgLSAxXSkuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI2J0bkZpbmFsaXphclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKGZhbHNlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blByaW5jaXBhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgIGlmIChlc0NvbnN1bHRhICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blByb2R1Y2Npb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coZXNDb25zdWx0YSk7XG4gICAgICAgIGlmICghZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcblxuICAgIH0pO1xuICAgXG4gICAgJChcIiNkaXZTcGlubmVyXCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKFwiI2RpdkZvcm1Db250ZW50XCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn0pO1xuJChcIiNmb3JtdWxhcmlvXCIpLnN1Ym1pdChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAkKFwiI2RpdkZvcm1Db250ZW50XCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKFwiI2RpdlNwaW5uZXJcIikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoXCIjbW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikubW9kYWwoJ2hpZGUnKTtcbn0pO1xuZnVuY3Rpb24gc2hvd0J0bkd1YXJkYXIoc2hvdykge1xuICAgIGlmIChzaG93KSB7XG4gICAgICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZHdWFyZGFyXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5oaWRlKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==