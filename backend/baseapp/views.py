from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post, Game
from .serializers import GameSerializer, PostSerializer
# Create your views here.


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
