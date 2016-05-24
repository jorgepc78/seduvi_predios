(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Usuarios
 * @header lbServices.Usuarios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuarios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Usuarios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Usuarios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__findById__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__updateById__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__get__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Queries accessTokens of Usuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__create__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__delete__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$__count__accessTokens
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Counts accessTokens of Usuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#create
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#createMany
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#upsert
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Usuarios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#exists
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Usuarios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#findById
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Usuarios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#find
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Usuarios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#findOne
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Usuarios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#updateAll
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Usuarios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#deleteById
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Usuarios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#count
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Usuarios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#prototype$updateAttributes
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Usuarios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#createChangeStream
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Usuarios/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#login
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Usuarios/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#logout
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Usuarios/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#confirm
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Usuarios/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#resetPassword
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Usuarios/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#getCurrent
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Usuarios" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Usuarios#updateOrCreate
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#update
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#destroyById
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#removeById
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuarios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#getCachedCurrent
         * @methodOf lbServices.Usuarios
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Usuarios#login} or
         * {@link lbServices.Usuarios#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Usuarios instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#isAuthenticated
         * @methodOf lbServices.Usuarios
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuarios#getCurrentId
         * @methodOf lbServices.Usuarios
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Usuarios#modelName
    * @propertyOf lbServices.Usuarios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Usuarios`.
    */
    R.modelName = "Usuarios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatColonias
 * @header lbServices.CatColonias
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatColonias` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatColonias",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatColonias/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#create
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatColonias",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#createMany
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatColonias",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#upsert
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatColonias",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#exists
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatColonias/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#findById
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatColonias/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#find
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatColonias",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#findOne
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatColonias/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#updateAll
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatColonias/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#deleteById
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatColonias/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#count
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatColonias/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#prototype$updateAttributes
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatColonias/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#createChangeStream
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatColonias/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.colonia_pertenece() instead.
        "::get::TdPrediosInventario::colonia_pertenece": {
          url: urlBase + "/TdPrediosInventarios/:id/colonia_pertenece",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatColonias#updateOrCreate
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#update
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#destroyById
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatColonias#removeById
         * @methodOf lbServices.CatColonias
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatColonias#modelName
    * @propertyOf lbServices.CatColonias
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatColonias`.
    */
    R.modelName = "CatColonias";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatEstatusPredioDisponibles
 * @header lbServices.CatEstatusPredioDisponibles
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatEstatusPredioDisponibles` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatEstatusPredioDisponibles",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatEstatusPredioDisponibles/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#create
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatEstatusPredioDisponibles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#createMany
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatEstatusPredioDisponibles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#upsert
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatEstatusPredioDisponibles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#exists
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatEstatusPredioDisponibles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#findById
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatEstatusPredioDisponibles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#find
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatEstatusPredioDisponibles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#findOne
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatEstatusPredioDisponibles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#updateAll
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatEstatusPredioDisponibles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#deleteById
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatEstatusPredioDisponibles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#count
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatEstatusPredioDisponibles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#prototype$updateAttributes
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatEstatusPredioDisponibles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#createChangeStream
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatEstatusPredioDisponibles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.disponibles_estatus() instead.
        "::get::TdPrediosInventario::disponibles_estatus": {
          url: urlBase + "/TdPrediosInventarios/:id/disponibles_estatus",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#updateOrCreate
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#update
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#destroyById
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusPredioDisponibles#removeById
         * @methodOf lbServices.CatEstatusPredioDisponibles
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatEstatusPredioDisponibles#modelName
    * @propertyOf lbServices.CatEstatusPredioDisponibles
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatEstatusPredioDisponibles`.
    */
    R.modelName = "CatEstatusPredioDisponibles";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatLocalidades
 * @header lbServices.CatLocalidades
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatLocalidades` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatLocalidades",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatLocalidades/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#create
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatLocalidades",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#createMany
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatLocalidades",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#upsert
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatLocalidades",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#exists
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatLocalidades/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#findById
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatLocalidades/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#find
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatLocalidades",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#findOne
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatLocalidades/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#updateAll
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatLocalidades/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#deleteById
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatLocalidades/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#count
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatLocalidades/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#prototype$updateAttributes
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatLocalidades/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#createChangeStream
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatLocalidades/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.localidad_pertenece() instead.
        "::get::TdPrediosInventario::localidad_pertenece": {
          url: urlBase + "/TdPrediosInventarios/:id/localidad_pertenece",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#updateOrCreate
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#update
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#destroyById
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatLocalidades#removeById
         * @methodOf lbServices.CatLocalidades
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatLocalidades#modelName
    * @propertyOf lbServices.CatLocalidades
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatLocalidades`.
    */
    R.modelName = "CatLocalidades";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatEstatusTitulo
 * @header lbServices.CatEstatusTitulo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatEstatusTitulo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatEstatusTitulo",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatEstatusTitulos/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#create
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatEstatusTitulos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#createMany
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatEstatusTitulos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#upsert
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatEstatusTitulos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#exists
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatEstatusTitulos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#findById
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatEstatusTitulos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#find
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatEstatusTitulos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#findOne
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatEstatusTitulos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#updateAll
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatEstatusTitulos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#deleteById
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatEstatusTitulos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#count
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatEstatusTitulos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#prototype$updateAttributes
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatEstatusTitulos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#createChangeStream
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatEstatusTitulos/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#updateOrCreate
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#update
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#destroyById
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusTitulo#removeById
         * @methodOf lbServices.CatEstatusTitulo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusTitulo` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatEstatusTitulo#modelName
    * @propertyOf lbServices.CatEstatusTitulo
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatEstatusTitulo`.
    */
    R.modelName = "CatEstatusTitulo";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatMunicipios
 * @header lbServices.CatMunicipios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatMunicipios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatMunicipios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatMunicipios/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.findById() instead.
        "prototype$__findById__predios_pertenecientes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/:fk",
          method: "GET"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.destroyById() instead.
        "prototype$__destroyById__predios_pertenecientes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.updateById() instead.
        "prototype$__updateById__predios_pertenecientes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes() instead.
        "prototype$__get__predios_pertenecientes": {
          isArray: true,
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "GET"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.create() instead.
        "prototype$__create__predios_pertenecientes": {
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "POST"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.destroyAll() instead.
        "prototype$__delete__predios_pertenecientes": {
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "DELETE"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.count() instead.
        "prototype$__count__predios_pertenecientes": {
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#create
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatMunicipios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#createMany
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatMunicipios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#upsert
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatMunicipios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#exists
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatMunicipios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#findById
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatMunicipios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#find
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatMunicipios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#findOne
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatMunicipios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#updateAll
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatMunicipios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#deleteById
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatMunicipios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#count
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatMunicipios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#prototype$updateAttributes
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatMunicipios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#createChangeStream
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatMunicipios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.municipio_pertenece() instead.
        "::get::TdPrediosInventario::municipio_pertenece": {
          url: urlBase + "/TdPrediosInventarios/:id/municipio_pertenece",
          method: "GET"
        },

        // INTERNAL. Use Reserva.municipio_pertenece() instead.
        "::get::Reserva::municipio_pertenece": {
          url: urlBase + "/Reservas/:id/municipio_pertenece",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#updateOrCreate
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#update
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#destroyById
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#removeById
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatMunicipios#modelName
    * @propertyOf lbServices.CatMunicipios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatMunicipios`.
    */
    R.modelName = "CatMunicipios";

    /**
     * @ngdoc object
     * @name lbServices.CatMunicipios.predios_pertenecientes
     * @header lbServices.CatMunicipios.predios_pertenecientes
     * @object
     * @description
     *
     * The object `CatMunicipios.predios_pertenecientes` groups methods
     * manipulating `TdPrediosInventario` instances related to `CatMunicipios`.
     *
     * Call {@link lbServices.CatMunicipios#predios_pertenecientes CatMunicipios.predios_pertenecientes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios#predios_pertenecientes
         * @methodOf lbServices.CatMunicipios
         *
         * @description
         *
         * Queries predios_pertenecientes of CatMunicipios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R.predios_pertenecientes = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::get::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#count
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Counts predios_pertenecientes of CatMunicipios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.predios_pertenecientes.count = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::count::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#create
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Creates a new instance in predios_pertenecientes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R.predios_pertenecientes.create = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::create::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#createMany
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Creates a new instance in predios_pertenecientes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R.predios_pertenecientes.createMany = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::createMany::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#destroyAll
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Deletes all predios_pertenecientes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.predios_pertenecientes.destroyAll = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::delete::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#destroyById
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Delete a related item by id for predios_pertenecientes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for predios_pertenecientes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.predios_pertenecientes.destroyById = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::destroyById::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#findById
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Find a related item by id for predios_pertenecientes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for predios_pertenecientes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R.predios_pertenecientes.findById = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::findById::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CatMunicipios.predios_pertenecientes#updateById
         * @methodOf lbServices.CatMunicipios.predios_pertenecientes
         *
         * @description
         *
         * Update a related item by id for predios_pertenecientes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for predios_pertenecientes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R.predios_pertenecientes.updateById = function() {
          var TargetResource = $injector.get("TdPrediosInventario");
          var action = TargetResource["::updateById::CatMunicipios::predios_pertenecientes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatModalidadPrograma
 * @header lbServices.CatModalidadPrograma
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatModalidadPrograma` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatModalidadPrograma",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatModalidadProgramas/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#create
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatModalidadProgramas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#createMany
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatModalidadProgramas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#upsert
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatModalidadProgramas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#exists
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatModalidadProgramas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#findById
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatModalidadProgramas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#find
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatModalidadProgramas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#findOne
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatModalidadProgramas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#updateAll
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatModalidadProgramas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#deleteById
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatModalidadProgramas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#count
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatModalidadProgramas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#prototype$updateAttributes
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatModalidadProgramas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#createChangeStream
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatModalidadProgramas/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.modalidad_programa_benef() instead.
        "::get::TdPrediosInventario::modalidad_programa_benef": {
          url: urlBase + "/TdPrediosInventarios/:id/modalidad_programa_benef",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#updateOrCreate
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#update
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#destroyById
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatModalidadPrograma#removeById
         * @methodOf lbServices.CatModalidadPrograma
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatModalidadPrograma#modelName
    * @propertyOf lbServices.CatModalidadPrograma
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatModalidadPrograma`.
    */
    R.modelName = "CatModalidadPrograma";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatSituacionFinanciera
 * @header lbServices.CatSituacionFinanciera
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatSituacionFinanciera` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatSituacionFinanciera",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatSituacionFinancieras/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#create
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatSituacionFinancieras",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#createMany
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatSituacionFinancieras",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#upsert
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatSituacionFinancieras",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#exists
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatSituacionFinancieras/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#findById
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatSituacionFinancieras/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#find
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatSituacionFinancieras",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#findOne
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatSituacionFinancieras/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#updateAll
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatSituacionFinancieras/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#deleteById
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatSituacionFinancieras/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#count
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatSituacionFinancieras/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#prototype$updateAttributes
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatSituacionFinancieras/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#createChangeStream
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatSituacionFinancieras/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.situacion_financiera() instead.
        "::get::TdPrediosInventario::situacion_financiera": {
          url: urlBase + "/TdPrediosInventarios/:id/situacion_financiera",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#updateOrCreate
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#update
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#destroyById
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFinanciera#removeById
         * @methodOf lbServices.CatSituacionFinanciera
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatSituacionFinanciera#modelName
    * @propertyOf lbServices.CatSituacionFinanciera
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatSituacionFinanciera`.
    */
    R.modelName = "CatSituacionFinanciera";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatSituacionFisica
 * @header lbServices.CatSituacionFisica
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatSituacionFisica` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatSituacionFisica",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatSituacionFisicas/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#create
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatSituacionFisicas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#createMany
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatSituacionFisicas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#upsert
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatSituacionFisicas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#exists
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatSituacionFisicas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#findById
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatSituacionFisicas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#find
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatSituacionFisicas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#findOne
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatSituacionFisicas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#updateAll
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatSituacionFisicas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#deleteById
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatSituacionFisicas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#count
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatSituacionFisicas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#prototype$updateAttributes
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatSituacionFisicas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#createChangeStream
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatSituacionFisicas/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#updateOrCreate
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#update
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#destroyById
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionFisica#removeById
         * @methodOf lbServices.CatSituacionFisica
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFisica` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatSituacionFisica#modelName
    * @propertyOf lbServices.CatSituacionFisica
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatSituacionFisica`.
    */
    R.modelName = "CatSituacionFisica";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatSituacionGeomPredio
 * @header lbServices.CatSituacionGeomPredio
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatSituacionGeomPredio` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatSituacionGeomPredio",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatSituacionGeomPredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#create
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatSituacionGeomPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#createMany
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatSituacionGeomPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#upsert
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatSituacionGeomPredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#exists
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatSituacionGeomPredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#findById
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatSituacionGeomPredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#find
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatSituacionGeomPredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#findOne
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatSituacionGeomPredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#updateAll
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatSituacionGeomPredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#deleteById
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatSituacionGeomPredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#count
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatSituacionGeomPredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#prototype$updateAttributes
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatSituacionGeomPredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#createChangeStream
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatSituacionGeomPredios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.situacion_geom() instead.
        "::get::TdPrediosInventario::situacion_geom": {
          url: urlBase + "/TdPrediosInventarios/:id/situacion_geom",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#updateOrCreate
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#update
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#destroyById
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionGeomPredio#removeById
         * @methodOf lbServices.CatSituacionGeomPredio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatSituacionGeomPredio#modelName
    * @propertyOf lbServices.CatSituacionGeomPredio
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatSituacionGeomPredio`.
    */
    R.modelName = "CatSituacionGeomPredio";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatSituacionJuridica
 * @header lbServices.CatSituacionJuridica
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatSituacionJuridica` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatSituacionJuridica",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatSituacionJuridicas/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#create
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatSituacionJuridicas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#createMany
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatSituacionJuridicas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#upsert
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatSituacionJuridicas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#exists
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatSituacionJuridicas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#findById
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatSituacionJuridicas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#find
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatSituacionJuridicas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#findOne
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatSituacionJuridicas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#updateAll
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatSituacionJuridicas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#deleteById
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatSituacionJuridicas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#count
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatSituacionJuridicas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#prototype$updateAttributes
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatSituacionJuridicas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#createChangeStream
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatSituacionJuridicas/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.situacion_titulo() instead.
        "::get::TdPrediosInventario::situacion_titulo": {
          url: urlBase + "/TdPrediosInventarios/:id/situacion_titulo",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#updateOrCreate
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#update
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#destroyById
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatSituacionJuridica#removeById
         * @methodOf lbServices.CatSituacionJuridica
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatSituacionJuridica#modelName
    * @propertyOf lbServices.CatSituacionJuridica
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatSituacionJuridica`.
    */
    R.modelName = "CatSituacionJuridica";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatTipoAsignacion
 * @header lbServices.CatTipoAsignacion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatTipoAsignacion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatTipoAsignacion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatTipoAsignacions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#create
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatTipoAsignacions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#createMany
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatTipoAsignacions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#upsert
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatTipoAsignacions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#exists
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatTipoAsignacions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#findById
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatTipoAsignacions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#find
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatTipoAsignacions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#findOne
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatTipoAsignacions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#updateAll
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatTipoAsignacions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#deleteById
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatTipoAsignacions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#count
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatTipoAsignacions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#prototype$updateAttributes
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatTipoAsignacions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#createChangeStream
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatTipoAsignacions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.tipo_asignacion_benef() instead.
        "::get::TdPrediosInventario::tipo_asignacion_benef": {
          url: urlBase + "/TdPrediosInventarios/:id/tipo_asignacion_benef",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#updateOrCreate
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#update
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#destroyById
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoAsignacion#removeById
         * @methodOf lbServices.CatTipoAsignacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatTipoAsignacion#modelName
    * @propertyOf lbServices.CatTipoAsignacion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatTipoAsignacion`.
    */
    R.modelName = "CatTipoAsignacion";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatTipoDocumentoAsignacion
 * @header lbServices.CatTipoDocumentoAsignacion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatTipoDocumentoAsignacion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatTipoDocumentoAsignacion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatTipoDocumentoAsignacions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#create
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatTipoDocumentoAsignacions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#createMany
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatTipoDocumentoAsignacions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#upsert
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatTipoDocumentoAsignacions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#exists
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatTipoDocumentoAsignacions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#findById
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatTipoDocumentoAsignacions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#find
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatTipoDocumentoAsignacions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#findOne
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatTipoDocumentoAsignacions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#updateAll
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatTipoDocumentoAsignacions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#deleteById
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatTipoDocumentoAsignacions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#count
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatTipoDocumentoAsignacions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#prototype$updateAttributes
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatTipoDocumentoAsignacions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#createChangeStream
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatTipoDocumentoAsignacions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.documento_asignacion_benef() instead.
        "::get::TdPrediosInventario::documento_asignacion_benef": {
          url: urlBase + "/TdPrediosInventarios/:id/documento_asignacion_benef",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#updateOrCreate
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#update
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#destroyById
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoDocumentoAsignacion#removeById
         * @methodOf lbServices.CatTipoDocumentoAsignacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatTipoDocumentoAsignacion#modelName
    * @propertyOf lbServices.CatTipoDocumentoAsignacion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatTipoDocumentoAsignacion`.
    */
    R.modelName = "CatTipoDocumentoAsignacion";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatTipoLote
 * @header lbServices.CatTipoLote
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatTipoLote` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatTipoLote",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatTipoLotes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#create
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatTipoLotes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#createMany
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatTipoLotes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#upsert
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatTipoLotes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#exists
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatTipoLotes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#findById
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatTipoLotes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#find
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatTipoLotes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#findOne
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatTipoLotes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#updateAll
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatTipoLotes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#deleteById
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatTipoLotes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#count
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatTipoLotes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#prototype$updateAttributes
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatTipoLotes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#createChangeStream
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatTipoLotes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.tipo_lote() instead.
        "::get::TdPrediosInventario::tipo_lote": {
          url: urlBase + "/TdPrediosInventarios/:id/tipo_lote",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#updateOrCreate
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#update
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#destroyById
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoLote#removeById
         * @methodOf lbServices.CatTipoLote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatTipoLote#modelName
    * @propertyOf lbServices.CatTipoLote
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatTipoLote`.
    */
    R.modelName = "CatTipoLote";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatTipoProcedimiento
 * @header lbServices.CatTipoProcedimiento
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatTipoProcedimiento` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatTipoProcedimiento",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatTipoProcedimientos/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#create
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatTipoProcedimientos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#createMany
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatTipoProcedimientos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#upsert
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatTipoProcedimientos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#exists
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatTipoProcedimientos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#findById
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatTipoProcedimientos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#find
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatTipoProcedimientos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#findOne
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatTipoProcedimientos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#updateAll
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatTipoProcedimientos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#deleteById
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatTipoProcedimientos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#count
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatTipoProcedimientos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#prototype$updateAttributes
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatTipoProcedimientos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#createChangeStream
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatTipoProcedimientos/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#updateOrCreate
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#update
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#destroyById
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatTipoProcedimiento#removeById
         * @methodOf lbServices.CatTipoProcedimiento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoProcedimiento` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatTipoProcedimiento#modelName
    * @propertyOf lbServices.CatTipoProcedimiento
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatTipoProcedimiento`.
    */
    R.modelName = "CatTipoProcedimiento";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.TdPrediosInventario
 * @header lbServices.TdPrediosInventario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TdPrediosInventario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TdPrediosInventario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/TdPrediosInventarios/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use TdPrediosInventario.municipio_pertenece() instead.
        "prototype$__get__municipio_pertenece": {
          url: urlBase + "/TdPrediosInventarios/:id/municipio_pertenece",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.localidad_pertenece() instead.
        "prototype$__get__localidad_pertenece": {
          url: urlBase + "/TdPrediosInventarios/:id/localidad_pertenece",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.colonia_pertenece() instead.
        "prototype$__get__colonia_pertenece": {
          url: urlBase + "/TdPrediosInventarios/:id/colonia_pertenece",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.tipo_lote() instead.
        "prototype$__get__tipo_lote": {
          url: urlBase + "/TdPrediosInventarios/:id/tipo_lote",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.situacion_geom() instead.
        "prototype$__get__situacion_geom": {
          url: urlBase + "/TdPrediosInventarios/:id/situacion_geom",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.disponibles_estatus() instead.
        "prototype$__get__disponibles_estatus": {
          url: urlBase + "/TdPrediosInventarios/:id/disponibles_estatus",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.tipo_asignacion_benef() instead.
        "prototype$__get__tipo_asignacion_benef": {
          url: urlBase + "/TdPrediosInventarios/:id/tipo_asignacion_benef",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.modalidad_programa_benef() instead.
        "prototype$__get__modalidad_programa_benef": {
          url: urlBase + "/TdPrediosInventarios/:id/modalidad_programa_benef",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.documento_asignacion_benef() instead.
        "prototype$__get__documento_asignacion_benef": {
          url: urlBase + "/TdPrediosInventarios/:id/documento_asignacion_benef",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.situacion_financiera() instead.
        "prototype$__get__situacion_financiera": {
          url: urlBase + "/TdPrediosInventarios/:id/situacion_financiera",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.situacion_titulo() instead.
        "prototype$__get__situacion_titulo": {
          url: urlBase + "/TdPrediosInventarios/:id/situacion_titulo",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.findById() instead.
        "prototype$__findById__historico_predio": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/:fk",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.destroyById() instead.
        "prototype$__destroyById__historico_predio": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.updateById() instead.
        "prototype$__updateById__historico_predio": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/:fk",
          method: "PUT"
        },

        // INTERNAL. Use TdPrediosInventario.nodos_poligono() instead.
        "prototype$__get__nodos_poligono": {
          url: urlBase + "/TdPrediosInventarios/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio() instead.
        "prototype$__get__historico_predio": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.create() instead.
        "prototype$__create__historico_predio": {
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.destroyAll() instead.
        "prototype$__delete__historico_predio": {
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "DELETE"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.count() instead.
        "prototype$__count__historico_predio": {
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#create
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/TdPrediosInventarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#createMany
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#upsert
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/TdPrediosInventarios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#exists
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/TdPrediosInventarios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#findById
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/TdPrediosInventarios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#find
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#findOne
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/TdPrediosInventarios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#updateAll
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/TdPrediosInventarios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#deleteById
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/TdPrediosInventarios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#count
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/TdPrediosInventarios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#prototype$updateAttributes
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/TdPrediosInventarios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#createChangeStream
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/TdPrediosInventarios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.findById() instead.
        "::findById::CatMunicipios::predios_pertenecientes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/:fk",
          method: "GET"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.destroyById() instead.
        "::destroyById::CatMunicipios::predios_pertenecientes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.updateById() instead.
        "::updateById::CatMunicipios::predios_pertenecientes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes() instead.
        "::get::CatMunicipios::predios_pertenecientes": {
          isArray: true,
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "GET"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.create() instead.
        "::create::CatMunicipios::predios_pertenecientes": {
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "POST"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.createMany() instead.
        "::createMany::CatMunicipios::predios_pertenecientes": {
          isArray: true,
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "POST"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.destroyAll() instead.
        "::delete::CatMunicipios::predios_pertenecientes": {
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes",
          method: "DELETE"
        },

        // INTERNAL. Use CatMunicipios.predios_pertenecientes.count() instead.
        "::count::CatMunicipios::predios_pertenecientes": {
          url: urlBase + "/CatMunicipios/:id/predios_pertenecientes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#updateOrCreate
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#update
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#destroyById
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#removeById
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventario` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.TdPrediosInventario#modelName
    * @propertyOf lbServices.TdPrediosInventario
    * @description
    * The name of the model represented by this $resource,
    * i.e. `TdPrediosInventario`.
    */
    R.modelName = "TdPrediosInventario";


        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#municipio_pertenece
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation municipio_pertenece.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        R.municipio_pertenece = function() {
          var TargetResource = $injector.get("CatMunicipios");
          var action = TargetResource["::get::TdPrediosInventario::municipio_pertenece"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#localidad_pertenece
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation localidad_pertenece.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatLocalidades` object.)
         * </em>
         */
        R.localidad_pertenece = function() {
          var TargetResource = $injector.get("CatLocalidades");
          var action = TargetResource["::get::TdPrediosInventario::localidad_pertenece"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#colonia_pertenece
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation colonia_pertenece.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatColonias` object.)
         * </em>
         */
        R.colonia_pertenece = function() {
          var TargetResource = $injector.get("CatColonias");
          var action = TargetResource["::get::TdPrediosInventario::colonia_pertenece"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#tipo_lote
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation tipo_lote.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoLote` object.)
         * </em>
         */
        R.tipo_lote = function() {
          var TargetResource = $injector.get("CatTipoLote");
          var action = TargetResource["::get::TdPrediosInventario::tipo_lote"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#situacion_geom
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation situacion_geom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionGeomPredio` object.)
         * </em>
         */
        R.situacion_geom = function() {
          var TargetResource = $injector.get("CatSituacionGeomPredio");
          var action = TargetResource["::get::TdPrediosInventario::situacion_geom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#disponibles_estatus
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation disponibles_estatus.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusPredioDisponibles` object.)
         * </em>
         */
        R.disponibles_estatus = function() {
          var TargetResource = $injector.get("CatEstatusPredioDisponibles");
          var action = TargetResource["::get::TdPrediosInventario::disponibles_estatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#tipo_asignacion_benef
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation tipo_asignacion_benef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoAsignacion` object.)
         * </em>
         */
        R.tipo_asignacion_benef = function() {
          var TargetResource = $injector.get("CatTipoAsignacion");
          var action = TargetResource["::get::TdPrediosInventario::tipo_asignacion_benef"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#modalidad_programa_benef
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation modalidad_programa_benef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatModalidadPrograma` object.)
         * </em>
         */
        R.modalidad_programa_benef = function() {
          var TargetResource = $injector.get("CatModalidadPrograma");
          var action = TargetResource["::get::TdPrediosInventario::modalidad_programa_benef"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#documento_asignacion_benef
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation documento_asignacion_benef.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatTipoDocumentoAsignacion` object.)
         * </em>
         */
        R.documento_asignacion_benef = function() {
          var TargetResource = $injector.get("CatTipoDocumentoAsignacion");
          var action = TargetResource["::get::TdPrediosInventario::documento_asignacion_benef"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#situacion_financiera
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation situacion_financiera.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionFinanciera` object.)
         * </em>
         */
        R.situacion_financiera = function() {
          var TargetResource = $injector.get("CatSituacionFinanciera");
          var action = TargetResource["::get::TdPrediosInventario::situacion_financiera"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#situacion_titulo
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation situacion_titulo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatSituacionJuridica` object.)
         * </em>
         */
        R.situacion_titulo = function() {
          var TargetResource = $injector.get("CatSituacionJuridica");
          var action = TargetResource["::get::TdPrediosInventario::situacion_titulo"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.TdPrediosInventario.historico_predio
     * @header lbServices.TdPrediosInventario.historico_predio
     * @object
     * @description
     *
     * The object `TdPrediosInventario.historico_predio` groups methods
     * manipulating `TdPrediosInventarioHistorico` instances related to `TdPrediosInventario`.
     *
     * Call {@link lbServices.TdPrediosInventario#historico_predio TdPrediosInventario.historico_predio()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#historico_predio
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Queries historico_predio of TdPrediosInventario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R.historico_predio = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::get::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#count
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Counts historico_predio of TdPrediosInventario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.historico_predio.count = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::count::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#create
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Creates a new instance in historico_predio of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R.historico_predio.create = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::create::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#createMany
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Creates a new instance in historico_predio of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R.historico_predio.createMany = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::createMany::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#destroyAll
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Deletes all historico_predio of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.historico_predio.destroyAll = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::delete::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#destroyById
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Delete a related item by id for historico_predio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for historico_predio
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.historico_predio.destroyById = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::destroyById::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#findById
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Find a related item by id for historico_predio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for historico_predio
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R.historico_predio.findById = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::findById::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario.historico_predio#updateById
         * @methodOf lbServices.TdPrediosInventario.historico_predio
         *
         * @description
         *
         * Update a related item by id for historico_predio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for historico_predio
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R.historico_predio.updateById = function() {
          var TargetResource = $injector.get("TdPrediosInventarioHistorico");
          var action = TargetResource["::updateById::TdPrediosInventario::historico_predio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventario#nodos_poligono
         * @methodOf lbServices.TdPrediosInventario
         *
         * @description
         *
         * Fetches belongsTo relation nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::get::TdPrediosInventario::nodos_poligono"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.TdPrediosInventarioHistorico
 * @header lbServices.TdPrediosInventarioHistorico
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TdPrediosInventarioHistorico` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TdPrediosInventarioHistorico",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/TdPrediosInventarioHistoricos/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#create
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/TdPrediosInventarioHistoricos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#createMany
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarioHistoricos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#upsert
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/TdPrediosInventarioHistoricos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#exists
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/TdPrediosInventarioHistoricos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#findById
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/TdPrediosInventarioHistoricos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#find
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarioHistoricos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#findOne
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/TdPrediosInventarioHistoricos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#updateAll
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/TdPrediosInventarioHistoricos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#deleteById
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/TdPrediosInventarioHistoricos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#count
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/TdPrediosInventarioHistoricos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#prototype$updateAttributes
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/TdPrediosInventarioHistoricos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#createChangeStream
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/TdPrediosInventarioHistoricos/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.findById() instead.
        "::findById::TdPrediosInventario::historico_predio": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/:fk",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.destroyById() instead.
        "::destroyById::TdPrediosInventario::historico_predio": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.updateById() instead.
        "::updateById::TdPrediosInventario::historico_predio": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/:fk",
          method: "PUT"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio() instead.
        "::get::TdPrediosInventario::historico_predio": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "GET"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.create() instead.
        "::create::TdPrediosInventario::historico_predio": {
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.createMany() instead.
        "::createMany::TdPrediosInventario::historico_predio": {
          isArray: true,
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.destroyAll() instead.
        "::delete::TdPrediosInventario::historico_predio": {
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio",
          method: "DELETE"
        },

        // INTERNAL. Use TdPrediosInventario.historico_predio.count() instead.
        "::count::TdPrediosInventario::historico_predio": {
          url: urlBase + "/TdPrediosInventarios/:id/historico_predio/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#updateOrCreate
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#update
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#destroyById
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.TdPrediosInventarioHistorico#removeById
         * @methodOf lbServices.TdPrediosInventarioHistorico
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TdPrediosInventarioHistorico` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.TdPrediosInventarioHistorico#modelName
    * @propertyOf lbServices.TdPrediosInventarioHistorico
    * @description
    * The name of the model represented by this $resource,
    * i.e. `TdPrediosInventarioHistorico`.
    */
    R.modelName = "TdPrediosInventarioHistorico";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaGeomPredios
 * @header lbServices.VistaGeomPredios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaGeomPredios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaGeomPredios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaGeomPredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#create
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaGeomPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#createMany
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaGeomPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#upsert
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaGeomPredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#exists
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaGeomPredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#findById
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaGeomPredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#find
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaGeomPredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#findOne
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaGeomPredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#updateAll
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaGeomPredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#deleteById
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaGeomPredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#count
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaGeomPredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#prototype$updateAttributes
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaGeomPredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#createChangeStream
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaGeomPredios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use TdPrediosInventario.nodos_poligono() instead.
        "::get::TdPrediosInventario::nodos_poligono": {
          url: urlBase + "/TdPrediosInventarios/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.findById() instead.
        "::findById::VistaPrediosDisponibles::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.destroyById() instead.
        "::destroyById::VistaPrediosDisponibles::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.updateById() instead.
        "::updateById::VistaPrediosDisponibles::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono() instead.
        "::get::VistaPrediosDisponibles::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.create() instead.
        "::create::VistaPrediosDisponibles::nodos_poligono": {
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.createMany() instead.
        "::createMany::VistaPrediosDisponibles::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.destroyAll() instead.
        "::delete::VistaPrediosDisponibles::nodos_poligono": {
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.count() instead.
        "::count::VistaPrediosDisponibles::nodos_poligono": {
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/count",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.findById() instead.
        "::findById::VistaPrediosNoClasificados::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.destroyById() instead.
        "::destroyById::VistaPrediosNoClasificados::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.updateById() instead.
        "::updateById::VistaPrediosNoClasificados::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono() instead.
        "::get::VistaPrediosNoClasificados::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.create() instead.
        "::create::VistaPrediosNoClasificados::nodos_poligono": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.createMany() instead.
        "::createMany::VistaPrediosNoClasificados::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.destroyAll() instead.
        "::delete::VistaPrediosNoClasificados::nodos_poligono": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.count() instead.
        "::count::VistaPrediosNoClasificados::nodos_poligono": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/count",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.findById() instead.
        "::findById::VistaPrediosContratados::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.destroyById() instead.
        "::destroyById::VistaPrediosContratados::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.updateById() instead.
        "::updateById::VistaPrediosContratados::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono() instead.
        "::get::VistaPrediosContratados::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.create() instead.
        "::create::VistaPrediosContratados::nodos_poligono": {
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.createMany() instead.
        "::createMany::VistaPrediosContratados::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.destroyAll() instead.
        "::delete::VistaPrediosContratados::nodos_poligono": {
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.count() instead.
        "::count::VistaPrediosContratados::nodos_poligono": {
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/count",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.findById() instead.
        "::findById::VistaPrediosTitulacion::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.destroyById() instead.
        "::destroyById::VistaPrediosTitulacion::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.updateById() instead.
        "::updateById::VistaPrediosTitulacion::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono() instead.
        "::get::VistaPrediosTitulacion::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.create() instead.
        "::create::VistaPrediosTitulacion::nodos_poligono": {
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.createMany() instead.
        "::createMany::VistaPrediosTitulacion::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.destroyAll() instead.
        "::delete::VistaPrediosTitulacion::nodos_poligono": {
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.count() instead.
        "::count::VistaPrediosTitulacion::nodos_poligono": {
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/count",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.findById() instead.
        "::findById::VistaPrediosDatosRegistro::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.destroyById() instead.
        "::destroyById::VistaPrediosDatosRegistro::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.updateById() instead.
        "::updateById::VistaPrediosDatosRegistro::nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono() instead.
        "::get::VistaPrediosDatosRegistro::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.create() instead.
        "::create::VistaPrediosDatosRegistro::nodos_poligono": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.createMany() instead.
        "::createMany::VistaPrediosDatosRegistro::nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.destroyAll() instead.
        "::delete::VistaPrediosDatosRegistro::nodos_poligono": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.count() instead.
        "::count::VistaPrediosDatosRegistro::nodos_poligono": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#updateOrCreate
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#update
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#destroyById
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaGeomPredios#removeById
         * @methodOf lbServices.VistaGeomPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaGeomPredios#modelName
    * @propertyOf lbServices.VistaGeomPredios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaGeomPredios`.
    */
    R.modelName = "VistaGeomPredios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaPrediosDisponibles
 * @header lbServices.VistaPrediosDisponibles
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaPrediosDisponibles` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaPrediosDisponibles",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaPrediosDisponibles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.findById() instead.
        "prototype$__findById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.destroyById() instead.
        "prototype$__destroyById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.updateById() instead.
        "prototype$__updateById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono() instead.
        "prototype$__get__nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.create() instead.
        "prototype$__create__nodos_poligono": {
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.destroyAll() instead.
        "prototype$__delete__nodos_poligono": {
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDisponibles.nodos_poligono.count() instead.
        "prototype$__count__nodos_poligono": {
          url: urlBase + "/VistaPrediosDisponibles/:id/nodos_poligono/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#create
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaPrediosDisponibles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#createMany
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaPrediosDisponibles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#upsert
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaPrediosDisponibles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#exists
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaPrediosDisponibles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#findById
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaPrediosDisponibles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#find
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaPrediosDisponibles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#findOne
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaPrediosDisponibles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#updateAll
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaPrediosDisponibles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#deleteById
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaPrediosDisponibles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#count
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaPrediosDisponibles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#prototype$updateAttributes
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaPrediosDisponibles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#createChangeStream
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaPrediosDisponibles/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#updateOrCreate
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#update
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#destroyById
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#removeById
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDisponibles` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaPrediosDisponibles#modelName
    * @propertyOf lbServices.VistaPrediosDisponibles
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaPrediosDisponibles`.
    */
    R.modelName = "VistaPrediosDisponibles";

    /**
     * @ngdoc object
     * @name lbServices.VistaPrediosDisponibles.nodos_poligono
     * @header lbServices.VistaPrediosDisponibles.nodos_poligono
     * @object
     * @description
     *
     * The object `VistaPrediosDisponibles.nodos_poligono` groups methods
     * manipulating `VistaGeomPredios` instances related to `VistaPrediosDisponibles`.
     *
     * Call {@link lbServices.VistaPrediosDisponibles#nodos_poligono VistaPrediosDisponibles.nodos_poligono()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles#nodos_poligono
         * @methodOf lbServices.VistaPrediosDisponibles
         *
         * @description
         *
         * Queries nodos_poligono of VistaPrediosDisponibles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::get::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#count
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Counts nodos_poligono of VistaPrediosDisponibles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodos_poligono.count = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::count::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#create
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.create = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::create::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#createMany
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.createMany = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::createMany::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#destroyAll
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Deletes all nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyAll = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::delete::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#destroyById
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Delete a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::destroyById::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#findById
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Find a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.findById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::findById::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDisponibles.nodos_poligono#updateById
         * @methodOf lbServices.VistaPrediosDisponibles.nodos_poligono
         *
         * @description
         *
         * Update a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.updateById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::updateById::VistaPrediosDisponibles::nodos_poligono"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaPrediosNoClasificados
 * @header lbServices.VistaPrediosNoClasificados
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaPrediosNoClasificados` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaPrediosNoClasificados",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaPrediosNoClasificados/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.findById() instead.
        "prototype$__findById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.destroyById() instead.
        "prototype$__destroyById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.updateById() instead.
        "prototype$__updateById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono() instead.
        "prototype$__get__nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.create() instead.
        "prototype$__create__nodos_poligono": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.destroyAll() instead.
        "prototype$__delete__nodos_poligono": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosNoClasificados.nodos_poligono.count() instead.
        "prototype$__count__nodos_poligono": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/nodos_poligono/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#create
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaPrediosNoClasificados",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#createMany
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaPrediosNoClasificados",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#upsert
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaPrediosNoClasificados",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#exists
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaPrediosNoClasificados/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#findById
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaPrediosNoClasificados/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#find
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaPrediosNoClasificados",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#findOne
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaPrediosNoClasificados/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#updateAll
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaPrediosNoClasificados/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#deleteById
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaPrediosNoClasificados/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#count
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaPrediosNoClasificados/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#prototype$updateAttributes
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaPrediosNoClasificados/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#createChangeStream
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaPrediosNoClasificados/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#updateOrCreate
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#update
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#destroyById
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#removeById
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosNoClasificados` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaPrediosNoClasificados#modelName
    * @propertyOf lbServices.VistaPrediosNoClasificados
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaPrediosNoClasificados`.
    */
    R.modelName = "VistaPrediosNoClasificados";

    /**
     * @ngdoc object
     * @name lbServices.VistaPrediosNoClasificados.nodos_poligono
     * @header lbServices.VistaPrediosNoClasificados.nodos_poligono
     * @object
     * @description
     *
     * The object `VistaPrediosNoClasificados.nodos_poligono` groups methods
     * manipulating `VistaGeomPredios` instances related to `VistaPrediosNoClasificados`.
     *
     * Call {@link lbServices.VistaPrediosNoClasificados#nodos_poligono VistaPrediosNoClasificados.nodos_poligono()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados#nodos_poligono
         * @methodOf lbServices.VistaPrediosNoClasificados
         *
         * @description
         *
         * Queries nodos_poligono of VistaPrediosNoClasificados.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::get::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#count
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Counts nodos_poligono of VistaPrediosNoClasificados.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodos_poligono.count = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::count::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#create
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.create = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::create::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#createMany
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.createMany = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::createMany::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#destroyAll
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Deletes all nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyAll = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::delete::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#destroyById
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Delete a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::destroyById::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#findById
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Find a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.findById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::findById::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosNoClasificados.nodos_poligono#updateById
         * @methodOf lbServices.VistaPrediosNoClasificados.nodos_poligono
         *
         * @description
         *
         * Update a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.updateById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::updateById::VistaPrediosNoClasificados::nodos_poligono"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaLocalidadesPredios
 * @header lbServices.VistaLocalidadesPredios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaLocalidadesPredios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaLocalidadesPredios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaLocalidadesPredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#create
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaLocalidadesPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#createMany
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaLocalidadesPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#upsert
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaLocalidadesPredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#exists
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaLocalidadesPredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#findById
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaLocalidadesPredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#find
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaLocalidadesPredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#findOne
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaLocalidadesPredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#updateAll
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaLocalidadesPredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#deleteById
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaLocalidadesPredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#count
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaLocalidadesPredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#prototype$updateAttributes
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaLocalidadesPredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#createChangeStream
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaLocalidadesPredios/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#updateOrCreate
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#update
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#destroyById
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaLocalidadesPredios#removeById
         * @methodOf lbServices.VistaLocalidadesPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaLocalidadesPredios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaLocalidadesPredios#modelName
    * @propertyOf lbServices.VistaLocalidadesPredios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaLocalidadesPredios`.
    */
    R.modelName = "VistaLocalidadesPredios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaColoniasPredios
 * @header lbServices.VistaColoniasPredios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaColoniasPredios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaColoniasPredios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaColoniasPredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#create
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaColoniasPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#createMany
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaColoniasPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#upsert
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaColoniasPredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#exists
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaColoniasPredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#findById
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaColoniasPredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#find
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaColoniasPredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#findOne
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaColoniasPredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#updateAll
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaColoniasPredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#deleteById
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaColoniasPredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#count
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaColoniasPredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#prototype$updateAttributes
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaColoniasPredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#createChangeStream
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaColoniasPredios/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#updateOrCreate
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#update
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#destroyById
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaColoniasPredios#removeById
         * @methodOf lbServices.VistaColoniasPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaColoniasPredios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaColoniasPredios#modelName
    * @propertyOf lbServices.VistaColoniasPredios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaColoniasPredios`.
    */
    R.modelName = "VistaColoniasPredios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaPrediosContratados
 * @header lbServices.VistaPrediosContratados
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaPrediosContratados` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaPrediosContratados",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaPrediosContratados/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.findById() instead.
        "prototype$__findById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.destroyById() instead.
        "prototype$__destroyById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.updateById() instead.
        "prototype$__updateById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono() instead.
        "prototype$__get__nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.create() instead.
        "prototype$__create__nodos_poligono": {
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.destroyAll() instead.
        "prototype$__delete__nodos_poligono": {
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosContratados.nodos_poligono.count() instead.
        "prototype$__count__nodos_poligono": {
          url: urlBase + "/VistaPrediosContratados/:id/nodos_poligono/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#create
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaPrediosContratados",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#createMany
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaPrediosContratados",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#upsert
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaPrediosContratados",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#exists
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaPrediosContratados/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#findById
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaPrediosContratados/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#find
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaPrediosContratados",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#findOne
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaPrediosContratados/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#updateAll
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaPrediosContratados/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#deleteById
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaPrediosContratados/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#count
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaPrediosContratados/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#prototype$updateAttributes
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaPrediosContratados/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#createChangeStream
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaPrediosContratados/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#updateOrCreate
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#update
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#destroyById
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#removeById
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosContratados` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaPrediosContratados#modelName
    * @propertyOf lbServices.VistaPrediosContratados
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaPrediosContratados`.
    */
    R.modelName = "VistaPrediosContratados";

    /**
     * @ngdoc object
     * @name lbServices.VistaPrediosContratados.nodos_poligono
     * @header lbServices.VistaPrediosContratados.nodos_poligono
     * @object
     * @description
     *
     * The object `VistaPrediosContratados.nodos_poligono` groups methods
     * manipulating `VistaGeomPredios` instances related to `VistaPrediosContratados`.
     *
     * Call {@link lbServices.VistaPrediosContratados#nodos_poligono VistaPrediosContratados.nodos_poligono()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados#nodos_poligono
         * @methodOf lbServices.VistaPrediosContratados
         *
         * @description
         *
         * Queries nodos_poligono of VistaPrediosContratados.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::get::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#count
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Counts nodos_poligono of VistaPrediosContratados.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodos_poligono.count = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::count::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#create
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.create = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::create::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#createMany
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.createMany = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::createMany::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#destroyAll
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Deletes all nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyAll = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::delete::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#destroyById
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Delete a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::destroyById::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#findById
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Find a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.findById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::findById::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosContratados.nodos_poligono#updateById
         * @methodOf lbServices.VistaPrediosContratados.nodos_poligono
         *
         * @description
         *
         * Update a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.updateById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::updateById::VistaPrediosContratados::nodos_poligono"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaPrediosTitulacion
 * @header lbServices.VistaPrediosTitulacion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaPrediosTitulacion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaPrediosTitulacion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaPrediosTitulacions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.findById() instead.
        "prototype$__findById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.destroyById() instead.
        "prototype$__destroyById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.updateById() instead.
        "prototype$__updateById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono() instead.
        "prototype$__get__nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.create() instead.
        "prototype$__create__nodos_poligono": {
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.destroyAll() instead.
        "prototype$__delete__nodos_poligono": {
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosTitulacion.nodos_poligono.count() instead.
        "prototype$__count__nodos_poligono": {
          url: urlBase + "/VistaPrediosTitulacions/:id/nodos_poligono/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#create
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaPrediosTitulacions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#createMany
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaPrediosTitulacions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#upsert
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaPrediosTitulacions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#exists
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaPrediosTitulacions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#findById
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaPrediosTitulacions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#find
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaPrediosTitulacions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#findOne
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaPrediosTitulacions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#updateAll
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaPrediosTitulacions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#deleteById
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaPrediosTitulacions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#count
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaPrediosTitulacions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#prototype$updateAttributes
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaPrediosTitulacions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#createChangeStream
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaPrediosTitulacions/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#updateOrCreate
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#update
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#destroyById
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#removeById
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosTitulacion` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaPrediosTitulacion#modelName
    * @propertyOf lbServices.VistaPrediosTitulacion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaPrediosTitulacion`.
    */
    R.modelName = "VistaPrediosTitulacion";

    /**
     * @ngdoc object
     * @name lbServices.VistaPrediosTitulacion.nodos_poligono
     * @header lbServices.VistaPrediosTitulacion.nodos_poligono
     * @object
     * @description
     *
     * The object `VistaPrediosTitulacion.nodos_poligono` groups methods
     * manipulating `VistaGeomPredios` instances related to `VistaPrediosTitulacion`.
     *
     * Call {@link lbServices.VistaPrediosTitulacion#nodos_poligono VistaPrediosTitulacion.nodos_poligono()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion#nodos_poligono
         * @methodOf lbServices.VistaPrediosTitulacion
         *
         * @description
         *
         * Queries nodos_poligono of VistaPrediosTitulacion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::get::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#count
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Counts nodos_poligono of VistaPrediosTitulacion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodos_poligono.count = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::count::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#create
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.create = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::create::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#createMany
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.createMany = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::createMany::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#destroyAll
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Deletes all nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyAll = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::delete::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#destroyById
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Delete a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::destroyById::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#findById
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Find a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.findById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::findById::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosTitulacion.nodos_poligono#updateById
         * @methodOf lbServices.VistaPrediosTitulacion.nodos_poligono
         *
         * @description
         *
         * Update a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.updateById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::updateById::VistaPrediosTitulacion::nodos_poligono"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaEstatusDisponiblesPredios
 * @header lbServices.VistaEstatusDisponiblesPredios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaEstatusDisponiblesPredios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaEstatusDisponiblesPredios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaEstatusDisponiblesPredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#create
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaEstatusDisponiblesPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#createMany
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaEstatusDisponiblesPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#upsert
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaEstatusDisponiblesPredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#exists
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#findById
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#find
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaEstatusDisponiblesPredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#findOne
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#updateAll
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#deleteById
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#count
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#prototype$updateAttributes
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#createChangeStream
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaEstatusDisponiblesPredios/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#updateOrCreate
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#update
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#destroyById
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusDisponiblesPredios#removeById
         * @methodOf lbServices.VistaEstatusDisponiblesPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusDisponiblesPredios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaEstatusDisponiblesPredios#modelName
    * @propertyOf lbServices.VistaEstatusDisponiblesPredios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaEstatusDisponiblesPredios`.
    */
    R.modelName = "VistaEstatusDisponiblesPredios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaEstatusTitulo
 * @header lbServices.VistaEstatusTitulo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaEstatusTitulo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaEstatusTitulo",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaEstatusTitulos/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#create
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaEstatusTitulos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#createMany
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaEstatusTitulos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#upsert
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaEstatusTitulos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#exists
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaEstatusTitulos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#findById
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaEstatusTitulos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#find
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaEstatusTitulos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#findOne
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaEstatusTitulos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#updateAll
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaEstatusTitulos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#deleteById
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaEstatusTitulos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#count
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaEstatusTitulos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#prototype$updateAttributes
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaEstatusTitulos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#createChangeStream
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaEstatusTitulos/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#updateOrCreate
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#update
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#destroyById
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaEstatusTitulo#removeById
         * @methodOf lbServices.VistaEstatusTitulo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaEstatusTitulo` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaEstatusTitulo#modelName
    * @propertyOf lbServices.VistaEstatusTitulo
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaEstatusTitulo`.
    */
    R.modelName = "VistaEstatusTitulo";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaSitFinancieraPredios
 * @header lbServices.VistaSitFinancieraPredios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaSitFinancieraPredios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaSitFinancieraPredios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaSitFinancieraPredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#create
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaSitFinancieraPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#createMany
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaSitFinancieraPredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#upsert
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaSitFinancieraPredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#exists
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaSitFinancieraPredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#findById
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaSitFinancieraPredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#find
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaSitFinancieraPredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#findOne
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaSitFinancieraPredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#updateAll
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaSitFinancieraPredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#deleteById
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaSitFinancieraPredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#count
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaSitFinancieraPredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#prototype$updateAttributes
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaSitFinancieraPredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#createChangeStream
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaSitFinancieraPredios/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#updateOrCreate
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#update
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#destroyById
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaSitFinancieraPredios#removeById
         * @methodOf lbServices.VistaSitFinancieraPredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaSitFinancieraPredios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaSitFinancieraPredios#modelName
    * @propertyOf lbServices.VistaSitFinancieraPredios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaSitFinancieraPredios`.
    */
    R.modelName = "VistaSitFinancieraPredios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VistaPrediosDatosRegistro
 * @header lbServices.VistaPrediosDatosRegistro
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VistaPrediosDatosRegistro` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VistaPrediosDatosRegistro",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VistaPrediosDatosRegistros/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.findById() instead.
        "prototype$__findById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/:fk",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.destroyById() instead.
        "prototype$__destroyById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.updateById() instead.
        "prototype$__updateById__nodos_poligono": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono() instead.
        "prototype$__get__nodos_poligono": {
          isArray: true,
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "GET"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.create() instead.
        "prototype$__create__nodos_poligono": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "POST"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.destroyAll() instead.
        "prototype$__delete__nodos_poligono": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono",
          method: "DELETE"
        },

        // INTERNAL. Use VistaPrediosDatosRegistro.nodos_poligono.count() instead.
        "prototype$__count__nodos_poligono": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/nodos_poligono/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#create
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VistaPrediosDatosRegistros",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#createMany
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VistaPrediosDatosRegistros",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#upsert
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VistaPrediosDatosRegistros",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#exists
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#findById
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#find
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VistaPrediosDatosRegistros",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#findOne
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VistaPrediosDatosRegistros/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#updateAll
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/VistaPrediosDatosRegistros/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#deleteById
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#count
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VistaPrediosDatosRegistros/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#prototype$updateAttributes
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VistaPrediosDatosRegistros/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#createChangeStream
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VistaPrediosDatosRegistros/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#updateOrCreate
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#update
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#destroyById
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#removeById
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaPrediosDatosRegistro` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VistaPrediosDatosRegistro#modelName
    * @propertyOf lbServices.VistaPrediosDatosRegistro
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VistaPrediosDatosRegistro`.
    */
    R.modelName = "VistaPrediosDatosRegistro";

    /**
     * @ngdoc object
     * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono
     * @header lbServices.VistaPrediosDatosRegistro.nodos_poligono
     * @object
     * @description
     *
     * The object `VistaPrediosDatosRegistro.nodos_poligono` groups methods
     * manipulating `VistaGeomPredios` instances related to `VistaPrediosDatosRegistro`.
     *
     * Call {@link lbServices.VistaPrediosDatosRegistro#nodos_poligono VistaPrediosDatosRegistro.nodos_poligono()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro#nodos_poligono
         * @methodOf lbServices.VistaPrediosDatosRegistro
         *
         * @description
         *
         * Queries nodos_poligono of VistaPrediosDatosRegistro.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::get::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#count
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Counts nodos_poligono of VistaPrediosDatosRegistro.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodos_poligono.count = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::count::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#create
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.create = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::create::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#createMany
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Creates a new instance in nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.createMany = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::createMany::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#destroyAll
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Deletes all nodos_poligono of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyAll = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::delete::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#destroyById
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Delete a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodos_poligono.destroyById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::destroyById::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#findById
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Find a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.findById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::findById::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VistaPrediosDatosRegistro.nodos_poligono#updateById
         * @methodOf lbServices.VistaPrediosDatosRegistro.nodos_poligono
         *
         * @description
         *
         * Update a related item by id for nodos_poligono.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodos_poligono
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VistaGeomPredios` object.)
         * </em>
         */
        R.nodos_poligono.updateById = function() {
          var TargetResource = $injector.get("VistaGeomPredios");
          var action = TargetResource["::updateById::VistaPrediosDatosRegistro::nodos_poligono"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SdePredios
 * @header lbServices.SdePredios
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SdePredios` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SdePredios",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SdePredios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#create
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SdePredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#createMany
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SdePredios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#upsert
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SdePredios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#exists
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SdePredios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#findById
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SdePredios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#find
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SdePredios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#findOne
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SdePredios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#updateAll
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/SdePredios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#deleteById
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SdePredios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#count
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SdePredios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#prototype$updateAttributes
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SdePredios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#createChangeStream
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SdePredios/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SdePredios#updateOrCreate
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#update
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#destroyById
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SdePredios#removeById
         * @methodOf lbServices.SdePredios
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SdePredios` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SdePredios#modelName
    * @propertyOf lbServices.SdePredios
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SdePredios`.
    */
    R.modelName = "SdePredios";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Reserva
 * @header lbServices.Reserva
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reserva` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reserva",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Reservas/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Reserva.municipio_pertenece() instead.
        "prototype$__get__municipio_pertenece": {
          url: urlBase + "/Reservas/:id/municipio_pertenece",
          method: "GET"
        },

        // INTERNAL. Use Reserva.situacion_reserva() instead.
        "prototype$__get__situacion_reserva": {
          url: urlBase + "/Reservas/:id/situacion_reserva",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#create
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Reservas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#createMany
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Reservas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#upsert
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Reservas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#exists
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Reservas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#findById
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Reservas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#find
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Reservas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#findOne
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Reservas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#updateAll
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Reservas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#deleteById
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Reservas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#count
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Reservas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#prototype$updateAttributes
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Reservas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#createChangeStream
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Reservas/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reserva#geometria
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        "geometria": {
          isArray: true,
          url: urlBase + "/Reservas/geometria",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Reserva#updateOrCreate
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Reserva#update
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Reserva#destroyById
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reserva#removeById
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reserva` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Reserva#modelName
    * @propertyOf lbServices.Reserva
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Reserva`.
    */
    R.modelName = "Reserva";


        /**
         * @ngdoc method
         * @name lbServices.Reserva#municipio_pertenece
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Fetches belongsTo relation municipio_pertenece.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatMunicipios` object.)
         * </em>
         */
        R.municipio_pertenece = function() {
          var TargetResource = $injector.get("CatMunicipios");
          var action = TargetResource["::get::Reserva::municipio_pertenece"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reserva#situacion_reserva
         * @methodOf lbServices.Reserva
         *
         * @description
         *
         * Fetches belongsTo relation situacion_reserva.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        R.situacion_reserva = function() {
          var TargetResource = $injector.get("CatEstatusReserva");
          var action = TargetResource["::get::Reserva::situacion_reserva"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CatEstatusReserva
 * @header lbServices.CatEstatusReserva
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CatEstatusReserva` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CatEstatusReserva",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CatEstatusReservas/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#create
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CatEstatusReservas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#createMany
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CatEstatusReservas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#upsert
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CatEstatusReservas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#exists
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CatEstatusReservas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#findById
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CatEstatusReservas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#find
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CatEstatusReservas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#findOne
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CatEstatusReservas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#updateAll
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CatEstatusReservas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#deleteById
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CatEstatusReservas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#count
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CatEstatusReservas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#prototype$updateAttributes
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CatEstatusReservas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#createChangeStream
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CatEstatusReservas/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Reserva.situacion_reserva() instead.
        "::get::Reserva::situacion_reserva": {
          url: urlBase + "/Reservas/:id/situacion_reserva",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#updateOrCreate
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#update
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#destroyById
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CatEstatusReserva#removeById
         * @methodOf lbServices.CatEstatusReserva
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CatEstatusReserva` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CatEstatusReserva#modelName
    * @propertyOf lbServices.CatEstatusReserva
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CatEstatusReserva`.
    */
    R.modelName = "CatEstatusReserva";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
