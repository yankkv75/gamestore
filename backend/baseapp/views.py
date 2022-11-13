from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post, Game
from .serializers import GameSerializer, PostSerializer, UserSerializer, UserSerializerWithToken

# Customizing jwt token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # return back user information
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Post views
@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()  # return all posts from db
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_post(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)


# Games views
@api_view(['GET'])
def get_games(request):
    games = Game.objects.all()
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_game(request, pk):
    game = Game.objects.get(_id=pk)
    serializer = GameSerializer(game, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()  # return all posts from db
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


# User views

# gets the token
@api_view(['GET'])
def get_user(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
