from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post, Game

# They going to wrap model and then it's going to turn that into JSON


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        # 1. model, that need to be serialized
        model = Post
        # 2. field, that we want to render out
        fields = '__all__'


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'