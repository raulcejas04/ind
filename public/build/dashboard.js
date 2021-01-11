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
            max: max + Math.round(max * 10 / 100)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2FudEx1Z2FyZXMiLCJ2YWwiLCJjYW52SGFiaWxpdGFjaW9uVGlwbyIsImNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhIiwiY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEiLCJjYW50SGFiaWxpdGFjaW9uSW5pY2lvIiwiY2FudERlc2hhYmlsaXRhZG9zIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJsYWJlbHMiLCJjaGFydEhhYmlsaXRhY2lvblRpcG8iLCJ0eXBlIiwibGVnZW5kIiwicG9zaXRpb24iLCJwYWRkaW5nIiwicG9pbnRTdHlsZSIsInVzZVBvaW50U3R5bGUiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwidG9vbHRpcEl0ZW0iLCJjYW52RXhwb3J0YW4iLCJjYW50RXhwb3J0YWRvcmVzIiwiY2FudE5vRXhwb3J0YWRvcmVzIiwiY2hhcnRFeHBvcnRhZG9yZXMiLCJjdXRvdXRQZXJjZW50YWdlIiwiTnVtYmVyIiwiY2FudkNhdGVnb3JpYSIsImNhbnRTaW5DYXQiLCJjYW50Q2F0MSIsImNhbnRDYXQyIiwiY2FudENhdDMiLCJjYW52cmVzaWR1b3MiLCJyZXNpZHVvc1NvbGlkb3MiLCJwYXJzZUludCIsInJlc2lkdW9zTGlxdWlkb3MiLCJyZXNpZHVvc1NlbWlzb2xpZG9zIiwibWF4IiwiY29uc29sZSIsImxvZyIsInNjYWxlcyIsInlBeGVzIiwiZGlzcGxheSIsInRpY2tzIiwic3VnZ2VzdGVkTWluIiwiYmVnaW5BdFplcm8iLCJyb3VuZCIsInhBeGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0E7QUFFQUMsd0VBQUssQ0FBQ0MsYUFBTixDQUFvQkMsUUFBcEIsQ0FBNkI7QUFDekJDLFlBQVUsRUFBRSxvQkFBVUMsS0FBVixFQUFpQjtBQUN6QixRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQWxDLEVBQTBDO0FBQ3RDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHTCxLQUFLLENBQUNBLEtBQU4sQ0FBWUssR0FBdEIsQ0FGc0Ms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NUNOLFFBQUksRUFBRUEsSUFGc0M7QUFHNUMvRCxXQUFPLEVBQUU7QUFDTGtHLFlBQU0sRUFBRTtBQUNKQyxhQUFLLEVBQUUsQ0FBQztBQUNBQyxpQkFBTyxFQUFFLElBRFQ7QUFFQUMsZUFBSyxFQUFFO0FBQ0hDLHdCQUFZLEVBQUUsQ0FEWDtBQUVIQyx1QkFBVyxFQUFFLElBRlY7QUFHSFIsZUFBRyxFQUFFQSxHQUFHLEdBQUczRSxJQUFJLENBQUNvRixLQUFMLENBQVlULEdBQUcsR0FBRyxFQUFQLEdBQWEsR0FBeEI7QUFIUjtBQUZQLFNBQUQsQ0FESDtBQVNKVSxhQUFLLEVBQUUsQ0FBQztBQUNBTCxpQkFBTyxFQUFFO0FBRFQsU0FBRDtBQVRILE9BREg7QUFjTDlCLFlBQU0sRUFBRTtBQUNKOEIsZUFBTyxFQUFFO0FBREw7QUFkSDtBQUhtQyxHQUF4QixDQUF4QjtBQXNCSCxDQXpNRCxFIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2Rhc2hib2FyZC5zY3NzJztcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9kaXN0L0NoYXJ0LmJ1bmRsZS5taW4uanMnO1xuXG5DaGFydC5wbHVnaW5TZXJ2aWNlLnJlZ2lzdGVyKHtcbiAgICBiZWZvcmVEcmF3OiBmdW5jdGlvbiAoY2hhcnQpIHtcbiAgICAgICAgaWYgKGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcikge1xuICAgICAgICAgICAgLy8gR2V0IGN0eCBmcm9tIHN0cmluZ1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNoYXJ0LmNoYXJ0LmN0eDtcblxuICAgICAgICAgICAgLy8gR2V0IG9wdGlvbnMgZnJvbSB0aGUgY2VudGVyIG9iamVjdCBpbiBvcHRpb25zXG4gICAgICAgICAgICB2YXIgY2VudGVyQ29uZmlnID0gY2hhcnQuY29uZmlnLm9wdGlvbnMuZWxlbWVudHMuY2VudGVyO1xuICAgICAgICAgICAgdmFyIGZvbnRTdHlsZSA9IGNlbnRlckNvbmZpZy5mb250U3R5bGUgfHwgJ0FyaWFsJztcbiAgICAgICAgICAgIHZhciB0eHQgPSBjZW50ZXJDb25maWcudGV4dDtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGNlbnRlckNvbmZpZy5jb2xvciB8fCAnIzAwMCc7XG4gICAgICAgICAgICB2YXIgbWF4Rm9udFNpemUgPSBjZW50ZXJDb25maWcubWF4Rm9udFNpemUgfHwgNzU7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmcgPSBjZW50ZXJDb25maWcuc2lkZVBhZGRpbmcgfHwgMjA7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmdDYWxjdWxhdGVkID0gKHNpZGVQYWRkaW5nIC8gMTAwKSAqIChjaGFydC5pbm5lclJhZGl1cyAqIDIpXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgYmFzZSBmb250IG9mIDMwcHhcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IFwiICsgZm9udFN0eWxlO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzdHJpbmcgYW5kIGFsc28gdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50IG1pbnVzIDEwIHRvIGdpdmUgaXQgNXB4IHNpZGUgcGFkZGluZ1xuICAgICAgICAgICAgdmFyIHN0cmluZ1dpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGg7XG4gICAgICAgICAgICB2YXIgZWxlbWVudFdpZHRoID0gKGNoYXJ0LmlubmVyUmFkaXVzICogMikgLSBzaWRlUGFkZGluZ0NhbGN1bGF0ZWQ7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgb3V0IGhvdyBtdWNoIHRoZSBmb250IGNhbiBncm93IGluIHdpZHRoLlxuICAgICAgICAgICAgdmFyIHdpZHRoUmF0aW8gPSBlbGVtZW50V2lkdGggLyBzdHJpbmdXaWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdGb250U2l6ZSA9IE1hdGguZmxvb3IoMzAgKiB3aWR0aFJhdGlvKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gKGNoYXJ0LmlubmVyUmFkaXVzICogMik7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSBuZXcgZm9udCBzaXplIHNvIGl0IHdpbGwgbm90IGJlIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgb2YgbGFiZWwuXG4gICAgICAgICAgICB2YXIgZm9udFNpemVUb1VzZSA9IE1hdGgubWluKG5ld0ZvbnRTaXplLCBlbGVtZW50SGVpZ2h0LCBtYXhGb250U2l6ZSk7XG4gICAgICAgICAgICB2YXIgbWluRm9udFNpemUgPSBjZW50ZXJDb25maWcubWluRm9udFNpemU7XG4gICAgICAgICAgICB2YXIgbGluZUhlaWdodCA9IGNlbnRlckNvbmZpZy5saW5lSGVpZ2h0IHx8IDI1O1xuICAgICAgICAgICAgdmFyIHdyYXBUZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChtaW5Gb250U2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWluRm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1pbkZvbnRTaXplICYmIGZvbnRTaXplVG9Vc2UgPCBtaW5Gb250U2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplVG9Vc2UgPSBtaW5Gb250U2l6ZTtcbiAgICAgICAgICAgICAgICB3cmFwVGV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBmb250IHNldHRpbmdzIHRvIGRyYXcgaXQgY29ycmVjdGx5LlxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAgICAgdmFyIGNlbnRlclggPSAoKGNoYXJ0LmNoYXJ0QXJlYS5sZWZ0ICsgY2hhcnQuY2hhcnRBcmVhLnJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgdmFyIGNlbnRlclkgPSAoKGNoYXJ0LmNoYXJ0QXJlYS50b3AgKyBjaGFydC5jaGFydEFyZWEuYm90dG9tKSAvIDIpO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZVRvVXNlICsgXCJweCBcIiArIGZvbnRTdHlsZTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgICAgICAgICAgaWYgKCF3cmFwVGV4dCkge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0eHQsIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdvcmRzID0gdHh0LnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gW107XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIHdvcmRzIHVwIGludG8gbXVsdGlwbGUgbGluZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdvcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyAnO1xuICAgICAgICAgICAgICAgIHZhciBtZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAodGVzdFdpZHRoID4gZWxlbWVudFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gdGVzdExpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBjZW50ZXIgdXAgZGVwZW5kaW5nIG9uIGxpbmUgaGVpZ2h0IGFuZCBudW1iZXIgb2YgbGluZXNcbiAgICAgICAgICAgIGNlbnRlclkgLT0gKGxpbmVzLmxlbmd0aCAvIDIpICogbGluZUhlaWdodDtcblxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBsaW5lcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChsaW5lc1tuXSwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICAgICAgY2VudGVyWSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9EcmF3IHRleHQgaW4gY2VudGVyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQobGluZSwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIGNvbG9ycyA9IFsnIzAyNzVkOCcsICcjNWNiODVjJywgJyNmMGFkNGUnLCAnI2Q5NTM0ZiddO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2J0blJlZnJlc2hcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfSk7XG4gICAgdmFyIGNhbnRMdWdhcmVzID0gJChcIiNjYW50THVnYXJlc1wiKS52YWwoKTtcbiAgICAvL0hhYmlsaXRhY2lvbmVzIHBvciB0aXBvXG4gICAgdmFyIGNhbnZIYWJpbGl0YWNpb25UaXBvID0gJCgnI2NoYXJ0SGFiaWxpdGFjaW9uVGlwb3MnKTtcbiAgICB2YXIgY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEgPSAkKFwiI2NhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhXCIpLnZhbCgpO1xuICAgIHZhciBjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYSA9ICQoXCIjY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWFcIikudmFsKCk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWNpb25JbmljaW8gPSAkKFwiI2NhbnRIYWJpbGl0YWNpb25JbmljaW9cIikudmFsKCk7XG4gICAgdmFyIGNhbnREZXNoYWJpbGl0YWRvcyA9ICQoXCIjY2FudERlc2hhYmlsaXRhZG9zXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzFdLCBjb2xvcnNbMl0sIGNvbG9yc1szXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW2NhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhLCBjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYSwgY2FudEhhYmlsaXRhY2lvbkluaWNpbywgY2FudERlc2hhYmlsaXRhZG9zXVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdEZWZpbml0aXZhOiAnICsgY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEsXG4gICAgICAgICAgICAnUHJvdmlzb3JpYTogJyArIGNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhLFxuICAgICAgICAgICAgJ0luaWNpbyBkZSB0cmFtaXRlOiAnICsgY2FudEhhYmlsaXRhY2lvbkluaWNpbyxcbiAgICAgICAgICAgICdTaW4gaGFiaWxpdGFjacOzbjogJyArIGNhbnREZXNoYWJpbGl0YWRvcyxcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRIYWJpbGl0YWNpb25UaXBvID0gbmV3IENoYXJ0KGNhbnZIYWJpbGl0YWNpb25UaXBvLCB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAodG9vbHRpcEl0ZW0sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWydkYXRhc2V0cyddWzBdWydkYXRhJ11bdG9vbHRpcEl0ZW1bJ2luZGV4J11dO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy9MdWdhcmVzIHF1ZSBleHBvcnRhblxuXG4gICAgdmFyIGNhbnZFeHBvcnRhbiA9ICQoJyNjaGFydEx1Z2FyZXNFeHBvcnRhZG9yZXMnKTtcbiAgICB2YXIgY2FudEV4cG9ydGFkb3JlcyA9ICQoXCIjY2FudEx1Z2FyZXNFeHBvcnRhZG9yZXNcIikudmFsKCk7XG4gICAgdmFyIGNhbnROb0V4cG9ydGFkb3JlcyA9ICQoXCIjY2FudEx1Z2FyZXNOb0V4cG9ydGFkb3Jlc1wiKS52YWwoKTtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtjb2xvcnNbMF0sIGNvbG9yc1syXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW2NhbnRFeHBvcnRhZG9yZXMsIGNhbnROb0V4cG9ydGFkb3Jlc11cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgIC8vIFRoZXNlIGxhYmVscyBhcHBlYXIgaW4gdGhlIGxlZ2VuZCBhbmQgaW4gdGhlIHRvb2x0aXBzIHdoZW4gaG92ZXJpbmcgZGlmZmVyZW50IGFyY3NcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnU2k6ICcgKyBjYW50RXhwb3J0YWRvcmVzLFxuICAgICAgICAgICAgJ05vOiAnICsgY2FudE5vRXhwb3J0YWRvcmVzLFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEV4cG9ydGFkb3JlcyA9IG5ldyBDaGFydChjYW52RXhwb3J0YW4sIHtcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNTAsXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IE51bWJlcihjYW50THVnYXJlcyksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsIC8vIERlZmF1bHQgaXMgIzAwMDAwMFxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdIZWx2ZXRpY2EnLCAvLyBEZWZhdWx0IGlzIEFyaWFsXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYWRkaW5nOiAzMCwgLy8gRGVmYXVsdCBpcyAyMCAoYXMgYSBwZXJjZW50YWdlKVxuICAgICAgICAgICAgICAgICAgICBtaW5Gb250U2l6ZTogMTAsIC8vIERlZmF1bHQgaXMgMjAgKGluIHB4KSwgc2V0IHRvIGZhbHNlIGFuZCB0ZXh0IHdpbGwgbm90IHdyYXAuXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDI1IC8vIERlZmF1bHQgaXMgMjUgKGluIHB4KSwgdXNlZCBmb3Igd2hlbiB0ZXh0IHdyYXBzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAodG9vbHRpcEl0ZW0sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWydkYXRhc2V0cyddWzBdWydkYXRhJ11bdG9vbHRpcEl0ZW1bJ2luZGV4J11dO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy9MdWdhcmVzIHBvciBjYXRlZ29yw61hXG5cbiAgICB2YXIgY2FudkNhdGVnb3JpYSA9ICQoJyNjaGFydENhdGVnb3JpYXMnKTtcbiAgICB2YXIgY2FudFNpbkNhdCA9ICQoXCIjY2FudFNpbkNhdFwiKS52YWwoKTtcbiAgICB2YXIgY2FudENhdDEgPSAkKFwiI2NhbnRDYXQxXCIpLnZhbCgpO1xuICAgIHZhciBjYW50Q2F0MiA9ICQoXCIjY2FudENhdDJcIikudmFsKCk7XG4gICAgdmFyIGNhbnRDYXQzID0gJChcIiNjYW50Q2F0M1wiKS52YWwoKTtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtjb2xvcnNbMF0sIGNvbG9yc1syXSwgY29sb3JzWzFdLCBjb2xvcnNbM11dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtjYW50Q2F0MSwgY2FudENhdDIsIGNhbnRDYXQzLCBjYW50U2luQ2F0XVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdDYXRlZ29yw61hIDE6ICcgKyBjYW50Q2F0MSxcbiAgICAgICAgICAgICdDYXRlZ29yw61hIDI6ICcgKyBjYW50Q2F0MixcbiAgICAgICAgICAgICdDYXRlZ29yw61hIDM6ICcgKyBjYW50Q2F0MyxcbiAgICAgICAgICAgICdTaW4gY2F0ZWdvcsOtYTogJyArIGNhbnRTaW5DYXRcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRFeHBvcnRhZG9yZXMgPSBuZXcgQ2hhcnQoY2FudkNhdGVnb3JpYSwge1xuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24gKHRvb2x0aXBJdGVtLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsnZGF0YXNldHMnXVswXVsnZGF0YSddW3Rvb2x0aXBJdGVtWydpbmRleCddXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1RpcG9zIGRlIHJlc2lkdW9cblxuICAgIHZhciBjYW52cmVzaWR1b3MgPSAkKCcjY2hhcnRSZXNpZHVvcycpO1xuICAgIHZhciByZXNpZHVvc1NvbGlkb3MgPSBwYXJzZUludCgkKFwiI3Jlc2lkdW9zU29saWRvc1wiKS52YWwoKSk7XG4gICAgdmFyIHJlc2lkdW9zTGlxdWlkb3MgPSBwYXJzZUludCgkKFwiI3Jlc2lkdW9zTGlxdWlkb3NcIikudmFsKCkpO1xuICAgIHZhciByZXNpZHVvc1NlbWlzb2xpZG9zID0gcGFyc2VJbnQoJChcIiNyZXNpZHVvc1NlbWlzb2xpZG9zXCIpLnZhbCgpKTtcblxuICAgIHZhciBtYXggPSBNYXRoLm1heCguLi5bcmVzaWR1b3NTb2xpZG9zLCByZXNpZHVvc1NlbWlzb2xpZG9zLCByZXNpZHVvc0xpcXVpZG9zXSk7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMl0sIGNvbG9yc1sxXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW3Jlc2lkdW9zU29saWRvcywgcmVzaWR1b3NTZW1pc29saWRvcywgcmVzaWR1b3NMaXF1aWRvc11cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgIC8vIFRoZXNlIGxhYmVscyBhcHBlYXIgaW4gdGhlIGxlZ2VuZCBhbmQgaW4gdGhlIHRvb2x0aXBzIHdoZW4gaG92ZXJpbmcgZGlmZmVyZW50IGFyY3NcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnU8OzbGlkb3M6ICcgKyByZXNpZHVvc1NvbGlkb3MsXG4gICAgICAgICAgICAnU2VtaXPDs2xpZG9zOiAnICsgcmVzaWR1b3NTZW1pc29saWRvcyxcbiAgICAgICAgICAgICdMw61xdWlkb3M6ICcgKyByZXNpZHVvc0xpcXVpZG9zLFxuICAgICAgICBdLFxuXG4gICAgfTtcblxuICAgIHZhciBjaGFydEV4cG9ydGFkb3JlcyA9IG5ldyBDaGFydChjYW52cmVzaWR1b3MsIHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4ICsgTWF0aC5yb3VuZCgobWF4ICogMTApIC8gMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=