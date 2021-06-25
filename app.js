// Referenciar el formulario

console.log("app.js");

var formulario = document.getElementById('formulario');

// Detectar el envío 

/*
formulario.addEventListener('submit', function (e) {

 

    e.preventDefault();



    var datos = new FormData(formulario);


    fetch('templates/palabra.html', {

        method: 'POST',

        body: datos

    })

        .then(res => res.json())

        .then(data => {

            console.log(data);


            var total = data.length;

            contador_vehiculos.innerHTML = 

            `

            <span class="d-block text-right"><i onclick="cerrarRespuesta()" style="cursor:pointer;" class="fas fa-times"></i></span>

            <p class="ficha__numero">Número de vehículos de esta selección: <span style="color: rgb(0,206,165);"> ${total}</span> </p>

            `;

            respuesta.innerHTML = "";

            for (var item of data) {

           

                var etiqueta;

                var descripcion_etiqueta;

                if (item.etiqueta_energetica == "B") {

                    etiqueta = "etiqueta_b.jpg";

                    descripcion_etiqueta = "Etiqueta B";

                }

                if (item.etiqueta_energetica == "C") {

                    etiqueta = "etiqueta_c.jpg";

                    descripcion_etiqueta = "Etiqueta C";

                }

                if (item.etiqueta_energetica == "Eco") {

                    etiqueta = "etiqueta_eco.jpg";

                    descripcion_etiqueta = "Etiqueta Eco";

                }

                if (item.etiqueta_energetica == "Cero") {

                    etiqueta = "etiqueta_cero.jpg";

                    descripcion_etiqueta = "Etiqueta Cero";

                }

            

                var logo = item.marca;

                console.log(logo);

                respuesta.innerHTML +=

                    `

                    <div class="col-lg-3 col-md-4 col-sm-6 p-2" style="margin-bottom:80px; background: white; border:5px solid #f1f4f3; border-radius:15px;">

                        <a href="ficha.html?id=${item.id}">

                            <img class="ficha__emblema"  src="img/emblemas/${logo}.jpg" width="100px" alt="${item.marca}" title="Emblema ${item.marca}">

                            <img class="ficha__imagen" src="img/${item.img_1}" alt="${item.seo}" title="Imagen vehículo" style="width:100%; margin-top:10px;">

                            <h2 class="mt-1 ficha__marca">${item.marca}</h2>

                            <span class="d-block text-left font-weight-bold ficha__modelo">${item.modelo}</span>                    

                            <span class="ficha__datos">${item.matriculacion} | ${item.kilometros} km | ${item.potencia} CV | ${item.cambio}</span>

                            <hr>

                            <div class="row">

                                <div class="col-md-6 col-sm-6 col-6">

                                    <span>Precio</span> <br>

                                    <span class="text-primary font-weight-bold">${item.precio} €</span>

                                </div>

                                <div class="col-md-6 col-sm-6 col-6">

                                    <span>Financiado</span> <br>

                                    <span style="color: rgb(0,206,165);">${item.precio_mes} €/mes</span> <br>

                                    <span class="ficha__condiciones">* Ver condiciones</span>

                                </div>

                            </div>

                            <hr>

                            <img src="img/${etiqueta}" width="50px" alt="${item.seo}" title="Etiqueta DGT ${item.etiqueta}"/>

                            <span class="ml-4">${descripcion_etiqueta}</span>

                            <hr>

                            <a href="ficha.html?id=${item.id}" class="btn btn-primary btn-block text-light" role="button">Me interesa</a>

                        </a>

                    </div>

                    `;

            }

        })

});

*/