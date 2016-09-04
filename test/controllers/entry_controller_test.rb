require 'test_helper'

class EntryControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get entry_home_url
    assert_response :success
  end

end
