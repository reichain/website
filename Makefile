style:
	npx tailwindcss -i ./styles/tailwind.css -o ./public/tailwind.css
	npx gulp

tailwind-watch:
	npx tailwindcss -i ./styles/tailwind.css -o ./public/tailwind.css --watch

gulp-watch:
	npx gulp watch
