require "test_helper"

class JournalEntryTest < ActiveSupport::TestCase
  test "requires a body" do
    entry = JournalEntry.new(client: users(:alex), body: "")

    assert_not entry.valid?
    assert_includes entry.errors[:body], "can't be blank"
  end
end
