import '../css/dashboard.scss';
const $ = require('jquery');
import Chart from 'chart.js/dist/Chart.bundle.min.js';

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            // Get ctx from string
            var ctx = chart.chart.ctx;

            // Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            // Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
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
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
            }

            var words = txt.split(' ');
            var line = '';
            var lines = [];

            // Break words up into multiple lines if necessary
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
            }

            // Move the center up depending on line height and number of lines
            centerY -= (lines.length / 2) * lineHeight;

            for (var n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
            }
            //Draw text in center
            ctx.fillText(line, centerX, centerY);
        }
    }
});

var colors = ['#0275d8', '#5cb85c', '#f0ad4e', '#d9534f'];


$(document).ready(function () {
    $("#btnRefresh").click(function () {
        location.reload(true);
    });
    var cantLugares = $("#cantLugares").val();
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
        labels: [
            'Definitiva: ' + cantHabilitacionDefinitiva,
            'Provisoria: ' + cantHabilitacionProvisoria,
            'Inicio de trámite: ' + cantHabilitacionInicio,
            'Sin habilitación: ' + cantDeshabilitados,
        ]
    };

    var chartHabilitacionTipo = new Chart(canvHabilitacionTipo, {
        type: 'pie',
        data: data,
        options: {
            legend: {
                position: 'bottom',
                padding: 5,
                labels:
                        {
                            pointStyle: 'circle',
                            usePointStyle: true
                        }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][tooltipItem['index']];
                    },
                }
            },
        }
    });


    //Lugares que exportan

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
        labels: [
            'Si: ' + cantExportadores,
            'No: ' + cantNoExportadores,
        ]
    };

    var chartExportadores = new Chart(canvExportan, {
        type: 'doughnut',
        data: data,
        options: {
            cutoutPercentage: 50,
            legend: {
                position: 'bottom',
                padding: 5,
                labels:
                        {
                            pointStyle: 'circle',
                            usePointStyle: true
                        }
            },
            elements: {
                center: {
                    text: Number(cantLugares),
                    color: '#000000', // Default is #000000
                    fontStyle: 'Helvetica', // Default is Arial
                    sidePadding: 30, // Default is 20 (as a percentage)
                    minFontSize: 10, // Default is 20 (in px), set to false and text will not wrap.
                    lineHeight: 25 // Default is 25 (in px), used for when text wraps
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][tooltipItem['index']];
                    },
                }
            },
        }
    });


    //Lugares por categoría

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
        labels: [
            'Categoría 1: ' + cantCat1,
            'Categoría 2: ' + cantCat2,
            'Categoría 3: ' + cantCat3,
            'Sin categoría: ' + cantSinCat
        ]
    };

    var chartExportadores = new Chart(canvCategoria, {
        type: 'pie',
        data: data,
        options: {
            legend: {
                position: 'bottom',
                padding: 5,
                labels:
                        {
                            pointStyle: 'circle',
                            usePointStyle: true
                        }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][tooltipItem['index']];
                    },
                }
            },
        }
    });

    //Tipos de residuo

    var canvresiduos = $('#chartResiduos');
    var residuosSolidos = parseInt($("#residuosSolidos").val());
    var residuosLiquidos = parseInt($("#residuosLiquidos").val());
    var residuosSemisolidos = parseInt($("#residuosSemisolidos").val());

    var max = Math.max(...[residuosSolidos, residuosSemisolidos, residuosLiquidos]);
    console.log();
    var data = {
        datasets: [{
                backgroundColor: [colors[0], colors[2], colors[1]],
                borderWidth: 0,
                data: [residuosSolidos, residuosSemisolidos, residuosLiquidos]
            }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Sólidos: ' + residuosSolidos,
            'Semisólidos: ' + residuosSemisolidos,
            'Líquidos: ' + residuosLiquidos,
        ],

    };

    var chartExportadores = new Chart(canvresiduos, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true,   
                            max: max + Math.ceil((max * 10) / 100)
                        }
                    }],
                xAxes: [{
                        display: true,
                    }],
            },
            legend: {
                display: false
            }
        }
    });

    //RUBROS GENERALES

    var canvRubros = $('#chartRubros');
    var rg1 = parseInt($("#rg1").val());
    var rg2 = parseInt($("#rg2").val());
    var rg3 = parseInt($("#rg3").val());
    var rg4 = parseInt($("#rg4").val());
    var rg5 = parseInt($("#rg5").val());
    var rg6 = parseInt($("#rg6").val());
    var rg7 = parseInt($("#rg7").val());
    var rg8 = parseInt($("#rg8").val());
    var rg9 = parseInt($("#rg9").val());
    var rg10 = parseInt($("#rg10").val());
    var rg11 = parseInt($("#rg11").val());
    var rg12 = parseInt($("#rg12").val());
    var rg13 = parseInt($("#rg13").val());
    var rg14 = parseInt($("#rg14").val());
    var rg15 = parseInt($("#rg15").val());
    var rg16 = parseInt($("#rg16").val());
    var rg17 = parseInt($("#rg17").val());
    var rg18 = parseInt($("#rg18").val());
    var rg19 = parseInt($("#rg19").val());
    var rg20 = parseInt($("#rg20").val());
    var rg21 = parseInt($("#rg21").val());

    var max = Math.max(...[rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8, rg9, rg10, rg11, rg12, rg13, rg14, rg15, rg16, rg17, rg18, rg19, rg20, rg21]);

    var data = {
        datasets: [{
                backgroundColor: [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]],
                borderWidth: 0,
                data: [rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8, rg9, rg10, rg11, rg12, rg13, rg14, rg15, rg16, rg17, rg18, rg19, rg20, rg21]
            }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Automotriz y autopartes: ' + rg1,
            'Electrónica y electrodomésticos: ' + rg2,
            'Indumentaria: ' + rg3,
            'Productos del Tabaco: ' + rg4,
            'Metalurgia, Maquinaria y Equipos: ' + rg5,
            'Calzado: ' + rg6,
            'Gráfica, Ediciones e Impresiones: ' + rg7,
            'Madera y Muebles: ' + rg8,
            'Juguetes: ' + rg9,
            'Cemento: ' + rg10,
            'Productos Textiles: ' + rg11,
            'Manufacturas del Cuero: ' + rg12,
            'Neumáticos: ' + rg13,
            'Bicicletas y Motos: ' + rg14,
            'Química y Petroquímica: ' + rg15,
            'Celulosa y Papel: ' + rg16,
            'Plásticos y subproductos: ' + rg17,
            'Cerámicos: ' + rg18,
            'Alimentos  : ' + rg19,
            'Manufactura del caucho: ' + rg20,
            'Estaciones de servicio: ' + rg21,            
        ],

    };

    var chartExportadores = new Chart(canvRubros, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true,
                            max: max + Math.ceil((max * 10) / 100)
                        }
                    }],
                xAxes: [{
                        display: true,
                    }],
            },
            legend: {
                display: false
            }
        }
    });
});