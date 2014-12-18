require "sinatra"
require "yaml"

config = YAML.load_file("secrets.yml")

get "/" do
  @config = config
  erb :index
end
