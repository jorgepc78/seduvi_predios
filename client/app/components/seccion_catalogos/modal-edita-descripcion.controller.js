(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDescripcionController', ModalEditaDescripcionController);

        ModalEditaDescripcionController.$inject = ['$modalInstance', 'registroEditar', 'CatEstatusPredioDisponibles', 'CatEstatusReserva', 'CatEstatusTitulo', 'CatModalidadPrograma', 'CatSituacionFinanciera', 'CatSituacionJuridica', 'CatTipoDocumentoAsignacion'];

    function ModalEditaDescripcionController($modalInstance, registroEditar, CatEstatusPredioDisponibles, CatEstatusReserva, CatEstatusTitulo, CatModalidadPrograma, CatSituacionFinanciera, CatSituacionJuridica, CatTipoDocumentoAsignacion) {

            var vm = this;
            
            var CatalogoMostrar;
            var DatosActualizar;
            vm.registroEditar = registroEditar;
            vm.guardar = guardar;

            function guardar() {

                if(vm.registroEditar.catalogo == 'estatus_disponibles')
                {
                    CatalogoMostrar = CatEstatusPredioDisponibles;
                    DatosActualizar = {estatusDisponibles : vm.registroEditar.descripcion};
                }
                else if(vm.registroEditar.catalogo == 'estatus_reserva')
                {
                    CatalogoMostrar = CatEstatusReserva;
                    DatosActualizar = {descripcionEstatusReserva : vm.registroEditar.descripcion};
                }
                else if(vm.registroEditar.catalogo == 'estatus_titulo')
                {
                    CatalogoMostrar = CatEstatusTitulo;
                    DatosActualizar = {estatusTitulo : vm.registroEditar.descripcion};
                }
                else if(vm.registroEditar.catalogo == 'modalidad_programa')
                {
                    CatalogoMostrar = CatModalidadPrograma;
                    DatosActualizar = {modalidadPrograma : vm.registroEditar.descripcion};
                }
                else if(vm.registroEditar.catalogo == 'situacion_financiera')
                {
                    CatalogoMostrar = CatSituacionFinanciera;
                    DatosActualizar = {situacionFinanciera : vm.registroEditar.descripcion};
                }
                else if(vm.registroEditar.catalogo == 'situacion_juridica')
                {
                    CatalogoMostrar = CatSituacionJuridica;
                    DatosActualizar = {situacionJuridica : vm.registroEditar.descripcion};
                }
                else if(vm.registroEditar.catalogo == 'documento_asignacion')
                {
                    CatalogoMostrar = CatTipoDocumentoAsignacion;
                    DatosActualizar = {documentoAsignacion : vm.registroEditar.descripcion};
                }

                CatalogoMostrar.prototype$updateAttributes(
                {
                    id: vm.registroEditar.id
                },
                    DatosActualizar
                )
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.registroEditar);
                });
            };
    };

})();