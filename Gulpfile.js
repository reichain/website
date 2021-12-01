const { src, dest, series, parallel, watch } = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))
const freeze = require('gulp-freeze')
const filenames = require('gulp-filenames')
const noop = require('gulp-noop')
const fs = require('fs-extra')

const prod = process.env.NODE_ENV === 'production'

const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

function style () {
	return src('./styles/app.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(prod ? freeze() : noop())
		.pipe(filenames('style'))
		.pipe(dest('public'))
}

async function watchFiles() {
	watch([
		'./styles/**/*.scss'
	], style)
}

exports.watch = series(style, watchFiles)
exports.default = series(style)
