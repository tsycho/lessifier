class ConverterController < ApplicationController

  def index    
    css = params[:css]
    l = Lessify.new(:css => css)
    @scss = l.to_scss('tab' => '  ')
  end

end
