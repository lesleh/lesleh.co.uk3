class LogMessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @log_messages = LogMessage.descending
  end

  def create
    respond_to do |format|
      if LogMessage.create(log_message_params)
        format.json { render json: { status: 'ok' }, status: :ok }
      else
        format.json { render json: @log_message.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def log_message_params
    params.require(:log_message).permit(:severity, :label, :message)
  end
end
