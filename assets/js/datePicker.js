import '../css/datepicker.scss';
const $ = require('jquery');
import datepicker from 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import datepickeres from 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min';

$(document).ready(function () {
    $('.js-datepicker').datepicker({
        format: 'dd-mm-yyyy',
        language: 'es'
    });
    console.log("es");
});