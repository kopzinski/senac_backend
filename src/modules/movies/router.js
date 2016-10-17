import * as movie from './controller'
import { ensureAuthState } from '../../middleware/validators'

export const baseUrl = '/movies'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      // ensureAuthState,
      movie.createMovie
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      // ensureAuthState,
      movie.getMovies
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      // ensureAuthState,
      movie.getMovie
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      // ensureAuthState,
      movie.getMovie,
      movie.updateMovie
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      // ensureAuthState,
      movie.getMovie,
      movie.deleteMovie
    ]
  }
]
