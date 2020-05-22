from rest_framework import serializers
from .models import Post, Comment, Category
from user.models import User

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = ('name', 'post_num')

class CommentSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField('%Y/%m/%d %H:%M:%S')
    modified_at = serializers.DateTimeField('%Y/%m/%d %H:%M:%S')
    post = serializers.CharField(source="post.get_absolute_url")
    author = serializers.CharField(source="author.get_full_name")

    class Meta:
        model = Comment
        fields = ('id', 'post', 'author', 'text', 'created_at', 'modified_at')

class PostSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField('%Y/%m/%d %H:%M:%S')
    author = serializers.CharField(source="author.get_full_name")
    category = serializers.CharField(source="category.get_name", default='X')

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'created', 'author', 'category',)

class PostListSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField('%Y/%m/%d %H:%M:%S')
    author = serializers.CharField(source="author.get_full_name")
    category = serializers.CharField(source="category.get_name", default='X')

    class Meta:
        model = Post
        fields = ('id','title','created','author','category',)
