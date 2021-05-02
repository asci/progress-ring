# Defining variables
OUT_DIR := build
BIN := node_modules/.bin
ESBUILD_WATCH :=
COMMIT_HASH := $(shell git rev-parse --short HEAD)

bootstrap:
	yarn install --frozen-lockfile
	mkdir -p ${OUT_DIR}

clean:
	rm -rf ${OUT_DIR}

clean_all: clean
	rm -rf node_modules

build: bootstrap
	${BIN}/esbuild ./src/ProgressRing.tsx --bundle --outfile=./lib/main.js --external:react --format=esm  ${ESBUILD_WATCH}

build_watch:	
	make ESBUILD_WATCH=--watch build

publish_beta:
	yarn publish --tag beta

.PHONY: bootstrap build clean clean_all build_watch