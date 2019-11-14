# Operadores Relacionais

- `>`: Maior que
- `<`: Menor que
- `>=` Maior ou igual a
- `<=`: Menor ou igual a
- `==`: igual a
- `!=`: diferente de

Quando se tem operadores relacionais e aritiméticos na mesma expressão, primeiro é 
resolvido os aritiméticos para em seguida ser resolvido os relacionais.

## Operadores de Identidade

```javascript
5 == 5; // True
5 == '5'; // True, mesmo sendo de tipos diferentes a igualdade interpreta pelos valores e não pelo tipo
5 === '5'; // Flase, aqui não importa o valor, não são identicos por serem de tipos diferentes
5 === 5; // True
5 != 5; // False
5 != '5'; // False, mesmo sendo de tipos diferentes a desigualdade interpreta pelos valores e não pelo tipo
5 !== '5' // True, aqui não importa o valor, não são identicos por serem de tipos diferentes
```

# Operadores Lógicos

- `!`: negação
- `&&`: conjunção
- `||`: disjunção

### Ordem de precedência

Tendo na mesma expressão operadores aritiméticos, relacionais e lógicos, a ordem de
precedência é:

1. Operadores Aritiméticos
1. Operadores Relacionais
1. Operadores Lógicos

E, entre os operadores lógicos a ordem de precedência é:

1. Negação
1. Conjunção
1. Disjunção

## Operador Ternário

O operador ternário é composto por dois símbolos: `?` e `:`, basicamente 
é montada da seguinte maneira:

`Condição ? true : false`

Se a condição for avaliada como `true` é executado o bloco logo após o `?`, se for 
avaliada como `false` aí será executado o bloco logo após os `:`.

Exmeplo:

```javascript
media >= 7.0 ? "Aprovado" : "Reprovado";
```



