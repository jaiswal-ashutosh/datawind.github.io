from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    #Api to post a comment
    path('postComment', views.postComment, name="postComment"),
    path('', views.bloghome,name='bloghome'),
    path('<str:slug>', views.blogpost,name='blogpost'),
     
]