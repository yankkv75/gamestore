from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('posts/', views.get_posts, name='posts'),
    path('post/<str:pk>/', views.get_post, name='post'),

    path('games/', views.get_games, name='games'),
    path('game/<str:pk>/', views.get_game, name='game'),
]
