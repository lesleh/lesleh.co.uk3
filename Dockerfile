FROM ruby:2.6
ENV RAILS_ENV=development
RUN apt-get install -y gcc g++ make
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq
RUN apt-get install -y build-essential libpq-dev nodejs yarn
RUN mkdir /app
WORKDIR /app

# Webpack assets
COPY package.json yarn.lock webpack.config.js .babelrc /app/
COPY webpack /app/webpack
COPY config/packer.yml /app/config/packer.yml
RUN yarn install
RUN yarn run build

# Bundler
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

# Rest of Rails app
COPY . /app
