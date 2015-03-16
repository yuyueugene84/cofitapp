class User < ActiveRecord::Base

  has_secure_password validations: false

  validates :username, presence: true, uniqueness: true, length: {minimum: 5}
  validates :email, presence: true
  validates :password, presence: true, on: :create, length: {minimum: 7}

end
