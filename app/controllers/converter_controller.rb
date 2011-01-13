require 'net/http'

class ConverterController < ApplicationController

  def index    
    css = params[:css] || ""
    if params[:url]
      begin
        css = Net::HTTP.get URI.parse(params[:url])
      rescue
        @scss = "Unable to load CSS from URL"
      end
    end
    l = Lessify.new(:css => css)
    @scss = l.to_scss('tab' => '  ')
  end

end
