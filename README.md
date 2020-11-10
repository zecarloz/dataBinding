# Databinding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
Para subir o projeto em um diretório local clone os arquivos e inicie com : npm i ; em seguida use ng s -o
Para o projeto atual foi usado o nodejs na versão 14 e typescript 4.0.5

Nesta aplicação apresento uma breve introdução , Simples e resumida dreferente ao uso do Data binding em Angular-cli
O que é e o que faz o Data Binding em Angular ?
                                                    exemplos :
A vinculação de dados é um conceito central no Angular e permite definir a comunicação entre um componente e o DOM, tornando muito fácil definir aplicativos interativos sem se preocupar em enviar e receber dados. Existem quatro formas de vinculação de dados e diferem na forma como os dados fluem.

Do componente para o DOM
Interpolação: {{value}}
Isso adiciona o valor de uma propriedade do componente:

<li>Name: {{ user.name }}</li>
<li>Email: {{ user.email }}</li>
Vinculação de propriedade: [propriedade] = “valor”
Com a vinculação de propriedade, o valor é passado do componente para a propriedade especificada, que geralmente pode ser um atributo html simples:

<input type="email" [value]="user.email">
Aqui estão mais dois exemplos, um que aplica uma cor de fundo do valor de selectedColor no componente e aquele que aplica um nome de classe se é selecionado avalia como verdadeiro:

<div [style.background-color]="selectedColor">


Do DOM para o componente
Vinculação de evento: (evento) = “função”
Quando um evento DOM específico acontece (por exemplo: clique, mudança, keyup), chame o método especificado especificado no componente. No exemplo abaixo, ocookPotato () método do componente é chamado quando o botão é clicado:

<button (click)="cookPotato()"></button>
Mão dupla
Ligação de dados bidirecional: [(ngModel)] = “valor”
Usando o que é chamado de sintaxe banana em uma caixa, a vinculação de dados bidirecional permite que os dados fluam nos dois sentidos. Neste exemplo, a propriedade de dados user.email é usada como o valor para a entrada, mas se o usuário alterar o valor, a propriedade do componente será atualizada automaticamente para o novo valor:
