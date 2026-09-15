class Provider < User
  has_many :enrollments
  has_many :clients, through: :enrollments
  has_many :journal_entries, through: :clients
end
