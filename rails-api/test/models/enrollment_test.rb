require "test_helper"

class EnrollmentTest < ActiveSupport::TestCase
  test "plan must be basic or premium" do
    enrollment = Enrollment.new(provider: users(:marcus), client: users(:jordan), plan: "gold")

    assert_not enrollment.valid?
    assert_includes enrollment.errors[:plan], "is not included in the list"
  end

  test "the database rejects an invalid plan even when validations are skipped" do
    assert_raises(ActiveRecord::CheckViolation) do
      enrollments(:dana_alex).update_column(:plan, "gold")
    end
  end

  test "a client can only enroll with a provider once" do
    enrollment = Enrollment.new(provider: users(:dana), client: users(:alex), plan: "basic")

    assert_not enrollment.valid?
    assert_includes enrollment.errors[:client_id], "is already enrolled with this provider"
  end

  test "provider must be a provider, not a client" do
    enrollment = Enrollment.new(provider_id: users(:jordan).id, client: users(:alex), plan: "basic")

    assert_not enrollment.valid?
    assert_includes enrollment.errors[:provider], "must exist"
  end
end
