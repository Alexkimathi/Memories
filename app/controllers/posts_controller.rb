class PostsController < ApplicationController
    protect_from_forgery with: :null_session

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    

    def index
        render json: Post.all
    end

    def show 
        post =find_post
        render json: post
    end
    
    
    def create
        post = Post.create(post_params);
        render json: post, status: :created
    end
    
    def update
        post = find_post;
        post.update(post_params)
        render json: post
    end
    
    def destroy
        post = find_post;
        post.destroy;
        head :no_content
    end
    
    
    private
    def post_params
        params.permit(:name, :image_url,:video_url,:description)
    end
    
    def find_post
        Post.find(params[:id])
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "post not found" }, status: :not_found
    end
end
