
###to do:

Actualizar component tree

Integrar p5.createLoop para exportar gifs
https://www.npmjs.com/package/p5.createloop

Crear nav component flotante con rutas (Home y Random)

Crear pages:
    - path="/" Home shows current canvas
    - path="/random/:id" muestra uno random

Pasar a Funcional
    -Sketch












Lo relevante va en el branch `development` 


##Component tree 
```
App
|_ CreateCanvas (input -> width, input -> height, button -> handleCallback)
|_ Wall
    |_ Canvas (creates a wxh canvas)
        |_ RandomDraw (Sketch)
    

```

