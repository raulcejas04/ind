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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwidmFsIiwiZGF0YSIsIm1vZGFsIiwiaGlkZSIsImVzQ29uc3VsdGEiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFqYXgiLCJ1cmwiLCJwcm92aW5jaWEiLCJzdWNjZXNzIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiJGRlcGFydGFtZW50b1NlbGVjdCIsIiRsb2NhbGlkYWRUYXJnZXQiLCJpZCIsIiRsb2NhbGlkYWRTZWxlY3QiLCIkY2FsbGVUYXJnZXQiLCJpIiwiaXRlbXMiLCJwYW5lIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJzaG93QnRuR3VhcmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBQ0FELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkgsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJJLEtBQXZCLENBQTZCLFlBQVk7QUFDckNKLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxHQUFwQixDQUF3QkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsU0FBYixDQUF4QjtBQUNBTixLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk8sS0FBekIsQ0FBK0IsTUFBL0I7QUFDSCxHQUhE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RUFBNEQ7QUFDeERiLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1EsSUFBZDtBQUNIOztBQUNEUixLQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLElBQWQ7QUFDSCxHQVBEO0FBUUFkLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCSSxLQUE5QixDQUFvQyxZQUFZO0FBQzVDc0Msa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQTFDLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2MsSUFBZDtBQUNBZCxLQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLElBQWQ7QUFDSCxHQUpEO0FBS0FkLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSSxLQUFwQixDQUEwQixZQUFZO0FBQ2xDc0Msa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQWhDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaOztBQUNBLFFBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNiVCxPQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLElBQWQ7QUFDSCxLQUZELE1BRU87QUFDSGQsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjUSxJQUFkO0FBQ0g7O0FBQ0RSLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2MsSUFBZDtBQUVILEdBVkQ7QUFXSCxDQXZaRDs7QUF5WkEsU0FBUzRCLGNBQVQsQ0FBd0I1QixJQUF4QixFQUE4QjtBQUMxQixNQUFJQSxJQUFKLEVBQVU7QUFDTmQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDQVIsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmMsSUFBakI7QUFDSCxHQUhELE1BR087QUFDSGQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmMsSUFBbkI7QUFDQWQsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlEsSUFBakI7QUFDSDtBQUNKLEMiLCJmaWxlIjoibHVnYXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0ICcuLi9jc3Mvc2VsZWN0Mi5zY3NzJztcbmltcG9ydCBzZWxlY3QyIGZyb20gJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyJztcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmJ0bkVsaW1pbmFyTHVnYXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2hpZGRlbklkTHVnYXJcIikudmFsKCQodGhpcykuZGF0YShcImx1Z2FySWRcIikpO1xuICAgICAgICAkKFwiI21vZGFsRWxpbWluYXJMdWdhclwiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQWJyaXJNb2RhbENvbmZpcm1hckluZHVzdHJpYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbW9kYWxDb25maXJtYXJJbmR1c3RyaWFcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgJChcIiNidG5QcmV2XCIpLmhpZGUoKTtcbiAgICB2YXIgZXNDb25zdWx0YSA9ICQoXCIjaGlkZGVuRXNDb25zdWx0YVwiKS52YWwoKSA9PT0gXCIxXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc29sZS5sb2coZXNDb25zdWx0YSk7XG4gICAgaWYgKGVzQ29uc3VsdGEpIHtcbiAgICAgICAgJChcIiNsdWdhcl9ndWFyZGFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jb25maXJtYXJcIikuaGlkZSgpO1xuICAgIH1cbiAgICBpZiAoJChcIiNpbmR1c3RyaWFfZXNDb25maXJtYWRvXCIpLnZhbCgpID09PSBcIjFcIikge1xuICAgICAgICAkKFwiI2luZHVzdHJpYV9ndWFyZGFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNpbmR1c3RyaWFfY29uZmlybWFySW5kdXN0cmlhXCIpLmhpZGUoKTtcbiAgICB9XG4vL1BSSU5DSVBBTFxuICAgICQoXCIuc2VhcmNoYWJsZWRyb3Bkb3duXCIpLnNlbGVjdDIoKTtcbiAgICBpZiAoJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX0NVUlRcIikudmFsKFwiXCIpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9wb3RlbmNpYVRvdGFsVXRpbGl6YWRhXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjYnRuRGlzcG9zaWNpb25ObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkKCcjYnRuQ2VydE5vJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vbGlzdGEgZGUgcGFpc2VzIHNvbG8gYXBhcmVjZSBzaSBjaGVja2JveCBleHBvcnRhIGVzIGNoZWNrZWRcbiAgICBpZiAoISQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3BhaXNlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuLy9IQUJJTElUQUNJT05cbiAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbGVnYWpvX3NlX2hcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9IYWJpbGl0YWRvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1ByaW1hcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1NlY3VuZGFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0VzcGVjaWZpY29cIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX21hdGVyaWFQcmltYVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25faW5zdW1vc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcHJvZHVjdG9GaW5hbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAvL3NpIGVzIFwiSW5pY2lvIGRlIHRyYW1pdGVcIlxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnMzUwNzUnKSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSA9PT0gXCIzNTA3NVwiKSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICAgICAgJChcIiNtb2RhbE5vSGFiaWxpdGFkb1wiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgIC8vQ0VSVElGSUNBRE8gREUgQVBUSVRVRCBBTUJJRU5UQUxcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5EaXNwb3NpY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5DZXJ0U2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkNlcnROb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG4gICAgLy9QUk9EVUNDSU9OXG4gICAgLy8gUmVzaWR1b3MgaW5kdXN0cmlhbGVzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3Jlc2lkdW9JbmR1c3RyaWFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9JbmR1c3RyaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2Rlc3Rpbm9WdWVsY29UaXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gUmVzaWR1b3MgZXNwZWNpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9Fc3BlY2lhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9jb3JyaWVudGVzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZWZsdWVudGVzIGxpcXVpZG9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZW1pc2lvbmVzIGdhc2Vvc2FzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb0VtaXNpb25HYXNlb3NhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9kZW51bmNpYXMgeSByZWNsYW1vc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2RlbnVuY2lhc0VzcGVjaWZpY2FjaW9uZXNcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0RvbWljaWxpbyBTZWxlY3QgY29uIERlcGVuZGVuY2lhXG4gICAgdmFyICRwcm92aW5jaWFTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tcHJvdmluY2lhJyk7XG4gICAgdmFyICRkZXBhcnRhbWVudG9UYXJnZXQgPSAkKCcuanMtZGVwYXJ0YW1lbnRvLXRhcmdldCcpO1xuICAgICRwcm92aW5jaWFTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkcHJvdmluY2lhU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkcHJvdmluY2lhU2VsZWN0LmRhdGEoJ2RlcGFydGFtZW50by11cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm92aW5jaWE6ICRwcm92aW5jaWFTZWxlY3QudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fZGVwYXJ0YW1lbnRvXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAvLyBEZXBhcnRhbWVudG8gLT4gbG9jYWxpZGFkXG4gICAgICAgICAgICAgICAgdmFyICRkZXBhcnRhbWVudG9TZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tZGVwYXJ0YW1lbnRvJyk7XG4gICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRUYXJnZXQgPSAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LmRhdGEoJ2xvY2FsaWRhZC11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2xvY2FsaWRhZFwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb2NhbGlkYWQgLT4gY2FsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1sb2NhbGlkYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhbGxlVGFyZ2V0ID0gJCgnLmpzLWNhbGxlLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYWxpZGFkU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkbG9jYWxpZGFkU2VsZWN0LmRhdGEoJ2NhbGxlLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkbG9jYWxpZGFkU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fY2FsbGVcIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBpLCBpdGVtcyA9ICQoJy5uYXYtbGluaycpLCBwYW5lID0gJCgnLnRhYi1wYW5lJyk7XG4gICAgJCgnLmJ0bk5leHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJChpdGVtc1tpXSkuaGFzQ2xhc3MoJ2FjdGl2ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBlc0NvbnN1bHRhKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSAmJiAhJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkZpbmFsaXphclwiKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDIgJiYgZXNDb25zdWx0YSkge1xuICAgICAgICAgICAgICAgICQoXCIjYnRuUHJvZHVjY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzICYmICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5GaW5hbGl6YXJcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaSArIDFdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2ldKS5yZW1vdmVDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaSArIDFdKS5hZGRDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuYnRuUHJldmlvdXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQoaXRlbXNbaV0pLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNCAmJiAhJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgJChcIiNidG5QcmluY2lwYWxcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpdGVtc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoaXRlbXNbaSAtIDFdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChwYW5lW2ldKS5yZW1vdmVDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHBhbmVbaSAtIDFdKS5hZGRDbGFzcygnc2hvdyBhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjYnRuRmluYWxpemFyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIoZmFsc2UpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUHJpbmNpcGFsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjYnRuTmV4dFwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbiAgICAgICAgJChcIiNidG5OZXh0XCIpLnNob3coKTtcbiAgICAgICAgaWYgKGVzQ29uc3VsdGEgJiYgISQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjYnRuUHJldlwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5DZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUHJvZHVjY2lvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdG5HdWFyZGFyKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlc0NvbnN1bHRhKTtcbiAgICAgICAgaWYgKCFlc0NvbnN1bHRhKSB7XG4gICAgICAgICAgICAkKFwiI2J0bk5leHRcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNidG5OZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2J0blByZXZcIikuc2hvdygpO1xuXG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc2hvd0J0bkd1YXJkYXIoc2hvdykge1xuICAgIGlmIChzaG93KSB7XG4gICAgICAgICQoXCIjZGl2Q29uZmlybWFyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZHdWFyZGFyXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5oaWRlKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==