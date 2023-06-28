"use strict";(self.webpackChunkwebdev_project_starter=self.webpackChunkwebdev_project_starter||[]).push([[357],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>b});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),i=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?t.createElement(b,o(o({ref:a},p),{},{components:r})):t.createElement(b,o({ref:a},p))}));function b(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8652:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=r(7462),n=(r(7294),r(3905));const l={sidebar_position:3},o="Laravel",c={unversionedId:"laravel",id:"laravel",title:"Laravel",description:"1.  Crear un nuevo proyecto de Laravel",source:"@site/docs/laravel.md",sourceDirName:".",slug:"/laravel",permalink:"/docs/laravel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/installation"},next:{title:"Github",permalink:"/docs/github"}},s={},i=[],p={toc:i},u="wrapper";function d(e){let{components:a,...r}=e;return(0,n.kt)(u,(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"laravel"},"Laravel"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Crear un nuevo proyecto de Laravel")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project --prefer-dist laravel/laravel e-commerce-{tu-apellido}\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Navegar al directorio del proyecto")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd e-commerce-{tu-apellido}\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Instalar el paquete de Laravel UI ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/ui\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Generar el scaffolding de Laravel UI con React y el sistema de autenticaci\xf3n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan ui react --auth\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Usando tu manejador de base de datos crea una base de datos con el mismo nombre que el proyecto de Laravel")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE e-commerce-{tu-apellido}\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Configurar las variables de entorno para la conexi\xf3n a la base de datos en el archivo .env\nRecuerda reemplazar {tu-apellido} con tu propio apellido y nombre_de_usuario y contrase\xf1a con tus propias credenciales de la base de datos.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=e-commerce-{tu-apellido}\nDB_USERNAME=nombre_de_usuario\nDB_PASSWORD=contrase\xf1a\n")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Generar la clave de Artisan para Laravel")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan key:generate\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Crea el enlace simb\xf3lico para poder acceder a los archivos almacenados en la carpeta /storage/app/public mediante la URL p\xfablica correspondiente.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan storage:link\n")),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Ejecutar las migraciones de Laravel")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate\n")),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Si la configuraci\xf3n se complet\xf3 correctamente, podr\xe1s registrarte e iniciar sesi\xf3n en el proyecto.")))}d.isMDXComponent=!0}}]);