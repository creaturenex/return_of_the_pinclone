class PinsController < ApplicationController
  def index
    @pins = Pin.all.order("created_at DESC")
  end

  def show
  end

  def new
    @pin = Pin.new(pin_params)
  end

  def create
    @pin = Pin.new(pin_params)
  end

    if @pin.save
      redirect_to @pin, notice: "Successfully created new Pin"
    else
      render 'new'
    end
  end

  def update
    if @pin.update(pin_params)
      redirect_to @pin, notice: "Successfully updated Pin!"
    else
      render 'edit'
    end
  end

  def destroy
    @pin.destroy
    redirect_to root_path, notice: "Successfully deleted pin!"
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :image)
  end

  def find_pin
    @pin = Pin.find(params[:id])
  end
end
