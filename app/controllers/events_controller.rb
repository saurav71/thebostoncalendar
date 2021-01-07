class EventsController < ApplicationController
layout 'mobile'

  def index
  end

  def new
    @event = Event.new
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @event }
    end
  end
  def create
    @event = Event.new(event_params)
    if @event.save
       redirect_to @event, notice: 'Event was successfully created.' 
    else
      render action: "new" 
    end
  end
  def show
    @event = Event.find(params[:id])
  end
  private
  def event_params
    params.require(:event).permit(:title)
  end

end
