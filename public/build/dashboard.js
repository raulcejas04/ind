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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjYW50THVnYXJlcyIsInZhbCIsImNhbnZIYWJpbGl0YWNpb25UaXBvIiwiY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEiLCJjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYSIsImNhbnRIYWJpbGl0YWNpb25JbmljaW8iLCJjYW50RGVzaGFiaWxpdGFkb3MiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImxhYmVscyIsImNoYXJ0SGFiaWxpdGFjaW9uVGlwbyIsInR5cGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInBhZGRpbmciLCJwb2ludFN0eWxlIiwidXNlUG9pbnRTdHlsZSIsInRvb2x0aXBzIiwiY2FsbGJhY2tzIiwibGFiZWwiLCJ0b29sdGlwSXRlbSIsImNhbnZFeHBvcnRhbiIsImNhbnRFeHBvcnRhZG9yZXMiLCJjYW50Tm9FeHBvcnRhZG9yZXMiLCJjaGFydEV4cG9ydGFkb3JlcyIsImN1dG91dFBlcmNlbnRhZ2UiLCJOdW1iZXIiLCJjYW52Q2F0ZWdvcmlhIiwiY2FudFNpbkNhdCIsImNhbnRDYXQxIiwiY2FudENhdDIiLCJjYW50Q2F0MyIsImNhbnZyZXNpZHVvcyIsInJlc2lkdW9zU29saWRvcyIsInBhcnNlSW50IiwicmVzaWR1b3NMaXF1aWRvcyIsInJlc2lkdW9zU2VtaXNvbGlkb3MiLCJtYXgiLCJjb25zb2xlIiwibG9nIiwic2NhbGVzIiwieUF4ZXMiLCJkaXNwbGF5IiwidGlja3MiLCJzdWdnZXN0ZWRNaW4iLCJiZWdpbkF0WmVybyIsInJvdW5kIiwieEF4ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQTtBQUVBQyx3RUFBSyxDQUFDQyxhQUFOLENBQW9CQyxRQUFwQixDQUE2QjtBQUN6QkMsWUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0FBQ3pCLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBbEMsRUFBMEM7QUFDdEM7QUFDQSxVQUFJQyxHQUFHLEdBQUdMLEtBQUssQ0FBQ0EsS0FBTixDQUFZSyxHQUF0QixDQUZzQyxDQUl0Qzs7QUFDQSxVQUFJQyxZQUFZLEdBQUdO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QUUsQ0FEWDtBQUVIQyx1QkFBVyxFQUFFLElBRlY7QUFHSFIsZUFBRyxFQUFFQSxHQUFHLEdBQUd4RSxJQUFJLENBQUNpRixLQUFMLENBQVlULEdBQUcsR0FBQyxFQUFMLEdBQVMsR0FBcEI7QUFIUjtBQUZQLFNBQUQsQ0FESDtBQVNKVSxhQUFLLEVBQUUsQ0FBQztBQUNBTCxpQkFBTyxFQUFFO0FBRFQsU0FBRDtBQVRILE9BREg7QUFjTDlCLFlBQU0sRUFBRTtBQUNKOEIsZUFBTyxFQUFFO0FBREw7QUFkSDtBQUhtQyxHQUF4QixDQUF4QjtBQXNCSCxDQXRNRCxFIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2Rhc2hib2FyZC5zY3NzJztcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9kaXN0L0NoYXJ0LmJ1bmRsZS5taW4uanMnO1xuXG5DaGFydC5wbHVnaW5TZXJ2aWNlLnJlZ2lzdGVyKHtcbiAgICBiZWZvcmVEcmF3OiBmdW5jdGlvbiAoY2hhcnQpIHtcbiAgICAgICAgaWYgKGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcikge1xuICAgICAgICAgICAgLy8gR2V0IGN0eCBmcm9tIHN0cmluZ1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNoYXJ0LmNoYXJ0LmN0eDtcblxuICAgICAgICAgICAgLy8gR2V0IG9wdGlvbnMgZnJvbSB0aGUgY2VudGVyIG9iamVjdCBpbiBvcHRpb25zXG4gICAgICAgICAgICB2YXIgY2VudGVyQ29uZmlnID0gY2hhcnQuY29uZmlnLm9wdGlvbnMuZWxlbWVudHMuY2VudGVyO1xuICAgICAgICAgICAgdmFyIGZvbnRTdHlsZSA9IGNlbnRlckNvbmZpZy5mb250U3R5bGUgfHwgJ0FyaWFsJztcbiAgICAgICAgICAgIHZhciB0eHQgPSBjZW50ZXJDb25maWcudGV4dDtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGNlbnRlckNvbmZpZy5jb2xvciB8fCAnIzAwMCc7XG4gICAgICAgICAgICB2YXIgbWF4Rm9udFNpemUgPSBjZW50ZXJDb25maWcubWF4Rm9udFNpemUgfHwgNzU7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmcgPSBjZW50ZXJDb25maWcuc2lkZVBhZGRpbmcgfHwgMjA7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmdDYWxjdWxhdGVkID0gKHNpZGVQYWRkaW5nIC8gMTAwKSAqIChjaGFydC5pbm5lclJhZGl1cyAqIDIpXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgYmFzZSBmb250IG9mIDMwcHhcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IFwiICsgZm9udFN0eWxlO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzdHJpbmcgYW5kIGFsc28gdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50IG1pbnVzIDEwIHRvIGdpdmUgaXQgNXB4IHNpZGUgcGFkZGluZ1xuICAgICAgICAgICAgdmFyIHN0cmluZ1dpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGg7XG4gICAgICAgICAgICB2YXIgZWxlbWVudFdpZHRoID0gKGNoYXJ0LmlubmVyUmFkaXVzICogMikgLSBzaWRlUGFkZGluZ0NhbGN1bGF0ZWQ7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgb3V0IGhvdyBtdWNoIHRoZSBmb250IGNhbiBncm93IGluIHdpZHRoLlxuICAgICAgICAgICAgdmFyIHdpZHRoUmF0aW8gPSBlbGVtZW50V2lkdGggLyBzdHJpbmdXaWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdGb250U2l6ZSA9IE1hdGguZmxvb3IoMzAgKiB3aWR0aFJhdGlvKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gKGNoYXJ0LmlubmVyUmFkaXVzICogMik7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSBuZXcgZm9udCBzaXplIHNvIGl0IHdpbGwgbm90IGJlIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgb2YgbGFiZWwuXG4gICAgICAgICAgICB2YXIgZm9udFNpemVUb1VzZSA9IE1hdGgubWluKG5ld0ZvbnRTaXplLCBlbGVtZW50SGVpZ2h0LCBtYXhGb250U2l6ZSk7XG4gICAgICAgICAgICB2YXIgbWluRm9udFNpemUgPSBjZW50ZXJDb25maWcubWluRm9udFNpemU7XG4gICAgICAgICAgICB2YXIgbGluZUhlaWdodCA9IGNlbnRlckNvbmZpZy5saW5lSGVpZ2h0IHx8IDI1O1xuICAgICAgICAgICAgdmFyIHdyYXBUZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChtaW5Gb250U2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWluRm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1pbkZvbnRTaXplICYmIGZvbnRTaXplVG9Vc2UgPCBtaW5Gb250U2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplVG9Vc2UgPSBtaW5Gb250U2l6ZTtcbiAgICAgICAgICAgICAgICB3cmFwVGV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBmb250IHNldHRpbmdzIHRvIGRyYXcgaXQgY29ycmVjdGx5LlxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAgICAgdmFyIGNlbnRlclggPSAoKGNoYXJ0LmNoYXJ0QXJlYS5sZWZ0ICsgY2hhcnQuY2hhcnRBcmVhLnJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgdmFyIGNlbnRlclkgPSAoKGNoYXJ0LmNoYXJ0QXJlYS50b3AgKyBjaGFydC5jaGFydEFyZWEuYm90dG9tKSAvIDIpO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZVRvVXNlICsgXCJweCBcIiArIGZvbnRTdHlsZTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgICAgICAgICAgaWYgKCF3cmFwVGV4dCkge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0eHQsIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdvcmRzID0gdHh0LnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gW107XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIHdvcmRzIHVwIGludG8gbXVsdGlwbGUgbGluZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdvcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyAnO1xuICAgICAgICAgICAgICAgIHZhciBtZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAodGVzdFdpZHRoID4gZWxlbWVudFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gdGVzdExpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBjZW50ZXIgdXAgZGVwZW5kaW5nIG9uIGxpbmUgaGVpZ2h0IGFuZCBudW1iZXIgb2YgbGluZXNcbiAgICAgICAgICAgIGNlbnRlclkgLT0gKGxpbmVzLmxlbmd0aCAvIDIpICogbGluZUhlaWdodDtcblxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBsaW5lcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChsaW5lc1tuXSwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICAgICAgY2VudGVyWSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9EcmF3IHRleHQgaW4gY2VudGVyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQobGluZSwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIGNvbG9ycyA9IFsnIzAyNzVkOCcsICcjNWNiODVjJywgJyNmMGFkNGUnLCAnI2Q5NTM0ZiddO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FudEx1Z2FyZXMgPSAkKFwiI2NhbnRMdWdhcmVzXCIpLnZhbCgpO1xuICAgIC8vSGFiaWxpdGFjaW9uZXMgcG9yIHRpcG9cbiAgICB2YXIgY2FudkhhYmlsaXRhY2lvblRpcG8gPSAkKCcjY2hhcnRIYWJpbGl0YWNpb25UaXBvcycpO1xuICAgIHZhciBjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSA9ICQoXCIjY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmFcIikudmFsKCk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhID0gJChcIiNjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYVwiKS52YWwoKTtcbiAgICB2YXIgY2FudEhhYmlsaXRhY2lvbkluaWNpbyA9ICQoXCIjY2FudEhhYmlsaXRhY2lvbkluaWNpb1wiKS52YWwoKTtcbiAgICB2YXIgY2FudERlc2hhYmlsaXRhZG9zID0gJChcIiNjYW50RGVzaGFiaWxpdGFkb3NcIikudmFsKCk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMV0sIGNvbG9yc1syXSwgY29sb3JzWzNdXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEsIGNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhLCBjYW50SGFiaWxpdGFjaW9uSW5pY2lvLCBjYW50RGVzaGFiaWxpdGFkb3NdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ0RlZmluaXRpdmE6ICcgKyBjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSxcbiAgICAgICAgICAgICdQcm92aXNvcmlhOiAnICsgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEsXG4gICAgICAgICAgICAnSW5pY2lvIGRlIHRyYW1pdGU6ICcgKyBjYW50SGFiaWxpdGFjaW9uSW5pY2lvLFxuICAgICAgICAgICAgJ1NpbiBoYWJpbGl0YWNpw7NuOiAnICsgY2FudERlc2hhYmlsaXRhZG9zLFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEhhYmlsaXRhY2lvblRpcG8gPSBuZXcgQ2hhcnQoY2FudkhhYmlsaXRhY2lvblRpcG8sIHtcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvL0x1Z2FyZXMgcXVlIGV4cG9ydGFuXG5cbiAgICB2YXIgY2FudkV4cG9ydGFuID0gJCgnI2NoYXJ0THVnYXJlc0V4cG9ydGFkb3JlcycpO1xuICAgIHZhciBjYW50RXhwb3J0YWRvcmVzID0gJChcIiNjYW50THVnYXJlc0V4cG9ydGFkb3Jlc1wiKS52YWwoKTtcbiAgICB2YXIgY2FudE5vRXhwb3J0YWRvcmVzID0gJChcIiNjYW50THVnYXJlc05vRXhwb3J0YWRvcmVzXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzJdXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbY2FudEV4cG9ydGFkb3JlcywgY2FudE5vRXhwb3J0YWRvcmVzXVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdTaTogJyArIGNhbnRFeHBvcnRhZG9yZXMsXG4gICAgICAgICAgICAnTm86ICcgKyBjYW50Tm9FeHBvcnRhZG9yZXMsXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGNoYXJ0RXhwb3J0YWRvcmVzID0gbmV3IENoYXJ0KGNhbnZFeHBvcnRhbiwge1xuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA1MCxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogTnVtYmVyKGNhbnRMdWdhcmVzKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJywgLy8gRGVmYXVsdCBpcyAjMDAwMDAwXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ0hlbHZldGljYScsIC8vIERlZmF1bHQgaXMgQXJpYWxcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhZGRpbmc6IDMwLCAvLyBEZWZhdWx0IGlzIDIwIChhcyBhIHBlcmNlbnRhZ2UpXG4gICAgICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAxMCwgLy8gRGVmYXVsdCBpcyAyMCAoaW4gcHgpLCBzZXQgdG8gZmFsc2UgYW5kIHRleHQgd2lsbCBub3Qgd3JhcC5cbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUgLy8gRGVmYXVsdCBpcyAyNSAoaW4gcHgpLCB1c2VkIGZvciB3aGVuIHRleHQgd3JhcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvL0x1Z2FyZXMgcG9yIGNhdGVnb3LDrWFcblxuICAgIHZhciBjYW52Q2F0ZWdvcmlhID0gJCgnI2NoYXJ0Q2F0ZWdvcmlhcycpO1xuICAgIHZhciBjYW50U2luQ2F0ID0gJChcIiNjYW50U2luQ2F0XCIpLnZhbCgpO1xuICAgIHZhciBjYW50Q2F0MSA9ICQoXCIjY2FudENhdDFcIikudmFsKCk7XG4gICAgdmFyIGNhbnRDYXQyID0gJChcIiNjYW50Q2F0MlwiKS52YWwoKTtcbiAgICB2YXIgY2FudENhdDMgPSAkKFwiI2NhbnRDYXQzXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzJdLCBjb2xvcnNbMV0sIGNvbG9yc1szXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW2NhbnRDYXQxLCBjYW50Q2F0MiwgY2FudENhdDMsIGNhbnRTaW5DYXRdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ0NhdGVnb3LDrWEgMTogJyArIGNhbnRDYXQxLFxuICAgICAgICAgICAgJ0NhdGVnb3LDrWEgMjogJyArIGNhbnRDYXQyLFxuICAgICAgICAgICAgJ0NhdGVnb3LDrWEgMzogJyArIGNhbnRDYXQzLFxuICAgICAgICAgICAgJ1NpbiBjYXRlZ29yw61hOiAnICsgY2FudFNpbkNhdFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEV4cG9ydGFkb3JlcyA9IG5ldyBDaGFydChjYW52Q2F0ZWdvcmlhLCB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAodG9vbHRpcEl0ZW0sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWydkYXRhc2V0cyddWzBdWydkYXRhJ11bdG9vbHRpcEl0ZW1bJ2luZGV4J11dO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vVGlwb3MgZGUgcmVzaWR1b1xuXG4gICAgdmFyIGNhbnZyZXNpZHVvcyA9ICQoJyNjaGFydFJlc2lkdW9zJyk7XG4gICAgdmFyIHJlc2lkdW9zU29saWRvcyA9IHBhcnNlSW50KCQoXCIjcmVzaWR1b3NTb2xpZG9zXCIpLnZhbCgpKTtcbiAgICB2YXIgcmVzaWR1b3NMaXF1aWRvcyA9IHBhcnNlSW50KCQoXCIjcmVzaWR1b3NMaXF1aWRvc1wiKS52YWwoKSk7XG4gICAgdmFyIHJlc2lkdW9zU2VtaXNvbGlkb3MgPSBwYXJzZUludCgkKFwiI3Jlc2lkdW9zU2VtaXNvbGlkb3NcIikudmFsKCkpO1xuICAgIFxuICAgIHZhciBtYXggPSBNYXRoLm1heCguLi5bcmVzaWR1b3NTb2xpZG9zLCByZXNpZHVvc1NlbWlzb2xpZG9zLCByZXNpZHVvc0xpcXVpZG9zXSk7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMl0sIGNvbG9yc1sxXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW3Jlc2lkdW9zU29saWRvcywgcmVzaWR1b3NTZW1pc29saWRvcywgcmVzaWR1b3NMaXF1aWRvc11cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgIC8vIFRoZXNlIGxhYmVscyBhcHBlYXIgaW4gdGhlIGxlZ2VuZCBhbmQgaW4gdGhlIHRvb2x0aXBzIHdoZW4gaG92ZXJpbmcgZGlmZmVyZW50IGFyY3NcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnU8OzbGlkb3M6ICcgKyByZXNpZHVvc1NvbGlkb3MsXG4gICAgICAgICAgICAnU2VtaXPDs2xpZG9zOiAnICsgcmVzaWR1b3NTZW1pc29saWRvcyxcbiAgICAgICAgICAgICdMw61xdWlkb3M6ICcgKyByZXNpZHVvc0xpcXVpZG9zLFxuICAgICAgICBdLFxuXG4gICAgfTtcblxuICAgIHZhciBjaGFydEV4cG9ydGFkb3JlcyA9IG5ldyBDaGFydChjYW52cmVzaWR1b3MsIHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4ICsgTWF0aC5yb3VuZCgobWF4KjEwKS8xMDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==