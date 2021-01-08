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
  //Habilitaciones por tipo
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
    type: 'doughnut',
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
      elements: {
        center: {
          text: Number(cantHabilitacionDefinitiva) + Number(cantHabilitacionProvisoria) + Number(cantHabilitacionInicio) + Number(cantDeshabilitados),
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
          text: Number(cantExportadores) + Number(cantNoExportadores),
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
  });
});

/***/ })

},[["./assets/js/dashboard.js","runtime","vendors~app~dashboard~datepicker~grilla_default~image_cropper~lugarForm~select2","vendors~dashboard~grilla_default~image_cropper~lugarForm","vendors~dashboard~image_cropper","vendors~dashboard"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjYW52SGFiaWxpdGFjaW9uVGlwbyIsImNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhIiwidmFsIiwiY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEiLCJjYW50SGFiaWxpdGFjaW9uSW5pY2lvIiwiY2FudERlc2hhYmlsaXRhZG9zIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJsYWJlbHMiLCJjaGFydEhhYmlsaXRhY2lvblRpcG8iLCJ0eXBlIiwibGVnZW5kIiwicG9zaXRpb24iLCJwYWRkaW5nIiwicG9pbnRTdHlsZSIsInVzZVBvaW50U3R5bGUiLCJOdW1iZXIiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwidG9vbHRpcEl0ZW0iLCJjYW52RXhwb3J0YW4iLCJjYW50RXhwb3J0YWRvcmVzIiwiY2FudE5vRXhwb3J0YWRvcmVzIiwiY2hhcnRFeHBvcnRhZG9yZXMiLCJjdXRvdXRQZXJjZW50YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0E7QUFFQUMsd0VBQUssQ0FBQ0MsYUFBTixDQUFvQkMsUUFBcEIsQ0FBNkI7QUFDekJDLFlBQVUsRUFBRSxvQkFBVUMsS0FBVixFQUFpQjtBQUN6QixRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQWxDLEVBQTBDO0FBQ3RDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHTCxLQUFLLENBQUNBLEtBQU4sQ0FBWUssR0FBdEIsQ0FGc0MsQ0FJdEM7O0FBQ0EsVUFBSUMsWUFBWSxHQUFHTixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQWpEO0FBQ0EsVUFBSUcsU0FBUyxHQUFHRCxZQUFZLENBQUNDLFNBQWIsSUFBMEIsT0FBMUM7QUFDQSxVQUFJQyxHQUFHLEdBQUdGLFlBQVksQ0FBQ0csSUFBdkI7QUFDQSxVQUFJQyxLQUFLLEdBQUdKLFlBQVksQ0FBQ0ksS0FBYixJQUFzQixNQUFsQztBQUNBLFVBQUlDLFdBQVcsR0FBR0wsWUFBWSxDQUFDSyxXQUFiLElBQTRCLEVBQTlDO0FBQ0EsVUFBSUMsV0FBVyxHQUFHTixZ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QUVMZCxZQUFNLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRSxRQUROO0FBRUpDLGVBQU8sRUFBRSxDQUZMO0FBR0pMLGNBQU0sRUFDRTtBQUNJTSxvQkFBVSxFQUFFLFFBRGhCO0FBRUlDLHVCQUFhLEVBQUU7QUFGbkI7QUFKSixPQUZIO0FBV0xyRSxjQUFRLEVBQUU7QUFDTkMsY0FBTSxFQUFFO0FBQ0pLLGNBQUksRUFBRWdFLE1BQU0sQ0FBQ00sZ0JBQUQsQ0FBTixHQUEyQk4sTUFBTSxDQUFDTyxrQkFBRCxDQURuQztBQUVKdEUsZUFBSyxFQUFFLFNBRkg7QUFFYztBQUNsQkgsbUJBQVMsRUFBRSxXQUhQO0FBR29CO0FBQ3hCSyxxQkFBVyxFQUFFLEVBSlQ7QUFJYTtBQUNqQmUscUJBQVcsRUFBRSxFQUxUO0FBS2E7QUFDakJDLG9CQUFVLEVBQUUsRUFOUixDQU1XOztBQU5YO0FBREYsT0FYTDtBQXFCTDhDLGNBQVEsRUFBRTtBQUNOQyxpQkFBUyxFQUFFO0FBQ1BDLGVBQUssRUFBRSxlQUFVQyxXQUFWLEVBQXVCaEIsSUFBdkIsRUFBNkI7QUFDaEMsbUJBQU9BLElBQUksQ0FBQyxVQUFELENBQUosQ0FBaUIsQ0FBakIsRUFBb0IsTUFBcEIsRUFBNEJnQixXQUFXLENBQUMsT0FBRCxDQUF2QyxDQUFQO0FBQ0g7QUFITTtBQURMO0FBckJMO0FBSG1DLEdBQXhCLENBQXhCO0FBbUNILENBbEhELEUiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvZGFzaGJvYXJkLnNjc3MnO1xuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2Rpc3QvQ2hhcnQuYnVuZGxlLm1pbi5qcyc7XG5cbkNoYXJ0LnBsdWdpblNlcnZpY2UucmVnaXN0ZXIoe1xuICAgIGJlZm9yZURyYXc6IGZ1bmN0aW9uIChjaGFydCkge1xuICAgICAgICBpZiAoY2hhcnQuY29uZmlnLm9wdGlvbnMuZWxlbWVudHMuY2VudGVyKSB7XG4gICAgICAgICAgICAvLyBHZXQgY3R4IGZyb20gc3RyaW5nXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2hhcnQuY2hhcnQuY3R4O1xuXG4gICAgICAgICAgICAvLyBHZXQgb3B0aW9ucyBmcm9tIHRoZSBjZW50ZXIgb2JqZWN0IGluIG9wdGlvbnNcbiAgICAgICAgICAgIHZhciBjZW50ZXJDb25maWcgPSBjaGFydC5jb25maWcub3B0aW9ucy5lbGVtZW50cy5jZW50ZXI7XG4gICAgICAgICAgICB2YXIgZm9udFN0eWxlID0gY2VudGVyQ29uZmlnLmZvbnRTdHlsZSB8fCAnQXJpYWwnO1xuICAgICAgICAgICAgdmFyIHR4dCA9IGNlbnRlckNvbmZpZy50ZXh0O1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gY2VudGVyQ29uZmlnLmNvbG9yIHx8ICcjMDAwJztcbiAgICAgICAgICAgIHZhciBtYXhGb250U2l6ZSA9IGNlbnRlckNvbmZpZy5tYXhGb250U2l6ZSB8fCA3NTtcbiAgICAgICAgICAgIHZhciBzaWRlUGFkZGluZyA9IGNlbnRlckNvbmZpZy5zaWRlUGFkZGluZyB8fCAyMDtcbiAgICAgICAgICAgIHZhciBzaWRlUGFkZGluZ0NhbGN1bGF0ZWQgPSAoc2lkZVBhZGRpbmcgLyAxMDApICogKGNoYXJ0LmlubmVyUmFkaXVzICogMilcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBiYXNlIGZvbnQgb2YgMzBweFxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggXCIgKyBmb250U3R5bGU7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIHN0cmluZyBhbmQgYWxzbyB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQgbWludXMgMTAgdG8gZ2l2ZSBpdCA1cHggc2lkZSBwYWRkaW5nXG4gICAgICAgICAgICB2YXIgc3RyaW5nV2lkdGggPSBjdHgubWVhc3VyZVRleHQodHh0KS53aWR0aDtcbiAgICAgICAgICAgIHZhciBlbGVtZW50V2lkdGggPSAoY2hhcnQuaW5uZXJSYWRpdXMgKiAyKSAtIHNpZGVQYWRkaW5nQ2FsY3VsYXRlZDtcblxuICAgICAgICAgICAgLy8gRmluZCBvdXQgaG93IG11Y2ggdGhlIGZvbnQgY2FuIGdyb3cgaW4gd2lkdGguXG4gICAgICAgICAgICB2YXIgd2lkdGhSYXRpbyA9IGVsZW1lbnRXaWR0aCAvIHN0cmluZ1dpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld0ZvbnRTaXplID0gTWF0aC5mbG9vcigzMCAqIHdpZHRoUmF0aW8pO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSAoY2hhcnQuaW5uZXJSYWRpdXMgKiAyKTtcblxuICAgICAgICAgICAgLy8gUGljayBhIG5ldyBmb250IHNpemUgc28gaXQgd2lsbCBub3QgYmUgbGFyZ2VyIHRoYW4gdGhlIGhlaWdodCBvZiBsYWJlbC5cbiAgICAgICAgICAgIHZhciBmb250U2l6ZVRvVXNlID0gTWF0aC5taW4obmV3Rm9udFNpemUsIGVsZW1lbnRIZWlnaHQsIG1heEZvbnRTaXplKTtcbiAgICAgICAgICAgIHZhciBtaW5Gb250U2l6ZSA9IGNlbnRlckNvbmZpZy5taW5Gb250U2l6ZTtcbiAgICAgICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gY2VudGVyQ29uZmlnLmxpbmVIZWlnaHQgfHwgMjU7XG4gICAgICAgICAgICB2YXIgd3JhcFRleHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG1pbkZvbnRTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtaW5Gb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWluRm9udFNpemUgJiYgZm9udFNpemVUb1VzZSA8IG1pbkZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgZm9udFNpemVUb1VzZSA9IG1pbkZvbnRTaXplO1xuICAgICAgICAgICAgICAgIHdyYXBUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGZvbnQgc2V0dGluZ3MgdG8gZHJhdyBpdCBjb3JyZWN0bHkuXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgICAgICB2YXIgY2VudGVyWCA9ICgoY2hhcnQuY2hhcnRBcmVhLmxlZnQgKyBjaGFydC5jaGFydEFyZWEucmlnaHQpIC8gMik7XG4gICAgICAgICAgICB2YXIgY2VudGVyWSA9ICgoY2hhcnQuY2hhcnRBcmVhLnRvcCArIGNoYXJ0LmNoYXJ0QXJlYS5ib3R0b20pIC8gMik7XG4gICAgICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplVG9Vc2UgKyBcInB4IFwiICsgZm9udFN0eWxlO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuXG4gICAgICAgICAgICBpZiAoIXdyYXBUZXh0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHR4dCwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgd29yZHMgPSB0eHQuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBsaW5lID0gJyc7XG4gICAgICAgICAgICB2YXIgbGluZXMgPSBbXTtcblxuICAgICAgICAgICAgLy8gQnJlYWsgd29yZHMgdXAgaW50byBtdWx0aXBsZSBsaW5lcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgd29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnICc7XG4gICAgICAgICAgICAgICAgdmFyIG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQodGVzdExpbmUpO1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0V2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0V2lkdGggPiBlbGVtZW50V2lkdGggJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IHdvcmRzW25dICsgJyAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGNlbnRlciB1cCBkZXBlbmRpbmcgb24gbGluZSBoZWlnaHQgYW5kIG51bWJlciBvZiBsaW5lc1xuICAgICAgICAgICAgY2VudGVyWSAtPSAobGluZXMubGVuZ3RoIC8gMikgKiBsaW5lSGVpZ2h0O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGxpbmVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmVzW25dLCBjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgICAgICAgICBjZW50ZXJZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0RyYXcgdGV4dCBpbiBjZW50ZXJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCBjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG52YXIgY29sb3JzID0gWycjMDI3NWQ4JywgJyM1Y2I4NWMnLCAnI2YwYWQ0ZScsICcjZDk1MzRmJ107XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIFxuICAgICAgLy9IYWJpbGl0YWNpb25lcyBwb3IgdGlwb1xuICAgIHZhciBjYW52SGFiaWxpdGFjaW9uVGlwbyA9ICQoJyNjaGFydEhhYmlsaXRhY2lvblRpcG9zJyk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhID0gJChcIiNjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YVwiKS52YWwoKTtcbiAgICB2YXIgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEgPSAkKFwiI2NhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhXCIpLnZhbCgpO1xuICAgIHZhciBjYW50SGFiaWxpdGFjaW9uSW5pY2lvID0gJChcIiNjYW50SGFiaWxpdGFjaW9uSW5pY2lvXCIpLnZhbCgpO1xuICAgIHZhciBjYW50RGVzaGFiaWxpdGFkb3MgPSAkKFwiI2NhbnREZXNoYWJpbGl0YWRvc1wiKS52YWwoKTtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtjb2xvcnNbMF0sIGNvbG9yc1sxXSwgY29sb3JzWzJdLGNvbG9yc1szXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW2NhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhLCBjYW50SGFiaWxpdGFjaW9uUHJvdmlzb3JpYSwgY2FudEhhYmlsaXRhY2lvbkluaWNpbyxjYW50RGVzaGFiaWxpdGFkb3NdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ0RlZmluaXRpdmE6ICcgKyBjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSxcbiAgICAgICAgICAgICdQcm92aXNvcmlhOiAnICsgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEsXG4gICAgICAgICAgICAnSW5pY2lvIGRlIHRyYW1pdGU6ICcgKyBjYW50SGFiaWxpdGFjaW9uSW5pY2lvLFxuICAgICAgICAgICAgJ1NpbiBoYWJpbGl0YWNpw7NuOiAnICsgY2FudERlc2hhYmlsaXRhZG9zLFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEhhYmlsaXRhY2lvblRpcG8gPSBuZXcgQ2hhcnQoY2FudkhhYmlsaXRhY2lvblRpcG8sIHtcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBOdW1iZXIoY2FudEhhYmlsaXRhY2lvbkRlZmluaXRpdmEpICsgTnVtYmVyKGNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhKSArICBOdW1iZXIoY2FudEhhYmlsaXRhY2lvbkluaWNpbykgKyBOdW1iZXIoY2FudERlc2hhYmlsaXRhZG9zKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJywgLy8gRGVmYXVsdCBpcyAjMDAwMDAwXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ0hlbHZldGljYScsIC8vIERlZmF1bHQgaXMgQXJpYWxcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhZGRpbmc6IDMwLCAvLyBEZWZhdWx0IGlzIDIwIChhcyBhIHBlcmNlbnRhZ2UpXG4gICAgICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAxMCwgLy8gRGVmYXVsdCBpcyAyMCAoaW4gcHgpLCBzZXQgdG8gZmFsc2UgYW5kIHRleHQgd2lsbCBub3Qgd3JhcC5cbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUgLy8gRGVmYXVsdCBpcyAyNSAoaW4gcHgpLCB1c2VkIGZvciB3aGVuIHRleHQgd3JhcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIC8vTHVnYXJlcyBxdWUgZXhwb3J0YW5cblxuICAgIHZhciBjYW52RXhwb3J0YW4gPSAkKCcjY2hhcnRMdWdhcmVzRXhwb3J0YWRvcmVzJyk7XG4gICAgdmFyIGNhbnRFeHBvcnRhZG9yZXMgPSAkKFwiI2NhbnRMdWdhcmVzRXhwb3J0YWRvcmVzXCIpLnZhbCgpO1xuICAgIHZhciBjYW50Tm9FeHBvcnRhZG9yZXMgPSAkKFwiI2NhbnRMdWdhcmVzTm9FeHBvcnRhZG9yZXNcIikudmFsKCk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMl1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtjYW50RXhwb3J0YWRvcmVzLCBjYW50Tm9FeHBvcnRhZG9yZXNdXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ1NpOiAnICsgY2FudEV4cG9ydGFkb3JlcyxcbiAgICAgICAgICAgICdObzogJyArIGNhbnROb0V4cG9ydGFkb3JlcyxcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRFeHBvcnRhZG9yZXMgPSBuZXcgQ2hhcnQoY2FudkV4cG9ydGFuLCB7XG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDUwLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBOdW1iZXIoY2FudEV4cG9ydGFkb3JlcykgKyBOdW1iZXIoY2FudE5vRXhwb3J0YWRvcmVzKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJywgLy8gRGVmYXVsdCBpcyAjMDAwMDAwXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ0hlbHZldGljYScsIC8vIERlZmF1bHQgaXMgQXJpYWxcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhZGRpbmc6IDMwLCAvLyBEZWZhdWx0IGlzIDIwIChhcyBhIHBlcmNlbnRhZ2UpXG4gICAgICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAxMCwgLy8gRGVmYXVsdCBpcyAyMCAoaW4gcHgpLCBzZXQgdG8gZmFsc2UgYW5kIHRleHQgd2lsbCBub3Qgd3JhcC5cbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUgLy8gRGVmYXVsdCBpcyAyNSAoaW4gcHgpLCB1c2VkIGZvciB3aGVuIHRleHQgd3JhcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gIFxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==