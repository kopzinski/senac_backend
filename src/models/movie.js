import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'

const Movie = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: { type: String },
  director: { type: String },
  genre: { type: String }
})

Movie.plugin(timestamps)

export default mongoose.model('Movie', Movie)
