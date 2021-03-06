# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'GET #about' do
    it 'returns http success' do
      get :view, params: { id: 'about' }
      expect(response).to have_http_status(:success)
    end
  end
end
