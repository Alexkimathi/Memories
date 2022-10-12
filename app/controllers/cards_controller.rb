class CardsController < ApplicationController
 
    protect_from_forgery with: :null_session

    def index
        render json: Card.all
    end

    def show 
        card =Card.find_by(id:params[:id])
        if card 
            render json: card, status: :ok
        else
            render json:{error: "card not found"}
        end

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
        if card
        card.destroy;
        head :no_content
        else
            render json: {error: "card not found"}, status: :not_found
        end
    end
    
    private

    def card_params
        params.permit(:name, :title, :image_url)
    end

   
    
    def find_card
        Card.find_by(params[:id])
    end
    
   
 
end








