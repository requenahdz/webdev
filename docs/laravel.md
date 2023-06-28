---
sidebar_position: 3
---

# Laravel

1.  Crear un nuevo proyecto de Laravel

```bash
composer create-project --prefer-dist laravel/laravel e-commerce-{tu-apellido}
```

2. Navegar al directorio del proyecto

```bash
cd e-commerce-{tu-apellido}
```

3. Instalar el paquete de Laravel UI 

```bash
composer require laravel/ui
```

4. Generar el scaffolding de Laravel UI con React y el sistema de autenticación

```bash
php artisan ui react --auth
```

5. Usando tu manejador de base de datos crea una base de datos con el mismo nombre que el proyecto de Laravel

```sql
CREATE DATABASE e-commerce-{tu-apellido}
```

6. Configurar las variables de entorno para la conexión a la base de datos en el archivo .env
Recuerda reemplazar {tu-apellido} con tu propio apellido y nombre_de_usuario y contraseña con tus propias credenciales de la base de datos.



```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=e-commerce-{tu-apellido}
DB_USERNAME=nombre_de_usuario
DB_PASSWORD=contraseña
```

7. Generar la clave de Artisan para Laravel

```bash
php artisan key:generate
```

8. Crea el enlace simbólico para poder acceder a los archivos almacenados en la carpeta /storage/app/public mediante la URL pública correspondiente.

```bash
php artisan storage:link
```


9. Ejecutar las migraciones de Laravel

```bash
php artisan migrate
```

10. Si la configuración se completó correctamente, podrás registrarte e iniciar sesión en el proyecto.