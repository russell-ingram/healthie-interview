class Client < User
  has_many :enrollments
  has_many :providers, through: :enrollments
  has_many :journal_entries
end
