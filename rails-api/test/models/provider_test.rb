require "test_helper"

class ProviderTest < ActiveSupport::TestCase
  test "clients returns every client enrolled with the provider" do
    assert_equal users(:alex, :jordan).to_set, users(:dana).clients.to_set
    assert_equal [users(:alex)], users(:marcus).clients.to_a
  end
end
