desc 'Restart app'
task :restart do
  on(roles(:all)) do
    within release_path do
      execute :rake, "restart"
    end
  end
end

after 'deploy', :restart
