# frozen_string_literal: true

namespace :packer do
  desc 'Compile all webpack assets'
  task :precompile do
    system 'RAILS_ENV=production npm run build'
  end
end
