# DolmenJS

### Readme.md requirements
This readme.md file uses font-awesome via Cloudflare CDN
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

## Description

DolmenJS est un Framework destiné a créer des applications mobile hybride. (web mobile, web encapsulée).  
Malgré son orientation hybride, il peut être aussi utilisé pour créer des application web.

L'objectif de DolmenJS est d'éviter au maximum l'utilisation de plusieurs langage lors de la réalisation d'une application.
Ainsi l'ensemble de la création d'un programme sera donc réalisé au travers d'instructions typescript/javascript.

## Fonctionnement

### Connaissances requises :

Les connaissances nécessaire à la mise en oeuvre du framework sont :
- Le typescript, ou le javascript (afin de créer des vues, des éléments, et des scripts)
- Les scss, ou le css (afin de personnaliser l'apparence des éléments de l'application)
- Le html (pour mettre en place le chargement du framework)

### Configurations du framework :

Le fichier de configuration principale de l'application :
- djs_config.json : Contient les informations et les chemins de l'application :

Exemple (par defaut) : 
```
{
  "name" : "Name",
  "version" : "Version",
  "author" : "Author",
  "base_path" : "/app/src/main/assets/",
  "image_path" : "/app/src/main/assets/images/",
  "i18n_path" : "/app/src/main/assets/i18n/",
  "image_logo_path" : "images/logo.png",
  "image_background_path" : "images/background.jpg",
}
```

- djs_routes.json : Contient les routes de l'application :

Exemple (par defaut) : 
```
{
  "routes" : {
    "/" : "/views/commons/splash_screen.js",
    "/sign_up" : "/views/user/sign_up.html",
    "/sign_in" : "/views/user/sign_in.html",
    "/email_confirm" : "/views/user/email_confirm.html",
    "/two_factor_confirm" : "/views/user/two_factor_confirm.html",
    "/log_off" : "/views/user/log_off.html",
    "/lost_password" : "/views/user/lost_password.html",
    "main_menu" : "/views/commons/main_menu.js"
  }
}
```

## Structure (sugéré par defaut)

```
<BASE_PATH>
├── /index.html
├── /vendors
│  └── /dolmenit
│     ├── /dolmenjs.js
│     └── /dolmenjs.css
├── /configs
│  ├── /djs_configs.json
│  └── /djs_routes.json
├── /i18n
│  └── /**/*.json
├── /elements
│  └── /**/*.ts
├── /views
│  └── /**/*.ts
└── /resources
   ├── /datas
   │  └── /**/*.json
   ├── /images
   │  ├── /**/*.jpg
   │  └── /**/*.png
   ├── /sounds
   │  └── /**/*.wav
   ├── /videos
   │  └── /**/*.avi
   └── /musics
      └── /**/*.mp3
```

## Initialisation

- <BASE_PATH>/index.html :

Exemple (par default) :
```
<html>
<head>
<link href="./vendors/dolmenit/dolmenjs.css" rel="stylesheet" />
</head>
<body>
</body>
<script src="./vendors/dolmenit/dolmenjs.js"></script>
</html>
```

## Les objets :

### Les objets basiques
Les objets basiques sont la base de l'interface dans DolmenJS. Il s'agit des objets visuel les plus génériques posible.  
L'appel aux objets basiques se fera a l'aide de "djs.ob".

- <i class="fas fa-globe" aria-label="public"> public</i> djs.ob.text(ParentDOM : any, JsonParameters: any)
  >
- <i class="fas fa-globe" aria-label="public"> public</i> djs.ob.icon(ParentDOM : any, JsonParameters: any)
  >
- <i class="fas fa-globe" aria-label="public"> public</i> djs.ob.image(ParentDOM : any, JsonParameters: any)
  >

- <i class="fas fa-lock" aria-label="private"> private</i> djs.ob.createAndAppendElement(ParentDOM : any, JsonParameters: any, ClassName: String)
  >

Exemple :
```
djs.ob.text({
    p_x: 1, p_y: 20, p_w: 98, p_h: 7, p_z: 50,
    p_text: "Username :",
    p_font_name: "arial", p_font_size: "7", p_font_color: "black",
    p_font_halign: "left", p_font_valign: "middle",
    p_back_color: "white"
});
```

### Les objets avancés
Les objets avancés sont des combinaisons diverses des objets basiques. Il s'agit des objets visuel communément utilsés en interface graphique.  
L'appel aux objets avancés se fera a l'aide de "djs.oa".

- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.title(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.section(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.button(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.list(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.listitem(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.table(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.tablerow(ParentDOM : any, JsonParameters: any)
  > 
- <i class="fas fa-globe" aria-label="public"> public</i> djs.oa.tablecell(ParentDOM : any, JsonParameters: any)
  > 

- <i class="fas fa-lock" aria-label="private"> private</i> djs.oa.createAndAppendElement(ParentDOM : any, JsonParameters: any, ClassName: String)
  >

Exemple :
```
var l_y = djs.di.rh(100) - djs.di.rw(11);
djs.oa.button({
    p_x: 1, p_y: l_y, p_w: 98, p_h: 10, p_z: 50,
    p_text: "Log on",
    p_font_name: "arial", p_font_size: "10", p_font_color: "black",
    p_font_halign: "center", p_font_valign: "middle",
    p_back_color: "white",
    on_click: {
      p_object: djs.ac.goto, p_var_struct: {
        p_route: "view_logon", p_destruct: 'view_login'
      }
    }
});
```

## Les élements :

### Le chargeur d'éléments :

### Exemples d'éléments personnalisés :

## Le gestionnaire de fenêtre :

Le gestionnaire de fenetre a pour principale fonction de repertorier les éléments composants la vue actuel.  
L'appel se fera avec "djs.wm".

- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.set(WindowName : string)
  > Alias de djs.wm.setWindow
- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.setWindow(WindowName : string)
  > Défini le nom de la pile des prochains élements ajoutés

- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.add(ObjectName : string, Object: any)
  > Alias de djs.wm.addObject
- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.addObject(ObjectName: string, Object: any)
  > Ajoute un objet a la pile actuelle
- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.addPersistant(ObjectName : string, Object: any)
  > Ajoute un element a la pile generale

- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.get(ObjectName : string)
  > Alias de djs.wm.getObject
- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.getObject(ObjectName : string)
  > Retourne un element depuis la pile actuelle

- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.destruct(WindowName : string)
  > Alias de djs.wm.destructWindow
- <i class="fas fa-globe" aria-label="public"> public</i> djs.wm.destructWindow(WindowName : string)
  > Detruit tout les elements de pile indiqué

## Les vues

## Licence

DolmenJS est sous licence MIT.

