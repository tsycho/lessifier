require 'net/http'

class ConverterController < ApplicationController

  def index    
    css = params[:css] || ""
    print_dec = params[:print_declarations] == "yes" ? true : false
    if params[:url]
      begin
        css = Net::HTTP.get URI.parse(params[:url])
      rescue
        @scss = "Unable to load CSS from URL"
      end
    end
    l = Lessify.new(:css => css)
    @scss = l.to_scss('tab' => '  ', :print_declarations => print_dec)
    
    respond_to do |format|
      format.html
      format.js {}
    end
  end

end
