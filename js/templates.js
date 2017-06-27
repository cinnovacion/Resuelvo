define(function (require) {
    return [
        {
            'content'  : {
                'topics' : [
                    { 'nombre' : 'Números Naturales', 'id' : 'btn_nn', 'img' : 'img/btn_nn.png' },
                    { 'nombre' : 'Números Decimales', 'id' : 'btn_nd', 'img' : 'img/btn_nd.png' },
                    { 'nombre' : 'Números Fraccionarios', 'id' : 'btn_nf', 'img' : 'img/btn_nf.png' },
                    { 'nombre' : 'Medidas de Logitud', 'id' : 'btn_ml', 'img' : 'img/btn_ml.png' },
                    { 'nombre' : 'Medidas de Peso', 'id' : 'btn_mp', 'img' : 'img/btn_mp.png' },
                    { 'nombre' : 'Medidas de capacidad', 'id' : 'btn_mc', 'img' : 'img/btn_mc.png' }
                ],
                'concepts' : [
                    { 'tema' : 'Números Naturales', 'concepto' : 'Son aquellos símbolos que nos permiten representar la cantidad de elementos que tiene un conjunto.', 'ejemplo' : 'Ejemplo: 1, 2, 3...', 'id' : 'btn_nn' },
                    { 'tema' : 'Números Decimales', 'concepto' : 'Un número decimal es aquel que se puede expresar mediante una fracción decimal. Consta de dos partes: entera y decimal.', 'ejemplo' : ' ', 'id' : 'btn_nd' },
                    { 'tema' : 'Números Fraccionarios', 'concepto' : 'En un número fraccionario o fracción, el denominador indica las partes en que se divide la unidad y el numerador indica las partes que se toman.', 'ejemplo' : ' ', 'id' : 'btn_nf' },
                    { 'tema' : 'Medidas de Logitud', 'concepto' : 'La longitud determina la distancia que hay entre dos puntos, o dicho de otra manera, longitud es la cantidad de espacio que hay entre dos puntos.', 'ejemplo' : ' ', 'id' : 'btn_ml' },
                    { 'tema' : 'Medidas de Peso', 'concepto' : 'El peso equivale a la fuerza que ejerce un cuerpo sobre un punto de apoyo, originada por la acción del campo gravitatorio local sobre la masa del cuerpo.', 'ejemplo' : ' ', 'id' : 'btn_mp' },
                    { 'tema' : 'Medidas de Capacidad', 'concepto' : 'Para medir el volumen de un objeto se utilizan las medidas de capacidad. La medida más utilizada es el litro.', 'ejemplo' : ' ', 'id' : 'btn_mc' }
                ]
            }
        },
        {'template' : '<div id="page1"> {{#topics}}<button type="button" id="{{id}}" class="pantalla_1 object" data="2"><img src="{{img}}"></button> <br/> {{/topics}} </div>'},
        {'template' : '<div id="page2"> <h1 class="object" id="tema">{{tema}}</h1> <p class="object" id="concepto"><b>{{concepto}}</b></p> <p class="object" id="ejemplo"><b>{{ejemplo}}</b></p> <button type="button" class="object" id="pantalla_0" data="1"><img src="img/inicio.png"></button> <button type="button" id="{{id}}" class="pantalla_2 object" data="3"><img src="img/sig.png"></button> </div>'},
        {'template' : '<div id="page3"> <p class="object" id="problema">{{ejercicio}}</p> <label class="object" id="datos-label"><b>Datos</b></label> <p id="datos" class="object"> {{#datos}}{{dato}}<br/>{{/datos}} </p> <div class="object" id="signos"> <img id="suma" class="movimiento object" data="+" src="img/suma.png"> <img id="resta" class="movimiento object" data="-" src="img/resta.png"> <img id="multi" class="movimiento object" data="*" src="img/multiplicacion.png"> <img id="divi" class="movimiento object" data="/" src="img/division.png"> <img id="igual" class="movimiento object" data="=" src="img/igual.png"> </div> <div class="panel object" id="operacion-panel"> <label class="object" id="operacion-label"><b>Operación</b></label> <div id="operacion"> {{#operacion}}<input class="object operacion" type="number"/>{{/operacion}} </div> </div> <label class="object" id="respuesta-label"><b>Respuesta</b></label> <div class="panel object" id="respuesta-panel"> <p class="object"></p> <div id="respuesta"> {{#resp_num}}<input class="object respuesta"/>{{/resp_num}} </div> <p class="object"></p> </div> <button type="button" class="object" id="btn_rv" >REVISAR</button> <div class="object" id="cont_btn_ini"> <button type="button" class="object" id="btn_ini" data="1">INICIO</button> </div> <div class="object" id="cont_btn_nv"> <button type="button" class="object" id="btn_nv">NUEVO</button> <div id="myModal" class="modal"><div class="modal-content"><h1>¡Felicidades!</h1><h3>Has resuelto el ejercicio</h3><button class="close">Continuar</button></div></div> </div> '}
    ];
});
