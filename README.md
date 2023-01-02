# PasswordValidator

> Nesse desafio, você deverá construir um método/função que deve conseguir receber uma senha e retornar se a mesma é válida, dadas algumas validações. Utilize a linguagem de programação Javascript/Typescript.
> 

## ❓ Case para o desafio

- Deve ser possível receber uma string que passará pelas seguintes validações:
    - A senha deve conter de 16 a 32 caracteres;
    - Deve conter pelo menos 2 caracteres especiais;
    - Deve conter letras maiúsculas e minúsculas;
    - Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).
- Deve retornar um objeto contendo o resultado (verdadeiro ou falso), e uma lista de erros de validação em que a senha não passou;
- **Deve conter testes unitários para validar os casos listados no exemplo.**

[Testes Unitários](https://www.notion.so/Testes-Unit-rios-b31647b73c8b45d99deff35cff5539ce)

## 🎲 Exemplo

```jsx
console.log(isValidPassword("rZpy*D95&WBE'Z&B"));
// { result: true, errors: [] }

console.log(isValidPassword("c|e_AbC>F%8J%k`N8"));
// { result: false, errors: ['Caracteres em sequencia'] }

console.log(isValidPassword("dX5sWaY6tknDUHtL"));
// { result: false, errors: ['Faltam caracteres especiais'] }

console.log(isValidPassword("Gau74J^Zf6(>x4w"));
// { result: false, errors: ['Tamanho inválido'] }
```

### 👾 Tecnologias

- Utilizar POO;
- Utilizar **Typescript**.

## ❌ Restrições

- Utilizar Libs;
- Não copiar código.

## 🚀 Terminou o desafio?

Nos mostre a sua documentação, com tudo o que você escreveu para estudar e aprender a resolucionar esse desafio. Coloque o link do repositório do github dentro da doc.

### Como utilizar?
```bash
# 1. Clone this project
$ git clone https://github.com/RafaRamosCosta/PasswordValidator.git

# 2.Access
$ cd PasswordValidator

# 3.Install dependencies
$ yarn or npm

# 4.Run the project
$ yarn validate or npm run validate

# 6.Run tests
$ yarn test or npm test  
```