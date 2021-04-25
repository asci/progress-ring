# Defining variables
OUT_DIR := build
BIN := node_modules/.bin
ESBUILD_WATCH :=
COMMIT_HASH := $(shell git rev-parse --short HEAD)
PACKAGE_VERSION := $(shell node -pe "require('./package.json').version")

# TODO: replace `live-server` - it is old and unmaintained
init:
	yarn init -y
	yarn add typescript react react-dom esbuild @types/react @types/react-dom
	yarn add --dev live-server concurrently

bootstrap:
	yarn install
	mkdir -p ${OUT_DIR}

clean:
	rm -rf ${OUT_DIR}

clean_all: clean
	rm -rf node_modules

build: bootstrap
	cp public/* build
	${BIN}/esbuild ./src/index.tsx --bundle --outfile=./${OUT_DIR}/index.js --format=esm ${ESBUILD_WATCH}

build_watch:	
	make ESBUILD_WATCH=--watch build

serve_watch:
	cd ${OUT_DIR} && ../${BIN}/live-server --open=./ --browser="Google Chrome" --watch=../${OUT_DIR}

dev:
	${BIN}/concurrently "make build_watch" "make serve_watch"

publish_beta:
	npm version prerelease --preid ${COMMIT_HASH} && npm publish --tag beta

.PHONY: bootstrap build clean clean_all dev serve_watch build_watch