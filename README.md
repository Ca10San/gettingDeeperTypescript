# gettingDeeperTypescript

## Parte 1

Fixação da base de fundamentos do Typescript, nada novo, mas há pontos interessantes a serem destacados.

### Programação defensiva

A lingugagem Javascript por questões de desempenho (afinal foi feita originalmente para rodar no navegador), por padrão, não faz copias de variáveis, apenas envia um apontador de uma varável para outra sendo assim é óbvio que ao trazer uma informação que nao deve ficar acessível para o usuário no front sem nenhum tratamento ele terá acesso a métodos de classe privados.

Uma das técnicas a serem utilizadas além do básico de qualquer linguagem tipada comom métodos públicos e privados com layers de acesso, é forçar a cópia dos dados que serão transportados para a view tornando duas referências separadas.

Admito que pode parecer uma solução idiota de tão óbvia, mas fiquei surpreso sobre o quão funcional isso é!

## Parte 2

Explica os conceitos básicos de POO usando Typescript

### Generic Typing

As vezes eu via na construção de dependências que usavam typescript algumas classes usando '<T,K>' e nunca soube o que significva afinal todas as minhas classes que havia feito até aqui tinham seus tipos e estruturas a serem implementados especificamente, mas com esse recurso de associar o tipo dinamicamente abriu um leque grande de utilidades