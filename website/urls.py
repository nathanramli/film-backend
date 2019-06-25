"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from film import views
from django.conf.urls import url

from django.conf import settings
from django.views.static import serve



urlpatterns = [
    path('admin/', admin.site.urls),
    # API FILM
    path('api/film/', views.film_list),
    path('api/film/<int:pk>', views.film_detail),
    path('api/film_genre/<slug:genre>/', views.film_genre),
    path('api/film_genre/<slug:genre>', views.film_genre),
    path('api/film_by_kode/<slug:kode>', views.film_kode),
    path('api/film_by_judul/<slug:judul>', views.film_judul),
    path('api/film_limit_enam/', views.film_limit_enam),
    # API LINK
    path('api/link/', views.links),
    path('api/link/<int:id_film>', views.link_list),
    path('api/link_detail/<int:pk>', views.link_detail),
    # API CHARACTER
    path('api/chara/', views.characters),
    path('api/chara/<int:id_film>', views.character_list),
    path('api/chara_detail/<int:pk>', views.character_detail),
]

if settings.DEBUG:
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]
