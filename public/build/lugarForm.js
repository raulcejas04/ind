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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVzRGVwb3NpdG9MYWJlbCIsImNzcyIsImhpZGUiLCJjbGljayIsInZhbCIsImRhdGEiLCJtb2RhbCIsImVzQ29uc3VsdGEiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFqYXgiLCJ1cmwiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJpIiwiaXRlbXMiLCJwYW5lIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciIsInN1Ym1pdCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBQ0E7QUFDQUQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLGVBQWUsR0FBR0osQ0FBQyxDQUFDLCtCQUFELENBQXZCO0FBQ0FJLGlCQUFlLENBQUNDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCO0FBQ0FMLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxJQUFyQjtBQUNBTixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk8s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QUNBaEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7O0FBQ0EsUUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2JYLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2dCLElBQWQ7QUFDSCxLQUZELE1BRU87QUFDSGhCLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY00sSUFBZDtBQUNIOztBQUNETixLQUFDLENBQUMsVUFBRCxDQUFELENBQWNnQixJQUFkO0FBRUgsR0FWRDtBQVlBaEIsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjJCLFFBQWpCLENBQTBCLFFBQTFCO0FBQ0EzQixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmlDLFdBQXJCLENBQWlDLFFBQWpDO0FBQ0gsQ0E1Y0Q7QUE2Y0FqQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNkMsTUFBakIsQ0FBd0IsVUFBVUMsS0FBVixFQUFpQjtBQUNyQzlDLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCMkIsUUFBckIsQ0FBOEIsUUFBOUI7QUFDQTNCLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJpQyxXQUFqQixDQUE2QixRQUE3QjtBQUNBakMsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJVLEtBQTlCLENBQW9DLE1BQXBDO0FBQ0gsQ0FKRDs7QUFLQSxTQUFTa0MsY0FBVCxDQUF3QjVCLElBQXhCLEVBQThCO0FBQzFCLE1BQUlBLElBQUosRUFBVTtBQUNOaEIsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQk0sSUFBbkI7QUFDQU4sS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmdCLElBQWpCO0FBQ0gsR0FIRCxNQUdPO0FBQ0hoQixLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CZ0IsSUFBbkI7QUFDQWhCLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJNLElBQWpCO0FBQ0g7QUFDSixDIiwiZmlsZSI6Imx1Z2FyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCAnLi4vY3NzL3NlbGVjdDIuc2Nzcyc7XG5pbXBvcnQgc2VsZWN0MiBmcm9tICdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mic7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVzRGVwb3NpdG9MYWJlbCA9ICQoXCJsYWJlbFtmb3I9J2x1Z2FyX2VzRGVwb3NpdG8nXVwiKTtcbiAgICBlc0RlcG9zaXRvTGFiZWwuY3NzKCdjb2xvcicsICdibGFjaycpO1xuICAgICQoXCIuaGlkZVByb2R1Y2Npb25cIikuaGlkZSgpO1xuICAgICQoXCIuYnRuRWxpbWluYXJMdWdhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjaGlkZGVuSWRMdWdhclwiKS52YWwoJCh0aGlzKS5kYXRhKFwibHVnYXJJZFwiKSk7XG4gICAgICAgICQoXCIjbW9kYWxFbGltaW5hckx1Z2FyXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5BYnJpck1vZGFsQ29uZmlybWFySW5kdXN0cmlhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNtb2RhbENvbmZpcm1hckluZHVzdHJpYVwiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICAkKFwiI2J0blByZXZcIikuaGlkZSgpO1xuICAgIHZhciBlc0NvbnN1bHRhID0gJChcIiNoaWRkZW5Fc0NvbnN1bHRhXCIpLnZhbCgpID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyhlc0NvbnN1bHRhKTtcbiAgICBpZiAoZXNDb25zdWx0YSkge1xuICAgICAgICAkKFwiI2x1Z2FyX2d1YXJkYXJcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgfVxuICAgIGlmICgkKFwiI2luZHVzdHJpYV9lc0NvbmZpcm1hZG9cIikudmFsKCkgPT09IFwiMVwiKSB7XG4gICAgICAgICQoXCIjaW5kdXN0cmlhX2d1YXJkYXJJbmR1c3RyaWFcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2luZHVzdHJpYV9jb25maXJtYXJJbmR1c3RyaWFcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2J0bkFicmlyTW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikuaGlkZSgpO1xuICAgIH1cbi8vUFJJTkNJUEFMXG4gICAgJChcIi5zZWFyY2hhYmxlZHJvcGRvd25cIikuc2VsZWN0MigpO1xuICAgIGlmICgkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9mZWNoYVVsdGltYUlucGVjY2lvblwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfQ1VSVFwiKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3BvdGVuY2lhVG90YWxVdGlsaXphZGFcIikudmFsKFwiXCIpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNidG5EaXNwb3NpY2lvbk5vJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICQoJyNidG5DZXJ0Tm8nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9saXN0YSBkZSBwYWlzZXMgc29sbyBhcGFyZWNlIHNpIGNoZWNrYm94IGV4cG9ydGEgZXMgY2hlY2tlZFxuICAgIGlmICghJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbHVnYXJfcGFpc2VzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4vL0hBQklMSVRBQ0lPTlxuICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnJykge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9sZWdham9fc2VfaFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0hhYmlsaXRhZG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvUHJpbWFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvU2VjdW5kYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvRXNwZWNpZmljb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbWF0ZXJpYVByaW1hXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9pbnN1bW9zXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9wcm9kdWN0b0ZpbmFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgICAgIC8vc2kgZXMgXCJJbmljaW8gZGUgdHJhbWl0ZVwiXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICczNTA3NScpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpID09PSBcIjM1MDc1XCIpIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fdGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgICAgICAkKFwiI21vZGFsTm9IYWJpbGl0YWRvXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgLy9DRVJUSUZJQ0FETyBERSBBUFRJVFVEIEFNQklFTlRBTFxuICAgIGlmICgkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX251bWVyb1wiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRGlzcG9zaWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX251bWVyb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdubycpO1xuICAgIH0pO1xuICAgIGlmICgkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkNlcnRTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQ2VydE5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcbiAgICAvL1BST0RVQ0NJT05cbiAgICAvLyBSZXNpZHVvcyBpbmR1c3RyaWFsZXNcbiAgICAkKFwiI2J0blJlc2lkdW9zSW5kdXN0cmlhbGVzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5SZXNpZHVvc0luZHVzdHJpYWxlc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkVmbHVlbnRlc0xpcXVpZG9zU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5FZmx1ZW50ZXNMaXF1aWRvc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blRyYXRhbWllbnRvUHJldmlvU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuVHJhdGFtaWVudG9QcmV2aW9Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUmVzaWR1b3NFc3BlY2lhbGVzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blJlc2lkdW9zRXNwZWNpYWxlc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRW1pc2lvbmVzU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5FbWlzaW9uZXNOb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5EZW51bmNpYXNTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRlbnVuY2lhc05vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfcmVzaWR1b0luZHVzdHJpYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0luZHVzdHJpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfZGVzdGlub1Z1ZWxjb1RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBSZXNpZHVvcyBlc3BlY2lhbGVzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0VzcGVjaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2NvcnJpZW50ZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlZmx1ZW50ZXMgbGlxdWlkb3NcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9lbWlzaW9uZXMgZ2FzZW9zYXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvRW1pc2lvbkdhc2Vvc2EnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2RlbnVuY2lhcyB5IHJlY2xhbW9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZGVudW5jaWFzRXNwZWNpZmljYWNpb25lc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vRG9taWNpbGlvIFNlbGVjdCBjb24gRGVwZW5kZW5jaWFcbiAgICB2YXIgJHByb3ZpbmNpYVNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1wcm92aW5jaWEnKTtcbiAgICB2YXIgJGRlcGFydGFtZW50b1RhcmdldCA9ICQoJy5qcy1kZXBhcnRhbWVudG8tdGFyZ2V0Jyk7XG4gICAgJHByb3ZpbmNpYVNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCRwcm92aW5jaWFTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICRwcm92aW5jaWFTZWxlY3QuZGF0YSgnZGVwYXJ0YW1lbnRvLXVybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNpYTogJHByb3ZpbmNpYVNlbGVjdC52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcbiAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19kZXBhcnRhbWVudG9cIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgIC8vIERlcGFydGFtZW50byAtPiBsb2NhbGlkYWRcbiAgICAgICAgICAgICAgICB2YXIgJGRlcGFydGFtZW50b1NlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKTtcbiAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFRhcmdldCA9ICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1NlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRkZXBhcnRhbWVudG9TZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRkZXBhcnRhbWVudG9TZWxlY3QuZGF0YSgnbG9jYWxpZGFkLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fbG9jYWxpZGFkXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0xvY2FsaWRhZCAtPiBjYWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2FsbGVUYXJnZXQgPSAkKCcuanMtY2FsbGUtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRsb2NhbGlkYWRTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRsb2NhbGlkYWRTZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGksIGl0ZW1zID0gJCgnLm5hdi1saW5rJyksIHBhbmUgPSAkKCcudGFiLXBhbmUnKTtcbiAgICAkKCcuYnRuTmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKGl0ZW1zW2ldKS5oYXNDbGFzcygnYWN0aXZlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwICYmIGVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuRmluYWxpemFyXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMiAmJiBlc0NvbnN1bHRhKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5Qcm9kdWNjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMgJiYgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkZpbmFsaXphclwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpICsgMV0pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaV0pLnJlbW92ZUNsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpICsgMV0pLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5idG5QcmV2aW91cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJChpdGVtc1tpXSkuaGFzQ2xhc3MoJ2FjdGl2ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChpID09PSA0ICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByaW5jaXBhbFwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpIC0gMV0pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaV0pLnJlbW92ZUNsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpIC0gMV0pLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNidG5GaW5hbGl6YXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcihmYWxzZSk7XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5QcmluY2lwYWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICBpZiAoZXNDb25zdWx0YSAmJiAhJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5Qcm9kdWNjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVzQ29uc3VsdGEpO1xuICAgICAgICBpZiAoIWVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG5cbiAgICB9KTtcbiAgIFxuICAgICQoXCIjZGl2U3Bpbm5lclwiKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJChcIiNkaXZGb3JtQ29udGVudFwiKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59KTtcbiQoXCIjZm9ybXVsYXJpb1wiKS5zdWJtaXQoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgJChcIiNkaXZGb3JtQ29udGVudFwiKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJChcIiNkaXZTcGlubmVyXCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKFwiI21vZGFsQ29uZmlybWFySW5kdXN0cmlhXCIpLm1vZGFsKCdoaWRlJyk7XG59KTtcbmZ1bmN0aW9uIHNob3dCdG5HdWFyZGFyKHNob3cpIHtcbiAgICBpZiAoc2hvdykge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNkaXZDb25maXJtYXJcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2Rpdkd1YXJkYXJcIikuaGlkZSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=