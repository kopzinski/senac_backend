import Movie from '../../models/movie'
import _ from 'lodash'
import Boom from 'boom'

export async function createMovie(ctx) {

  const movieJson = _.pick(ctx.request.body,[ 'title', 'releaseYear', 'director', 'genre' ])

  const movie = new Movie(movieJson)

  try {
    await movie.save()
  } catch(err) {
    throw Boom.create(422, err.message)
  }

  const response = movie.toJSON()

  delete response.password

  ctx.body = {
    movie: response
  }
}

export async function getMovies(ctx) {
  const movies = await Movie.find({})
  console.log(movies)
  ctx.body = { movies }
}

export async function getMovie(ctx, next) {

  try {
      const movie = await Movie.findById(ctx.params.id)
    if (!movie) {
      throw Boom.create(404, "No records found")
    }

    ctx.body = {
      movie
    }
  } catch(err) {
    throw Boom.wrap(err)
  }

  if (next) { return next() }
}

export async function updateMovie(ctx) {

  const movieJson = _.pick(ctx.request.body,[ 'title', 'releaseYear', 'director', 'genre' ])

  const movie = ctx.body.movie

  Object.assign(movie, movieJson)

  await movie.save()

  ctx.body = {
    movie
  }
}

export async function deleteMovie(ctx) {
  const movie = ctx.body.movie

  try{
    await movie.remove()

  } catch(err) {
    throw Boom.wrap(err)
  }

  ctx.status = 200
  ctx.body = {
    success: true
  }
}
