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
  });
  console.log("changes"); //CERTIFICADO DE APTITUD AMBIENTAL

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
});

/***/ })

},[["./assets/js/lugarForm.js","runtime","vendors~app~datepicker~image_cropper~lugarForm~select2","vendors~lugarForm~select2","vendors~image_cropper~lugarForm","vendors~lugarForm"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJpcyIsInNob3ciLCJoaWRlIiwiY2hhbmdlIiwidmFsIiwicHJvcCIsInRyaWdnZXIiLCJzZWxlY3RlZCIsImNsaWNrIiwibW9kYWwiLCJjb25zb2xlIiwibG9nIiwiJHByb3ZpbmNpYVNlbGVjdCIsIiRkZXBhcnRhbWVudG9UYXJnZXQiLCJvbiIsImUiLCJmaW5kIiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwiZGF0YSIsInByb3ZpbmNpYSIsInN1Y2Nlc3MiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCIkZGVwYXJ0YW1lbnRvU2VsZWN0IiwiJGxvY2FsaWRhZFRhcmdldCIsImlkIiwiJGxvY2FsaWRhZFNlbGVjdCIsIiRjYWxsZVRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBRUFELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQjtBQUNBSCxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkksT0FBekI7O0FBQ0EsTUFBSUosQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLEVBQXpCLENBQTRCLFVBQTVCLENBQUosRUFBNkM7QUFDekNMLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTSxJQUE5QjtBQUNBTixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sSUFBcEI7QUFDSCxHQUhELE1BR087QUFDSE4sS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJPLElBQTlCO0FBQ0FQLEtBQUMsQ0FBQyxnQkFBRCxDQUFE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QTJGSCxDQTNURCxFIiwiZmlsZSI6Imx1Z2FyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCAnLi4vY3NzL3NlbGVjdDIuc2Nzcyc7XG5pbXBvcnQgc2VsZWN0MiBmcm9tICdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mic7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvL1BSSU5DSVBBTFxuICAgICQoXCIuc2VhcmNoYWJsZWRyb3Bkb3duXCIpLnNlbGVjdDIoKTtcbiAgICBpZiAoJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZmVjaGFVbHRpbWFJbnBlY2Npb25cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX0NVUlRcIikudmFsKFwiXCIpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9wb3RlbmNpYVRvdGFsVXRpbGl6YWRhXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjYnRuRGlzcG9zaWNpb25ObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkKCcjYnRuQ2VydE5vJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vbGlzdGEgZGUgcGFpc2VzIHNvbG8gYXBhcmVjZSBzaSBjaGVja2JveCBleHBvcnRhIGVzIGNoZWNrZWRcbiAgICBpZiAoISQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3BhaXNlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuLy9IQUJJTElUQUNJT05cbiAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbGVnYWpvX3NlX2hcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9IYWJpbGl0YWRvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1ByaW1hcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb1NlY3VuZGFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0VzcGVjaWZpY29cIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX21hdGVyaWFQcmltYVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25faW5zdW1vc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcHJvZHVjdG9GaW5hbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICAgICAvL3NpIGVzIFwiSW5pY2lvIGRlIHRyYW1pdGVcIlxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnMzUwNzUnKSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9udW1lcm9EZWNyZXRvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwoKSA9PT0gXCIzNTA3NVwiKSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICAgICAgJChcIiNtb2RhbE5vSGFiaWxpdGFkb1wiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2VzXCIpO1xuICAgIC8vQ0VSVElGSUNBRE8gREUgQVBUSVRVRCBBTUJJRU5UQUxcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF90aWVuZUNhdFByb3ZpbmNpYWxcIikudmFsKCdubycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5EaXNwb3NpY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcblxuICAgIGlmICgkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkNlcnRTaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuQ2VydE5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFWZW5jaW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnbm8nKTtcbiAgICB9KTtcblxuICAgIC8vUFJPRFVDQ0lPTlxuICAgIC8vIFJlc2lkdW9zIGluZHVzdHJpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9yZXNpZHVvSW5kdXN0cmlhbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvSW5kdXN0cmlhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9kZXN0aW5vVnVlbGNvVGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVzaWR1b3MgZXNwZWNpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9Fc3BlY2lhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9jb3JyaWVudGVzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZWZsdWVudGVzIGxpcXVpZG9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZW1pc2lvbmVzIGdhc2Vvc2FzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb0VtaXNpb25HYXNlb3NhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2RlbnVuY2lhcyB5IHJlY2xhbW9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZGVudW5jaWFzRXNwZWNpZmljYWNpb25lc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vRG9taWNpbGlvIFNlbGVjdCBjb24gRGVwZW5kZW5jaWFcbiAgICB2YXIgJHByb3ZpbmNpYVNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1wcm92aW5jaWEnKTtcbiAgICB2YXIgJGRlcGFydGFtZW50b1RhcmdldCA9ICQoJy5qcy1kZXBhcnRhbWVudG8tdGFyZ2V0Jyk7XG4gICAgJHByb3ZpbmNpYVNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJHByb3ZpbmNpYVNlbGVjdC52YWwoKSk7XG4gICAgICAgIGlmICgkcHJvdmluY2lhU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkcHJvdmluY2lhU2VsZWN0LmRhdGEoJ2RlcGFydGFtZW50by11cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm92aW5jaWE6ICRwcm92aW5jaWFTZWxlY3QudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fZGVwYXJ0YW1lbnRvXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAvLyBEZXBhcnRhbWVudG8gLT4gbG9jYWxpZGFkXG4gICAgICAgICAgICAgICAgdmFyICRkZXBhcnRhbWVudG9TZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tZGVwYXJ0YW1lbnRvJyk7XG4gICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRUYXJnZXQgPSAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LmRhdGEoJ2xvY2FsaWRhZC11cmwnKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fbG9jYWxpZGFkXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0xvY2FsaWRhZCAtPiBjYWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2FsbGVUYXJnZXQgPSAkKCcuanMtY2FsbGUtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRsb2NhbGlkYWRTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGxvY2FsaWRhZFNlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2NhbGxlXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=