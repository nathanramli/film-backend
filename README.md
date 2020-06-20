# API Backend for Film website

## Installation

- Pastikan anda sudah menginstall python minimal versi 3.0.7
- Pastikan telah mendownload semua requirement dan telah terinstall di environment anda
> Gunakan `pip install -r requirements.txt` untuk menginstall
- Lakukan migrasi terlebih dahulu
> Gunakan `python make migrations` kemudian `python migrate`, dan juga pastikan
bahwa anda sudah mengatur setting database sebelum migrasi

#### Windows
1. Buka **Command prompt pertama**
2. Pindah ke directory **Aplikasi django** yang ada folder **env**
3. Run command ```folderenvironment\Scripts\activate.bat```, 
    jika sudah ada ```(namaenvironment) ~ :``` berarti sudah active (_jika ingin mematikan ```deactivate```_)
4. Lalu masuk ke folder **film-backend**
5. Jalankan command ```py manage.py runserver```

>  **Jika sudah jalan maka akan muncul** ```localhost:8000```
    
Jika django berhasil dijalankan, lanjut ke React. **Jangan close command prompt anda**

## Requirements
-   [Django REST Framework](https://github.com/encode/django-rest-framework) - For API Management
-   [Psycopg2](https://github.com/psycopg/psycopg2/) - Python-PostgreSQL Database Adapter
-   [Pillow](https://github.com/python-pillow/Pillow) - Python Image Library
