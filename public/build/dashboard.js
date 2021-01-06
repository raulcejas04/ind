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
  //Lugares habilitados
  var canvHabilitaciones = $('#chartHabilitaciones');
  var cantHabilitados = $("#cantHabilitados").val();
  var cantDeshabilitados = $("#cantDeshabilitados").val();
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[2]],
      borderWidth: 0,
      data: [cantHabilitados, cantDeshabilitados]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Habilitados: ' + cantHabilitados, 'No habilitados: ' + cantDeshabilitados]
  };
  var chartHabilitaciones = new chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(canvHabilitaciones, {
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
          text: Number(cantHabilitados) + Number(cantDeshabilitados),
          color: '#000000',
          // Default is #000000
          fontStyle: 'Helvetica',
          // Default is Arial
          sidePadding: 20,
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
          text: Number(cantHabilitados) + Number(cantDeshabilitados),
          color: '#000000',
          // Default is #000000
          fontStyle: 'Helvetica',
          // Default is Arial
          sidePadding: 20,
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
  }); //Habilitaciones por tipo

  var canvHabilitacionTipo = $('#chartHabilitacionTipos');
  var cantHabilitacionDefinitiva = $("#cantHabilitacionDefinitiva").val();
  var cantHabilitacionProvisoria = $("#cantHabilitacionProvisoria").val();
  var cantHabilitacionInicio = $("#cantHabilitacionInicio").val();
  var data = {
    datasets: [{
      backgroundColor: [colors[0], colors[1], colors[2]],
      borderWidth: 0,
      data: [cantHabilitacionDefinitiva, cantHabilitacionProvisoria, cantHabilitacionInicio]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Definitiva: ' + cantHabilitacionDefinitiva, 'Provisoria: ' + cantHabilitacionProvisoria, 'Inicio de tramite: ' + cantHabilitacionInicio]
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
          text: Number(cantHabilitados) + Number(cantDeshabilitados),
          color: '#000000',
          // Default is #000000
          fontStyle: 'Helvetica',
          // Default is Arial
          sidePadding: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjYW52SGFiaWxpdGFjaW9uZXMiLCJjYW50SGFiaWxpdGFkb3MiLCJ2YWwiLCJjYW50RGVzaGFiaWxpdGFkb3MiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImxhYmVscyIsImNoYXJ0SGFiaWxpdGFjaW9uZXMiLCJ0eXBlIiwiY3V0b3V0UGVyY2VudGFnZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwicGFkZGluZyIsInBvaW50U3R5bGUiLCJ1c2VQb2ludFN0eWxlIiwiTnVtYmVyIiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJsYWJlbCIsInRvb2x0aXBJdGVtIiwiY2FudkV4cG9ydGFuIiwiY2FudEV4cG9ydGFkb3JlcyIsImNhbnROb0V4cG9ydGFkb3JlcyIsImNoYXJ0RXhwb3J0YWRvcmVzIiwiY2FudkhhYmlsaXRhY2lvblRpcG8iLCJjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSIsImNhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhIiwiY2FudEhhYmlsaXRhY2lvbkluaWNpbyIsImNoYXJ0SGFiaWxpdGFjaW9uVGlwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBO0FBRUFDLHdFQUFLLENBQUNDLGFBQU4sQ0FBb0JDLFFBQXBCLENBQTZCO0FBQ3pCQyxZQUFVLEVBQUUsb0JBQVVDLEtBQVYsRUFBaUI7QUFDekIsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxNQUFsQyxFQUEwQztBQUN0QztBQUNBLFVBQUlDLEdBQUcsR0FBR0wsS0FBSyxDQUFDQSxLQUFOLENBQVlLLEdBQXRCLENBRnNDLENBSXRDOztBQUNBLFVBQUlDLFlBQVksR0FBR04sS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxNQUFqRDtBQUNBLFVBQUlHLFNBQVMsR0FBR0QsWUFBWSxDQUFDQyxTQUFiLElBQTBCLE9BQTFDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHRixZQUFZLENBQUNHLElBQXZCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHSixZQUFZLENBQUNJLEtBQWIsSUFBc0IsTUFBbEM7QUFDQSxVQUFJQyxX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Qm1CLDBCQURiLEVBRUosaUJBQWlCQywwQkFGYixFQUdKLHdCQUF3QkMsc0JBSHBCO0FBUkQsR0FBWDtBQWVBLE1BQUlDLHFCQUFxQixHQUFHLElBQUl6Rix3RUFBSixDQUFVcUYsb0JBQVYsRUFBZ0M7QUFDeERoQixRQUFJLEVBQUUsVUFEa0Q7QUFFeEROLFFBQUksRUFBRUEsSUFGa0Q7QUFHeER6RCxXQUFPLEVBQUU7QUFDTGlFLFlBQU0sRUFBRTtBQUNKQyxnQkFBUSxFQUFFLFFBRE47QUFFSkMsZUFBTyxFQUFFLENBRkw7QUFHSk4sY0FBTSxFQUNFO0FBQ0lPLG9CQUFVLEVBQUUsUUFEaEI7QUFFSUMsdUJBQWEsRUFBRTtBQUZuQjtBQUpKLE9BREg7QUFVTHBFLGNBQVEsRUFBRTtBQUNOQyxjQUFNLEVBQUU7QUFDSkssY0FBSSxFQUFFK0QsTUFBTSxDQUFDaEIsZUFBRCxDQUFOLEdBQTBCZ0IsTUFBTSxDQUFDZCxrQkFBRCxDQURsQztBQUVKaEQsZUFBSyxFQUFFLFNBRkg7QUFFYztBQUNsQkgsbUJBQVMsRUFBRSxXQUhQO0FBR29CO0FBQ3hCSyxxQkFBVyxFQUFFLEVBSlQ7QUFJYTtBQUNqQmUscUJBQVcsRUFBRSxFQUxUO0FBS2E7QUFDakJDLG9CQUFVLEVBQUUsRUFOUixDQU1XOztBQU5YO0FBREYsT0FWTDtBQW9CTDZDLGNBQVEsRUFBRTtBQUNOQyxpQkFBUyxFQUFFO0FBQ1BDLGVBQUssRUFBRSxlQUFVQyxXQUFWLEVBQXVCakIsSUFBdkIsRUFBNkI7QUFDaEMsbUJBQU9BLElBQUksQ0FBQyxVQUFELENBQUosQ0FBaUIsQ0FBakIsRUFBb0IsTUFBcEIsRUFBNEJpQixXQUFXLENBQUMsT0FBRCxDQUF2QyxDQUFQO0FBQ0g7QUFITTtBQURMO0FBcEJMO0FBSCtDLEdBQWhDLENBQTVCO0FBZ0NILENBaktELEUiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvZGFzaGJvYXJkLnNjc3MnO1xuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2Rpc3QvQ2hhcnQuYnVuZGxlLm1pbi5qcyc7XG5cbkNoYXJ0LnBsdWdpblNlcnZpY2UucmVnaXN0ZXIoe1xuICAgIGJlZm9yZURyYXc6IGZ1bmN0aW9uIChjaGFydCkge1xuICAgICAgICBpZiAoY2hhcnQuY29uZmlnLm9wdGlvbnMuZWxlbWVudHMuY2VudGVyKSB7XG4gICAgICAgICAgICAvLyBHZXQgY3R4IGZyb20gc3RyaW5nXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2hhcnQuY2hhcnQuY3R4O1xuXG4gICAgICAgICAgICAvLyBHZXQgb3B0aW9ucyBmcm9tIHRoZSBjZW50ZXIgb2JqZWN0IGluIG9wdGlvbnNcbiAgICAgICAgICAgIHZhciBjZW50ZXJDb25maWcgPSBjaGFydC5jb25maWcub3B0aW9ucy5lbGVtZW50cy5jZW50ZXI7XG4gICAgICAgICAgICB2YXIgZm9udFN0eWxlID0gY2VudGVyQ29uZmlnLmZvbnRTdHlsZSB8fCAnQXJpYWwnO1xuICAgICAgICAgICAgdmFyIHR4dCA9IGNlbnRlckNvbmZpZy50ZXh0O1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gY2VudGVyQ29uZmlnLmNvbG9yIHx8ICcjMDAwJztcbiAgICAgICAgICAgIHZhciBtYXhGb250U2l6ZSA9IGNlbnRlckNvbmZpZy5tYXhGb250U2l6ZSB8fCA3NTtcbiAgICAgICAgICAgIHZhciBzaWRlUGFkZGluZyA9IGNlbnRlckNvbmZpZy5zaWRlUGFkZGluZyB8fCAyMDtcbiAgICAgICAgICAgIHZhciBzaWRlUGFkZGluZ0NhbGN1bGF0ZWQgPSAoc2lkZVBhZGRpbmcgLyAxMDApICogKGNoYXJ0LmlubmVyUmFkaXVzICogMilcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBiYXNlIGZvbnQgb2YgMzBweFxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggXCIgKyBmb250U3R5bGU7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIHN0cmluZyBhbmQgYWxzbyB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQgbWludXMgMTAgdG8gZ2l2ZSBpdCA1cHggc2lkZSBwYWRkaW5nXG4gICAgICAgICAgICB2YXIgc3RyaW5nV2lkdGggPSBjdHgubWVhc3VyZVRleHQodHh0KS53aWR0aDtcbiAgICAgICAgICAgIHZhciBlbGVtZW50V2lkdGggPSAoY2hhcnQuaW5uZXJSYWRpdXMgKiAyKSAtIHNpZGVQYWRkaW5nQ2FsY3VsYXRlZDtcblxuICAgICAgICAgICAgLy8gRmluZCBvdXQgaG93IG11Y2ggdGhlIGZvbnQgY2FuIGdyb3cgaW4gd2lkdGguXG4gICAgICAgICAgICB2YXIgd2lkdGhSYXRpbyA9IGVsZW1lbnRXaWR0aCAvIHN0cmluZ1dpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld0ZvbnRTaXplID0gTWF0aC5mbG9vcigzMCAqIHdpZHRoUmF0aW8pO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSAoY2hhcnQuaW5uZXJSYWRpdXMgKiAyKTtcblxuICAgICAgICAgICAgLy8gUGljayBhIG5ldyBmb250IHNpemUgc28gaXQgd2lsbCBub3QgYmUgbGFyZ2VyIHRoYW4gdGhlIGhlaWdodCBvZiBsYWJlbC5cbiAgICAgICAgICAgIHZhciBmb250U2l6ZVRvVXNlID0gTWF0aC5taW4obmV3Rm9udFNpemUsIGVsZW1lbnRIZWlnaHQsIG1heEZvbnRTaXplKTtcbiAgICAgICAgICAgIHZhciBtaW5Gb250U2l6ZSA9IGNlbnRlckNvbmZpZy5taW5Gb250U2l6ZTtcbiAgICAgICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gY2VudGVyQ29uZmlnLmxpbmVIZWlnaHQgfHwgMjU7XG4gICAgICAgICAgICB2YXIgd3JhcFRleHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG1pbkZvbnRTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtaW5Gb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWluRm9udFNpemUgJiYgZm9udFNpemVUb1VzZSA8IG1pbkZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgZm9udFNpemVUb1VzZSA9IG1pbkZvbnRTaXplO1xuICAgICAgICAgICAgICAgIHdyYXBUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGZvbnQgc2V0dGluZ3MgdG8gZHJhdyBpdCBjb3JyZWN0bHkuXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgICAgICB2YXIgY2VudGVyWCA9ICgoY2hhcnQuY2hhcnRBcmVhLmxlZnQgKyBjaGFydC5jaGFydEFyZWEucmlnaHQpIC8gMik7XG4gICAgICAgICAgICB2YXIgY2VudGVyWSA9ICgoY2hhcnQuY2hhcnRBcmVhLnRvcCArIGNoYXJ0LmNoYXJ0QXJlYS5ib3R0b20pIC8gMik7XG4gICAgICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplVG9Vc2UgKyBcInB4IFwiICsgZm9udFN0eWxlO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuXG4gICAgICAgICAgICBpZiAoIXdyYXBUZXh0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHR4dCwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgd29yZHMgPSB0eHQuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBsaW5lID0gJyc7XG4gICAgICAgICAgICB2YXIgbGluZXMgPSBbXTtcblxuICAgICAgICAgICAgLy8gQnJlYWsgd29yZHMgdXAgaW50byBtdWx0aXBsZSBsaW5lcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgd29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnICc7XG4gICAgICAgICAgICAgICAgdmFyIG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQodGVzdExpbmUpO1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0V2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0V2lkdGggPiBlbGVtZW50V2lkdGggJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IHdvcmRzW25dICsgJyAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGNlbnRlciB1cCBkZXBlbmRpbmcgb24gbGluZSBoZWlnaHQgYW5kIG51bWJlciBvZiBsaW5lc1xuICAgICAgICAgICAgY2VudGVyWSAtPSAobGluZXMubGVuZ3RoIC8gMikgKiBsaW5lSGVpZ2h0O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGxpbmVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmVzW25dLCBjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgICAgICAgICBjZW50ZXJZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0RyYXcgdGV4dCBpbiBjZW50ZXJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCBjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG52YXIgY29sb3JzID0gWycjMDI3NWQ4JywgJyM1Y2I4NWMnLCAnI2YwYWQ0ZScsICcjZDk1MzRmJ107XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vTHVnYXJlcyBoYWJpbGl0YWRvc1xuICAgIHZhciBjYW52SGFiaWxpdGFjaW9uZXMgPSAkKCcjY2hhcnRIYWJpbGl0YWNpb25lcycpO1xuICAgIHZhciBjYW50SGFiaWxpdGFkb3MgPSAkKFwiI2NhbnRIYWJpbGl0YWRvc1wiKS52YWwoKTtcbiAgICB2YXIgY2FudERlc2hhYmlsaXRhZG9zID0gJChcIiNjYW50RGVzaGFiaWxpdGFkb3NcIikudmFsKCk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzWzBdLCBjb2xvcnNbMl1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtjYW50SGFiaWxpdGFkb3MsIGNhbnREZXNoYWJpbGl0YWRvc11cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgIC8vIFRoZXNlIGxhYmVscyBhcHBlYXIgaW4gdGhlIGxlZ2VuZCBhbmQgaW4gdGhlIHRvb2x0aXBzIHdoZW4gaG92ZXJpbmcgZGlmZmVyZW50IGFyY3NcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnSGFiaWxpdGFkb3M6ICcgKyBjYW50SGFiaWxpdGFkb3MsXG4gICAgICAgICAgICAnTm8gaGFiaWxpdGFkb3M6ICcgKyBjYW50RGVzaGFiaWxpdGFkb3MsXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGNoYXJ0SGFiaWxpdGFjaW9uZXMgPSBuZXcgQ2hhcnQoY2FudkhhYmlsaXRhY2lvbmVzLCB7XG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDUwLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBOdW1iZXIoY2FudEhhYmlsaXRhZG9zKSArIE51bWJlcihjYW50RGVzaGFiaWxpdGFkb3MpLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLCAvLyBEZWZhdWx0IGlzICMwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnSGVsdmV0aWNhJywgLy8gRGVmYXVsdCBpcyBBcmlhbFxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFkZGluZzogMjAsIC8vIERlZmF1bHQgaXMgMjAgKGFzIGEgcGVyY2VudGFnZSlcbiAgICAgICAgICAgICAgICAgICAgbWluRm9udFNpemU6IDEwLCAvLyBEZWZhdWx0IGlzIDIwIChpbiBweCksIHNldCB0byBmYWxzZSBhbmQgdGV4dCB3aWxsIG5vdCB3cmFwLlxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyNSAvLyBEZWZhdWx0IGlzIDI1IChpbiBweCksIHVzZWQgZm9yIHdoZW4gdGV4dCB3cmFwc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24gKHRvb2x0aXBJdGVtLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsnZGF0YXNldHMnXVswXVsnZGF0YSddW3Rvb2x0aXBJdGVtWydpbmRleCddXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0x1Z2FyZXMgcXVlIGV4cG9ydGFuXG5cbiAgICB2YXIgY2FudkV4cG9ydGFuID0gJCgnI2NoYXJ0THVnYXJlc0V4cG9ydGFkb3JlcycpO1xuICAgIHZhciBjYW50RXhwb3J0YWRvcmVzID0gJChcIiNjYW50THVnYXJlc0V4cG9ydGFkb3Jlc1wiKS52YWwoKTtcbiAgICB2YXIgY2FudE5vRXhwb3J0YWRvcmVzID0gJChcIiNjYW50THVnYXJlc05vRXhwb3J0YWRvcmVzXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzJdXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbY2FudEV4cG9ydGFkb3JlcywgY2FudE5vRXhwb3J0YWRvcmVzXVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdTaTogJyArIGNhbnRFeHBvcnRhZG9yZXMsXG4gICAgICAgICAgICAnTm86ICcgKyBjYW50Tm9FeHBvcnRhZG9yZXMsXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGNoYXJ0RXhwb3J0YWRvcmVzID0gbmV3IENoYXJ0KGNhbnZFeHBvcnRhbiwge1xuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA1MCxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogTnVtYmVyKGNhbnRIYWJpbGl0YWRvcykgKyBOdW1iZXIoY2FudERlc2hhYmlsaXRhZG9zKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJywgLy8gRGVmYXVsdCBpcyAjMDAwMDAwXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ0hlbHZldGljYScsIC8vIERlZmF1bHQgaXMgQXJpYWxcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhZGRpbmc6IDIwLCAvLyBEZWZhdWx0IGlzIDIwIChhcyBhIHBlcmNlbnRhZ2UpXG4gICAgICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAxMCwgLy8gRGVmYXVsdCBpcyAyMCAoaW4gcHgpLCBzZXQgdG8gZmFsc2UgYW5kIHRleHQgd2lsbCBub3Qgd3JhcC5cbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUgLy8gRGVmYXVsdCBpcyAyNSAoaW4gcHgpLCB1c2VkIGZvciB3aGVuIHRleHQgd3JhcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9IYWJpbGl0YWNpb25lcyBwb3IgdGlwb1xuICAgIHZhciBjYW52SGFiaWxpdGFjaW9uVGlwbyA9ICQoJyNjaGFydEhhYmlsaXRhY2lvblRpcG9zJyk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWNpb25EZWZpbml0aXZhID0gJChcIiNjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YVwiKS52YWwoKTtcbiAgICB2YXIgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEgPSAkKFwiI2NhbnRIYWJpbGl0YWNpb25Qcm92aXNvcmlhXCIpLnZhbCgpO1xuICAgIHZhciBjYW50SGFiaWxpdGFjaW9uSW5pY2lvID0gJChcIiNjYW50SGFiaWxpdGFjaW9uSW5pY2lvXCIpLnZhbCgpO1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW2NvbG9yc1swXSwgY29sb3JzWzFdLCBjb2xvcnNbMl1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSwgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEsIGNhbnRIYWJpbGl0YWNpb25JbmljaW9dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAvLyBUaGVzZSBsYWJlbHMgYXBwZWFyIGluIHRoZSBsZWdlbmQgYW5kIGluIHRoZSB0b29sdGlwcyB3aGVuIGhvdmVyaW5nIGRpZmZlcmVudCBhcmNzXG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgJ0RlZmluaXRpdmE6ICcgKyBjYW50SGFiaWxpdGFjaW9uRGVmaW5pdGl2YSxcbiAgICAgICAgICAgICdQcm92aXNvcmlhOiAnICsgY2FudEhhYmlsaXRhY2lvblByb3Zpc29yaWEsXG4gICAgICAgICAgICAnSW5pY2lvIGRlIHRyYW1pdGU6ICcgKyBjYW50SGFiaWxpdGFjaW9uSW5pY2lvLFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBjaGFydEhhYmlsaXRhY2lvblRpcG8gPSBuZXcgQ2hhcnQoY2FudkhhYmlsaXRhY2lvblRpcG8sIHtcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBOdW1iZXIoY2FudEhhYmlsaXRhZG9zKSArIE51bWJlcihjYW50RGVzaGFiaWxpdGFkb3MpLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLCAvLyBEZWZhdWx0IGlzICMwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnSGVsdmV0aWNhJywgLy8gRGVmYXVsdCBpcyBBcmlhbFxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFkZGluZzogMjAsIC8vIERlZmF1bHQgaXMgMjAgKGFzIGEgcGVyY2VudGFnZSlcbiAgICAgICAgICAgICAgICAgICAgbWluRm9udFNpemU6IDEwLCAvLyBEZWZhdWx0IGlzIDIwIChpbiBweCksIHNldCB0byBmYWxzZSBhbmQgdGV4dCB3aWxsIG5vdCB3cmFwLlxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyNSAvLyBEZWZhdWx0IGlzIDI1IChpbiBweCksIHVzZWQgZm9yIHdoZW4gdGV4dCB3cmFwc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24gKHRvb2x0aXBJdGVtLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsnZGF0YXNldHMnXVswXVsnZGF0YSddW3Rvb2x0aXBJdGVtWydpbmRleCddXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9