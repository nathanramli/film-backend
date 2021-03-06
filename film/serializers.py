from rest_framework import serializers
from .models import Film, LinkDownload, Character

class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film 
        fields = ('pk','kode', 'judul', 'judul_alternatif', 'musim_rilis', 'jumlah_episode', 'mulai_tayang', 'selesai_tayang', 'studio', 'rating', 'credit', 'deskripsi', 'gambar', 'jenis', 'genre', 'admin')

class UpdateFilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film 
        fields = ('kode', 'judul', 'judul_alternatif', 'musim_rilis', 'jumlah_episode', 'mulai_tayang', 'selesai_tayang', 'studio', 'rating', 'credit', 'deskripsi', 'jenis', 'genre', 'admin')

class AnimeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film 
        fields = ('pk','kode', 'judul', 'rating', 'gambar', 'jenis', 'tanggal_post', 'musim_rilis', 'selesai_tayang')

class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = LinkDownload
        fields = ('pk', 'id_film', 'judul_link', 'url1080p', 'url720p', 'url540p', 'url480p', 'url360p', 'url240p')

class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = ('pk', 'id_film', 'nama', 'foto')