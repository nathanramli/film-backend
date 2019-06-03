from rest_framework import serializers
from .models import Film

class FilmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Film 
        fields = ('pk','kode', 'judul', 'judul_alternatif', 'musim_rilis', 'jumlah_episode', 'mulai_tayang', 'selesai_tayang', 'studio', 'rating', 'credit', 'deskripsi', 'gambar')