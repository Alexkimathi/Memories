class CardsController < ApplicationController
 
    protect_from_forgery with: :null_session


    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        cards = Card.all
        render json: cards

    end

    def show 
        card =find_card
        render json: card
    end

    def create
        card = Card.create!(card_params)
        render json: Card, status: :created
    end
    
    def update
        card = find_card;
        card.update(card_params)
        render json: card
    end
    
    def destroy
        card = find_card;
        card.destroy;
        head :no_content;
    end
    
    private

    def card_params
        params.permit(:name, :title, :image_url)
    end

   
    def find_card
        Card.find_by(params[:id])
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "post not found" }, status: :not_found
    end
   
 
end








