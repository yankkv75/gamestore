from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post, Game
from rest_framework_simplejwt.tokens import RefreshToken

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


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    is_admin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'is_admin']

    def get__id(self, obj):
        return obj.id

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

    def get_is_admin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username',
                  'email', 'name', 'is_admin', 'token']
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

# When we're generating or serializing a user, we're going to take that user object
# and we're going to return back another token with the initial response
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
