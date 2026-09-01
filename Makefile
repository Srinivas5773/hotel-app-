.PHONY: install dev build test coverage start docker-build docker-run clean

install:
	npm install

dev:
	npm run dev -- --host

start:
	npm start

build:
	npm run build

test:
	npm test

coverage:
	npm run coverage

docker-build:
	docker build -t raju-garu-hotel .

docker-run:
	docker run -p 3000:80 raju-garu-hotel

clean:
	rm -rf dist coverage
