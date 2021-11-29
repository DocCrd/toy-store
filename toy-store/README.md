# 27-11-nuxt2-ssr-ts-sass

## Build Setup

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

За репозиторий отвечают несколько бибилотек:

 - vue-class-component, - позволяющая создавать компоненты vue в стиле классов
 - vuex-module-decorators, - библиотека на основе декораторов, упрощающая работу со стором
 - @nuxt/axios, - отправка запроса на API
 - sass и sass-loader - стили проекта

после запроса главной страницы, каталога, данные запрашиваются сервером, рендерятся и сохраняются в store. Готовый код страницы отправляется клиенту. В сторе структура данных дополняется полем boolean (models/Thing.ts), сужащим индикатором добавления в корзину. После покупки товаров из корзины эти индикаторы сбрасываются.
