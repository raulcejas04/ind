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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_dashboard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/dashboard.scss */ "./assets/css/dashboard.scss");
/* harmony import */ var _css_dashboard_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_dashboard_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js/dist/Chart.bundle.min.js */ "./node_modules/chart.js/dist/Chart.bundle.min.js");
/* harmony import */ var chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4__);





var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.pluginService.register({
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
  var chartHabilitacionTipo = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(canvHabilitacionTipo, {
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
  var chartExportadores = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(canvExportan, {
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
  var chartExportadores = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(canvCategoria, {
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
  });
});

/***/ })

},[["./assets/js/dashboard.js","runtime","vendors~app~dashboard~datepicker~grilla_default~image_cropper~lugarForm~select2","vendors~dashboard~grilla_default~image_cropper~lugarForm","vendors~dashboard~image_cropper","vendors~dashboard"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjYW50THVnYXJlcyIsInZhbCIsImNhbnZIYWJpbGl0YWNpb25UaXBvIiwiY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEiLCJjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYSIsImNhbnRIYWJpbGl0YWNpb25JbmljaW8iLCJjYW50RGVzaGFiaWxpdGFkb3MiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImxhYmVscyIsImNoYXJ0SGFiaWxpdGFjaW9uVGlwbyIsInR5cGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInBhZGRpbmciLCJwb2ludFN0eWxlIiwidXNlUG9pbnRTdHlsZSIsInRvb2x0aXBzIiwiY2FsbGJhY2tzIiwibGFiZWwiLCJ0b29sdGlwSXRlbSIsImNhbnZFeHBvcnRhbiIsImNhbnRFeHBvcnRhZG9yZXMiLCJjYW50Tm9FeHBvcnRhZG9yZXMiLCJjaGFydEV4cG9ydGFkb3JlcyIsImN1dG91dFBlcmNlbnRhZ2UiLCJOdW1iZXIiLCJjYW52Q2F0ZWdvcmlhIiwiY2FudFNpbkNhdCIsImNhbnRDYXQxIiwiY2FudENhdDIiLCJjYW50Q2F0MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBRUFDLHdFQUFLLENBQUNDLGFBQU4sQ0FBb0JDLFFBQXBCLENBQTZCO0FBQ3pCQyxZQUFVLEVBQUUsb0JBQVVDLEtBQVYsRUFBaUI7QUFDekIsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxNQUFsQyxFQUEwQztBQUN0QztBQUNBLFVBQUlDLEdBQUcsR0FBR0wsS0FBSyxDQUFDQSxLQUFOLENBQVlLLEdBQXRCLENBRnNDLENBSXRDOztBQUNBLFVBQUlDLFlBQVksR0FBR04sS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxNQUFqRDtBQUNBLFVBQUlHLFNBQVMsR0FBR0QsWUFBWSxDQUFDQyxTQUFiLElBQTBCLE9BQTFDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHRixZQUFZLENBQUNHLElBQXZCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHSixZQUFZLENBQUNJLEtBQWIsSUFBc0IsTUFB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QUksRUFBRSxDQUFDd0IsUUFBRCxFQUFXQyxRQUFYLEVBQXFCQyxRQUFyQixFQUErQkgsVUFBL0I7QUFISCxLQUFELENBREg7QUFPUDtBQUNBbkIsVUFBTSxFQUFFLENBQ0osa0JBQWtCb0IsUUFEZCxFQUVKLGtCQUFrQkMsUUFGZCxFQUdKLGtCQUFrQkMsUUFIZCxFQUlKLG9CQUFvQkgsVUFKaEI7QUFSRCxHQUFYO0FBZ0JBLE1BQUlKLGlCQUFpQixHQUFHLElBQUlyRix3RUFBSixDQUFVd0YsYUFBVixFQUF5QjtBQUM3Q2hCLFFBQUksRUFBRSxLQUR1QztBQUU3Q04sUUFBSSxFQUFFQSxJQUZ1QztBQUc3QzVELFdBQU8sRUFBRTtBQUNMbUUsWUFBTSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUUsUUFETjtBQUVKQyxlQUFPLEVBQUUsQ0FGTDtBQUdKTCxjQUFNLEVBQ0U7QUFDSU0sb0JBQVUsRUFBRSxRQURoQjtBQUVJQyx1QkFBYSxFQUFFO0FBRm5CO0FBSkosT0FESDtBQVVMQyxjQUFRLEVBQUU7QUFDTkMsaUJBQVMsRUFBRTtBQUNQQyxlQUFLLEVBQUUsZUFBVUMsV0FBVixFQUF1QmYsSUFBdkIsRUFBNkI7QUFDaEMsbUJBQU9BLElBQUksQ0FBQyxVQUFELENBQUosQ0FBaUIsQ0FBakIsRUFBb0IsTUFBcEIsRUFBNEJlLFdBQVcsQ0FBQyxPQUFELENBQXZDLENBQVA7QUFDSDtBQUhNO0FBREw7QUFWTDtBQUhvQyxHQUF6QixDQUF4QjtBQXVCSCxDQXZKRCxFIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2Rhc2hib2FyZC5zY3NzJztcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9kaXN0L0NoYXJ0LmJ1bmRsZS5taW4uanMnO1xuXG5DaGFydC5wbHVnaW5TZXJ2aWNlLnJlZ2lzdGVyKHtcbiAgICBiZWZvcmVEcmF3OiBmdW5jdGlvbiAoY2hhcnQpIHtcbiAgICAgICAgaWYgKGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcikge1xuICAgICAgICAgICAgLy8gR2V0IGN0eCBmcm9tIHN0cmluZ1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNoYXJ0LmNoYXJ0LmN0eDtcblxuICAgICAgICAgICAgLy8gR2V0IG9wdGlvbnMgZnJvbSB0aGUgY2VudGVyIG9iamVjdCBpbiBvcHRpb25zXG4gICAgICAgICAgICB2YXIgY2VudGVyQ29uZmlnID0gY2hhcnQuY29uZmlnLm9wdGlvbnMuZWxlbWVudHMuY2VudGVyO1xuICAgICAgICAgICAgdmFyIGZvbnRTdHlsZSA9IGNlbnRlckNvbmZpZy5mb250U3R5bGUgfHwgJ0FyaWFsJztcbiAgICAgICAgICAgIHZhciB0eHQgPSBjZW50ZXJDb25maWcudGV4dDtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGNlbnRlckNvbmZpZy5jb2xvciB8fCAnIzAwMCc7XG4gICAgICAgICAgICB2YXIgbWF4Rm9udFNpemUgPSBjZW50ZXJDb25maWcubWF4Rm9udFNpemUgfHwgNzU7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmcgPSBjZW50ZXJDb25maWcuc2lkZVBhZGRpbmcgfHwgMjA7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmdDYWxjdWxhdGVkID0gKHNpZGVQYWRkaW5nIC8gMTAwKSAqIChjaGFydC5pbm5lclJhZGl1cyAqIDIpXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgYmFzZSBmb250IG9mIDMwcHhcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IFwiICsgZm9udFN0eWxlO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzdHJpbmcgYW5kIGFsc28gdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50IG1pbnVzIDEwIHRvIGdpdmUgaXQgNXB4IHNpZGUgcGFkZGluZ1xuICAgICAgICAgICAgdmFyIHN0cmluZ1dpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGg7XG4gICAgICAgICAgICB2YXIgZWxlbWVudFdpZHRoID0gKGNoYXJ0LmlubmVyUmFkaXVzICogMikgLSBzaWRlUGFkZGluZ0NhbGN1bGF0ZWQ7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgb3V0IGhvdyBtdWNoIHRoZSBmb250IGNhbiBncm93IGluIHdpZHRoLlxuICAgICAgICAgICAgdmFyIHdpZHRoUmF0aW8gPSBlbGVtZW50V2lkdGggLyBzdHJpbmdXaWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdGb250U2l6ZSA9IE1hdGguZmxvb3IoMzAgKiB3aWR0aFJhdGlvKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gKGNoYXJ0LmlubmVyUmFkaXVzICogMik7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSBuZXcgZm9udCBzaXplIHNvIGl0IHdpbGwgbm90IGJlIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgb2YgbGFiZWwuXG4gICAgICAgICAgICB2YXIgZm9udFNpemVUb1VzZSA9IE1hdGgubWluKG5ld0ZvbnRTaXplLCBlbGVtZW50SGVpZ2h0LCBtYXhGb250U2l6ZSk7XG4gICAgICAgICAgICB2YXIgbWluRm9udFNpemUgPSBjZW50ZXJDb25maWcubWluRm9udFNpemU7XG4gICAgICAgICAgICB2YXIgbGluZUhlaWdodCA9IGNlbnRlckNvbmZpZy5saW5lSGVpZ2h0IHx8IDI1O1xuICAgICAgICAgICAgdmFyIHdyYXBUZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChtaW5Gb250U2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWluRm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1pbkZvbnRTaXplICYmIGZvbnRTaXplVG9Vc2UgPCBtaW5Gb250U2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplVG9Vc2UgPSBtaW5Gb250U2l6ZTtcbiAgICAgICAgICAgICAgICB3cmFwVGV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBmb250IHNldHRpbmdzIHRvIGRyYXcgaXQgY29ycmVjdGx5LlxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAgICAgdmFyIGNlbnRlclggPSAoKGNoYXJ0LmNoYXJ0QXJlYS5sZWZ0ICsgY2hhcnQuY2hhcnRBcmVhLnJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgdmFyIGNlbnRlclkgPSAoKGNoYXJ0LmNoYXJ0QXJlYS50b3AgKyBjaGFydC5jaGFydEFyZWEuYm90dG9tKSAvIDIpO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZVRvVXNlICsgXCJweCBcIiArIGZvbnRTdHlsZTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgICAgICAgICAgaWYgKCF3cmFwVGV4dCkge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0eHQsIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdvcmRzID0gdHh0LnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gW107XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIHdvcmRzIHVwIGludG8gbXVsdGlwbGUgbGluZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdvcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyAnO1xuICAgICAgICAgICAgICAgIHZhciBtZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAodGVzdFdpZHRoID4gZWxlbWVudFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gdGVzdExpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBjZW50ZXIgdXAgZGVwZW5kaW5nIG9uIGxpbmUgaGVpZ2h0IGFuZCBudW1iZXIgb2YgbGluZXNcbiAgICAgICAgICAgIGNlbnRlclkgLT0gKGxpbmVzLmxlbmd0aCAvIDIpICogbGluZUhlaWdodDtcblxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBsaW5lcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChsaW5lc1tuXSwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICAgICAgY2VudGVyWSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9EcmF3IHRleHQgaW4gY2VudGVyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQobGluZSwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIGNvbG9ycyA9IFsnIzAyNzVkOCcsICcjNWNiODVjJywgJyNmMGFkNGUnLCAnI2Q5NTM0ZiddO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FudEx1Z2FyZXMgPSAkKFwiI2NhbnRMdWdhcmVzXCIpLnZhbCgpO1xuICAgIC8vSGFiaWxpdGFjaW9uZXMgcG9yIHRpcG9cbiAgICB2YXIgY2FudkhhYmlsaXRhY2lvblRpcG8gPSAkKCcjY2hhcnRIYWJpbGl0YWNpb25UaXBvcycpO1xuICAgIHZhciBjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSA9ICQoXCIjY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmFcIikudmFsKCk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhID0gJChcIiNjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYVwiKS52YWwoKTtcbiAgICB2YXIgY2FudEhhYmlsaXRhY2lvbkluaWNpbyA9ICQoXCIjY2FudEhhYmlsaXRhY2lvbkluaWNpb1wiKS52YWwoKTtcbiAgICB2YXIgY2FudERlc2hhYmlsaXRhZG9zID0gJChcIiNjYW50RGVzaGFiaWxpdGFkb3NcIikudmFsKCk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMV0sIGNvbG9yc1syXSwgY29sb3JzWzNdXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEsIGNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhLCBjYW50SGFiaWxpdGFjaW9uSW5pY2lvLCBjYW50RGVzaGFiaWxpdGFkb3NdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ0RlZmluaXRpdmE6ICcgKyBjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSxcbiAgICAgICAgICAgICdQcm92aXNvcmlhOiAnICsgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEsXG4gICAgICAgICAgICAnSW5pY2lvIGRlIHRyYW1pdGU6ICcgKyBjYW50SGFiaWxpdGFjaW9uSW5pY2lvLFxuICAgICAgICAgICAgJ1NpbiBoYWJpbGl0YWNpw7NuOiAnICsgY2FudERlc2hhYmlsaXRhZG9zLFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEhhYmlsaXRhY2lvblRpcG8gPSBuZXcgQ2hhcnQoY2FudkhhYmlsaXRhY2lvblRpcG8sIHtcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvL0x1Z2FyZXMgcXVlIGV4cG9ydGFuXG5cbiAgICB2YXIgY2FudkV4cG9ydGFuID0gJCgnI2NoYXJ0THVnYXJlc0V4cG9ydGFkb3JlcycpO1xuICAgIHZhciBjYW50RXhwb3J0YWRvcmVzID0gJChcIiNjYW50THVnYXJlc0V4cG9ydGFkb3Jlc1wiKS52YWwoKTtcbiAgICB2YXIgY2FudE5vRXhwb3J0YWRvcmVzID0gJChcIiNjYW50THVnYXJlc05vRXhwb3J0YWRvcmVzXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzJdXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbY2FudEV4cG9ydGFkb3JlcywgY2FudE5vRXhwb3J0YWRvcmVzXVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdTaTogJyArIGNhbnRFeHBvcnRhZG9yZXMsXG4gICAgICAgICAgICAnTm86ICcgKyBjYW50Tm9FeHBvcnRhZG9yZXMsXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGNoYXJ0RXhwb3J0YWRvcmVzID0gbmV3IENoYXJ0KGNhbnZFeHBvcnRhbiwge1xuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA1MCxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogTnVtYmVyKGNhbnRMdWdhcmVzKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJywgLy8gRGVmYXVsdCBpcyAjMDAwMDAwXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ0hlbHZldGljYScsIC8vIERlZmF1bHQgaXMgQXJpYWxcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhZGRpbmc6IDMwLCAvLyBEZWZhdWx0IGlzIDIwIChhcyBhIHBlcmNlbnRhZ2UpXG4gICAgICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAxMCwgLy8gRGVmYXVsdCBpcyAyMCAoaW4gcHgpLCBzZXQgdG8gZmFsc2UgYW5kIHRleHQgd2lsbCBub3Qgd3JhcC5cbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUgLy8gRGVmYXVsdCBpcyAyNSAoaW4gcHgpLCB1c2VkIGZvciB3aGVuIHRleHQgd3JhcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvL0x1Z2FyZXMgcG9yIGNhdGVnb3LDrWFcblxuICAgIHZhciBjYW52Q2F0ZWdvcmlhID0gJCgnI2NoYXJ0Q2F0ZWdvcmlhcycpO1xuICAgIHZhciBjYW50U2luQ2F0ID0gJChcIiNjYW50U2luQ2F0XCIpLnZhbCgpO1xuICAgIHZhciBjYW50Q2F0MSA9ICQoXCIjY2FudENhdDFcIikudmFsKCk7XG4gICAgdmFyIGNhbnRDYXQyID0gJChcIiNjYW50Q2F0MlwiKS52YWwoKTtcbiAgICB2YXIgY2FudENhdDMgPSAkKFwiI2NhbnRDYXQzXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzJdLCBjb2xvcnNbMV0sIGNvbG9yc1szXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW2NhbnRDYXQxLCBjYW50Q2F0MiwgY2FudENhdDMsIGNhbnRTaW5DYXRdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ0NhdGVnb3LDrWEgMTogJyArIGNhbnRDYXQxLFxuICAgICAgICAgICAgJ0NhdGVnb3LDrWEgMjogJyArIGNhbnRDYXQyLFxuICAgICAgICAgICAgJ0NhdGVnb3LDrWEgMzogJyArIGNhbnRDYXQzLFxuICAgICAgICAgICAgJ1NpbiBjYXRlZ29yw61hOiAnICsgY2FudFNpbkNhdFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEV4cG9ydGFkb3JlcyA9IG5ldyBDaGFydChjYW52Q2F0ZWdvcmlhLCB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAodG9vbHRpcEl0ZW0sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWydkYXRhc2V0cyddWzBdWydkYXRhJ11bdG9vbHRpcEl0ZW1bJ2luZGV4J11dO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9KTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==