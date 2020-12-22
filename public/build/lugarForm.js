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
  var esConsulta = $("#lugar_esConfirmado").val() === "1" ? true : false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiLCJlc0NvbnN1bHRhIiwidmFsIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCJjbGljayIsIm1vZGFsIiwiJHByb3ZpbmNpYVNlbGVjdCIsIiRkZXBhcnRhbWVudG9UYXJnZXQiLCJvbiIsImUiLCJmaW5kIiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwiZGF0YSIsInByb3ZpbmNpYSIsInN1Y2Nlc3MiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCIkZGVwYXJ0YW1lbnRvU2VsZWN0IiwiJGxvY2FsaWRhZFRhcmdldCIsImlkIiwiJGxvY2FsaWRhZFNlbGVjdCIsIiRjYWxsZVRhcmdldCIsImkiLCJpdGVtcyIsInBhbmUiLCJsZW5ndGgiLCJoYXNDbGFzcyIsInNob3dCdG5HdWFyZGFyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBQ0FELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkgsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksSUFBbkI7QUFDQUosR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxJQUFkO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk0sR0FBekIsT0FBbUMsR0FBbkMsR0FBeUMsSUFBekMsR0FBZ0QsS0FBakU7O0FBRUEsTUFBSUQsVUFBSixFQUFnQjtBQUNaTCxLQUFDLENBQUMs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QjtBQUNiTCxPQUFDLENBQUMsVUFBRCxDQUFELENBQWNTLElBQWQ7QUFDSCxLQUZELE1BRU87QUFDSFQsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxJQUFkO0FBQ0g7O0FBQ0RKLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1MsSUFBZDtBQUVILEdBVkQ7QUFXSCxDQWhaRDs7QUFrWkEsU0FBUytCLGNBQVQsQ0FBd0IvQixJQUF4QixFQUE4QjtBQUMxQixNQUFJQSxJQUFKLEVBQVU7QUFDTlQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksSUFBbkI7QUFDQUosS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlMsSUFBakI7QUFDSCxHQUhELE1BR087QUFDSFQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlMsSUFBbkI7QUFDQVQsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkksSUFBakI7QUFDSDtBQUNKLEMiLCJmaWxlIjoibHVnYXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0ICcuLi9jc3Mvc2VsZWN0Mi5zY3NzJztcbmltcG9ydCBzZWxlY3QyIGZyb20gJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyJztcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcbiAgICB2YXIgZXNDb25zdWx0YSA9ICQoXCIjbHVnYXJfZXNDb25maXJtYWRvXCIpLnZhbCgpID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcbiAgICBcbiAgICBpZiAoZXNDb25zdWx0YSkge1xuICAgICAgICAkKFwiI2x1Z2FyX2d1YXJkYXJcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgfVxuICAgIGlmKCQoXCIjaW5kdXN0cmlhX2VzQ29uZmlybWFkb1wiKS52YWwoKSA9PT0gXCIxXCIpe1xuICAgICAgICAkKFwiI2luZHVzdHJpYV9ndWFyZGFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfY29uZmlybWFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICB9XG4vL1BSSU5DSVBBTFxuICAgICQoXCIuc2VhcmNoYWJsZWRyb3Bkb3duXCIpLnNlbGVjdDIoKTtcbiAgICBpZiAoJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX0NVUlRcIikudmFsKFwiXCIpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9wb3RlbmNpYVRvdGFsVXRpbGl6YWRhXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjYnRuRGlzcG9zaWNpb25ObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkKCcjYnRuQ2VydE5vJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vbGlzdGEgZGUgcGFpc2VzIHNvbG8gYXBhcmVjZSBzaSBjaGVja2JveCBleHBvcnRhIGVzIGNoZWNrZWRcbiAgICBpZiAoISQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3BhaXNlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuLy9IQUJJTElUQUNJT05cbiAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbGVnYWpvX3NlX2hcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9IYWJpbGl0YWRvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1ByaW1hcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1NlY3VuZGFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0VzcGVjaWZpY29cIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX21hdGVyaWFQcmltYVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25faW5zdW1vc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcHJvZHVjdG9GaW5hbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAvL3NpIGVzIFwiSW5pY2lvIGRlIHRyYW1pdGVcIlxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnMzUwNzUnKSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSA9PT0gXCIzNTA3NVwiKSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICAgICAgJChcIiNtb2RhbE5vSGFiaWxpdGFkb1wiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgIC8vQ0VSVElGSUNBRE8gREUgQVBUSVRVRCBBTUJJRU5UQUxcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5EaXNwb3NpY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5DZXJ0U2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkNlcnROb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG4gICAgLy9QUk9EVUNDSU9OXG4gICAgLy8gUmVzaWR1b3MgaW5kdXN0cmlhbGVzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3Jlc2lkdW9JbmR1c3RyaWFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9JbmR1c3RyaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2Rlc3Rpbm9WdWVsY29UaXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gUmVzaWR1b3MgZXNwZWNpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9Fc3BlY2lhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9jb3JyaWVudGVzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZWZsdWVudGVzIGxpcXVpZG9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZW1pc2lvbmVzIGdhc2Vvc2FzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb0VtaXNpb25HYXNlb3NhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9kZW51bmNpYXMgeSByZWNsYW1vc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2RlbnVuY2lhc0VzcGVjaWZpY2FjaW9uZXNcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0RvbWljaWxpbyBTZWxlY3QgY29uIERlcGVuZGVuY2lhXG4gICAgdmFyICRwcm92aW5jaWFTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tcHJvdmluY2lhJyk7XG4gICAgdmFyICRkZXBhcnRhbWVudG9UYXJnZXQgPSAkKCcuanMtZGVwYXJ0YW1lbnRvLXRhcmdldCcpO1xuICAgICRwcm92aW5jaWFTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkcHJvdmluY2lhU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkcHJvdmluY2lhU2VsZWN0LmRhdGEoJ2RlcGFydGFtZW50by11cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm92aW5jaWE6ICRwcm92aW5jaWFTZWxlY3QudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fZGVwYXJ0YW1lbnRvXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAvLyBEZXBhcnRhbWVudG8gLT4gbG9jYWxpZGFkXG4gICAgICAgICAgICAgICAgdmFyICRkZXBhcnRhbWVudG9TZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tZGVwYXJ0YW1lbnRvJyk7XG4gICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRUYXJnZXQgPSAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LmRhdGEoJ2xvY2FsaWRhZC11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2xvY2FsaWRhZFwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb2NhbGlkYWQgLT4gY2FsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1sb2NhbGlkYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhbGxlVGFyZ2V0ID0gJCgnLmpzLWNhbGxlLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYWxpZGFkU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkbG9jYWxpZGFkU2VsZWN0LmRhdGEoJ2NhbGxlLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkbG9jYWxpZGFkU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fY2FsbGVcIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBpLCBpdGVtcyA9ICQoJy5uYXYtbGluaycpLCBwYW5lID0gJCgnLnRhYi1wYW5lJyk7XG4gICAgJCgnLmJ0bk5leHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJChpdGVtc1tpXSkuaGFzQ2xhc3MoJ2FjdGl2ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBlc0NvbnN1bHRhKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSAmJiAhJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkZpbmFsaXphclwiKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDIgJiYgZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJvZHVjY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzICYmICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5GaW5hbGl6YXJcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaSArIDFdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2ldKS5yZW1vdmVDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaSArIDFdKS5hZGRDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuYnRuUHJldmlvdXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQoaXRlbXNbaV0pLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNCAmJiAhJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmluY2lwYWxcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaSAtIDFdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2ldKS5yZW1vdmVDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaSAtIDFdKS5hZGRDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjYnRuRmluYWxpemFyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIoZmFsc2UpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUHJpbmNpcGFsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgaWYgKGVzQ29uc3VsdGEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5DZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUHJvZHVjY2lvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlc0NvbnN1bHRhKTtcbiAgICAgICAgaWYgKCFlc0NvbnN1bHRhKSB7XG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuXG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc2hvd0J0bkd1YXJkYXIoc2hvdykge1xuICAgIGlmIChzaG93KSB7XG4gICAgICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZHdWFyZGFyXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5oaWRlKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==