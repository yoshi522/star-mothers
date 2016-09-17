class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :expire_hsts


  def hello
    render text:'hello from yoshi'
  end


  private
  def expire_hsts
    response.headers["Strict-Transport-Security"] = 'max-age=0'
  end
end
