(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lugarForm"],{

/***/ "./assets/js/lugarForm.js":
/*!********************************!*\
  !*** ./assets/js/lugarForm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
  $("#lugar_esProduccion").change(function () {
    if ($(this).is(':checked')) {
      $("#tabCertAptitudAmbiental").hide();
      $("#tabProduccion").hide();
    } else {
      $("#tabCertAptitudAmbiental").show();
      $("#tabProduccion").show();
    }
  }); //PRODUCCION

  if (!$("#lugar_tieneEfluentesLiquidos").is(':checked')) {
    $("#divTratamientoPrevioVuelco").hide();
  }

  ;

  if (!$("#lugar_tieneEmisionesGaseosas").is(':checked')) {
    $("#divTipoEmisionGaseosa").hide();
  }

  ;
  $("#lugar_tieneEfluentesLiquidos").change(function () {
    if ($(this).is(':checked')) {
      $("#divTratamientoPrevioVuelco").show();
    } else {
      $("#divTratamientoPrevioVuelco").hide();
      $("#lugar_tieneTratamientoPrevioVuelco").prop('checked', false);
    }
  });
  $("#lugar_tieneEmisionesGaseosas").change(function () {
    if ($(this).is(':checked')) {
      $("#divTipoEmisionGaseosa").show();
    } else {
      $("#divTipoEmisionGaseosa").hide();
    }
  });
});

/***/ })

},[["./assets/js/lugarForm.js","runtime","vendors~app~datepicker~image_cropper~lugarForm~select2"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNoYW5nZSIsImlzIiwiaGlkZSIsInNob3ciLCJwcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBRUFELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUUxQkgsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJJLE1BQXpCLENBQWdDLFlBQVk7QUFDeEMsUUFBSUosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxFQUFSLENBQVcsVUFBWCxDQUFKLEVBQTRCO0FBQ3hCTCxPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qk0sSUFBOUI7QUFDQU4sT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLElBQXBCO0FBQ0gsS0FIRCxNQUdPO0FBQ0hOLE9BQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTyxJQUE5QjtBQUNBUCxPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk8sSUFBcEI7QUFDSDtBQUNKLEdBUkQsRUFGMEIsQ0FZMUI7O0FBQ0EsTUFBSSxDQUFDUCxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0ssRUFBbkMsQ0FBc0MsVUFBdEMsQ0FBTCxFQUF3RDtBQUNwREwsS0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNNLElBQWpDO0FBQ0g7O0FBQ0Q7O0FBQ0EsTUFBSSxDQUFDTixDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0ssRUFBbkMsQ0FBc0MsVUFBdEMsQ0FBTCxFQUF3RDtBQUNwREwsS0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJNLElBQTVCO0FBQ0g7O0FBQ0Q7QUFDQU4sR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNJLE1BQW5DLENBQTBDLFlBQVk7QUFFbEQsUUFBSUosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxFQUFSLENBQVcsVUFBWCxDQUFKLEVBQTRCO0FBQ3hCTCxPQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ08sSUFBakM7QUFDSCxLQUZELE1BRU87QUFDSFAsT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNNLElBQWpDO0FBQ0FOLE9BQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDUSxJQUF6QyxDQUE4QyxTQUE5QyxFQUF5RCxLQUF6RDtBQUNIO0FBQ0osR0FSRDtBQVVBUixHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0ksTUFBbkMsQ0FBMEMsWUFBWTtBQUVsRCxRQUFJSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBNEI7QUFDeEJMLE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCTyxJQUE1QjtBQUNILEtBRkQsTUFFTztBQUNIUCxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qk0sSUFBNUI7QUFDSDtBQUNKLEdBUEQ7QUFVSCxDQXpDRCxFIiwiZmlsZSI6Imx1Z2FyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9QUk9EVUNDSU9OXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuICAgIDtcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgfVxuICAgIDtcbiAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgICk7XG4gICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICApO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=