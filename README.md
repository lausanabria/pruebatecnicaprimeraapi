# ✨ Texto a texto gráfico con (*) ⭐

> 🚀 Una API sencilla con NodeJS que convierte texto a gráficamente con asteriscos

## 📋 ¿Qué hace?

Esta API toma cualquier texto que le envíes y lo transforma gráficamente usando asteriscos (**\***). 🎨

## 🛠️ Características

- 📦 **Todo en un archivo**: Para crear tu primera API
- ⚡ **Súper rápida**: Sin dependencias complejas
- 🎯 **Fácil de usar**: Una sola ruta, un solo propósito
- ✨ **Gráfico**: Convierte texto en gráficos con asteriscos

## 🚀 Uso

```bash
# Ejemplo de uso
curl --location 'http://localhost:3000/mensaje' \
--header 'Content-Type: application/json' \
--data '{
    "texto": "Hola mundo"
}'
```

### Resultado:
```
*  * **** *    ****     *  * *  * *  * **** ****     
*  * *  * *    *  *     **** *  * ** * *  * *  *     
**** *  * *    ****     *  * *  * * ** *  * *  *     
*  * *  * *    *  *     *  * *  * *  * *  * *  *     
*  * **** **** *  *     *  * **** *  * **** ****     
```

## 💻 Instalación

```bash
# Clona el repositorio
git clone pruebatecnicaprimeraapi

# Instala dependencias
npm install

# Ejecuta la API
node index.js ó npm start
```

## 📝 API Endpoints

### `POST /mensaje`

Convierte texto a gráfico con asteriscos

**Body:**
```json
{
  "text": "Hola mundo"
}
```

**Respuesta:**
```json
{
    "error": false,
    "codigo": 200,
    "mensaje": "*  * **** *    ****     *  * *  * *  * **** ****     \n*  * *  * *    *  *     **** *  * ** * *  * *  *     \n**** *  * *    ****     *  * *  * * ** *  * *  *     \n*  * *  * *    *  *     *  * *  * *  * *  * *  *     \n*  * **** **** *  *     *  * **** *  * **** ****     ",
    "respuesta": ""
}
```

## 🎉 ¡Listo para usar!

Solo ejecuta el archivo js y comienza a probarla!

---

⭐ **¿Te gustó?** ¡Dale una estrella al repo! 

🐛 **¿Encontraste un bug?** Abre un issue

🤝 **¿Quieres contribuir?** ¡Los PRs son bienvenidos!
