namespace :packer do
  desc 'Compile all webpack assets'
  task :precompile do
    system 'yarn webpack --mode production'
  end
end
