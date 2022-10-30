from django.contrib import admin

from .models import Game, GameReview, Order, OrderGame, Post, PostComment


# Register your models here.
admin.site.register(Post)
admin.site.register(Game)
admin.site.register(PostComment)
admin.site.register(GameReview)
admin.site.register(Order)
admin.site.register(OrderGame)
