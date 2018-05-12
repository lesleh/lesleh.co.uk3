namespace :packer do
  desc 'Compile all webpack assets'
  task :precompile do
    system 'RAILS_ENV=production yarn webpack --mode production'
  end
end
