(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lugarForm"],{

/***/ "./assets/js/lugarForm.js":
/*!********************************!*\
  !*** ./assets/js/lugarForm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
  console.log("changes took 2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbHVnYXJGb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2UiLCJpcyIsImhpZGUiLCJzaG93IiwicHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBRCxDQUFDLENBQUNFLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBRUFMLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCTSxNQUF6QixDQUFnQyxZQUFZO0FBQ3hDLFFBQUlOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sRUFBUixDQUFXLFVBQVgsQ0FBSixFQUE0QjtBQUN4QlAsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJRLElBQTlCO0FBQ0FSLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CUSxJQUFwQjtBQUNILEtBSEQsTUFHTztBQUNIUixPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QlMsSUFBOUI7QUFDQVQsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JTLElBQXBCO0FBQ0g7QUFDSixHQVJELEVBSDBCLENBYTFCOztBQUNBLE1BQUksQ0FBQ1QsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNPLEVBQW5DLENBQXNDLFVBQXRDLENBQUwsRUFBd0Q7QUFDcERQLEtBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDUSxJQUFqQztBQUNIOztBQUNEOztBQUNBLE1BQUksQ0FBQ1IsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNPLEVBQW5DLENBQXNDLFVBQXRDLENBQUwsRUFBd0Q7QUFDcERQLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCUSxJQUE1QjtBQUNIOztBQUNEO0FBQ0FSLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DTSxNQUFuQyxDQUEwQyxZQUFZO0FBRWxELFFBQUlOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sRUFBUixDQUFXLFVBQVgsQ0FBSixFQUE0QjtBQUN4QlAsT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNTLElBQWpDO0FBQ0gsS0FGRCxNQUVPO0FBQ0hULE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDUSxJQUFqQztBQUNBUixPQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q1UsSUFBekMsQ0FBOEMsU0FBOUMsRUFBeUQsS0FBekQ7QUFDSDtBQUNKLEdBUkQ7QUFVQVYsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNNLE1BQW5DLENBQTBDLFlBQVk7QUFFbEQsUUFBSU4sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxFQUFSLENBQVcsVUFBWCxDQUFKLEVBQTRCO0FBQ3hCUCxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QlMsSUFBNUI7QUFDSCxLQUZELE1BRU87QUFDSFQsT0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJRLElBQTVCO0FBQ0g7QUFDSixHQVBEO0FBVUgsQ0ExQ0QsRSIsImZpbGUiOiJsdWdhckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZXMgdG9vayAyXCIpO1xuXG4gICAgJChcIiNsdWdhcl9lc1Byb2R1Y2Npb25cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdGFiQ2VydEFwdGl0dWRBbWJpZW50YWxcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJQcm9kdWNjaW9uXCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9QUk9EVUNDSU9OXG4gICAgaWYgKCEkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5oaWRlKCk7XG4gICAgfVxuICAgIDtcbiAgICBpZiAoISQoXCIjbHVnYXJfdGllbmVFbWlzaW9uZXNHYXNlb3Nhc1wiKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKFwiI2RpdlRpcG9FbWlzaW9uR2FzZW9zYVwiKS5oaWRlKCk7XG4gICAgfVxuICAgIDtcbiAgICAkKFwiI2x1Z2FyX3RpZW5lRWZsdWVudGVzTGlxdWlkb3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJChcIiNkaXZUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RpdlRyYXRhbWllbnRvUHJldmlvVnVlbGNvXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbHVnYXJfdGllbmVUcmF0YW1pZW50b1ByZXZpb1Z1ZWxjb1wiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgICk7XG4gICAgJChcIiNsdWdhcl90aWVuZUVtaXNpb25lc0dhc2Vvc2FzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjZGl2VGlwb0VtaXNpb25HYXNlb3NhXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICApO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=