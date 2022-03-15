class Pin < ApplicationRecord
  acts_as_votable
  belongs_to :user
  has_one_attached :image
  # I did not validate this image type need to look into it
end
