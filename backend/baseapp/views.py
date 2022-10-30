import imp
import pkgutil
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .posts import posts
from .games import games
# Create your views here.


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/posts/',
        '/api/posts/create/',

        '/api/posts/upload/',

        '/api/posts/<id>/reviews/',

        '/api/posts/top/',
        '/api/posts/<id>',

        '/api/posts/delete/<id>',
        '/api/posts/<update>/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def get_posts(request):
    return Response(posts)

@api_view(['GET'])
def get_post(request, pk):
    post = None
    for i in posts:
        if i['_id'] == pk:
            post = i
            break
    return Response(post)


@api_view(['GET'])
def get_games(request):
    return Response(games)

@api_view(['GET'])
def get_game(request, pk):
    game = None
    for i in games:
        while i['_id'] == pk:
            game = i
            break
    return Response(game)
