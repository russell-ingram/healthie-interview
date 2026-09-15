require "test_helper"

class ProviderTest < ActiveSupport::TestCase
  test "clients returns every client enrolled with the provider" do
    assert_equal users(:alex, :jordan).to_set, users(:dana).clients.to_set
    assert_equal [users(:alex)], users(:marcus).clients.to_a
  end

  test "journal entries returns entries from all of the provider's clients, newest first" do
    assert_equal journal_entries(:alex_walk, :alex_sleep, :alex_breakfast, :jordan_water),
      users(:dana).journal_entries.newest_first.to_a
  end

  test "journal entries excludes clients who are not enrolled with the provider" do
    assert_not_includes users(:marcus).journal_entries, journal_entries(:jordan_water)
  end
end
