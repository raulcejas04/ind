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
    } else {
      $("#tabCertAptitudAmbiental").hide();
      $("#tabProduccion").hide();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJpcyIsInNob3ciLCJoaWRlIiwiY2hhbmdlIiwidmFsIiwidHJpZ2dlciIsInNlbGVjdGVkIiwiY2xpY2siLCJtb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wIiwiJHByb3ZpbmNpYVNlbGVjdCIsIiRkZXBhcnRhbWVudG9UYXJnZXQiLCJvbiIsImUiLCJmaW5kIiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwiZGF0YSIsInByb3ZpbmNpYSIsInN1Y2Nlc3MiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCIkZGVwYXJ0YW1lbnRvU2VsZWN0IiwiJGxvY2FsaWRhZFRhcmdldCIsImlkIiwiJGxvY2FsaWRhZFNlbGVjdCIsIiRjYWxsZVRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBRUFELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQjtBQUVBSCxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkksT0FBekI7O0FBQ0EsTUFBSUosQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLEVBQXpCLENBQTRCLFVBQTVCLENBQUosRUFBNkM7QUFDekNMLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTSxJQUE5QjtBQUNBTixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sSUFBcEI7QUFDSCxHQUhELE1BR087QUFDSE4sS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJPLElBQTlCO0FBQ0FQLEtBQUMsQ0FBQyxnQkFBRCxDQUFE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QjtBQUNyQix3QkFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUE0sa0NBQVksQ0FBQ2QsSUFBYixDQUFrQixRQUFsQixFQUE0QkMsTUFBNUI7QUFDQWEsa0NBQVksQ0FBQ1osUUFBYixDQUFzQixRQUF0QjtBQUNBO0FBQ0gscUJBTG9CLENBTXJCOzs7QUFFQVksZ0NBQVksQ0FDSE4sSUFEVCxDQUNjQSxJQURkLEVBRVNDLFdBRlQsQ0FFcUIsUUFGckI7QUFHQTlCLHFCQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkksT0FBdEI7QUFDSDtBQWxCRSxpQkFBUDtBQW9CSCxlQXpCRDtBQTBCSDtBQS9DRSxXQUFQO0FBaURILFNBeEREO0FBeURIO0FBNUVFLEtBQVA7QUE4RUgsR0F4RkQ7QUEyRkgsQ0FuVEQsRSIsImZpbGUiOiJsdWdhckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5pbXBvcnQgJy4uL2Nzcy9zZWxlY3QyLnNjc3MnO1xuaW1wb3J0IHNlbGVjdDIgZnJvbSAnc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDInO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy9QUklOQ0lQQUxcblxuICAgICQoXCIuc2VhcmNoYWJsZWRyb3Bkb3duXCIpLnNlbGVjdDIoKTtcbiAgICBpZiAoJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiN0YWJDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfZXNQcm9kdWNjaW9uXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjdGFiUHJvZHVjY2lvblwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2xpc3RhIGRlIHBhaXNlcyBzb2xvIGFwYXJlY2Ugc2kgY2hlY2tib3ggZXhwb3J0YSBlcyBjaGVja2VkXG4gICAgaWYgKCEkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl9lc0V4cG9ydGFkb3JcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsdWdhcl9wYWlzZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2RpdlNlbGVjY2lvblBhaXNlc1wiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbi8vSEFCSUxJVEFDSU9OXG4gICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGlwb1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2xlZ2Fqb19zZV9oXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvSGFiaWxpdGFkbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9QcmltYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9TZWN1bmRhcmlvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fcnVicm9Fc3BlY2lmaWNvXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9tYXRlcmlhUHJpbWFcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2luc3Vtb3NcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3Byb2R1Y3RvRmluYWxcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2V4cGVkaWVudGVcIikudmFsKCcnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAgICAgLy9zaSBlcyBcIkluaWNpbyBkZSB0cmFtaXRlXCJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJzM1MDc1Jykge1xuICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX2ZlY2hhSW5pY2lvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAgICAgICAgICQoXCIjbHVnYXJfbnVtZXJvRGVjcmV0b1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgaWYgKCQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKCkgPT09IFwiMzUwNzVcIikge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgpID09PSAnJykge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpZW5lSGFiaWxpdGFjaW9uXCIpLnZhbCgnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5IYWJpbGl0YWNpb25Ob1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNkaXZUaXBvSGFiaWxpdGFjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgICAgICQoXCIjbW9kYWxOb0hhYmlsaXRhZG9cIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcblxuY29uc29sZS5sb2coXCJjaGFuZ2VzXCIpO1xuICAgIC8vQ0VSVElGSUNBRE8gREUgQVBUSVRVRCBBTUJJRU5UQUxcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwQ2F0UHJvdmluY2lhbF9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7ICAgICAgICBcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfWVsc2V7XG4gICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuRGlzcG9zaWNpb25TaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX2ZlY2hhT3RvcmdEaXNwUHJvdlwiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5EaXNwb3NpY2lvbk5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZEaXNwb3NpY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfbnVtZXJvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfZmVjaGFPdG9yZ0Rpc3BQcm92XCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKCcjbHVnYXJfZGlzcENhdFByb3ZpbmNpYWxfY2F0ZWdvcmlhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAkKFwiI2x1Z2FyX2Rpc3BDYXRQcm92aW5jaWFsX3RpZW5lQ2F0UHJvdmluY2lhbFwiKS52YWwoJ25vJyk7XG4gICAgfSk7XG5cbiAgICBpZiAoJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2Q2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhT3RvcmdhbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ25vJyk7XG4gICAgfWVsc2V7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XG4gICAgfVxuICAgICQoXCIjYnRuQ2VydFNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfZmVjaGFPdG9yZ2FtaWVudG9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnJyk7XG4gICAgICAgICQoXCIjbHVnYXJfY2VydEFwdGl0dWRBbWJfdGllbmVDZXJ0QXB0aXR1ZEFtYlwiKS52YWwoJ3NpJyk7XG4gICAgfSk7XG4gICAgJChcIiNidG5DZXJ0Tm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYVZlbmNpbWllbnRvXCIpLnZhbCgnMDEtMDEtMTgwMCcpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX3RpZW5lQ2VydEFwdGl0dWRBbWJcIikudmFsKCdubycpO1xuICAgIH0pO1xuXG4gICAgLy9QUk9EVUNDSU9OXG4gICAgLy8gUmVzaWR1b3MgaW5kdXN0cmlhbGVzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3Jlc2lkdW9JbmR1c3RyaWFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9JbmR1c3RyaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2Rlc3Rpbm9WdWVsY29UaXBvJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZXNpZHVvcyBlc3BlY2lhbGVzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NFc3BlY2lhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NFc3BlY2lhbGVzXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvUmVzaWR1b0VzcGVjaWFsJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2NvcnJpZW50ZXMnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlZmx1ZW50ZXMgbGlxdWlkb3NcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9lbWlzaW9uZXMgZ2FzZW9zYXNcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl90aXBvRW1pc2lvbkdhc2Vvc2EnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vZGVudW5jaWFzIHkgcmVjbGFtb3NcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVEZW51bmNpYVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNsdWdhcl9kZW51bmNpYXNFc3BlY2lmaWNhY2lvbmVzXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2RpdkVzcGVjaWZpY2FjaW9uRGVudW5jaWFcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9Eb21pY2lsaW8gU2VsZWN0IGNvbiBEZXBlbmRlbmNpYVxuICAgIHZhciAkcHJvdmluY2lhU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLXByb3ZpbmNpYScpO1xuICAgIHZhciAkZGVwYXJ0YW1lbnRvVGFyZ2V0ID0gJCgnLmpzLWRlcGFydGFtZW50by10YXJnZXQnKTtcbiAgICAkcHJvdmluY2lhU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygkcHJvdmluY2lhU2VsZWN0LnZhbCgpKTtcbiAgICAgICAgaWYgKCRwcm92aW5jaWFTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICRwcm92aW5jaWFTZWxlY3QuZGF0YSgnZGVwYXJ0YW1lbnRvLXVybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNpYTogJHByb3ZpbmNpYVNlbGVjdC52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcbiAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19kZXBhcnRhbWVudG9cIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgIC8vIERlcGFydGFtZW50byAtPiBsb2NhbGlkYWRcbiAgICAgICAgICAgICAgICB2YXIgJGRlcGFydGFtZW50b1NlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1kZXBhcnRhbWVudG8nKTtcbiAgICAgICAgICAgICAgICB2YXIgJGxvY2FsaWRhZFRhcmdldCA9ICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1NlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRkZXBhcnRhbWVudG9TZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2FsbGUtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRkZXBhcnRhbWVudG9TZWxlY3QuZGF0YSgnbG9jYWxpZGFkLXVybCcpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRkZXBhcnRhbWVudG9TZWxlY3QudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RvbWljaWxpb19sb2NhbGlkYWRcIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTG9jYWxpZGFkIC0+IGNhbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRTZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tbG9jYWxpZGFkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYWxsZVRhcmdldCA9ICQoJy5qcy1jYWxsZS10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxpZGFkU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGxvY2FsaWRhZFNlbGVjdC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGxvY2FsaWRhZFNlbGVjdC5kYXRhKCdjYWxsZS11cmwnKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkbG9jYWxpZGFkU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fY2FsbGVcIikuc2VsZWN0MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==