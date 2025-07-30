# Amigo Secreto

Este proyecto es una aplicación web simple para organizar un sorteo de "Amigo Secreto". Permite agregar nombres de amigos a una lista y luego seleccionar aleatoriamente uno de ellos como el amigo secreto.

## Funcionalidades

- **Agregar amigos:** Ingresa el nombre de un amigo y agrégalo a la lista.
    - Teniendo en cuenta que no se pueden agregar vacios.
- **Mostrar lista:** Visualiza la lista de amigos agregados.
- **Sortear amigo secreto:** Selecciona aleatoriamente un amigo de la lista y muestra el resultado.
    - Teniendo en cuenta que no se puede activar, estando vacio la lista.

## Uso

1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en el botón **"Añadir"** para agregarlo a la lista.
3. Cuando hayas agregado todos los nombres, haz clic en **"Sortear amigo"** para elegir un amigo secreto al azar.

## Estructura de archivos relevante

- `app.js`: Contiene la lógica principal para agregar amigos, mostrar la lista y realizar el sorteo.
- `index.html`: Incluye los elementos de entrada de nombre, la lista de amigos (`#listaAmigos`), el área de resultado (`#resultado`) y los botones que interactúan con las funciones de `app.js`.

## Dependencias

- JavaScript puro (no requiere frameworks).
- El archivo HTML debe incluir el script `app.js`.

## Ejemplo de uso

```plaintext
1. Escribe "Ana" y haz clic en "Añadir".
2. Escribe "Luis" y haz clic en "Añadir".
3. Haz clic en "Sortear amigo".
4. El resultado mostrará: "El amigo secreto es Ana" (o el nombre sorteado).