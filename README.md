# 🏆 Sistema de Gestão de Atletas

## 📌 Sobre o Projeto

Este projeto em JavaScript modela um atleta utilizando Programação Orientada a Objetos (POO).

O sistema é capaz de:

- Armazenar dados pessoais do atleta (nome, idade, peso e altura)
- Definir a categoria do atleta com base na idade
- Calcular o IMC (Índice de Massa Corporal)
- Calcular a média válida das notas (descartando a maior e a menor)
- Exibir todas as informações no console

O objetivo é praticar conceitos fundamentais de orientação a objetos e manipulação de dados em JavaScript.

---

## ⚙️ Como Funciona

A classe `Atleta` recebe:

- Nome
- Idade
- Peso
- Altura
- Lista de notas

O sistema executa os seguintes cálculos:

### 📂 Categoria
Classifica o atleta conforme a idade:

- 9 a 11 anos → Infantil  
- 12 a 13 anos → Juvenil  
- 14 a 15 anos → Intermediário  
- 16 a 30 anos → Adulto  
- Outros casos → Sem categoria  

### ⚖️ IMC
Fórmula utilizada:

IMC = peso / (altura × altura)

### 🏅 Média Válida
1. Ordena as notas em ordem decrescente  
2. Remove a maior e a menor nota  
3. Calcula a média das notas restantes  

---

## 🚀 Como Executar o Projeto

### ✔️ Pré-requisitos

Você precisa ter instalado:

- Node.js (versão 14 ou superior recomendada)

Para verificar:

node -v

---

### ▶️ Executando o Projeto

1. Baixe o arquivo `dados-atletas.js`.
2. Abra o terminal na pasta onde o arquivo está localizado.
3. Execute:

node dados-atletas.js

4. As informações do atleta serão exibidas no terminal.

---

## 🧠 Estrutura do Projeto

📁 projeto  
 └── dados-atletas.js

---

## 📚 Conceitos Aplicados

- Programação Orientada a Objetos (POO)
- Classes e Métodos
- Condicionais (if/else)
- Métodos de Array (sort, slice, reduce)
- Cálculos matemáticos
- Template Strings

---

## ✨ Possíveis Melhorias Futuras

- Permitir cadastro de múltiplos atletas
- Criar menu interativo no terminal
- Implementar validações de entrada
- Modularizar o código
- Transformar em API ou aplicação web
