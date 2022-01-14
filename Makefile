style:
	npx tailwindcss -i ./styles/tailwind.css -o ./public/tailwind.css
	npx gulp

tailwind-watch:
	npx tailwindcss -i ./styles/tailwind.css -o ./public/tailwind.css --watch

gulp-watch:
	npx gulp watch

build: style
	mkdir -p dist
	cp -r assets public ./dist
	cp index.html ./dist
