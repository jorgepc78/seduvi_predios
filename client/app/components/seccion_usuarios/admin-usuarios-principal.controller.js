(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('AdminUsuariosPrincipalController', AdminUsuariosPrincipalController);

    AdminUsuariosPrincipalController.$inject = ['$timeout', '$modal', 'tablaDatosService', 'Usuarios'];

    function AdminUsuariosPrincipalController($timeout, $modal, tablaDatosService, Usuarios ) {

            var vm = this;
            vm.muestraDatosUsuarioActual  = muestraDatosUsuarioActual;
            vm.muestraResultadosBusqueda  = muestraResultadosBusqueda;
            vm.limpiaBusqueda             = limpiaBusqueda;
            vm.cambiarPagina              = cambiarPagina;
            vm.edita_datos_usuario        = edita_datos_usuario;
            vm.nuevo_usuario              = nuevo_usuario;
            vm.elimina_usuario            = elimina_usuario;

            vm.tablaListaUsuarios = {
              totalElementos     : 0,
              paginaActual       : 1,
              registrosPorPagina : 10,
              inicio             : 0,
              fin                : 1,
              condicion          : {administrador : {neq: true} },
              filtro_datos       : {},
              fila_seleccionada  : 0
            };

            inicia();

            function inicia() {


                  vm.tablaListaUsuarios.filtro_datos = {
                          filter: {
                              where: vm.tablaListaUsuarios.condicion,
                              order: ['nombreCompleto ASC'],
                              limit: vm.tablaListaUsuarios.registrosPorPagina,
                              skip: vm.tablaListaUsuarios.paginaActual - 1,
                          }
                  };

                  vm.usuarios = {};
                  vm.UsuarioSeleccionado = {};
                  vm.tablaListaUsuarios.fila_seleccionada = undefined;
                  vm.client = 1;

                  tablaDatosService.obtiene_datos_tabla(Usuarios, vm.tablaListaUsuarios)
                  .then(function(respuesta) {

                        vm.tablaListaUsuarios.totalElementos = respuesta.total_registros;
                        vm.tablaListaUsuarios.inicio = respuesta.inicio;
                        vm.tablaListaUsuarios.fin = respuesta.fin;

                        if(vm.tablaListaUsuarios.totalElementos > 0)
                        {
                            vm.usuarios = respuesta.datos;
                            vm.UsuarioSeleccionado = vm.usuarios[0];
                            vm.client = 2;
                            vm.tablaListaUsuarios.fila_seleccionada = 0;
                            muestraDatosUsuarioActual(vm.UsuarioSeleccionado);
                        }
                  });

            }


            function muestraResultadosBusqueda() {

                  vm.usuarios = {};
                  vm.UsuarioSeleccionado = {};
                  vm.tablaListaUsuarios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaUsuarios.paginaActual = 1;
                  vm.tablaListaUsuarios.inicio = 0;
                  vm.tablaListaUsuarios.fin = 1;
                  vm.tablaListaUsuarios.condicion = {
                                    and: [
                                      {administrador: {neq: true}},
                                      {
                                        nombreCompleto: {
                                          like: '%' + vm.nombre_buscar + '%',
                                        }
                                      }
                                    ]
                                };

                  tablaDatosService.obtiene_datos_tabla(Usuarios, vm.tablaListaUsuarios)
                  .then(function(respuesta) {

                        vm.tablaListaUsuarios.totalElementos = respuesta.total_registros;
                        vm.tablaListaUsuarios.inicio = respuesta.inicio;
                        vm.tablaListaUsuarios.fin = respuesta.fin;

                        if(vm.tablaListaUsuarios.totalElementos > 0)
                        {
                            vm.usuarios = respuesta.datos;
                            vm.UsuarioSeleccionado = vm.usuarios[0];
                            vm.client = 2;
                            vm.tablaListaUsuarios.fila_seleccionada = 0;
                            muestraDatosUsuarioActual(vm.UsuarioSeleccionado);
                        }

                        vm.mostrarbtnLimpiar = true;
                  });
            };


            function limpiaBusqueda() {

                  vm.usuarios = {};
                  vm.UsuarioSeleccionado = {};
                  vm.tablaListaUsuarios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaUsuarios.paginaActual = 1;
                  vm.tablaListaUsuarios.inicio = 0;
                  vm.tablaListaUsuarios.fin = 1;
                  vm.tablaListaUsuarios.condicion = {administrador: {neq: true} };

                  tablaDatosService.obtiene_datos_tabla(Usuarios, vm.tablaListaUsuarios)
                  .then(function(respuesta) {

                        vm.tablaListaUsuarios.totalElementos = respuesta.total_registros;
                        vm.tablaListaUsuarios.inicio = respuesta.inicio;
                        vm.tablaListaUsuarios.fin = respuesta.fin;

                        if(vm.tablaListaUsuarios.totalElementos > 0)
                        {
                            vm.usuarios = respuesta.datos;
                            vm.UsuarioSeleccionado = vm.usuarios[0];
                            vm.client = 2;
                            vm.tablaListaUsuarios.fila_seleccionada = 0;
                            muestraDatosUsuarioActual(vm.UsuarioSeleccionado);
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function cambiarPagina() {

                  if(vm.tablaListaUsuarios.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(Usuarios, vm.tablaListaUsuarios)
                        .then(function(respuesta) {

                            vm.tablaListaUsuarios.inicio = respuesta.inicio;
                            vm.tablaListaUsuarios.fin = respuesta.fin;

                            vm.usuarios = respuesta.datos;
                            vm.UsuarioSeleccionado = vm.usuarios[0];
                            vm.client = 2;
                            vm.tablaListaUsuarios.fila_seleccionada = 0;
                            muestraDatosUsuarioActual(vm.UsuarioSeleccionado);
                        });
                  }
            }


            function muestraDatosUsuarioActual(seleccion) {

                  var index = vm.usuarios.indexOf(seleccion);
                  vm.UsuarioSeleccionado = seleccion;
                  vm.client = 2;
                  vm.tablaListaUsuarios.fila_seleccionada = index;
            };


            function edita_datos_usuario(UsuarioSeleccionado) {

                    vm.usuarioEditar = {
                        id                             : UsuarioSeleccionado.id,
                        nombreCompleto                 : UsuarioSeleccionado.nombreCompleto,
                        area                           : UsuarioSeleccionado.area,
                        email                          : UsuarioSeleccionado.email,
                        username                       : UsuarioSeleccionado.username,
                        activo                         : UsuarioSeleccionado.activo,
                        prediosNoClasificados          : UsuarioSeleccionado.prediosNoClasificados,
                        prediosRegistro                : UsuarioSeleccionado.prediosRegistro,
                        prediosDisponibles             : UsuarioSeleccionado.prediosDisponibles,
                        edicionPrediosDisponibles      : UsuarioSeleccionado.edicionPrediosDisponibles,
                        prediosContratados             : UsuarioSeleccionado.prediosContratados,
                        edicionContratadosBeneficiario : UsuarioSeleccionado.edicionContratadosBeneficiario,
                        edicionContratadosFinanciero   : UsuarioSeleccionado.edicionContratadosFinanciero,
                        edicionContratadosJuridico     : UsuarioSeleccionado.edicionContratadosJuridico,
                        prediosTitulados               : UsuarioSeleccionado.prediosTitulados,
                        edicionPrediosTitulados        : UsuarioSeleccionado.edicionPrediosTitulados,
                        reserva                        : UsuarioSeleccionado.reserva,
                        edicionReserva                 : UsuarioSeleccionado.edicionReserva
                   };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_usuarios/modal-edita-usuario.html',
                        windowClass: "animated fadeIn",
                        controller: 'ModalEditaUsuarioController as vm',
                        size: 'lg',
                        resolve: {
                          usuarioEditar: function () { return vm.usuarioEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                        vm.UsuarioSeleccionado.nombreCompleto                 = respuesta.nombreCompleto;
                        vm.UsuarioSeleccionado.area                           = respuesta.area;
                        vm.UsuarioSeleccionado.email                          = respuesta.email;
                        vm.UsuarioSeleccionado.username                       = respuesta.username;
                        vm.UsuarioSeleccionado.activo                         = respuesta.activo;
                        vm.UsuarioSeleccionado.prediosNoClasificados          = respuesta.prediosNoClasificados;
                        vm.UsuarioSeleccionado.prediosRegistro                = respuesta.prediosRegistro;
                        vm.UsuarioSeleccionado.prediosDisponibles             = respuesta.prediosDisponibles;
                        vm.UsuarioSeleccionado.edicionPrediosDisponibles      = respuesta.edicionPrediosDisponibles;
                        vm.UsuarioSeleccionado.prediosContratados             = respuesta.prediosContratados;
                        vm.UsuarioSeleccionado.edicionContratadosBeneficiario = respuesta.edicionContratadosBeneficiario;
                        vm.UsuarioSeleccionado.edicionContratadosFinanciero   = respuesta.edicionContratadosFinanciero;
                        vm.UsuarioSeleccionado.edicionContratadosJuridico     = respuesta.edicionContratadosJuridico;
                        vm.UsuarioSeleccionado.prediosTitulados               = respuesta.prediosTitulados;
                        vm.UsuarioSeleccionado.edicionPrediosTitulados        = respuesta.edicionPrediosTitulados;
                        vm.UsuarioSeleccionado.reserva                        = respuesta.reserva;
                        vm.UsuarioSeleccionado.edicionReserva                 = respuesta.edicionReserva;
                    }, function () {
                    });
            };


            function nuevo_usuario() {

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_usuarios/modal-edita-usuario.html',
                        windowClass: "animated fadeIn",
                        controller: 'ModalNuevoUsuarioController as vm',
                        size: 'lg'
                    });

                    modalInstance.result.then(function () {
                        vm.limpiaBusqueda();
                    }, function () {
                    });
            };


            function elimina_usuario(UsuarioSeleccionado) {

                  swal({
                    title: "Confirmar",
                    html: 'Se eliminar&aacute; el usuario <strong>'+ UsuarioSeleccionado.nombreCompleto +'</strong>, ¿Continuar?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: true
                  }, function(){
                          swal.disableButtons();

                          Usuarios.deleteById({ id: UsuarioSeleccionado.id })
                          .$promise
                          .then(function() { 
                                vm.limpiaBusqueda();
                                swal('Usuario eliminado', '', 'success');
                          });
                  });

            };

    };

})();