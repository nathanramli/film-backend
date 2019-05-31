from django.db import models

# Create your models here.
class Film(models.Model):
	judul_film = models.CharField(max_length=255)
	deskripsi = models.TextField(blank=True, null=True)

	def __str__(self):
		return self.judul_film