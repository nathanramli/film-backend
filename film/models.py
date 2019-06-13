from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class Film(models.Model):
	JENIS_JENIS = (
		('o', 'ongoing'),
		('c', 'complete'),
		('m', 'movie')
	)

	kode = models.CharField(max_length=255, null=True)
	judul = models.CharField(max_length=255)
	judul_alternatif = models.CharField(max_length=255, null=True)
	musim_rilis = models.CharField(max_length=255, null=True)
	jumlah_episode = models.IntegerField(default=0)
	mulai_tayang = models.CharField(max_length=255,null=True)
	selesai_tayang = models.CharField(max_length=255,null=True)
	studio = models.CharField(max_length=255,null=True)
	rating = models.FloatField(null=True)
	credit = models.TextField(blank=True, null=True)
	deskripsi = models.TextField(blank=True, null=True)
	gambar = models.ImageField(null=True, upload_to='gambar')
	tanggal_post = models.DateTimeField(auto_now=True)
	jenis = models.CharField(max_length=1, choices=JENIS_JENIS)
	genre = ArrayField(models.CharField(max_length=200), null=True)

	def __str__(self):
		return self.judul

class Character(models.Model):
	id_film = models.IntegerField()
	nama = models.CharField(max_length=255, null=True)
	foto = models.ImageField(null=True, upload_to='character')

	def __str__(self):
		return self.nama

class LinkDownload(models.Model):
	id_film = models.IntegerField()
	judul_link = models.TextField(blank=True, null=True)
	url1080p = models.TextField(blank=True, null=True)
	url720p = models.TextField(blank=True, null=True)
	url540p = models.TextField(blank=True, null=True)
	url480p = models.TextField(blank=True, null=True)
	url360p = models.TextField(blank=True, null=True)
	url240p = models.TextField(blank=True, null=True)

	def __str__(self):
		return self.judul_link