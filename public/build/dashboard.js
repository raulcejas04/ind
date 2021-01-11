(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./assets/css/dashboard.scss":
/*!***********************************!*\
  !*** ./assets/css/dashboard.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/dashboard.js":
/*!********************************!*\
  !*** ./assets/js/dashboard.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_dashboard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/dashboard.scss */ "./assets/css/dashboard.scss");
/* harmony import */ var _css_dashboard_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_dashboard_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js/dist/Chart.bundle.min.js */ "./node_modules/chart.js/dist/Chart.bundle.min.js");
/* harmony import */ var chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5__);






var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.pluginService.register({
  beforeDraw: function beforeDraw(chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      var ctx = chart.chart.ctx; // Get options from the center object in options

      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = sidePadding / 100 * (chart.innerRadius * 2); // Start with a base font of 30px

      ctx.font = "30px " + fontStyle; // Get the width of the string and also the width of the element minus 10 to give it 5px side padding

      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated; // Find out how much the font can grow in width.

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = chart.innerRadius * 2; // Pick a new font size so it will not be larger than the height of label.

      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      } // Set font settings to draw it correctly.


      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = []; // Break words up into multiple lines if necessary

      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;

        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      } // Move the center up depending on line height and number of lines


      centerY -= lines.length / 2 * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      } //Draw text in center


      ctx.fillText(line, centerX, centerY);
    }
  }
});
var colors = ['#0275d8', '#5cb85c', '#f0ad4e', '#d9534f'];
$(document).ready(function () {
  $("#btnRefresh").click(function () {
    location.reload(true);
  });
  var cantLugares = $("#cantLugares").val(); //Habilitaciones por tipo

  var canvHabilitacionTipo = $('#chartHabilitacionTipos');
  var cantHabilitacionDefinitiva = $("#cantHabilitacionDefinitiva").val();
  var cantHabilitacionProvisoria = $("#cantHabilitacionProvisoria").val();
  var cantHabilitacionInicio = $("#cantHabilitacionInicio").val();
  var cantDeshabilitados = $("#cantDeshabilitados").val();
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[1], colors[2], colors[3]],
      borderWidth: 0,
      data: [cantHabilitacionDefinitiva, cantHabilitacionProvisoria, cantHabilitacionInicio, cantDeshabilitados]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Definitiva: ' + cantHabilitacionDefinitiva, 'Provisoria: ' + cantHabilitacionProvisoria, 'Inicio de tramite: ' + cantHabilitacionInicio, 'Sin habilitación: ' + cantDeshabilitados]
  };
  var chartHabilitacionTipo = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvHabilitacionTipo, {
    type: 'pie',
    data: data,
    options: {
      legend: {
        position: 'bottom',
        padding: 5,
        labels: {
          pointStyle: 'circle',
          usePointStyle: true
        }
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']];
          }
        }
      }
    }
  }); //Lugares que exportan

  var canvExportan = $('#chartLugaresExportadores');
  var cantExportadores = $("#cantLugaresExportadores").val();
  var cantNoExportadores = $("#cantLugaresNoExportadores").val();
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[2]],
      borderWidth: 0,
      data: [cantExportadores, cantNoExportadores]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Si: ' + cantExportadores, 'No: ' + cantNoExportadores]
  };
  var chartExportadores = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvExportan, {
    type: 'doughnut',
    data: data,
    options: {
      cutoutPercentage: 50,
      legend: {
        position: 'bottom',
        padding: 5,
        labels: {
          pointStyle: 'circle',
          usePointStyle: true
        }
      },
      elements: {
        center: {
          text: Number(cantLugares),
          color: '#000000',
          // Default is #000000
          fontStyle: 'Helvetica',
          // Default is Arial
          sidePadding: 30,
          // Default is 20 (as a percentage)
          minFontSize: 10,
          // Default is 20 (in px), set to false and text will not wrap.
          lineHeight: 25 // Default is 25 (in px), used for when text wraps

        }
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']];
          }
        }
      }
    }
  }); //Lugares por categoría

  var canvCategoria = $('#chartCategorias');
  var cantSinCat = $("#cantSinCat").val();
  var cantCat1 = $("#cantCat1").val();
  var cantCat2 = $("#cantCat2").val();
  var cantCat3 = $("#cantCat3").val();
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[2], colors[1], colors[3]],
      borderWidth: 0,
      data: [cantCat1, cantCat2, cantCat3, cantSinCat]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Categoría 1: ' + cantCat1, 'Categoría 2: ' + cantCat2, 'Categoría 3: ' + cantCat3, 'Sin categoría: ' + cantSinCat]
  };
  var chartExportadores = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvCategoria, {
    type: 'pie',
    data: data,
    options: {
      legend: {
        position: 'bottom',
        padding: 5,
        labels: {
          pointStyle: 'circle',
          usePointStyle: true
        }
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']];
          }
        }
      }
    }
  }); //Tipos de residuo

  var canvresiduos = $('#chartResiduos');
  var residuosSolidos = parseInt($("#residuosSolidos").val());
  var residuosLiquidos = parseInt($("#residuosLiquidos").val());
  var residuosSemisolidos = parseInt($("#residuosSemisolidos").val());
  var max = Math.max.apply(Math, [residuosSolidos, residuosSemisolidos, residuosLiquidos]);
  console.log();
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[2], colors[1]],
      borderWidth: 0,
      data: [residuosSolidos, residuosSemisolidos, residuosLiquidos]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Sólidos: ' + residuosSolidos, 'Semisólidos: ' + residuosSemisolidos, 'Líquidos: ' + residuosLiquidos]
  };
  var chartExportadores = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvresiduos, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true,
            max: max + Math.ceil(max * 10 / 100)
          }
        }],
        xAxes: [{
          display: true
        }]
      },
      legend: {
        display: false
      }
    }
  }); //RUBROS GENERALES

  var canvRubros = $('#chartRubros');
  var rg1 = parseInt($("#rg1").val());
  var rg2 = parseInt($("#rg2").val());
  var rg3 = parseInt($("#rg3").val());
  var rg4 = parseInt($("#rg4").val());
  var rg5 = parseInt($("#rg5").val());
  var rg6 = parseInt($("#rg6").val());
  var rg7 = parseInt($("#rg7").val());
  var rg8 = parseInt($("#rg8").val());
  var rg9 = parseInt($("#rg9").val());
  var rg10 = parseInt($("#rg10").val());
  var rg11 = parseInt($("#rg11").val());
  var rg12 = parseInt($("#rg12").val());
  var rg13 = parseInt($("#rg13").val());
  var rg14 = parseInt($("#rg14").val());
  var rg15 = parseInt($("#rg15").val());
  var rg16 = parseInt($("#rg16").val());
  var rg17 = parseInt($("#rg17").val());
  var rg18 = parseInt($("#rg18").val());
  var rg19 = parseInt($("#rg19").val());
  var rg20 = parseInt($("#rg20").val());
  var rg21 = parseInt($("#rg21").val());
  var max = Math.max.apply(Math, [rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8, rg9, rg10, rg11, rg12, rg13, rg14, rg15, rg16, rg17, rg18, rg19, rg20, rg21]);
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]],
      borderWidth: 0,
      data: [rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8, rg9, rg10, rg11, rg12, rg13, rg14, rg15, rg16, rg17, rg18, rg19, rg20, rg21]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Automotriz y autopartes: ' + rg1, 'Electrónica y electrodomésticos: ' + rg2, 'Indumentaria: ' + rg3, 'Productos del Tabaco: ' + rg4, 'Metalurgia, Maquinaria y Equipos: ' + rg5, 'Calzado: ' + rg6, 'Gráfica, Ediciones e Impresiones: ' + rg7, 'Madera y Muebles: ' + rg8, 'Juguetes: ' + rg9, 'Cemento: ' + rg10, 'Productos Textiles: ' + rg11, 'Manufacturas del Cuero: ' + rg12, 'Neumáticos: ' + rg13, 'Bicicletas y Motos: ' + rg14, 'Química y Petroquímica: ' + rg15, 'Celulosa y Papel: ' + rg16, 'Plásticos y subproductos: ' + rg17, 'Cerámicos: ' + rg18, 'Alimentos  : ' + rg19, 'Manufactura del caucho: ' + rg20, 'Estaciones de servicio: ' + rg21]
  };
  var chartExportadores = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvRubros, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true,
            max: max + Math.ceil(max * 10 / 100)
          }
        }],
        xAxes: [{
          display: true
        }]
      },
      legend: {
        display: false
      }
    }
  });
});

/***/ })

},[["./assets/js/dashboard.js","runtime","vendors~app~dashboard~datepicker~grilla_default~image_cropper~lugarForm~select2","vendors~dashboard~grilla_default~image_cropper~lugarForm","vendors~dashboard~image_cropper","vendors~dashboard"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2FudEx1Z2FyZXMiLCJ2YWwiLCJjYW52SGFiaWxpdGFjaW9uVGlwbyIsImNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhIiwiY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEiLCJjYW50SGFiaWxpdGFjaW9uSW5pY2lvIiwiY2FudERlc2hhYmlsaXRhZG9zIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJsYWJlbHMiLCJjaGFydEhhYmlsaXRhY2lvblRpcG8iLCJ0eXBlIiwibGVnZW5kIiwicG9zaXRpb24iLCJwYWRkaW5nIiwicG9pbnRTdHlsZSIsInVzZVBvaW50U3R5bGUiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwidG9vbHRpcEl0ZW0iLCJjYW52RXhwb3J0YW4iLCJjYW50RXhwb3J0YWRvcmVzIiwiY2FudE5vRXhwb3J0YWRvcmVzIiwiY2hhcnRFeHBvcnRhZG9yZXMiLCJjdXRvdXRQZXJjZW50YWdlIiwiTnVtYmVyIiwiY2FudkNhdGVnb3JpYSIsImNhbnRTaW5DYXQiLCJjYW50Q2F0MSIsImNhbnRDYXQyIiwiY2FudENhdDMiLCJjYW52cmVzaWR1b3MiLCJyZXNpZHVvc1NvbGlkb3MiLCJwYXJzZUludCIsInJlc2lkdW9zTGlxdWlkb3MiLCJyZXNpZHVvc1NlbWlzb2xpZG9zIiwibWF4IiwiY29uc29sZSIsImxvZyIsInNjYWxlcyIsInlBeGVzIiwiZGlzcGxheSIsInRpY2tzIiwic3VnZ2VzdGVkTWluIiwiYmVnaW5BdFplcm8iLCJjZWlsIiwieEF4ZXMiLCJjYW52UnVicm9zIiwicmcxIiwicmcyIiwicmczIiwicmc0Iiwicmc1Iiwicmc2Iiwicmc3Iiwicmc4Iiwicmc5IiwicmcxMCIsInJnMTEiLCJyZzEyIiwicmcxMyIsInJnMTQiLCJyZzE1IiwicmcxNiIsInJnMTciLCJyZzE4IiwicmcxOSIsInJnMjAiLCJyZzIxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0E7QUFFQUMsd0VBQUssQ0FBQ0MsYUFBTixDQUFvQkMsUUFBcEIsQ0FBNkI7QUFDekJDLFlBQVUsRUFBRSxv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LyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9kYXNoYm9hcmQuc2Nzcyc7XG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvZGlzdC9DaGFydC5idW5kbGUubWluLmpzJztcblxuQ2hhcnQucGx1Z2luU2VydmljZS5yZWdpc3Rlcih7XG4gICAgYmVmb3JlRHJhdzogZnVuY3Rpb24gKGNoYXJ0KSB7XG4gICAgICAgIGlmIChjaGFydC5jb25maWcub3B0aW9ucy5lbGVtZW50cy5jZW50ZXIpIHtcbiAgICAgICAgICAgIC8vIEdldCBjdHggZnJvbSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBjdHggPSBjaGFydC5jaGFydC5jdHg7XG5cbiAgICAgICAgICAgIC8vIEdldCBvcHRpb25zIGZyb20gdGhlIGNlbnRlciBvYmplY3QgaW4gb3B0aW9uc1xuICAgICAgICAgICAgdmFyIGNlbnRlckNvbmZpZyA9IGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcjtcbiAgICAgICAgICAgIHZhciBmb250U3R5bGUgPSBjZW50ZXJDb25maWcuZm9udFN0eWxlIHx8ICdBcmlhbCc7XG4gICAgICAgICAgICB2YXIgdHh0ID0gY2VudGVyQ29uZmlnLnRleHQ7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBjZW50ZXJDb25maWcuY29sb3IgfHwgJyMwMDAnO1xuICAgICAgICAgICAgdmFyIG1heEZvbnRTaXplID0gY2VudGVyQ29uZmlnLm1heEZvbnRTaXplIHx8IDc1O1xuICAgICAgICAgICAgdmFyIHNpZGVQYWRkaW5nID0gY2VudGVyQ29uZmlnLnNpZGVQYWRkaW5nIHx8IDIwO1xuICAgICAgICAgICAgdmFyIHNpZGVQYWRkaW5nQ2FsY3VsYXRlZCA9IChzaWRlUGFkZGluZyAvIDEwMCkgKiAoY2hhcnQuaW5uZXJSYWRpdXMgKiAyKVxuICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIGJhc2UgZm9udCBvZiAzMHB4XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBcIiArIGZvbnRTdHlsZTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgc3RyaW5nIGFuZCBhbHNvIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudCBtaW51cyAxMCB0byBnaXZlIGl0IDVweCBzaWRlIHBhZGRpbmdcbiAgICAgICAgICAgIHZhciBzdHJpbmdXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9IChjaGFydC5pbm5lclJhZGl1cyAqIDIpIC0gc2lkZVBhZGRpbmdDYWxjdWxhdGVkO1xuXG4gICAgICAgICAgICAvLyBGaW5kIG91dCBob3cgbXVjaCB0aGUgZm9udCBjYW4gZ3JvdyBpbiB3aWR0aC5cbiAgICAgICAgICAgIHZhciB3aWR0aFJhdGlvID0gZWxlbWVudFdpZHRoIC8gc3RyaW5nV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3Rm9udFNpemUgPSBNYXRoLmZsb29yKDMwICogd2lkdGhSYXRpbyk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IChjaGFydC5pbm5lclJhZGl1cyAqIDIpO1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgbmV3IGZvbnQgc2l6ZSBzbyBpdCB3aWxsIG5vdCBiZSBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IG9mIGxhYmVsLlxuICAgICAgICAgICAgdmFyIGZvbnRTaXplVG9Vc2UgPSBNYXRoLm1pbihuZXdGb250U2l6ZSwgZWxlbWVudEhlaWdodCwgbWF4Rm9udFNpemUpO1xuICAgICAgICAgICAgdmFyIG1pbkZvbnRTaXplID0gY2VudGVyQ29uZmlnLm1pbkZvbnRTaXplO1xuICAgICAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBjZW50ZXJDb25maWcubGluZUhlaWdodCB8fCAyNTtcbiAgICAgICAgICAgIHZhciB3cmFwVGV4dCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobWluRm9udFNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplID0gMjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaW5Gb250U2l6ZSAmJiBmb250U2l6ZVRvVXNlIDwgbWluRm9udFNpemUpIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZVRvVXNlID0gbWluRm9udFNpemU7XG4gICAgICAgICAgICAgICAgd3JhcFRleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgZm9udCBzZXR0aW5ncyB0byBkcmF3IGl0IGNvcnJlY3RseS5cbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgICAgIHZhciBjZW50ZXJYID0gKChjaGFydC5jaGFydEFyZWEubGVmdCArIGNoYXJ0LmNoYXJ0QXJlYS5yaWdodCkgLyAyKTtcbiAgICAgICAgICAgIHZhciBjZW50ZXJZID0gKChjaGFydC5jaGFydEFyZWEudG9wICsgY2hhcnQuY2hhcnRBcmVhLmJvdHRvbSkgLyAyKTtcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udFNpemVUb1VzZSArIFwicHggXCIgKyBmb250U3R5bGU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cbiAgICAgICAgICAgIGlmICghd3JhcFRleHQpIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodHh0LCBjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3b3JkcyA9IHR4dC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgdmFyIGxpbmUgPSAnJztcbiAgICAgICAgICAgIHZhciBsaW5lcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBCcmVhayB3b3JkcyB1cCBpbnRvIG11bHRpcGxlIGxpbmVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB3b3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgICAgICB2YXIgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dCh0ZXN0TGluZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RXaWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RXaWR0aCA+IGVsZW1lbnRXaWR0aCAmJiBuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gd29yZHNbbl0gKyAnICc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTW92ZSB0aGUgY2VudGVyIHVwIGRlcGVuZGluZyBvbiBsaW5lIGhlaWdodCBhbmQgbnVtYmVyIG9mIGxpbmVzXG4gICAgICAgICAgICBjZW50ZXJZIC09IChsaW5lcy5sZW5ndGggLyAyKSAqIGxpbmVIZWlnaHQ7XG5cbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbGluZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQobGluZXNbbl0sIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbnRlclkgKz0gbGluZUhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRHJhdyB0ZXh0IGluIGNlbnRlclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmUsIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbnZhciBjb2xvcnMgPSBbJyMwMjc1ZDgnLCAnIzVjYjg1YycsICcjZjBhZDRlJywgJyNkOTUzNGYnXTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNidG5SZWZyZXNoXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgIH0pO1xuICAgIHZhciBjYW50THVnYXJlcyA9ICQoXCIjY2FudEx1Z2FyZXNcIikudmFsKCk7XG4gICAgLy9IYWJpbGl0YWNpb25lcyBwb3IgdGlwb1xuICAgIHZhciBjYW52SGFiaWxpdGFjaW9uVGlwbyA9ICQoJyNjaGFydEhhYmlsaXRhY2lvblRpcG9zJyk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhID0gJChcIiNjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YVwiKS52YWwoKTtcbiAgICB2YXIgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEgPSAkKFwiI2NhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhXCIpLnZhbCgpO1xuICAgIHZhciBjYW50SGFiaWxpdGFjaW9uSW5pY2lvID0gJChcIiNjYW50SGFiaWxpdGFjaW9uSW5pY2lvXCIpLnZhbCgpO1xuICAgIHZhciBjYW50RGVzaGFiaWxpdGFkb3MgPSAkKFwiI2NhbnREZXNoYWJpbGl0YWRvc1wiKS52YWwoKTtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtjb2xvcnNbMF0sIGNvbG9yc1sxXSwgY29sb3JzWzJdLCBjb2xvcnNbM11dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSwgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEsIGNhbnRIYWJpbGl0YWNpb25JbmljaW8sIGNhbnREZXNoYWJpbGl0YWRvc11cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgIC8vIFRoZXNlIGxhYmVscyBhcHBlYXIgaW4gdGhlIGxlZ2VuZCBhbmQgaW4gdGhlIHRvb2x0aXBzIHdoZW4gaG92ZXJpbmcgZGlmZmVyZW50IGFyY3NcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnRGVmaW5pdGl2YTogJyArIGNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhLFxuICAgICAgICAgICAgJ1Byb3Zpc29yaWE6ICcgKyBjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYSxcbiAgICAgICAgICAgICdJbmljaW8gZGUgdHJhbWl0ZTogJyArIGNhbnRIYWJpbGl0YWNpb25JbmljaW8sXG4gICAgICAgICAgICAnU2luIGhhYmlsaXRhY2nDs246ICcgKyBjYW50RGVzaGFiaWxpdGFkb3MsXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGNoYXJ0SGFiaWxpdGFjaW9uVGlwbyA9IG5ldyBDaGFydChjYW52SGFiaWxpdGFjaW9uVGlwbywge1xuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24gKHRvb2x0aXBJdGVtLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsnZGF0YXNldHMnXVswXVsnZGF0YSddW3Rvb2x0aXBJdGVtWydpbmRleCddXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vTHVnYXJlcyBxdWUgZXhwb3J0YW5cblxuICAgIHZhciBjYW52RXhwb3J0YW4gPSAkKCcjY2hhcnRMdWdhcmVzRXhwb3J0YWRvcmVzJyk7XG4gICAgdmFyIGNhbnRFeHBvcnRhZG9yZXMgPSAkKFwiI2NhbnRMdWdhcmVzRXhwb3J0YWRvcmVzXCIpLnZhbCgpO1xuICAgIHZhciBjYW50Tm9FeHBvcnRhZG9yZXMgPSAkKFwiI2NhbnRMdWdhcmVzTm9FeHBvcnRhZG9yZXNcIikudmFsKCk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMl1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtjYW50RXhwb3J0YWRvcmVzLCBjYW50Tm9FeHBvcnRhZG9yZXNdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ1NpOiAnICsgY2FudEV4cG9ydGFkb3JlcyxcbiAgICAgICAgICAgICdObzogJyArIGNhbnROb0V4cG9ydGFkb3JlcyxcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRFeHBvcnRhZG9yZXMgPSBuZXcgQ2hhcnQoY2FudkV4cG9ydGFuLCB7XG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDUwLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBOdW1iZXIoY2FudEx1Z2FyZXMpLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLCAvLyBEZWZhdWx0IGlzICMwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnSGVsdmV0aWNhJywgLy8gRGVmYXVsdCBpcyBBcmlhbFxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFkZGluZzogMzAsIC8vIERlZmF1bHQgaXMgMjAgKGFzIGEgcGVyY2VudGFnZSlcbiAgICAgICAgICAgICAgICAgICAgbWluRm9udFNpemU6IDEwLCAvLyBEZWZhdWx0IGlzIDIwIChpbiBweCksIHNldCB0byBmYWxzZSBhbmQgdGV4dCB3aWxsIG5vdCB3cmFwLlxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyNSAvLyBEZWZhdWx0IGlzIDI1IChpbiBweCksIHVzZWQgZm9yIHdoZW4gdGV4dCB3cmFwc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24gKHRvb2x0aXBJdGVtLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsnZGF0YXNldHMnXVswXVsnZGF0YSddW3Rvb2x0aXBJdGVtWydpbmRleCddXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vTHVnYXJlcyBwb3IgY2F0ZWdvcsOtYVxuXG4gICAgdmFyIGNhbnZDYXRlZ29yaWEgPSAkKCcjY2hhcnRDYXRlZ29yaWFzJyk7XG4gICAgdmFyIGNhbnRTaW5DYXQgPSAkKFwiI2NhbnRTaW5DYXRcIikudmFsKCk7XG4gICAgdmFyIGNhbnRDYXQxID0gJChcIiNjYW50Q2F0MVwiKS52YWwoKTtcbiAgICB2YXIgY2FudENhdDIgPSAkKFwiI2NhbnRDYXQyXCIpLnZhbCgpO1xuICAgIHZhciBjYW50Q2F0MyA9ICQoXCIjY2FudENhdDNcIikudmFsKCk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMl0sIGNvbG9yc1sxXSwgY29sb3JzWzNdXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbY2FudENhdDEsIGNhbnRDYXQyLCBjYW50Q2F0MywgY2FudFNpbkNhdF1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgIC8vIFRoZXNlIGxhYmVscyBhcHBlYXIgaW4gdGhlIGxlZ2VuZCBhbmQgaW4gdGhlIHRvb2x0aXBzIHdoZW4gaG92ZXJpbmcgZGlmZmVyZW50IGFyY3NcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnQ2F0ZWdvcsOtYSAxOiAnICsgY2FudENhdDEsXG4gICAgICAgICAgICAnQ2F0ZWdvcsOtYSAyOiAnICsgY2FudENhdDIsXG4gICAgICAgICAgICAnQ2F0ZWdvcsOtYSAzOiAnICsgY2FudENhdDMsXG4gICAgICAgICAgICAnU2luIGNhdGVnb3LDrWE6ICcgKyBjYW50U2luQ2F0XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGNoYXJ0RXhwb3J0YWRvcmVzID0gbmV3IENoYXJ0KGNhbnZDYXRlZ29yaWEsIHtcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9UaXBvcyBkZSByZXNpZHVvXG5cbiAgICB2YXIgY2FudnJlc2lkdW9zID0gJCgnI2NoYXJ0UmVzaWR1b3MnKTtcbiAgICB2YXIgcmVzaWR1b3NTb2xpZG9zID0gcGFyc2VJbnQoJChcIiNyZXNpZHVvc1NvbGlkb3NcIikudmFsKCkpO1xuICAgIHZhciByZXNpZHVvc0xpcXVpZG9zID0gcGFyc2VJbnQoJChcIiNyZXNpZHVvc0xpcXVpZG9zXCIpLnZhbCgpKTtcbiAgICB2YXIgcmVzaWR1b3NTZW1pc29saWRvcyA9IHBhcnNlSW50KCQoXCIjcmVzaWR1b3NTZW1pc29saWRvc1wiKS52YWwoKSk7XG5cbiAgICB2YXIgbWF4ID0gTWF0aC5tYXgoLi4uW3Jlc2lkdW9zU29saWRvcywgcmVzaWR1b3NTZW1pc29saWRvcywgcmVzaWR1b3NMaXF1aWRvc10pO1xuICAgIGNvbnNvbGUubG9nKCk7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzJdLCBjb2xvcnNbMV1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtyZXNpZHVvc1NvbGlkb3MsIHJlc2lkdW9zU2VtaXNvbGlkb3MsIHJlc2lkdW9zTGlxdWlkb3NdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ1PDs2xpZG9zOiAnICsgcmVzaWR1b3NTb2xpZG9zLFxuICAgICAgICAgICAgJ1NlbWlzw7NsaWRvczogJyArIHJlc2lkdW9zU2VtaXNvbGlkb3MsXG4gICAgICAgICAgICAnTMOtcXVpZG9zOiAnICsgcmVzaWR1b3NMaXF1aWRvcyxcbiAgICAgICAgXSxcblxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRFeHBvcnRhZG9yZXMgPSBuZXcgQ2hhcnQoY2FudnJlc2lkdW9zLCB7XG4gICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSwgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG1heCArIE1hdGguY2VpbCgobWF4ICogMTApIC8gMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vUlVCUk9TIEdFTkVSQUxFU1xuXG4gICAgdmFyIGNhbnZSdWJyb3MgPSAkKCcjY2hhcnRSdWJyb3MnKTtcbiAgICB2YXIgcmcxID0gcGFyc2VJbnQoJChcIiNyZzFcIikudmFsKCkpO1xuICAgIHZhciByZzIgPSBwYXJzZUludCgkKFwiI3JnMlwiKS52YWwoKSk7XG4gICAgdmFyIHJnMyA9IHBhcnNlSW50KCQoXCIjcmczXCIpLnZhbCgpKTtcbiAgICB2YXIgcmc0ID0gcGFyc2VJbnQoJChcIiNyZzRcIikudmFsKCkpO1xuICAgIHZhciByZzUgPSBwYXJzZUludCgkKFwiI3JnNVwiKS52YWwoKSk7XG4gICAgdmFyIHJnNiA9IHBhcnNlSW50KCQoXCIjcmc2XCIpLnZhbCgpKTtcbiAgICB2YXIgcmc3ID0gcGFyc2VJbnQoJChcIiNyZzdcIikudmFsKCkpO1xuICAgIHZhciByZzggPSBwYXJzZUludCgkKFwiI3JnOFwiKS52YWwoKSk7XG4gICAgdmFyIHJnOSA9IHBhcnNlSW50KCQoXCIjcmc5XCIpLnZhbCgpKTtcbiAgICB2YXIgcmcxMCA9IHBhcnNlSW50KCQoXCIjcmcxMFwiKS52YWwoKSk7XG4gICAgdmFyIHJnMTEgPSBwYXJzZUludCgkKFwiI3JnMTFcIikudmFsKCkpO1xuICAgIHZhciByZzEyID0gcGFyc2VJbnQoJChcIiNyZzEyXCIpLnZhbCgpKTtcbiAgICB2YXIgcmcxMyA9IHBhcnNlSW50KCQoXCIjcmcxM1wiKS52YWwoKSk7XG4gICAgdmFyIHJnMTQgPSBwYXJzZUludCgkKFwiI3JnMTRcIikudmFsKCkpO1xuICAgIHZhciByZzE1ID0gcGFyc2VJbnQoJChcIiNyZzE1XCIpLnZhbCgpKTtcbiAgICB2YXIgcmcxNiA9IHBhcnNlSW50KCQoXCIjcmcxNlwiKS52YWwoKSk7XG4gICAgdmFyIHJnMTcgPSBwYXJzZUludCgkKFwiI3JnMTdcIikudmFsKCkpO1xuICAgIHZhciByZzE4ID0gcGFyc2VJbnQoJChcIiNyZzE4XCIpLnZhbCgpKTtcbiAgICB2YXIgcmcxOSA9IHBhcnNlSW50KCQoXCIjcmcxOVwiKS52YWwoKSk7XG4gICAgdmFyIHJnMjAgPSBwYXJzZUludCgkKFwiI3JnMjBcIikudmFsKCkpO1xuICAgIHZhciByZzIxID0gcGFyc2VJbnQoJChcIiNyZzIxXCIpLnZhbCgpKTtcblxuICAgIHZhciBtYXggPSBNYXRoLm1heCguLi5bcmcxLCByZzIsIHJnMywgcmc0LCByZzUsIHJnNiwgcmc3LCByZzgsIHJnOSwgcmcxMCwgcmcxMSwgcmcxMiwgcmcxMywgcmcxNCwgcmcxNSwgcmcxNiwgcmcxNywgcmcxOCwgcmcxOSwgcmcyMCwgcmcyMV0pO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF0sIGNvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF0sIGNvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF0sIGNvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF0sIGNvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF0sIGNvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF0sIGNvbG9yc1swXSwgY29sb3JzWzBdLCBjb2xvcnNbMF1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtyZzEsIHJnMiwgcmczLCByZzQsIHJnNSwgcmc2LCByZzcsIHJnOCwgcmc5LCByZzEwLCByZzExLCByZzEyLCByZzEzLCByZzE0LCByZzE1LCByZzE2LCByZzE3LCByZzE4LCByZzE5LCByZzIwLCByZzIxXVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdBdXRvbW90cml6IHkgYXV0b3BhcnRlczogJyArIHJnMSxcbiAgICAgICAgICAgICdFbGVjdHLDs25pY2EgeSBlbGVjdHJvZG9tw6lzdGljb3M6ICcgKyByZzIsXG4gICAgICAgICAgICAnSW5kdW1lbnRhcmlhOiAnICsgcmczLFxuICAgICAgICAgICAgJ1Byb2R1Y3RvcyBkZWwgVGFiYWNvOiAnICsgcmc0LFxuICAgICAgICAgICAgJ01ldGFsdXJnaWEsIE1hcXVpbmFyaWEgeSBFcXVpcG9zOiAnICsgcmc1LFxuICAgICAgICAgICAgJ0NhbHphZG86ICcgKyByZzYsXG4gICAgICAgICAgICAnR3LDoWZpY2EsIEVkaWNpb25lcyBlIEltcHJlc2lvbmVzOiAnICsgcmc3LFxuICAgICAgICAgICAgJ01hZGVyYSB5IE11ZWJsZXM6ICcgKyByZzgsXG4gICAgICAgICAgICAnSnVndWV0ZXM6ICcgKyByZzksXG4gICAgICAgICAgICAnQ2VtZW50bzogJyArIHJnMTAsXG4gICAgICAgICAgICAnUHJvZHVjdG9zIFRleHRpbGVzOiAnICsgcmcxMSxcbiAgICAgICAgICAgICdNYW51ZmFjdHVyYXMgZGVsIEN1ZXJvOiAnICsgcmcxMixcbiAgICAgICAgICAgICdOZXVtw6F0aWNvczogJyArIHJnMTMsXG4gICAgICAgICAgICAnQmljaWNsZXRhcyB5IE1vdG9zOiAnICsgcmcxNCxcbiAgICAgICAgICAgICdRdcOtbWljYSB5IFBldHJvcXXDrW1pY2E6ICcgKyByZzE1LFxuICAgICAgICAgICAgJ0NlbHVsb3NhIHkgUGFwZWw6ICcgKyByZzE2LFxuICAgICAgICAgICAgJ1Bsw6FzdGljb3MgeSBzdWJwcm9kdWN0b3M6ICcgKyByZzE3LFxuICAgICAgICAgICAgJ0NlcsOhbWljb3M6ICcgKyByZzE4LFxuICAgICAgICAgICAgJ0FsaW1lbnRvcyAgOiAnICsgcmcxOSxcbiAgICAgICAgICAgICdNYW51ZmFjdHVyYSBkZWwgY2F1Y2hvOiAnICsgcmcyMCxcbiAgICAgICAgICAgICdFc3RhY2lvbmVzIGRlIHNlcnZpY2lvOiAnICsgcmcyMSwgICAgICAgICAgICBcbiAgICAgICAgXSxcblxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRFeHBvcnRhZG9yZXMgPSBuZXcgQ2hhcnQoY2FudlJ1YnJvcywge1xuICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXggKyBNYXRoLmNlaWwoKG1heCAqIDEwKSAvIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9