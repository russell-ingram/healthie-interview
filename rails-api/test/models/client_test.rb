require "test_helper"

class ClientTest < ActiveSupport::TestCase
  test "providers returns every provider the client is enrolled with" do
    assert_equal users(:dana, :marcus).to_set, users(:alex).providers.to_set
    assert_equal [users(:dana)], users(:jordan).providers.to_a
  end

  test "journal entries returns the client's entries, newest first" do
    assert_equal journal_entries(:alex_walk, :alex_sleep, :alex_breakfast),
      users(:alex).journal_entries.newest_first.to_a
  end
end
