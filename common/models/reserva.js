module.exports = function(Reserva) {

    Reserva.geometria = function(id, cb) {
		
		var ds = Reserva.dataSource;
		var sql = 'SELECT j.objectid, j.path[2] AS index, st_x(st_transform(j.geom, 4326)) AS long, st_y(st_transform(j.geom, 4326)) AS lat '+
				  'FROM (SELECT g.objectid, (st_dumppoints(g.shape)).path AS path, (st_dumppoints(g.shape)).geom AS geom '+
				  'FROM (SELECT sde.reserva.objectid, sde.reserva.shape FROM sde.reserva) g) j WHERE j.objectid = ' + id;

		ds.connector.execute(sql, '', function(err, resultado) {
			if (err);
			cb(err, resultado);
		});

    }
     
    Reserva.remoteMethod(
        'geometria', 
        {
          accepts: {arg: 'id', type: 'number'},
          returns: {arg: 'data', type: 'array', root: true },
          http: {path: '/geometria', verb: 'get'}
        }
    );

};
