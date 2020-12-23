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
  $(".btnEliminarLugar").click(function () {
    console.log($(this).data("lugarId"));
    $("#hiddenIdLugar").val($(this).data("lugarId"));
    $("#modalEliminarLugar").modal('show');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ2YWwiLCJtb2RhbCIsImhpZGUiLCJlc0NvbnN1bHRhIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFqYXgiLCJ1cmwiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJpIiwiaXRlbXMiLCJwYW5lIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBQ0FELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkgsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJJLEtBQXZCLENBQTZCLFlBQVU7QUFDbkNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsQ0FBYSxTQUFiLENBQVo7QUFDQVAsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JRLEdBQXBCLENBQXdCUixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsQ0FB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QUFkO0FBQ0g7O0FBQ0RWLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2MsSUFBZDtBQUNILEdBUEQ7QUFRQWQsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJJLEtBQTlCLENBQW9DLFlBQVk7QUFDNUNzQyxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBMUMsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjYyxJQUFkO0FBQ0FkLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2MsSUFBZDtBQUNILEdBSkQ7QUFLQWQsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JJLEtBQXBCLENBQTBCLFlBQVk7QUFDbENzQyxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBckMsV0FBTyxDQUFDQyxHQUFSLENBQVlLLFVBQVo7O0FBQ0EsUUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2JYLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2MsSUFBZDtBQUNILEtBRkQsTUFFTztBQUNIZCxPQUFDLENBQUMsVUFBRCxDQUFELENBQWNVLElBQWQ7QUFDSDs7QUFDRFYsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjYyxJQUFkO0FBRUgsR0FWRDtBQVdILENBclpEOztBQXVaQSxTQUFTNEIsY0FBVCxDQUF3QjVCLElBQXhCLEVBQThCO0FBQzFCLE1BQUlBLElBQUosRUFBVTtBQUNOZCxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CVSxJQUFuQjtBQUNBVixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxJQUFqQjtBQUNILEdBSEQsTUFHTztBQUNIZCxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CYyxJQUFuQjtBQUNBZCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCVSxJQUFqQjtBQUNIO0FBQ0osQyIsImZpbGUiOiJsdWdhckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5pbXBvcnQgJy4uL2Nzcy9zZWxlY3QyLnNjc3MnO1xuaW1wb3J0IHNlbGVjdDIgZnJvbSAnc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDInO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoXCIuYnRuRWxpbWluYXJMdWdhclwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmRhdGEoXCJsdWdhcklkXCIpKTtcbiAgICAgICAgJChcIiNoaWRkZW5JZEx1Z2FyXCIpLnZhbCgkKHRoaXMpLmRhdGEoXCJsdWdhcklkXCIpKTtcbiAgICAgICAgICQoXCIjbW9kYWxFbGltaW5hckx1Z2FyXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgJChcIiNkaXZDb25maXJtYXJcIikuaGlkZSgpO1xuICAgICQoXCIjYnRuUHJldlwiKS5oaWRlKCk7XG4gICAgdmFyIGVzQ29uc3VsdGEgPSAkKFwiI2hpZGRlbkVzQ29uc3VsdGFcIikudmFsKCkgPT09IFwiMVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKGVzQ29uc3VsdGEpO1xuICAgIGlmIChlc0NvbnN1bHRhKSB7XG4gICAgICAgICQoXCIjbHVnYXJfZ3VhcmRhclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgaWYoJChcIiNpbmR1c3RyaWFfZXNDb25maXJtYWRvXCIpLnZhbCgpID09PSBcIjFcIil7XG4gICAgICAgICQoXCIjaW5kdXN0cmlhX2d1YXJkYXJJbmR1c3RyaWFcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2luZHVzdHJpYV9jb25maXJtYXJJbmR1c3RyaWFcIikuaGlkZSgpO1xuICAgIH1cbi8vUFJJTkNJUEFMXG4gICAgJChcIi5zZWFyY2hhYmxlZHJvcGRvd25cIikuc2VsZWN0MigpO1xuICAgIGlmICgkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9mZWNoYVVsdGltYUlucGVjY2lvblwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfQ1VSVFwiKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3BvdGVuY2lhVG90YWxVdGlsaXphZGFcIikudmFsKFwiXCIpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNidG5EaXNwb3NpY2lvbk5vJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICQoJyNidG5DZXJ0Tm8nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9saXN0YSBkZSBwYWlzZXMgc29sbyBhcGFyZWNlIHNpIGNoZWNrYm94IGV4cG9ydGEgZXMgY2hlY2tlZFxuICAgIGlmICghJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbHVnYXJfcGFpc2VzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4vL0hBQklMSVRBQ0lPTlxuICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnJykge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9sZWdham9fc2VfaFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0hhYmlsaXRhZG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvUHJpbWFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvU2VjdW5kYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvRXNwZWNpZmljb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbWF0ZXJpYVByaW1hXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9pbnN1bW9zXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9wcm9kdWN0b0ZpbmFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgICAgIC8vc2kgZXMgXCJJbmljaW8gZGUgdHJhbWl0ZVwiXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICczNTA3NScpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpID09PSBcIjM1MDc1XCIpIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fdGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgICAgICAkKFwiI21vZGFsTm9IYWJpbGl0YWRvXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgLy9DRVJUSUZJQ0FETyBERSBBUFRJVFVEIEFNQklFTlRBTFxuICAgIGlmICgkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX251bWVyb1wiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuRGlzcG9zaWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX251bWVyb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdubycpO1xuICAgIH0pO1xuICAgIGlmICgkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkNlcnRTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQ2VydE5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcbiAgICAvL1BST0RVQ0NJT05cbiAgICAvLyBSZXNpZHVvcyBpbmR1c3RyaWFsZXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfcmVzaWR1b0luZHVzdHJpYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0luZHVzdHJpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfZGVzdGlub1Z1ZWxjb1RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBSZXNpZHVvcyBlc3BlY2lhbGVzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0VzcGVjaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2NvcnJpZW50ZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlZmx1ZW50ZXMgbGlxdWlkb3NcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9lbWlzaW9uZXMgZ2FzZW9zYXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvRW1pc2lvbkdhc2Vvc2EnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2RlbnVuY2lhcyB5IHJlY2xhbW9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZGVudW5jaWFzRXNwZWNpZmljYWNpb25lc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vRG9taWNpbGlvIFNlbGVjdCBjb24gRGVwZW5kZW5jaWFcbiAgICB2YXIgJHByb3ZpbmNpYVNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1wcm92aW5jaWEnKTtcbiAgICB2YXIgJGRlcGFydGFtZW50b1RhcmdldCA9ICQoJy5qcy1kZXBhcnRhbWVudG8tdGFyZ2V0Jyk7XG4gICAgJHByb3ZpbmNpYVNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCRwcm92aW5jaWFTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICRwcm92aW5jaWFTZWxlY3QuZGF0YSgnZGVwYXJ0YW1lbnRvLXVybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNpYTogJHByb3ZpbmNpYVNlbGVjdC52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcbiAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19kZXBhcnRhbWVudG9cIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgIC8vIERlcGFydGFtZW50byAtPiBsb2NhbGlkYWRcbiAgICAgICAgICAgICAgICB2YXIgJGRlcGFydGFtZW50b1NlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKTtcbiAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFRhcmdldCA9ICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1NlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRkZXBhcnRhbWVudG9TZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRkZXBhcnRhbWVudG9TZWxlY3QuZGF0YSgnbG9jYWxpZGFkLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fbG9jYWxpZGFkXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0xvY2FsaWRhZCAtPiBjYWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2FsbGVUYXJnZXQgPSAkKCcuanMtY2FsbGUtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRsb2NhbGlkYWRTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRsb2NhbGlkYWRTZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGksIGl0ZW1zID0gJCgnLm5hdi1saW5rJyksIHBhbmUgPSAkKCcudGFiLXBhbmUnKTtcbiAgICAkKCcuYnRuTmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKGl0ZW1zW2ldKS5oYXNDbGFzcygnYWN0aXZlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwICYmIGVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuRmluYWxpemFyXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMiAmJiBlc0NvbnN1bHRhKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5Qcm9kdWNjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMgJiYgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkZpbmFsaXphclwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpICsgMV0pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaV0pLnJlbW92ZUNsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpICsgMV0pLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5idG5QcmV2aW91cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJChpdGVtc1tpXSkuaGFzQ2xhc3MoJ2FjdGl2ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChpID09PSA0ICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByaW5jaXBhbFwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpIC0gMV0pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaV0pLnJlbW92ZUNsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpIC0gMV0pLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNidG5GaW5hbGl6YXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcihmYWxzZSk7XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5QcmluY2lwYWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICBpZiAoZXNDb25zdWx0YSAmJiAhJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5Qcm9kdWNjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVzQ29uc3VsdGEpO1xuICAgICAgICBpZiAoIWVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG5cbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBzaG93QnRuR3VhcmRhcihzaG93KSB7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgICAgJChcIiNkaXZDb25maXJtYXJcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2Rpdkd1YXJkYXJcIikuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNkaXZHdWFyZGFyXCIpLmhpZGUoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9