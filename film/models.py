from django.db import models

# Create your models here.
class Film(models.Model):
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

	def __str__(self):
		return self.judul