from django.urls import path
from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('users/', views.get_users, name='users'),
    path('posts/', views.get_posts, name='posts'),
    path('post/<str:pk>/', views.get_post, name='post'),
    path('games/', views.get_games, name='games'),
    path('game/<str:pk>/', views.get_game, name='game'),
    path('users/profile/', views.get_user, name='user'),
]
