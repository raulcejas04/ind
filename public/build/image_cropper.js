(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image_cropper"],{

/***/ "./assets/css/image_cropper.scss":
/*!***************************************!*\
  !*** ./assets/css/image_cropper.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/image_cropper.js":
/*!************************************!*\
  !*** ./assets/js/image_cropper.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_image_cropper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/image_cropper.scss */ "./assets/css/image_cropper.scss");
/* harmony import */ var _css_image_cropper_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_image_cropper_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cropperjs_dist_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cropperjs/dist/cropper */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs_dist_cropper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper__WEBPACK_IMPORTED_MODULE_3__);




var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


var cropper;
var file;
var preview = document.getElementById('imagen');
var fileInput = document.getElementById('foto_perfil_imagen'); // trae el archivo elegido, destruye el cropper anterior si ya existe, y muestra el modal

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      if (cropper) {
        cropper.destroy();
      }

      $('#cropping-modal').modal('show');
      console.log("executing");
      file = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
} //cada vez que cambia el archivo subido llama a readURL


$("#foto_perfil_imagen").change(function () {
  readURL(this);
});
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
$("#btnCropAgain").click(function () {
  if (cropper) {
    cropper.destroy();
  }

  $('#cropping-modal').modal('show');
}); // una vez que el modal termino de mostrarse, carga el archivo en 
// el img dentro del modal
// (cropper.js no funciona bien si no se hace esto)

$('#cropping-modal').on('shown.bs.modal', function () {
  preview.src = file;
}); // al cerrar el modal guarda las coordenadas del corte

$('#cropping-modal').on('hidden.bs.modal', function () {
  var data = cropper.getData(true);
  $("#foto_perfil_x").val(data.x);
  $("#foto_perfil_y").val(data.y);
  $("#foto_perfil_alto").val(data.height);
  $("#foto_perfil_ancho").val(data.width);
}); //cuando se carga el img del modal, se instancia un cropper

preview.addEventListener('load', function (event) {
  cropper = new cropperjs_dist_cropper__WEBPACK_IMPORTED_MODULE_3___default.a(preview, {
    initialAspectRatio: 1 / 1,
    aspectRatio: 1 / 1,
    viewMode: 2 / 1,
    cropBoxResizable: true,
    minContainerWidth: 200,
    minContainerHeight: 200,
    minCanvasWidth: 200,
    minCanvasHeight: 200,
    dragMode: 'move'
  });
});

/***/ })

},[["./assets/js/image_cropper.js","runtime","vendors~app~dashboard~datepicker~grilla_default~image_cropper~lugarForm~select2","vendors~dashboard~grilla_default~image_cropper~lugarForm","vendors~dashboard~image_cropper","vendors~image_cropper"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2ltYWdlX2Nyb3BwZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW1hZ2VfY3JvcHBlci5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImNyb3BwZXIiLCJmaWxlIiwicHJldmlldyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxlSW5wdXQiLCJyZWFkVVJMIiwiaW5wdXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiZGVzdHJveSIsIm1vZGFsIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJjaGFuZ2UiLCJvbiIsImZpbGVOYW1lIiwidmFsIiwic3BsaXQiLCJwb3AiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwiaHRtbCIsImNsaWNrIiwic3JjIiwiZGF0YSIsImdldERhdGEiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiQ3JvcHBlciIsImluaXRpYWxBc3BlY3RSYXRpbyIsImFzcGVjdFJhdGlvIiwidmlld01vZGUiLCJjcm9wQm94UmVzaXphYmxlIiwibWluQ29udGFpbmVyV2lkdGgiLCJtaW5Db250YWluZXJIZWlnaHQiLCJtaW5DYW52YXNXaWR0aCIsIm1pbkNhbnZhc0hlaWdodCIsImRyYWdNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBRUE7QUFDQSxJQUFJQyxPQUFKO0FBQ0EsSUFBSUMsSUFBSjtBQUNBLElBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBaEIsQyxDQUVB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YyxFQUFFLEdBUFc7QUFRM0JDLG1CQUFlLEVBQUUsR0FSVTtBQVMzQkMsWUFBUSxFQUFFO0FBVGlCLEdBQXJCLENBQVY7QUFXSCxDQWJELEUiLCJmaWxlIjoiaW1hZ2VfY3JvcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2ltYWdlX2Nyb3BwZXIuc2Nzcyc7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gJ2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXInO1xyXG5sZXQgY3JvcHBlcjtcclxubGV0IGZpbGU7XHJcbnZhciBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlbicpO1xyXG52YXIgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvdG9fcGVyZmlsX2ltYWdlbicpO1xyXG5cclxuLy8gdHJhZSBlbCBhcmNoaXZvIGVsZWdpZG8sIGRlc3RydXllIGVsIGNyb3BwZXIgYW50ZXJpb3Igc2kgeWEgZXhpc3RlLCB5IG11ZXN0cmEgZWwgbW9kYWxcclxuZnVuY3Rpb24gcmVhZFVSTChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoY3JvcHBlcikge1xyXG4gICAgICAgICAgICAgICAgY3JvcHBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnI2Nyb3BwaW5nLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nXCIpO1xyXG4gICAgICAgICAgICBmaWxlID0gcmVhZGVyLnJlc3VsdDtcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9jYWRhIHZleiBxdWUgY2FtYmlhIGVsIGFyY2hpdm8gc3ViaWRvIGxsYW1hIGEgcmVhZFVSTFxyXG4kKFwiI2ZvdG9fcGVyZmlsX2ltYWdlblwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgcmVhZFVSTCh0aGlzKTtcclxufSk7XHJcblxyXG4kKFwiLmN1c3RvbS1maWxlLWlucHV0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICBcclxuICB2YXIgZmlsZU5hbWUgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiXFxcXFwiKS5wb3AoKTtcclxuICAkKHRoaXMpLnNpYmxpbmdzKFwiLmN1c3RvbS1maWxlLWxhYmVsXCIpLmFkZENsYXNzKFwic2VsZWN0ZWRcIikuaHRtbChmaWxlTmFtZSk7XHJcbn0pO1xyXG5cclxuJChcIiNidG5Dcm9wQWdhaW5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGNyb3BwZXIpIHtcclxuICAgICAgICBjcm9wcGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgICQoJyNjcm9wcGluZy1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbn0pO1xyXG4vLyB1bmEgdmV6IHF1ZSBlbCBtb2RhbCB0ZXJtaW5vIGRlIG1vc3RyYXJzZSwgY2FyZ2EgZWwgYXJjaGl2byBlbiBcclxuLy8gZWwgaW1nIGRlbnRybyBkZWwgbW9kYWxcclxuLy8gKGNyb3BwZXIuanMgbm8gZnVuY2lvbmEgYmllbiBzaSBubyBzZSBoYWNlIGVzdG8pXHJcbiQoJyNjcm9wcGluZy1tb2RhbCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHByZXZpZXcuc3JjID0gZmlsZTtcclxufSk7XHJcblxyXG4vLyBhbCBjZXJyYXIgZWwgbW9kYWwgZ3VhcmRhIGxhcyBjb29yZGVuYWRhcyBkZWwgY29ydGVcclxuJCgnI2Nyb3BwaW5nLW1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkYXRhID0gY3JvcHBlci5nZXREYXRhKHRydWUpO1xyXG4gICAgJChcIiNmb3RvX3BlcmZpbF94XCIpLnZhbChkYXRhLngpO1xyXG4gICAgJChcIiNmb3RvX3BlcmZpbF95XCIpLnZhbChkYXRhLnkpO1xyXG4gICAgJChcIiNmb3RvX3BlcmZpbF9hbHRvXCIpLnZhbChkYXRhLmhlaWdodCk7XHJcbiAgICAkKFwiI2ZvdG9fcGVyZmlsX2FuY2hvXCIpLnZhbChkYXRhLndpZHRoKTtcclxufSk7XHJcblxyXG4vL2N1YW5kbyBzZSBjYXJnYSBlbCBpbWcgZGVsIG1vZGFsLCBzZSBpbnN0YW5jaWEgdW4gY3JvcHBlclxyXG5wcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICBjcm9wcGVyID0gbmV3IENyb3BwZXIocHJldmlldywge1xyXG4gICAgICAgIGluaXRpYWxBc3BlY3RSYXRpbzogMSAvIDEsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDEgLyAxLFxyXG4gICAgICAgIHZpZXdNb2RlOiAyIC8gMSxcclxuICAgICAgICBjcm9wQm94UmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIG1pbkNvbnRhaW5lcldpZHRoOiAyMDAsXHJcbiAgICAgICAgbWluQ29udGFpbmVySGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgbWluQ2FudmFzV2lkdGg6IDIwMCxcclxuICAgICAgICBtaW5DYW52YXNIZWlnaHQ6IDIwMCxcclxuICAgICAgICBkcmFnTW9kZTogJ21vdmUnXHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=