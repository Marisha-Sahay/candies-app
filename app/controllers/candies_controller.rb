class CandiesController < ApplicationController
def show
  @candy = Candy.find_by(id: params[:id])
end
def index
  @candies = Candy.all
end


end
