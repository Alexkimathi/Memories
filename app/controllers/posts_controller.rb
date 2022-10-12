class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Post.all
    end

    def show 
        post =Post.find_by(id:params[:id])
        if post 
            render json: post, status: :ok
        else
            render json:{error: "post not found"}
        end

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
    
    def render_not_found_response
        render json: {error: "No Card found"}
    end
end
