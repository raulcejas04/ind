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
  //  To-Do: 
  //  Agregar funcionalidad dependiente del tipo de habilitacion seleccionado
  //  Si es "Inicio de tramite" en Expediente de habilitación municipal  
  //  solo se muestra el campo Número de expediente
  //  Si es "Provisoria" o "Definitiva" se muestran los tres campos en
  //  Expediente de habilitación municipal

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

  if ($("#lugar_dispocisionProvincial").val() === '') {
    $("#divDisposicion").hide();
  }

  $("#btnDisposicionSi").click(function () {
    $("#divDisposicion").show();
  });
  $("#btnDisposicionNo").click(function () {
    $("#divDisposicion").hide();
    $("#lugar_dispocisionProvincial").val('');
    $("#lugar_fechaOtorgDispProv").val('');
    $('#lugar_certAptitudAmb_categoria').val(null).trigger('change');
  });

  if ($("#lugar_certAptitudAmb_numero").val() === '') {
    $("#divCertAptitudAmbiental").hide();
  }

  $("#btnCertSi").click(function () {
    $("#divCertAptitudAmbiental").show();
  });
  $("#btnCertNo").click(function () {
    $("#divCertAptitudAmbiental").hide();
    $("#lugar_certAptitudAmb_numero").val('');
    $("#lugar_certAptitudAmb_fechaOtorgamiento").val('');
    $("#lugar_certAptitudAmb_fechaVencimiento").val('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlbGVjdDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJpcyIsInNob3ciLCJoaWRlIiwiY2hhbmdlIiwidmFsIiwidHJpZ2dlciIsInNlbGVjdGVkIiwiY2xpY2siLCJtb2RhbCIsInByb3AiLCIkcHJvdmluY2lhU2VsZWN0IiwiJGRlcGFydGFtZW50b1RhcmdldCIsIm9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwiZGF0YSIsInByb3ZpbmNpYSIsInN1Y2Nlc3MiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCIkZGVwYXJ0YW1lbnRvU2VsZWN0IiwiJGxvY2FsaWRhZFRhcmdldCIsImlkIiwiJGxvY2FsaWRhZFNlbGVjdCIsIiRjYWxsZVRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUNBO0FBRUFELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQjtBQUVBSCxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkksT0FBekI7O0FBQ0EsTUFBSUosQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLEVBQXpCLENBQTRCLFVBQTVCLENBQUosRUFBNkM7QUFDekNMLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTSxJQUE5QjtBQUNBTixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sSUFBcEI7QUFDSCxHQUhELE1BR087QUFDSE4sS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJPLElBQTlCO0FBQ0FQLEtBQUMsQ0FBQyxnQkFBRCxDQUFE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LENBQUN6QixHQUFqQjtBQURGLG1CQUhIO0FBTUhtQix5QkFBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3JCLHdCQUFJLENBQUNBLElBQUwsRUFBVztBQUNQTSxrQ0FBWSxDQUFDZCxJQUFiLENBQWtCLFFBQWxCLEVBQTRCQyxNQUE1QjtBQUNBYSxrQ0FBWSxDQUFDWixRQUFiLENBQXNCLFFBQXRCO0FBQ0E7QUFDSCxxQkFMb0IsQ0FNckI7OztBQUVBWSxnQ0FBWSxDQUNITixJQURULENBQ2NBLElBRGQsRUFFU0MsV0FGVCxDQUVxQixRQUZyQjtBQUdBOUIscUJBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSSxPQUF0QjtBQUNIO0FBbEJFLGlCQUFQO0FBb0JILGVBekJEO0FBMEJIO0FBL0NFLFdBQVA7QUFpREgsU0F4REQ7QUF5REg7QUE1RUUsS0FBUDtBQThFSCxHQXhGRDtBQTJGSCxDQXhTRCxFIiwiZmlsZSI6Imx1Z2FyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCAnLi4vY3NzL3NlbGVjdDIuc2Nzcyc7XG5pbXBvcnQgc2VsZWN0MiBmcm9tICdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mic7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvL1BSSU5DSVBBTFxuXG4gICAgJChcIi5zZWFyY2hhYmxlZHJvcGRvd25cIikuc2VsZWN0MigpO1xuICAgIGlmICgkKFwiI2x1Z2FyX2VzUHJvZHVjY2lvblwiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3RhYkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vbGlzdGEgZGUgcGFpc2VzIHNvbG8gYXBhcmVjZSBzaSBjaGVja2JveCBleHBvcnRhIGVzIGNoZWNrZWRcbiAgICBpZiAoISQoXCIjbHVnYXJfZXNFeHBvcnRhZG9yXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX2VzRXhwb3J0YWRvclwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZTZWxlY2Npb25QYWlzZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3BhaXNlcycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjZGl2U2VsZWNjaW9uUGFpc2VzXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuLy9IQUJJTElUQUNJT05cbi8vICBUby1EbzogXG4vLyAgQWdyZWdhciBmdW5jaW9uYWxpZGFkIGRlcGVuZGllbnRlIGRlbCB0aXBvIGRlIGhhYmlsaXRhY2lvbiBzZWxlY2Npb25hZG9cbi8vICBTaSBlcyBcIkluaWNpbyBkZSB0cmFtaXRlXCIgZW4gRXhwZWRpZW50ZSBkZSBoYWJpbGl0YWNpw7NuIG11bmljaXBhbCAgXG4vLyAgc29sbyBzZSBtdWVzdHJhIGVsIGNhbXBvIE7Dum1lcm8gZGUgZXhwZWRpZW50ZVxuLy8gIFNpIGVzIFwiUHJvdmlzb3JpYVwiIG8gXCJEZWZpbml0aXZhXCIgc2UgbXVlc3RyYW4gbG9zIHRyZXMgY2FtcG9zIGVuXG4vLyAgRXhwZWRpZW50ZSBkZSBoYWJpbGl0YWNpw7NuIG11bmljaXBhbFxuICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3RpcG9cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnJykge1xuICAgICAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcwMS0wMS0xODAwJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9sZWdham9fc2VfaFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX2hhYmlsaXRhY2lvbl9ydWJyb0hhYmlsaXRhZG8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvUHJpbWFyaW8nKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvU2VjdW5kYXJpbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfaGFiaWxpdGFjaW9uX3J1YnJvRXNwZWNpZmljb1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fbWF0ZXJpYVByaW1hXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9pbnN1bW9zXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9wcm9kdWN0b0ZpbmFsXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9leHBlZGllbnRlXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2SGFiaWxpdGFjaW9uXCIpLnNob3coKTtcbiAgICAgICAgICAgIC8vc2kgZXMgXCJJbmljaW8gZGUgdHJhbWl0ZVwiXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICczNTA3NScpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Rpdk5vRW5UcmFtaXRlXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl9mZWNoYUluaWNpb1wiKS52YWwoJzAxLTAxLTE4MDAnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2x1Z2FyX251bWVyb0RlY3JldG9cIikudmFsKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICgkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbCgpID09PSBcIjM1MDc1XCIpIHtcbiAgICAgICAgICAgICQoXCIjZGl2Tm9FblRyYW1pdGVcIikuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZOb0VuVHJhbWl0ZVwiKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZXhwZWRpZW50ZVwiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aWVuZUhhYmlsaXRhY2lvblwiKS52YWwoJ25vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xuICAgIH1cbiAgICAkKFwiI2J0bkhhYmlsaXRhY2lvblNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fZmVjaGFJbmljaW9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNkaXZIYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2RpdlRpcG9IYWJpbGl0YWNpb25cIikuc2hvdygpO1xuICAgICAgICAkKFwiI2x1Z2FyX2hhYmlsaXRhY2lvbl90aXBvXCIpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdzaScpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuSGFiaWxpdGFjaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkhhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjZGl2VGlwb0hhYmlsaXRhY2lvblwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNsdWdhcl9oYWJpbGl0YWNpb25fdGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgJChcIiNsdWdhcl9oYWJpbGl0YWNpb25fdGllbmVIYWJpbGl0YWNpb25cIikudmFsKCdubycpO1xuICAgICAgICAkKFwiI21vZGFsTm9IYWJpbGl0YWRvXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG5cblxuICAgIC8vQ0VSVElGSUNBRE8gREUgQVBUSVRVRCBBTUJJRU5UQUxcbiAgICBpZiAoJChcIiNsdWdhcl9kaXNwb2Npc2lvblByb3ZpbmNpYWxcIikudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICQoXCIjZGl2RGlzcG9zaWNpb25cIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uU2lcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0bkRpc3Bvc2ljaW9uTm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkRpc3Bvc2ljaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9kaXNwb2Npc2lvblByb3ZpbmNpYWxcIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9mZWNoYU90b3JnRGlzcFByb3ZcIikudmFsKCcnKTtcbiAgICAgICAgJCgnI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2NhdGVnb3JpYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcblxuICAgIGlmICgkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX251bWVyb1wiKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjYnRuQ2VydFNpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNkaXZDZXJ0QXB0aXR1ZEFtYmllbnRhbFwiKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5DZXJ0Tm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2RpdkNlcnRBcHRpdHVkQW1iaWVudGFsXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9udW1lcm9cIikudmFsKCcnKTtcbiAgICAgICAgJChcIiNsdWdhcl9jZXJ0QXB0aXR1ZEFtYl9mZWNoYU90b3JnYW1pZW50b1wiKS52YWwoJycpO1xuICAgICAgICAkKFwiI2x1Z2FyX2NlcnRBcHRpdHVkQW1iX2ZlY2hhVmVuY2ltaWVudG9cIikudmFsKCcnKTtcbiAgICB9KTtcblxuICAgIC8vUFJPRFVDQ0lPTlxuICAgIC8vIFJlc2lkdW9zIGluZHVzdHJpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoXCIjZGl2UmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuaGlkZSgpO1xuICAgIH1cbiAgICAkKFwiI2x1Z2FyX3RpZW5lUmVzaWR1b3NJbmR1c3RyaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0luZHVzdHJpYWxlc1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlJlc2lkdW9zSW5kdXN0cmlhbGVzXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVFZmx1ZW50ZXNMaXF1aWRvc1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl9yZXNpZHVvSW5kdXN0cmlhbFwiKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2x1Z2FyX3RpcG9SZXNpZHVvSW5kdXN0cmlhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9kZXN0aW5vVnVlbGNvVGlwbycpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVzaWR1b3MgZXNwZWNpYWxlc1xuICAgIGlmICghJChcIiNsdWdhcl90aWVuZVJlc2lkdW9zRXNwZWNpYWxlc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlJlc2lkdW9zRXNwZWNpYWxlc1wiKS5oaWRlKCk7XG4gICAgfVxuICAgICQoXCIjbHVnYXJfdGllbmVSZXNpZHVvc0VzcGVjaWFsZXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZSZXNpZHVvc0VzcGVjaWFsZXNcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb1Jlc2lkdW9Fc3BlY2lhbCcpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICQoJyNsdWdhcl9jb3JyaWVudGVzJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZWZsdWVudGVzIGxpcXVpZG9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgJChcIiNsdWdhcl90aWVuZUVmbHVlbnRlc0xpcXVpZG9zXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2x1Z2FyX3RpZW5lVHJhdGFtaWVudG9QcmV2aW9WdWVsY29cIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZW1pc2lvbmVzIGdhc2Vvc2FzXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRW1pc2lvbmVzR2FzZW9zYXNcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUaXBvRW1pc2lvbkdhc2Vvc2FcIikuaGlkZSgpO1xuICAgIH1cblxuICAgICQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbHVnYXJfdGlwb0VtaXNpb25HYXNlb3NhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2RlbnVuY2lhcyB5IHJlY2xhbW9zXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKFwiI2x1Z2FyX3RpZW5lRGVudW5jaWFcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfZGVudW5jaWFzRXNwZWNpZmljYWNpb25lc1wiKS52YWwoJycpO1xuICAgICAgICAgICAgJChcIiNkaXZFc3BlY2lmaWNhY2lvbkRlbnVuY2lhXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vRG9taWNpbGlvIFNlbGVjdCBjb24gRGVwZW5kZW5jaWFcbiAgICB2YXIgJHByb3ZpbmNpYVNlbGVjdCA9ICQoJy5qcy1pbmR1c3RyaWEtZm9ybS1wcm92aW5jaWEnKTtcbiAgICB2YXIgJGRlcGFydGFtZW50b1RhcmdldCA9ICQoJy5qcy1kZXBhcnRhbWVudG8tdGFyZ2V0Jyk7XG4gICAgJHByb3ZpbmNpYVNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJHByb3ZpbmNpYVNlbGVjdC52YWwoKSk7XG4gICAgICAgIGlmICgkcHJvdmluY2lhU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICRkZXBhcnRhbWVudG9UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWxvY2FsaWRhZC10YXJnZXQnKS5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5qcy1sb2NhbGlkYWQtdGFyZ2V0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkcHJvdmluY2lhU2VsZWN0LmRhdGEoJ2RlcGFydGFtZW50by11cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm92aW5jaWE6ICRwcm92aW5jaWFTZWxlY3QudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZGVwYXJ0YW1lbnRvVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG4gICAgICAgICAgICAgICAgJGRlcGFydGFtZW50b1RhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fZGVwYXJ0YW1lbnRvXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAvLyBEZXBhcnRhbWVudG8gLT4gbG9jYWxpZGFkXG4gICAgICAgICAgICAgICAgdmFyICRkZXBhcnRhbWVudG9TZWxlY3QgPSAkKCcuanMtaW5kdXN0cmlhLWZvcm0tZGVwYXJ0YW1lbnRvJyk7XG4gICAgICAgICAgICAgICAgdmFyICRsb2NhbGlkYWRUYXJnZXQgPSAkKCcuanMtbG9jYWxpZGFkLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICRkZXBhcnRhbWVudG9TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbGlkYWRUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNhbGxlLXRhcmdldCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LmRhdGEoJ2xvY2FsaWRhZC11cmwnKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkZGVwYXJ0YW1lbnRvU2VsZWN0LnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkb21pY2lsaW9fbG9jYWxpZGFkXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0xvY2FsaWRhZCAtPiBjYWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbG9jYWxpZGFkU2VsZWN0ID0gJCgnLmpzLWluZHVzdHJpYS1mb3JtLWxvY2FsaWRhZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2FsbGVUYXJnZXQgPSAkKCcuanMtY2FsbGUtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsaWRhZFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRsb2NhbGlkYWRTZWxlY3QudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsb2NhbGlkYWRTZWxlY3QuZGF0YSgnY2FsbGUtdXJsJyksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJGxvY2FsaWRhZFNlbGVjdC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYWxsZVRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhbGxlVGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FsbGVUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZG9taWNpbGlvX2NhbGxlXCIpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=