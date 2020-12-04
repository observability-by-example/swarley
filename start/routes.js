'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/signup', 'AuthController.signup')
  Route.post('/getToken', 'AuthController.getToken')
}).prefix('/auth')
    .middleware('guest')

Route.resource('contacts', 'ContactController')
    .apiOnly().middleware('auth')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
