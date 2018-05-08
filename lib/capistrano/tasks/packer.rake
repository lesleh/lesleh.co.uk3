desc 'Precompiler webpack assets'
task :packer_precompile => [:set_rails_env] do
  on(roles(:all)) do
    within release_path do
      with rails_env: fetch(:rails_env) do
        execute :rake, "packer:precompile"
      end
    end
  end
end
