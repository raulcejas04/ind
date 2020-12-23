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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiLCJlc0NvbnN1bHRhIiwidmFsIiwiY29uc29sZSIsImxvZyIsInNlbGVjdDIiLCJpcyIsInNob3ciLCJjaGFuZ2UiLCJwcm9wIiwidHJpZ2dlciIsInNlbGVjdGVkIiwiY2xpY2siLCJtb2RhbCIsIiRwcm92aW5jaWFTZWxlY3QiLCIkZGVwYXJ0YW1lbnRvVGFyZ2V0Iiwib24iLCJlIiwiZmluZCIsInJlbW92ZSIsImFkZENsYXNzIiwiYWpheCIsInVybCIsImRhdGEiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJpIiwiaXRlbXMiLCJwYW5lIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBQ0FELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkgsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksSUFBbkI7QUFDQUosR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxJQUFkO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTCxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk0sR0FBdkIsT0FBaUMsR0FBakMsR0FBdUMsSUFBdkMsR0FBOEMsS0FBL0Q7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7O0FBQ0Es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LFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaOztBQUNBLFFBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNiTCxPQUFDLENBQUMsVUFBRCxDQUFELENBQWNXLElBQWQ7QUFDSCxLQUZELE1BRU87QUFDSFgsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxJQUFkO0FBQ0g7O0FBQ0RKLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1csSUFBZDtBQUVILEdBVkQ7QUFXSCxDQWhaRDs7QUFrWkEsU0FBUytCLGNBQVQsQ0FBd0IvQixJQUF4QixFQUE4QjtBQUMxQixNQUFJQSxJQUFKLEVBQVU7QUFDTlgsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksSUFBbkI7QUFDQUosS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlcsSUFBakI7QUFDSCxHQUhELE1BR087QUFDSFgsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlcsSUFBbkI7QUFDQVgsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkksSUFBakI7QUFDSDtBQUNKLEMiLCJmaWxlIjoibHVnYXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0ICcuLi9jc3Mvc2VsZWN0Mi5zY3NzJztcbmltcG9ydCBzZWxlY3QyIGZyb20gJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyJztcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcbiAgICB2YXIgZXNDb25zdWx0YSA9ICQoXCIjaGlkZGVuRXNDb25zdWx0YVwiKS52YWwoKSA9PT0gXCIxXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc29sZS5sb2coZXNDb25zdWx0YSk7XG4gICAgaWYgKGVzQ29uc3VsdGEpIHtcbiAgICAgICAgJChcIiNsdWdhcl9ndWFyZGFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jb25maXJtYXJcIikuaGlkZSgpO1xuICAgIH1cbiAgICBpZigkKFwiI2luZHVzdHJpYV9lc0NvbmZpcm1hZG9cIikudmFsKCkgPT09IFwiMVwiKXtcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfZ3VhcmRhckluZHVzdHJpYVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjaW5kdXN0cmlhX2NvbmZpcm1hckluZHVzdHJpYVwiKS5oaWRlKCk7XG4gICAgfVxuLy9QUklOQ0lQQUxcbiAgICAkKFwiLnNlYXJjaGFibGVkcm9wZG93blwiKS5zZWxlY3QyKCk7XG4gICAgaWYgKCQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9mZWNoYVVsdGltYUlucGVjY2lvblwiKS52YWwoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9DVVJUXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfcG90ZW5jaWFUb3RhbFV0aWxpemFkYVwiKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2J0bkRpc3Bvc2ljaW9uTm8nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgJCgnI2J0bkNlcnRObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2xpc3RhIGRlIHBhaXNlcyBzb2xvIGFwYXJlY2Ugc2kgY2hlY2tib3ggZXhwb3J0YSBlcyBjaGVja2VkXG4gICAgaWYgKCEkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsdWdhcl9wYWlzZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbi8vSEFCSUxJVEFDSU9OXG4gICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2xlZ2Fqb19zZV9oXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvSGFiaWxpdGFkbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9QcmltYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9TZWN1bmRhcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9Fc3BlY2lmaWNvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9tYXRlcmlhUHJpbWFcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2luc3Vtb3NcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3Byb2R1Y3RvRmluYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAgICAgLy9zaSBlcyBcIkluaWNpbyBkZSB0cmFtaXRlXCJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJzM1MDc1Jykge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgPT09IFwiMzUwNzVcIikge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgICAgICQoXCIjbW9kYWxOb0hhYmlsaXRhZG9cIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAvL0NFUlRJRklDQURPIERFIEFQVElUVUQgQU1CSUVOVEFMXG4gICAgaWYgKCQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuRGlzcG9zaWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5EaXNwb3NpY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG4gICAgaWYgKCQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfbnVtZXJvXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuQ2VydFNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5DZXJ0Tm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdubycpO1xuICAgIH0pO1xuICAgIC8vUFJPRFVDQ0lPTlxuICAgIC8vIFJlc2lkdW9zIGluZHVzdHJpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9yZXNpZHVvSW5kdXN0cmlhbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvSW5kdXN0cmlhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9kZXN0aW5vVnVlbGNvVGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFJlc2lkdW9zIGVzcGVjaWFsZXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvRXNwZWNpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfY29ycmllbnRlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGVmbHVlbnRlcyBsaXF1aWRvc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2VtaXNpb25lcyBnYXNlb3Nhc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9FbWlzaW9uR2FzZW9zYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZGVudW5jaWFzIHkgcmVjbGFtb3NcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNsdWdhcl9kZW51bmNpYXNFc3BlY2lmaWNhY2lvbmVzXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9Eb21pY2lsaW8gU2VsZWN0IGNvbiBEZXBlbmRlbmNpYVxuICAgIHZhciAkcHJvdmluY2lhU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLXByb3ZpbmNpYScpO1xuICAgIHZhciAkZGVwYXJ0YW1lbnRvVGFyZ2V0ID0gJCgnLmpzLWRlcGFydGFtZW50by10YXJnZXQnKTtcbiAgICAkcHJvdmluY2lhU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJHByb3ZpbmNpYVNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJHByb3ZpbmNpYVNlbGVjdC5kYXRhKCdkZXBhcnRhbWVudG8tdXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2lhOiAkcHJvdmluY2lhU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2RlcGFydGFtZW50b1wiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgLy8gRGVwYXJ0YW1lbnRvIC0+IGxvY2FsaWRhZFxuICAgICAgICAgICAgICAgIHZhciAkZGVwYXJ0YW1lbnRvU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWRlcGFydGFtZW50bycpO1xuICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkVGFyZ2V0ID0gJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGRlcGFydGFtZW50b1NlbGVjdC5kYXRhKCdsb2NhbGlkYWQtdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRkZXBhcnRhbWVudG9TZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19sb2NhbGlkYWRcIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTG9jYWxpZGFkIC0+IGNhbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tbG9jYWxpZGFkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYWxsZVRhcmdldCA9ICQoJy5qcy1jYWxsZS10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGxvY2FsaWRhZFNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGxvY2FsaWRhZFNlbGVjdC5kYXRhKCdjYWxsZS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGxvY2FsaWRhZFNlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2NhbGxlXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgaSwgaXRlbXMgPSAkKCcubmF2LWxpbmsnKSwgcGFuZSA9ICQoJy50YWItcGFuZScpO1xuICAgICQoJy5idG5OZXh0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQoaXRlbXNbaV0pLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDAgJiYgZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5GaW5hbGl6YXJcIikudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAyICYmIGVzQ29uc3VsdGEpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByb2R1Y2Npb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMyAmJiAkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuRmluYWxpemFyXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgKyAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpXSkucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2kgKyAxXSkuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmJ0blByZXZpb3VzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKGl0ZW1zW2ldKS5oYXNDbGFzcygnYWN0aXZlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDQgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJpbmNpcGFsXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2kgLSAxXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQocGFuZVtpXSkucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2kgLSAxXSkuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI2J0bkZpbmFsaXphclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKGZhbHNlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blByaW5jaXBhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgIGlmIChlc0NvbnN1bHRhICYmICEkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blByb2R1Y2Npb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coZXNDb25zdWx0YSk7XG4gICAgICAgIGlmICghZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNidG5QcmV2XCIpLnNob3coKTtcblxuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHNob3dCdG5HdWFyZGFyKHNob3cpIHtcbiAgICBpZiAoc2hvdykge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNkaXZDb25maXJtYXJcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2Rpdkd1YXJkYXJcIikuaGlkZSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=