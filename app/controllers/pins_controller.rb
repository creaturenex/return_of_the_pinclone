class PinsController < ApplicationController
  before_action :find_pin, only: [:show, :edit, :update, :destroy, :upvote]
  before_action :set_s3_direct_post, only: [:new, :edit, :create, :update]

  def index
    @pins = Pin.all.order("created_at DESC")
  end

  def show

  end

  def new
    @pin = current_user.pins.build
  end

  def create
    @pin = current_user.pins.build(pin_params)

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

  def upvote
    @pin.upvote_by current_user
    redirect_back fallback_location: root_path
   end

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :image)
  end

  def find_pin
    @pin = Pin.find(params[:id])
  end

  def set_s3_direct_post
    @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
  end
end
