require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "requires a name and email" do
    user = Client.new

    assert_not user.valid?
    assert_includes user.errors[:name], "can't be blank"
    assert_includes user.errors[:email], "can't be blank"
  end

  test "normalizes email to trimmed lowercase" do
    client = Client.create!(name: "Sam Lee", email: "  Sam@Example.com ")

    assert_equal "sam@example.com", client.email
  end

  test "email is unique across providers and clients, ignoring case" do
    client = Client.new(name: "Another Dana", email: "DANA@example.com")

    assert_not client.valid?
    assert_includes client.errors[:email], "has already been taken"
  end

  test "stores the subclass name in type and scopes queries by it" do
    provider = Provider.create!(name: "Riley Gray", email: "riley@example.com")

    assert_equal "Provider", provider.type
    assert_instance_of Provider, User.find(provider.id)
    assert_includes Provider.all, provider
    assert_not_includes Client.all, provider
  end
end
