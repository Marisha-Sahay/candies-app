class Api::V1::CandiesController < ApplicationController

  def show
    @candy = Candy.find_by(id: params[:id])
    render json: @candy
  end
  def index
    @candies = Candy.all
    render json:@candies
  end

  def create 
    @candy = Candy.new(name: params[:name],price: params[:price],expiry: params[:expiry])
    if @candy.save
      render :show
    else
      render json: {errors: @candy.errors.full_messages}
    end
  end

  def update
    @candy = Candy.find_by(id: params[:id])
    @candy.update(name: params[:name],price: params[:price],expiry: params[:expiry])
    render :show
  end

  def destroy
    @candy = Candy.find_by(id: params[:id])
    @candy.destroy
    render :show
  end

  def welcome
  end

end
