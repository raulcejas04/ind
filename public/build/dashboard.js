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
          fontStyle: 'Arial',
          // Default is Arial
          sidePadding: 40,
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

},[["./assets/js/dashboard.js","runtime","vendors~app~dashboard~datepicker~image_cropper~lugarForm~select2","vendors~dashboard~image_cropper~lugarForm","vendors~dashboard~image_cropper","vendors~dashboard"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsIm1heEZvbnRTaXplIiwic2lkZVBhZGRpbmciLCJzaWRlUGFkZGluZ0NhbGN1bGF0ZWQiLCJpbm5lclJhZGl1cyIsImZvbnQiLCJzdHJpbmdXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJ3aWR0aFJhdGlvIiwibmV3Rm9udFNpemUiLCJNYXRoIiwiZmxvb3IiLCJlbGVtZW50SGVpZ2h0IiwiZm9udFNpemVUb1VzZSIsIm1pbiIsIm1pbkZvbnRTaXplIiwibGluZUhlaWdodCIsIndyYXBUZXh0IiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiY2VudGVyWCIsImNoYXJ0QXJlYSIsImxlZnQiLCJyaWdodCIsImNlbnRlclkiLCJ0b3AiLCJib3R0b20iLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIndvcmRzIiwic3BsaXQiLCJsaW5lIiwibGluZXMiLCJuIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwidGVzdFdpZHRoIiwicHVzaCIsImNvbG9ycyIsImRvY3VtZW50IiwicmVhZHkiLCJjYW52SGFiaWxpdGFjaW9uZXMiLCJjYW50SGFiaWxpdGFkb3MiLCJ2YWwiLCJjYW50RGVzaGFiaWxpdGFkb3MiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImxhYmVscyIsImNoYXJ0SGFiaWxpdGFjaW9uZXMiLCJ0eXBlIiwiY3V0b3V0UGVyY2VudGFnZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwicGFkZGluZyIsInBvaW50U3R5bGUiLCJ1c2VQb2ludFN0eWxlIiwiTnVtYmVyIiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJsYWJlbCIsInRvb2x0aXBJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0E7QUFFQUMsd0VBQUssQ0FBQ0MsYUFBTixDQUFvQkMsUUFBcEIsQ0FBNkI7QUFDekJDLFlBQVUsRUFBRSxvQkFBVUMsS0FBVixFQUFpQjtBQUN6QixRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQWxDLEVBQTBDO0FBQ3RDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHTCxLQUFLLENBQUNBLEtBQU4sQ0FBWUssR0FBdEIsQ0FGc0MsQ0FJdEM7O0FBQ0EsVUFBSUMsWUFBWSxHQUFHTixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQWpEO0FBQ0EsVUFBSUcsU0FBUyxHQUFHRCxZQUFZLENBQUNDLFNBQWIsSUFBMEIsT0FBMUM7QUFDQSxVQUFJQyxHQUFHLEdBQUdGLFlBQVksQ0FBQ0csSUFBdkI7QUFDQSxVQUFJQyxLQUFLLEdBQUdKLFlBQVksQ0FBQ0ksS0FBYixJQUFzQixNQUFsQztBQUNBLFVBQUlDLFdBQVcsR0FBR0wsWUFBWSxDQUFDSyxXQUFiLElBQTRCLEVBQTlDO0FBQ0EsVUFBSUMsV0FBVyxHQUFHTixZQUFZLENBQUNNLFdBQWIsSUFBNEIsRUFBOUM7QUFDQSxVQUFJQyxxQkFBcUIsR0FBSUQsV0FBVyxHQUFHLEdBQWYsSUFBdUJaLEtBQUssQ0FBQ2MsV0FBTixHQUFvQixDQUEzQyxDQUE1QixDQVhzQyxDQVl0Qzs7QUFDQVQsU0FBRyxDQUFDVSxJQUFKLEdB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LEdBQVg7QUFjQSxNQUFJTSxtQkFBbUIsR0FBRyxJQUFJcEUsd0VBQUosQ0FBVTJELGtCQUFWLEVBQThCO0FBQ3BEVSxRQUFJLEVBQUUsVUFEOEM7QUFFcEROLFFBQUksRUFBRUEsSUFGOEM7QUFHcER6RCxXQUFPLEVBQUU7QUFDTGdFLHNCQUFnQixFQUFFLEVBRGI7QUFFTEMsWUFBTSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUUsUUFETjtBQUVKQyxlQUFPLEVBQUUsQ0FGTDtBQUdKTixjQUFNLEVBQ0U7QUFDSU8sb0JBQVUsRUFBRSxRQURoQjtBQUVJQyx1QkFBYSxFQUFFO0FBRm5CO0FBSkosT0FGSDtBQVdMcEUsY0FBUSxFQUFFO0FBQ05DLGNBQU0sRUFBRTtBQUNKSyxjQUFJLEVBQUUrRCxNQUFNLENBQUNoQixlQUFELENBQU4sR0FBMEJnQixNQUFNLENBQUNkLGtCQUFELENBRGxDO0FBRUpoRCxlQUFLLEVBQUUsU0FGSDtBQUVjO0FBQ2xCSCxtQkFBUyxFQUFFLE9BSFA7QUFHZ0I7QUFDcEJLLHFCQUFXLEVBQUUsRUFKVDtBQUlhO0FBQ2pCZSxxQkFBVyxFQUFFLEVBTFQ7QUFLYTtBQUNqQkMsb0JBQVUsRUFBRSxFQU5SLENBTVc7O0FBTlg7QUFERixPQVhMO0FBcUJMNkMsY0FBUSxFQUFFO0FBQ05DLGlCQUFTLEVBQUU7QUFDUEMsZUFBSyxFQUFFLGVBQVVDLFdBQVYsRUFBdUJqQixJQUF2QixFQUE2QjtBQUNoQyxtQkFBT0EsSUFBSSxDQUFDLFVBQUQsQ0FBSixDQUFpQixDQUFqQixFQUFvQixNQUFwQixFQUE0QmlCLFdBQVcsQ0FBQyxPQUFELENBQXZDLENBQVA7QUFDSDtBQUhNO0FBREw7QUFyQkw7QUFIMkMsR0FBOUIsQ0FBMUI7QUFpQ0gsQ0FwREQsRSIsImZpbGUiOiJkYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9kYXNoYm9hcmQuc2Nzcyc7XG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvZGlzdC9DaGFydC5idW5kbGUubWluLmpzJztcblxuQ2hhcnQucGx1Z2luU2VydmljZS5yZWdpc3Rlcih7XG4gICAgYmVmb3JlRHJhdzogZnVuY3Rpb24gKGNoYXJ0KSB7XG4gICAgICAgIGlmIChjaGFydC5jb25maWcub3B0aW9ucy5lbGVtZW50cy5jZW50ZXIpIHtcbiAgICAgICAgICAgIC8vIEdldCBjdHggZnJvbSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBjdHggPSBjaGFydC5jaGFydC5jdHg7XG5cbiAgICAgICAgICAgIC8vIEdldCBvcHRpb25zIGZyb20gdGhlIGNlbnRlciBvYmplY3QgaW4gb3B0aW9uc1xuICAgICAgICAgICAgdmFyIGNlbnRlckNvbmZpZyA9IGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcjtcbiAgICAgICAgICAgIHZhciBmb250U3R5bGUgPSBjZW50ZXJDb25maWcuZm9udFN0eWxlIHx8ICdBcmlhbCc7XG4gICAgICAgICAgICB2YXIgdHh0ID0gY2VudGVyQ29uZmlnLnRleHQ7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBjZW50ZXJDb25maWcuY29sb3IgfHwgJyMwMDAnO1xuICAgICAgICAgICAgdmFyIG1heEZvbnRTaXplID0gY2VudGVyQ29uZmlnLm1heEZvbnRTaXplIHx8IDc1O1xuICAgICAgICAgICAgdmFyIHNpZGVQYWRkaW5nID0gY2VudGVyQ29uZmlnLnNpZGVQYWRkaW5nIHx8IDIwO1xuICAgICAgICAgICAgdmFyIHNpZGVQYWRkaW5nQ2FsY3VsYXRlZCA9IChzaWRlUGFkZGluZyAvIDEwMCkgKiAoY2hhcnQuaW5uZXJSYWRpdXMgKiAyKVxuICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIGJhc2UgZm9udCBvZiAzMHB4XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBcIiArIGZvbnRTdHlsZTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgc3RyaW5nIGFuZCBhbHNvIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudCBtaW51cyAxMCB0byBnaXZlIGl0IDVweCBzaWRlIHBhZGRpbmdcbiAgICAgICAgICAgIHZhciBzdHJpbmdXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9IChjaGFydC5pbm5lclJhZGl1cyAqIDIpIC0gc2lkZVBhZGRpbmdDYWxjdWxhdGVkO1xuXG4gICAgICAgICAgICAvLyBGaW5kIG91dCBob3cgbXVjaCB0aGUgZm9udCBjYW4gZ3JvdyBpbiB3aWR0aC5cbiAgICAgICAgICAgIHZhciB3aWR0aFJhdGlvID0gZWxlbWVudFdpZHRoIC8gc3RyaW5nV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3Rm9udFNpemUgPSBNYXRoLmZsb29yKDMwICogd2lkdGhSYXRpbyk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IChjaGFydC5pbm5lclJhZGl1cyAqIDIpO1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgbmV3IGZvbnQgc2l6ZSBzbyBpdCB3aWxsIG5vdCBiZSBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IG9mIGxhYmVsLlxuICAgICAgICAgICAgdmFyIGZvbnRTaXplVG9Vc2UgPSBNYXRoLm1pbihuZXdGb250U2l6ZSwgZWxlbWVudEhlaWdodCwgbWF4Rm9udFNpemUpO1xuICAgICAgICAgICAgdmFyIG1pbkZvbnRTaXplID0gY2VudGVyQ29uZmlnLm1pbkZvbnRTaXplO1xuICAgICAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBjZW50ZXJDb25maWcubGluZUhlaWdodCB8fCAyNTtcbiAgICAgICAgICAgIHZhciB3cmFwVGV4dCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobWluRm9udFNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplID0gMjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaW5Gb250U2l6ZSAmJiBmb250U2l6ZVRvVXNlIDwgbWluRm9udFNpemUpIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZVRvVXNlID0gbWluRm9udFNpemU7XG4gICAgICAgICAgICAgICAgd3JhcFRleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgZm9udCBzZXR0aW5ncyB0byBkcmF3IGl0IGNvcnJlY3RseS5cbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgICAgIHZhciBjZW50ZXJYID0gKChjaGFydC5jaGFydEFyZWEubGVmdCArIGNoYXJ0LmNoYXJ0QXJlYS5yaWdodCkgLyAyKTtcbiAgICAgICAgICAgIHZhciBjZW50ZXJZID0gKChjaGFydC5jaGFydEFyZWEudG9wICsgY2hhcnQuY2hhcnRBcmVhLmJvdHRvbSkgLyAyKTtcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udFNpemVUb1VzZSArIFwicHggXCIgKyBmb250U3R5bGU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cbiAgICAgICAgICAgIGlmICghd3JhcFRleHQpIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodHh0LCBjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3b3JkcyA9IHR4dC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgdmFyIGxpbmUgPSAnJztcbiAgICAgICAgICAgIHZhciBsaW5lcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBCcmVhayB3b3JkcyB1cCBpbnRvIG11bHRpcGxlIGxpbmVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB3b3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgICAgICB2YXIgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dCh0ZXN0TGluZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RXaWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RXaWR0aCA+IGVsZW1lbnRXaWR0aCAmJiBuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gd29yZHNbbl0gKyAnICc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTW92ZSB0aGUgY2VudGVyIHVwIGRlcGVuZGluZyBvbiBsaW5lIGhlaWdodCBhbmQgbnVtYmVyIG9mIGxpbmVzXG4gICAgICAgICAgICBjZW50ZXJZIC09IChsaW5lcy5sZW5ndGggLyAyKSAqIGxpbmVIZWlnaHQ7XG5cbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbGluZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQobGluZXNbbl0sIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbnRlclkgKz0gbGluZUhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRHJhdyB0ZXh0IGluIGNlbnRlclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmUsIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbnZhciBjb2xvcnMgPSBbJyMwMjc1ZDgnLCAnIzVjYjg1YycsICcjZjBhZDRlJywgJyNkOTUzNGYnXTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhbnZIYWJpbGl0YWNpb25lcyA9ICQoJyNjaGFydEhhYmlsaXRhY2lvbmVzJyk7XG4gICAgdmFyIGNhbnRIYWJpbGl0YWRvcyA9ICQoXCIjY2FudEhhYmlsaXRhZG9zXCIpLnZhbCgpO1xuICAgIHZhciBjYW50RGVzaGFiaWxpdGFkb3MgPSAkKFwiI2NhbnREZXNoYWJpbGl0YWRvc1wiKS52YWwoKTtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtjb2xvcnNbMF0sIGNvbG9yc1syXV0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogW2NhbnRIYWJpbGl0YWRvcywgY2FudERlc2hhYmlsaXRhZG9zXVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgLy8gVGhlc2UgbGFiZWxzIGFwcGVhciBpbiB0aGUgbGVnZW5kIGFuZCBpbiB0aGUgdG9vbHRpcHMgd2hlbiBob3ZlcmluZyBkaWZmZXJlbnQgYXJjc1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICdIYWJpbGl0YWRvczogJyArIGNhbnRIYWJpbGl0YWRvcyxcbiAgICAgICAgICAgICdObyBoYWJpbGl0YWRvczogJyArIGNhbnREZXNoYWJpbGl0YWRvcyxcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgY2hhcnRIYWJpbGl0YWNpb25lcyA9IG5ldyBDaGFydChjYW52SGFiaWxpdGFjaW9uZXMsIHtcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNTAsXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IE51bWJlcihjYW50SGFiaWxpdGFkb3MpICsgTnVtYmVyKGNhbnREZXNoYWJpbGl0YWRvcyksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsIC8vIERlZmF1bHQgaXMgIzAwMDAwMFxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdBcmlhbCcsIC8vIERlZmF1bHQgaXMgQXJpYWxcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhZGRpbmc6IDQwLCAvLyBEZWZhdWx0IGlzIDIwIChhcyBhIHBlcmNlbnRhZ2UpXG4gICAgICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAxMCwgLy8gRGVmYXVsdCBpcyAyMCAoaW4gcHgpLCBzZXQgdG8gZmFsc2UgYW5kIHRleHQgd2lsbCBub3Qgd3JhcC5cbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUgLy8gRGVmYXVsdCBpcyAyNSAoaW4gcHgpLCB1c2VkIGZvciB3aGVuIHRleHQgd3JhcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uICh0b29sdGlwSXRlbSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbJ2RhdGFzZXRzJ11bMF1bJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==