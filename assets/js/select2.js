import '../css/select2.scss';
const $ = require('jquery');
import select2 from 'select2/dist/js/select2';

//convierte cualquier dropdown que tenga la clase searchabledropdown en un dropdown con filtro
 $(document).ready(function() {
            $(".searchabledropdown").select2();
        });


