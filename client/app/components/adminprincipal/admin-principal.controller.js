(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('AdminPrincipalController', AdminPrincipalController);

    AdminPrincipalController.$inject = ['$state', 'SweetAlert', 'tablaDatosService', 'Cliente', 'listaLocalidades'];

    function AdminPrincipalController($state, SweetAlert, tablaDatosService, Cliente, listaLocalidades ) {

            var vm = this;

            vm.muestra_clientes_localidad = muestra_clientes_localidad;
            vm.muestraResultadosBusqueda  = muestraResultadosBusqueda;
            vm.limpiaBusqueda             = limpiaBusqueda;
            vm.cambiarPagina              = cambiarPagina;
            vm.muestraDatosclienteActual  = muestraDatosclienteActual;
            vm.eliminar_cliente           = eliminar_cliente;

            vm.tituloSeccion = 'Clientes registrados';
            vm.tablaListaClientes = {
              totalElementos     : 0,
              paginaActual       : 1,
              registrosPorPagina : 10,
              inicio             : 0,
              fin                : 1,
              condicion          : {},
              filtro_datos       : {},
              fila_seleccionada  : 0
            };

            inicia();



            function inicia() {

                  vm.tablaListaClientes.filtro_datos = {
                                filter: {
                                    where: vm.tablaListaClientes.condicion,
                                    order: ['compania ASC','nombre ASC','apellidos ASC'],
                                    limit: vm.tablaListaClientes.registrosPorPagina,
                                    skip: vm.tablaListaClientes.paginaActual - 1,
                                    include: [
                                      'localidad_pertenece',
                                      'rubro_principal',
                                      'sucursales',
                                      {
                                          relation: 'programacion_mensajes',
                                          scope: {
                                              where:{respEstatusEnvio: {neq : ''}},
                                              fields:['idMensaje','celular','respFechaHoraEnvio','respEstatusEnvio'],
                                              order :['respFechaHoraEnvio DESC'],
                                              include:{
                                                  relation:'mensajesCliente',
                                                  scope:{
                                                    fields:['mensaje']
                                                  }
                                              }
                                          }
                                      }
                                    ]
                                }
                          };


                  vm.listaLocalidades = listaLocalidades;
                  vm.localidadSeleccionada = vm.listaLocalidades[0];

                  vm.clientes = {};
                  vm.clienteSeleccionado = {};
                  vm.tablaListaClientes.fila_seleccionada = undefined;
                  vm.client = 1;

                  tablaDatosService.obtiene_datos_tabla(Cliente, vm.tablaListaClientes)
                  .then(function(respuesta) {

                        vm.tablaListaClientes.totalElementos = respuesta.total_registros;
                        vm.tablaListaClientes.inicio = respuesta.inicio;
                        vm.tablaListaClientes.fin = respuesta.fin;

                        if(vm.tablaListaClientes.totalElementos > 0)
                        {
                            vm.clientes = respuesta.datos;
                            vm.clienteSeleccionado = vm.clientes[0];
                            vm.client = 2;
                            vm.tablaListaClientes.fila_seleccionada = 0;
                        }

                  });

            }


            function muestra_clientes_localidad() {

                  vm.clientes = {};
                  vm.clienteSeleccionado = {};
                  vm.tablaListaClientes.fila_seleccionada = undefined;
                  vm.client = 1;

                  if(vm.localidadSeleccionada.idLocalidad == '')
                      vm.tablaListaClientes.condicion = {};
                  else
                      vm.tablaListaClientes.condicion = { idLocalidad: vm.localidadSeleccionada.idLocalidad};


                  tablaDatosService.obtiene_datos_tabla(Cliente, vm.tablaListaClientes)
                  .then(function(respuesta) {

                        vm.tablaListaClientes.totalElementos = respuesta.total_registros;
                        vm.tablaListaClientes.inicio = respuesta.inicio;
                        vm.tablaListaClientes.fin = respuesta.fin;

                        if(vm.tablaListaClientes.totalElementos > 0)
                        {
                            vm.clientes = respuesta.datos;
                            vm.clienteSeleccionado = vm.clientes[0];
                            vm.client = 2;
                            vm.tablaListaClientes.fila_seleccionada = 0;
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function muestraResultadosBusqueda() {

                  vm.clientes = {};
                  vm.clienteSeleccionado = {};
                  vm.tablaListaClientes.fila_seleccionada = undefined;
                  vm.client = 1;

                  vm.tablaListaClientes.condicion = {
                        busqueda: {
                            regexp: vm.nombre_buscar + '~*/i'
                        }
                  };

                  vm.tablaListaClientes.condicion = {
                        busqueda: {
                            like: '%' + vm.nombre_buscar.toLowerCase() + '%'
                        }
                  };

                  tablaDatosService.obtiene_datos_tabla(Cliente, vm.tablaListaClientes)
                  .then(function(respuesta) {

                        vm.tablaListaClientes.totalElementos = respuesta.total_registros;
                        vm.tablaListaClientes.inicio = respuesta.inicio;
                        vm.tablaListaClientes.fin = respuesta.fin;

                        if(vm.tablaListaClientes.totalElementos > 0)
                        {
                            vm.clientes = respuesta.datos;
                            vm.clienteSeleccionado = vm.clientes[0];
                            vm.client = 2;
                            vm.tablaListaClientes.fila_seleccionada = 0;                    
                        }

                        vm.mostrarbtnLimpiar = true;
                        vm.localidadSeleccionada = vm.listaLocalidades[0];
                  });
            };


            function limpiaBusqueda() {

                  vm.clientes = {};
                  vm.clienteSeleccionado = {};
                  vm.tablaListaClientes.fila_seleccionada = undefined;
                  vm.client = 1;

                  vm.tablaListaClientes.condicion = {};

                  tablaDatosService.obtiene_datos_tabla(Cliente, vm.tablaListaClientes)
                  .then(function(respuesta) {

                        vm.tablaListaClientes.totalElementos = respuesta.total_registros;
                        vm.tablaListaClientes.inicio = respuesta.inicio;
                        vm.tablaListaClientes.fin = respuesta.fin;

                        if(vm.tablaListaClientes.totalElementos > 0)
                        {
                            vm.clientes = respuesta.datos;
                            vm.clienteSeleccionado = vm.clientes[0];
                            vm.client = 2;
                            vm.tablaListaClientes.fila_seleccionada = 0;
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                        vm.localidadSeleccionada = vm.listaLocalidades[0];
                  });

            };


            function cambiarPagina() {

                  if(vm.tablaListaClientes.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(Cliente, vm.tablaListaClientes)
                        .then(function(respuesta) {

                            vm.tablaListaClientes.inicio = respuesta.inicio;
                            vm.tablaListaClientes.fin = respuesta.fin;

                            vm.clientes = respuesta.datos;
                            vm.clienteSeleccionado = vm.clientes[0];
                            vm.client = 2;
                            vm.tablaListaClientes.fila_seleccionada = 0;

                        });
                  }
            }


            function muestraDatosclienteActual(seleccion) {

                  var index = vm.clientes.indexOf(seleccion);
                  vm.clienteSeleccionado = seleccion;
                  vm.client = 2;
                  vm.tablaListaClientes.fila_seleccionada = index;
            };


            function eliminar_cliente(clienteseleccionado) {

                  swal({
                    title: "Eliminar cliente",
                    html: '¿Desea eliminar al cliente <strong>'+clienteseleccionado.nombre+' '+clienteseleccionado.apellidos +'</strong> ?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: true
                  }, function(){
                        swal.disableButtons();

                        Cliente.sucursales.destroyAll({ id:  clienteseleccionado.id })
                        .$promise
                        .then(function(cliente) {

                              Cliente.deleteById({ id: clienteseleccionado.id })
                              .$promise
                              .then(function() {

                                    vm.limpiaBusqueda();
                                    swal('Cliente eliminado', '', 'success');

                              });

                        });

                  });

            };
    };

})();