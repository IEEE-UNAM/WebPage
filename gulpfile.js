import { src, dest, watch } from 'gulp'; // Importa las funciones src y dest desde gulp
import * as dartSass from 'sass'; // Importa el módulo sass desde node_modules
import gulpSass from 'gulp-sass'; // Importa el módulo gulp-sass desde node_modules

const sass = gulpSass( dartSass ); // Crea una instancia de gulp-sass con dartSass

export function css( done ){
    src('src/scss/app.scss') // Origen de los archivos
        .pipe( sass().on('error', sass.logError) ) // Procesa los archivos con gulp-sass
        .pipe( dest('dist/css') ); // Destino de los archivos
    done();
}

export function dev(){
    watch('src/scss/**/*.scss', css); // Observa los cambios en los archivos scss
}