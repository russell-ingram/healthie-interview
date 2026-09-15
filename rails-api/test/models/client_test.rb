require "test_helper"

class ClientTest < ActiveSupport::TestCase
  test "providers returns every provider the client is enrolled with" do
    assert_equal users(:dana, :marcus).to_set, users(:alex).providers.to_set
    assert_equal [users(:dana)], users(:jordan).providers.to_a
  end
end
