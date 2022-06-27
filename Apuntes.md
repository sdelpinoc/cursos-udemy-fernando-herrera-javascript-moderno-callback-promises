# Apuntes

### NODE / NPM

- Para saber las versiones de node y/o:
    - `npm -v o --version`
    - node -v o --version

- Para inicializar npm:
    - `npm init`

### [WEBPACK](https://webpack.js.org/)

- Para utilizar webpack:
    - `npm install webpack webpack-cli --save-dev(dependencias de desarrollo)`
    - En el archivo package.json, en "scripts", creamos el atributo build y le asignamos el comando webpack

~~~
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
    },
~~~
- Después corremos el comando:
    - `npm run build(Se crea la carpeta dist, con el archivo main.js)`
    - Después debemos llamar a ese archivo main.js, desde nuestro html

- Para configurar webpack, debemos crear el archivo webpack.config.js en la raíz del proyecto, el cual empieza con una
similar a la siguiente:
~~~
module.exports = {
    mode: 'development',
    module: {
        rules: [

        ]
    },
    optimization: {

    },
    plugins: []
}
~~~

### Plugins:
A continuación se instalaran algunos plugins oficiales de webpack:

#### [html-loader](https://webpack.js.org/loaders/html-loader/)
#### [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)

- htm-loader: convierte nuestro html en un string para que pueda ser importado en el bundle.

- Necesitamos correr los comandos de:
    - `npm install --save-dev html-loader`
    - `npm install --save-dev html-webpack-plugin`

- Debemos crear una regla para evaluar los archivos .html con una expresión regular, indicarle el loader, entre otras
opciones:
~~~
rules: [
    {
        test: /.html$/,
        loader: 'html-loader',
        options: {
            sources: false
        }
    }
]
~~~

También en plugin, agregamos:
~~~
plugins: [
    new HtmlWebPack()
]
~~~

- Si ahora corremos `npm run build`, ya se genera un archivo html(junto con el .js que ya se generaba desde antes) en la
carpeta de dist
- En package.json, indicamos el nombre del archivo js principal(index.js generalmente), el cual será proceso para generar el archivo de main.js
en la carpeta de dist
- Si solo dejamos HtmlWebPack() en el plugin solo va a generar el html y asociar los js pertinentes.
- Entonces debemos agregar otras configuraciones, quedando como:
~~~
    plugins: [
        new HtmlWebPack({
            title: 'Mi first webpack app',
            // filename: 'index.html' // Default is index.html,
            template: './src/index.html'
        })
    ]
~~~

- Para limpiar los archivos de la carpeta dist, dentro de module.exports, podemos agregar:
~~~
output: {
    clean: true
}
~~~

### [devServer](https://webpack.js.org/configuration/dev-server/)
- Para utilizar el plugin, corremos le comando de:
    - `npm install --save-dev webpack-dev-server`

    - En package.json, debemos agregar en scripts, el comando serve:

~~~
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open --port=8080"
},
~~~
- Después corremos el comando(para este caso no es necesario run):
    - `npm start`

- Para agregar archivos css, debemos instalar los plugis de:
### [css-loader](https://webpack.js.org/loaders/css-loader/)
### [style-loader](https://webpack.js.org/loaders/css-loader/)

- Para instarlos, corremos lo siguiente:
    - `npm install --save-dev css-loader style-loader`

- En webpack.config.js, debemos agregar otra regla en rules[](Agregar primero style-loader):
~~~
{
    test: /\.css/i,
    use: ['style-loader', 'css-loader'],
}
~~~

Para poder visualizar nuestro css en la carpeta dist, utilizamos el plugin de:
### [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

- Lo instalamos con el comando de:
    - `npm install --save-dev mini-css-extract-plugin`

Y posteriormente en webpack.config.js, agregamos otra regla en rules[]
~~~
{
    test: /styles.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
}
~~~

Y también se debe agregar en plugins[]:
~~~
~~~

Agregamos la llamada al css, desde algún archivo js que determinamos nosotros(la ruta parte desde /src):
~~~
import './styles.css';
~~~

- Para manejar las imagenes tenemos la opción de importarla en nuestro js:

### [file-loader](https://v4.webpack.js.org/loaders/file-loader/)

- Usamos el comando de: `npm install --save-dev file-loader`

- Y agregamos la regla de:
~~~
{
    test: /\.(png|jpe?g|gif)$/i,
    // use: [
    //     {
    //         loader: 'file-loader',
    //     },
    // ],
    loader: 'file-loader',
    options: {
        // name: '[path][name].[ext]',
        name: '[name].[ext]',
        outputPath: 'assets/img'
    },
},
~~~

- Pero también podemos insertarla en el html del src y para eso requerimos el siguiente plugin:

### [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/#root)

- Corremos el comando de:
- `npm install --save-dev copy-webpack-plugin`

- Agregamos el requiere y en plugins, lo instanciamos:

const CopyPlugin = require('copy-webpack-plugin');

~~~
new CopyPlugin({
    patterns: [
    { from: "source", to: "dest" },
    { from: "other", to: "public" },
    ],
}),
~~~

- Para tener 2 builds, de desarrollo y producción, podemos:
- Crear otro archivo de configuración de webpack llamado webpack.prod.js
- Y en el cambiar cambiar el atributo de mode a production
- Y en package.json, crear un comando de build:dev y uno de serve:dev, dentro de scripts, apuntando a webpack.prod.js
~~~
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --open --port=8080 --config webpack.prod.js"
~~~
- Tenemos que usar el comando `nmp run start:dev` para levantar el servidor de desarrollo ahora.

También instalamos otros 2 plugin :
### [CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/#root)
### [TerserWebpackPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/#root)

- El comando de instalación es: 
    - `npm install --save-dev css-minimizer-webpack-plugin terser-webpack-plugin`

- Y en el webpack.prod.js, agregamos:
~~~
const CssMinimazer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');
~~~
- Y después en module.exports: 
~~~
optimization: {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ]
},
~~~

- Para la compatibilida de javascriptm, utilizamos:
###[Babel](https://babeljs.io/)

- Corremos el comando:
    - `npm install --save-dev babel-loader @babel/core`

Y en el archivo de webpack.config.js, en rules[] agregamos:
~~~
{
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
        presets: ['@babel/preset-env']
        }
    }
}
~~~

- También debemos ejecutar el comando:
    - `npm install @babel/preset-env --save-dev`

- Crear el archivo de babel.config.json, el cual tendrá el siguiente código:

~~~
{
  "presets": ["@babel/preset-env"]
}
~~~

