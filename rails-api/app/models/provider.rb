class Provider < User
  has_many :enrollments
  has_many :clients, through: :enrollments
end
