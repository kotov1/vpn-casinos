# start-template
html sass gulp bower

В шаблоне использованы поcледние версии npm_modules, jquery и bootstrap.

Как работает:
Стартовый шаблон клонируется в нужную папку и переименовывается на рабочее имя.
Внутри необходимо реинициализоровать git и устанавить модули и библиотеки npm i и bower i
Можно добавить папку files, которая скрыта от слежения в git, где будут хранится все вспомогательные файлы проекта.
С помощью bower обязательно устанавливаем jquery, которая необходима на случай отсутствия доступа к библиотеке через CDN