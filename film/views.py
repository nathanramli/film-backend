from rest_framework.response import Response
# from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Film, LinkDownload, Character
from .serializers import *


@api_view(['GET', 'POST'])
def film_list(request):
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        film = Film.objects.order_by('judul').all()
        page = request.GET.get('page', 1)
        paginator = Paginator(film, 5)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = FilmSerializer(data,context={'request': request}, many=True)

        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/film/?page=' + str(nextPage), 'prevlink': '/api/film/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def film_detail(request, pk):
    try:
        film = Film.objects.get(pk=pk)
    except Film.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FilmSerializer(film,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FilmSerializer(film, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':

        try:
            chara = Character.objects.filter(id_film=pk)
            for obj in chara:
                obj.foto.delete()
                obj.delete()
        except Character.DoesNotExist:
            pass

        try:
            linkD = LinkDownload.objects.filter(id_film=pk)
            linkD.delete()
        except LinkDownload.DoesNotExist:
            pass

        film.gambar.delete()
        film.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def film_kode(request, kode):
    try:
        film = Film.objects.get(kode=kode)
    except Film.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "GET":
        serializerFilm = FilmSerializer(film,context={'request': request})
        try:
            chara = Character.objects.filter(id_film=film.pk)
            serializerChara = CharacterSerializer(chara,context={'request': request}, many=True)
            dataChara = serializerChara.data
        except Character.DoesNotExist:
            dataChara = []

        try:
            link = LinkDownload.objects.filter(id_film=film.pk).order_by('judul_link')
            serializerLink = LinkSerializer(link,context={'request': request}, many=True)
            dataLink = serializerLink.data
        except LinkDownload.DoesNotExist:
            dataLink = []

        return Response({ 'film': serializerFilm.data, 'chara': dataChara, 'link': dataLink})

@api_view(['GET'])
def film_genre(request, genre):
    try:
        if genre.lower() == 'sci-fi':
            film = Film.objects.only('judul', 'gambar', 'kode', 'jenis', 'tanggal_post', 'rating').filter(genre__icontains=genre).order_by('-rating')
        else:
            genreFilter = genre.replace('-', ' ')
            film = Film.objects.only('judul', 'gambar', 'kode', 'jenis', 'tanggal_post', 'rating').filter(genre__icontains=genreFilter).order_by('-rating')
    except Film.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "GET":
        data = []
        nextPage = 1
        previousPage = 1
        page = request.GET.get('page', 1)
        paginator = Paginator(film, 12)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = AnimeDetailSerializer(data,context={'request': request}, many=True)

        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'current' : page, 'nextlink': '/api/film_genre/'+ genre +'/?page=' + str(nextPage), 'prevlink': '/api/film_genre/'+ genre +'/?page=' + str(previousPage)})

@api_view(['GET'])
def film_limit_enam(request):
    # - untuk descending
    filmC = Film.objects.values('pk','judul', 'gambar', 'kode', 'jenis', 'tanggal_post', 'rating').filter(jenis="c").order_by("-tanggal_post")[:8]
    filmM = Film.objects.values('pk','judul', 'gambar', 'kode', 'jenis', 'tanggal_post', 'rating').filter(jenis="m").order_by("-tanggal_post")[:8]
    filmO = Film.objects.values('pk','judul', 'gambar', 'kode', 'jenis', 'tanggal_post', 'rating').filter(jenis="o").order_by("-tanggal_post")[:8]
    film = filmC.union(filmM, filmO)
    return Response({'data': film, })

@api_view(['GET'])
def film_judul(request, judul):
    judulfilter = judul.replace('__', ' ')
    try:
        film = Film.objects.filter(judul__icontains = judulfilter)[:5]
    except Film.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = FilmSerializer(film,context={'request': request}, many=True)
    return Response({'data': serializer.data})

# Link Download
@api_view(['POST'])
def links(request):
    if request.method == 'POST':
        serializer = LinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def link_detail(request, pk):
    try:
        linkD = LinkDownload.objects.get(pk=pk)
    except LinkDownload.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        linkD.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def link_list(request, id_film):
    try:
        linkD = LinkDownload.objects.filter(id_film=id_film).order_by('judul_link')
    except LinkDownload.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == 'GET':
        serializer = LinkSerializer(linkD,context={'request': request}, many=True)
        return Response({'data': serializer.data})
# Character

@api_view(['POST'])
def characters(request):        
    if request.method == 'POST':
        serializer = CharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def character_detail(request, pk):
    try:
        chara = Character.objects.get(pk=pk)
    except Character.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        chara.foto.delete()
        chara.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def character_list(request, id_film):
    try:
        chara = Character.objects.filter(id_film=id_film)
    except Character.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == 'GET':
        serializer = CharacterSerializer(chara,context={'request': request}, many=True)
        return Response({'data': serializer.data})