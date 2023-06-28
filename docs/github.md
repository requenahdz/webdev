---
sidebar_position: 4
---

# Github

1. Crea un repositorio en GitHub si aún no lo has hecho. Ve a la página principal de GitHub, inicia sesión en tu cuenta y haz clic en el botón "New repository" (Nuevo repositorio) para crear uno.

2. Asegúrate de tener Git instalado en tu computadora. Puedes verificarlo abriendo una ventana de terminal y ejecutando el siguiente comando:

```bash
    git --version
```

3. Abre una ventana de terminal y navega hasta el directorio raíz de tu proyecto local. Puedes usar el comando cd para cambiar de directorio.

```bash
    cd e-commerce-{tu-apellido}
```

4. Inicializa un repositorio Git en tu directorio local ejecutando el siguiente comando:

```bash
    git init
```

5. Agrega los archivos que deseas incluir en tu commit. Puedes agregar un archivo específico usando el comando:

```bash
    git add nombre_archivo
```

6. Si deseas agregar todos los archivos modificados, puedes usar el siguiente comando para agregarlos todos a la vez:

```bash
    git add .
```

7. Realiza el commit con el siguiente comando
   Asegúrate de proporcionar un mensaje descriptivo y significativo que explique los cambios realizados en el commit.

```bash
   git commit -m "Mensaje descriptivo del commit"
```

8. Copia el enlace del repositorio remoto. Por ejemplo, podría ser algo como

```bash
    https://github.com/{tu-usuario}/e-commerce-{tu-apellido}.git
```

9. Conecta tu repositorio local a tu repositorio remoto en GitHub usando el siguiente comando:

```bash
    git remote add origin https://github.com/{tu-usuario}/e-commerce-{tu-apellido}.git
```

10. Finalmente, sube tus commits al repositorio remoto ejecutando el siguiente comando:

```bash
    git push -u origin main
```

11. Después de ejecutar el comando, se te pedirá que ingreses tus credenciales de GitHub (nombre de usuario y contraseña) para autenticarte. Una vez que la autenticación sea exitosa, tus commits se subirán al repositorio remoto en GitHub.

12. Es importante crear la rama "develop": Esta rama se utiliza para el desarrollo continuo del proyecto. Es donde se fusionan todas las características y cambios individuales antes de ser probados y desplegados. Puedes crear ramas adicionales a partir de "develop" para trabajar en características específicas o correcciones de errores. Esto permite que múltiples desarrolladores trabajen en paralelo sin interferir entre sí. También proporciona un entorno de prueba más estable antes de llevar los cambios a la rama principal.

```bash
    git branch develop
```

13. Es importante crear la rama "master" (o "main"): Esta es la rama principal de tu repositorio y representa la versión estable y confiable de tu proyecto. Idealmente, esta rama debería contener únicamente versiones probadas y listas para producción. Los commits en esta rama generalmente se etiquetan con números de versión para facilitar el seguimiento de las versiones lanzadas.

```bash
    git branch master
```

14.- Puedes crear ramas adicionales con el nombre que deseas darle a tu nueva rama. Por ejemplo, puedes llamarla "feature/nueva-funcionalidad" o cualquier otro nombre descriptivo que refleje el propósito de la rama.

```bash
    git branch feature/nueva-funcionalidad
```

15.- Puedes usar el siguiente comando para cambiarte entre ramas

```bash
    git checkout {nombre-de-la-rama}
```


