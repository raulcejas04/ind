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
  console.log("took");
  $("#divConfirmar").hide(); //PRINCIPAL

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
$("#tabFinalizar").click(function () {
  showBtnGuardar(false);
});
$("#tabPrincipal").click(function () {
  showBtnGuardar(true);
});
$("#tabHabilitacion").click(function () {
  showBtnGuardar(true);
});
$("#tabCertAptitudAmbiental").click(function () {
  showBtnGuardar(true);
});
$("#tabProduccion").click(function () {
  showBtnGuardar(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJoaWRlIiwic2VsZWN0MiIsImlzIiwic2hvdyIsImNoYW5nZSIsInZhbCIsInByb3AiLCJ0cmlnZ2VyIiwic2VsZWN0ZWQiLCJjbGljayIsIm1vZGFsIiwiJHByb3ZpbmNpYVNlbGVjdCIsIiRkZXBhcnRhbWVudG9UYXJnZXQiLCJvbiIsImUiLCJmaW5kIiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwiZGF0YSIsInByb3ZpbmNpYSIsInN1Y2Nlc3MiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCIkZGVwYXJ0YW1lbnRvU2VsZWN0IiwiJGxvY2FsaWRhZFRhcmdldCIsImlkIiwiJGxvY2FsaWRhZFNlbGVjdCIsIiRjYWxsZVRhcmdldCIsInNob3dCdG5HdWFyZGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBQ0E7QUFFQUQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FMLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CLEdBRjBCLENBSTFCOztBQUNBTixHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk8sT0FBekI7O0FBQ0EsTUFBSVAsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJRLEVBQXpCLENBQTRCLFVBQTVCLENBQUosRUFBNkM7QUFDekNSLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCUyxJQUE5QjtBQUNBVCxLQUFDLENBQUMsZ0JBQUQsQ0FB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LGVBekJEO0FBMEJIO0FBL0NFLFdBQVA7QUFpREgsU0F4REQ7QUF5REg7QUE1RUUsS0FBUDtBQThFSCxHQXhGRDtBQTJGSCxDQTVURDtBQTZUQVAsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmUsS0FBbkIsQ0FBeUIsWUFBWTtBQUNqQ3FCLGdCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0gsQ0FGRDtBQUdBcEMsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmUsS0FBbkIsQ0FBeUIsWUFBWTtBQUNqQ3FCLGdCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsQ0FGRDtBQUdBcEMsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JlLEtBQXRCLENBQTRCLFlBQVk7QUFDcENxQixnQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILENBRkQ7QUFHQXBDLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCZSxLQUE5QixDQUFvQyxZQUFZO0FBQzVDcUIsZ0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxDQUZEO0FBR0FwQyxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmUsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQ3FCLGdCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsQ0FGRDs7QUFHQSxTQUFTQSxjQUFULENBQXdCM0IsSUFBeEIsRUFBOEI7QUFDMUIsTUFBSUEsSUFBSixFQUFVO0FBQ05ULEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CO0FBQ0FOLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJTLElBQWpCO0FBQ0gsR0FIRCxNQUdPO0FBQ0hULEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJTLElBQW5CO0FBQ0FULEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJNLElBQWpCO0FBQ0g7QUFDSixDIiwiZmlsZSI6Imx1Z2FyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCAnLi4vY3NzL3NlbGVjdDIuc2Nzcyc7XG5pbXBvcnQgc2VsZWN0MiBmcm9tICdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mic7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRvb2tcIik7XG4gICAgJChcIiNkaXZDb25maXJtYXJcIikuaGlkZSgpO1xuXG4gICAgLy9QUklOQ0lQQUxcbiAgICAkKFwiLnNlYXJjaGFibGVkcm9wZG93blwiKS5zZWxlY3QyKCk7XG4gICAgaWYgKCQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3RhYlByb2R1Y2Npb25cIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9mZWNoYVVsdGltYUlucGVjY2lvblwiKS52YWwoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2ZlY2hhVWx0aW1hSW5wZWNjaW9uXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9DVVJUXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfcG90ZW5jaWFUb3RhbFV0aWxpemFkYVwiKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2J0bkRpc3Bvc2ljaW9uTm8nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgJCgnI2J0bkNlcnRObycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2xpc3RhIGRlIHBhaXNlcyBzb2xvIGFwYXJlY2Ugc2kgY2hlY2tib3ggZXhwb3J0YSBlcyBjaGVja2VkXG4gICAgaWYgKCEkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsdWdhcl9wYWlzZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbi8vSEFCSUxJVEFDSU9OXG4gICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2xlZ2Fqb19zZV9oXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvSGFiaWxpdGFkbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9QcmltYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9TZWN1bmRhcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9Fc3BlY2lmaWNvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9tYXRlcmlhUHJpbWFcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2luc3Vtb3NcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3Byb2R1Y3RvRmluYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAgICAgLy9zaSBlcyBcIkluaWNpbyBkZSB0cmFtaXRlXCJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJzM1MDc1Jykge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgPT09IFwiMzUwNzVcIikge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgICAgICQoXCIjbW9kYWxOb0hhYmlsaXRhZG9cIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAvL0NFUlRJRklDQURPIERFIEFQVElUVUQgQU1CSUVOVEFMXG4gICAgaWYgKCQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoJyNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9jYXRlZ29yaWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfdGllbmVDYXRQcm92aW5jaWFsXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuRGlzcG9zaWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5EaXNwb3NpY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG5cbiAgICBpZiAoJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9XG4gICAgJChcIiNidG5DZXJ0U2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl90aWVuZUNlcnRBcHRpdHVkQW1iXCIpLnZhbCgnc2knKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkNlcnROb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG5cbiAgICAvL1BST0RVQ0NJT05cbiAgICAvLyBSZXNpZHVvcyBpbmR1c3RyaWFsZXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfcmVzaWR1b0luZHVzdHJpYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0luZHVzdHJpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfZGVzdGlub1Z1ZWxjb1RpcG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFJlc2lkdW9zIGVzcGVjaWFsZXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvRXNwZWNpYWwnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfY29ycmllbnRlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGVmbHVlbnRlcyBsaXF1aWRvc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZVRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2VtaXNpb25lcyBnYXNlb3Nhc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9FbWlzaW9uR2FzZW9zYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9kZW51bmNpYXMgeSByZWNsYW1vc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZURlbnVuY2lhXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2RlbnVuY2lhc0VzcGVjaWZpY2FjaW9uZXNcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjZGl2RXNwZWNpZmljYWNpb25EZW51bmNpYVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0RvbWljaWxpbyBTZWxlY3QgY29uIERlcGVuZGVuY2lhXG4gICAgdmFyICRwcm92aW5jaWFTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tcHJvdmluY2lhJyk7XG4gICAgdmFyICRkZXBhcnRhbWVudG9UYXJnZXQgPSAkKCcuanMtZGVwYXJ0YW1lbnRvLXRhcmdldCcpO1xuICAgICRwcm92aW5jaWFTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCRwcm92aW5jaWFTZWxlY3QudmFsKCkpO1xuICAgICAgICBpZiAoJHByb3ZpbmNpYVNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJHByb3ZpbmNpYVNlbGVjdC5kYXRhKCdkZXBhcnRhbWVudG8tdXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2lhOiAkcHJvdmluY2lhU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2RlcGFydGFtZW50b1wiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgLy8gRGVwYXJ0YW1lbnRvIC0+IGxvY2FsaWRhZFxuICAgICAgICAgICAgICAgIHZhciAkZGVwYXJ0YW1lbnRvU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWRlcGFydGFtZW50bycpO1xuICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkVGFyZ2V0ID0gJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jYWxsZS10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGRlcGFydGFtZW50b1NlbGVjdC5kYXRhKCdsb2NhbGlkYWQtdXJsJyksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGRlcGFydGFtZW50b1NlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2xvY2FsaWRhZFwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb2NhbGlkYWQgLT4gY2FsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1sb2NhbGlkYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhbGxlVGFyZ2V0ID0gJCgnLmpzLWNhbGxlLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYWxpZGFkU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkbG9jYWxpZGFkU2VsZWN0LmRhdGEoJ2NhbGxlLXVybCcpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRsb2NhbGlkYWRTZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19jYWxsZVwiKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxufSk7XG4kKFwiI3RhYkZpbmFsaXphclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgc2hvd0J0bkd1YXJkYXIoZmFsc2UpO1xufSk7XG4kKFwiI3RhYlByaW5jaXBhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG59KTtcbiQoXCIjdGFiSGFiaWxpdGFjaW9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBzaG93QnRuR3VhcmRhcih0cnVlKTtcbn0pO1xuJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG59KTtcbiQoXCIjdGFiUHJvZHVjY2lvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgc2hvd0J0bkd1YXJkYXIodHJ1ZSk7XG59KTtcbmZ1bmN0aW9uIHNob3dCdG5HdWFyZGFyKHNob3cpIHtcbiAgICBpZiAoc2hvdykge1xuICAgICAgICAkKFwiI2RpdkNvbmZpcm1hclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2R3VhcmRhclwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNkaXZDb25maXJtYXJcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2Rpdkd1YXJkYXJcIikuaGlkZSgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9