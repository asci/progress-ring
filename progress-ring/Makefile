# Defining variables
OUT_DIR := lib
SRC_DIR := src
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

types: bootstrap
	${BIN}/tsc

build: bootstrap
	${BIN}/esbuild ./${SRC_DIR}/ProgressRing.tsx --bundle --outfile=./${OUT_DIR}/main.js --external:react --format=esm  ${ESBUILD_WATCH}

build_watch:	
	make ESBUILD_WATCH=--watch build

build_full:	types build

test: clean build
	${BIN}/jest -c jest.config.json -u

publish_beta: build_full
	yarn publish --tag beta

.PHONY: bootstrap build clean clean_all build_watch test build_full types