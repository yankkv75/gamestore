from django.db import models
from django.contrib.auth.models import User


# Create your models here.

# Model for posts
class Post(models.Model):
    title = models.CharField(max_length=250, null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    num_of_comments = models.IntegerField(null=True, blank=True, default=0)
    rating = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title


# Model for games
class Game(models.Model):
    name = models.CharField(max_length=250, null=True, blank=True)
    description = models.TextField(max_length=500, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    trailer = models.URLField(max_length=250, null=True, blank=True)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    num_of_comments = models.IntegerField(null=True, blank=True, default=0)
    rating = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    count_in_stock = models.IntegerField(null=True, blank=True, default=0)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


# Model for comments
class PostComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    comment = models.TextField(max_length=500, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.user, ' posted a comment')


# Model for game reviews
class GameReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    game = models.ForeignKey(Game, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    review_text = models.TextField(max_length=500, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    created = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.user, '  reviewed the game: ', self.game)


# Model for order
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    payment_method = models.CharField(max_length=250, null=True, blank=True)
    total_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    paid_date = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str('Order: №', self._id)


# Model for selected game
class OrderGame(models.Model):
    game = models.ForeignKey(Game, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=250, null=True, blank=True)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=250, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)


def __str__(self):
    return self.name
