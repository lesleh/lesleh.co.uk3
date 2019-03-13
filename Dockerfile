# Webpack
FROM node:10 as webpack-base
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock webpack.config.js .babelrc /app/
COPY webpack /app/webpack
COPY config/packer.yml /app/config/packer.yml
RUN yarn install
RUN yarn run build

# Rails
FROM ruby:2.6-alpine
ENV RAILS_ENV=development
RUN apk add --update \
  build-base \
  libxml2-dev \
  libxslt-dev \
  postgresql-dev \
  git \
  && rm -rf /var/cache/apk/*

RUN mkdir /app
WORKDIR /app

# Bundler
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install --deployment

RUN apk del \
  build-base \
  libxml2-dev \
  libxslt-dev \
  postgresql-dev \
  git \
  && rm -rf /var/cache/apk/*

# Rest of Rails app
COPY . /app
COPY --from=webpack-base /app/public/packs /app/public/packs
