import {Animal, Cat} from './09-protected';

const animal = new Animal('tacuzin');
animal.greeting();

const kuko = new Cat('kuko', 'yo');
kuko.move()

// cada vez que implementamos una clase abstracta,
// no podemos crear instancias de esa clase, si no solo de las
//  clases hijas.
// Las clases abstractas son tan ‘genericas’ que no tiene sentido
// que sean instanciadas. Usamos la keyword abstract.