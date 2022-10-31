# Generated by Django 4.1.2 on 2022-10-30 17:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('name', models.CharField(blank=True, max_length=250, null=True)),
                ('description', models.TextField(blank=True, max_length=500, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('trailer', models.URLField(blank=True, max_length=250, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('num_of_comments', models.IntegerField(blank=True, default=0, null=True)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('count_in_stock', models.IntegerField(blank=True, default=0, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('payment_method', models.CharField(blank=True, max_length=250, null=True)),
                ('total_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('is_paid', models.BooleanField(default=False)),
                ('paid_date', models.DateTimeField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('title', models.CharField(blank=True, max_length=250, null=True)),
                ('text', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('num_of_comments', models.IntegerField(blank=True, default=0, null=True)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PostComment',
            fields=[
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('comment', models.TextField(blank=True, max_length=500)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('post', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='baseapp.post')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderGame',
            fields=[
                ('name', models.CharField(blank=True, max_length=250, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('image', models.CharField(blank=True, max_length=250, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('game', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='baseapp.game')),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='baseapp.order')),
            ],
        ),
        migrations.CreateModel(
            name='GameReview',
            fields=[
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('review_text', models.TextField(blank=True, max_length=500)),
                ('rating', models.IntegerField(blank=True, default=0, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('game', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='baseapp.game')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]