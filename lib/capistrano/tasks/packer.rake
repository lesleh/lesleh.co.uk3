# frozen_string_literal: true

desc 'Precompiler webpack assets'
task :packer_precompile do
  on(roles(:all)) do
    within release_path do
      execute :rake, 'packer:precompile'
    end
  end
end

after 'yarn:install', :packer_precompile
