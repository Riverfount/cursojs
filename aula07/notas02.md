# Operadores Aritiméticos
- `+`: Adição
- `-`: Subtração
- `*`: Multiplicação
- `/`: Divisão Real
- `%`: Divisão Inteira (retorna o resto da divisão)
- `**`: Potenciação

## Ordem de Precedência

1. `()` - Primeiro tudo que estiver entre parenteses
1. `**` 
1. `*`, `/`, `%`
1. `+`, `-`

## Operador de Atribuição

### Atribuição Simples

O sinal de `=` é o operador de atribuição simples:

```javascript
var a = 5 + 3
``` 
Nesse exmemplo estamos atribuindo o resultado da soma entre 5 e 3 à variável `a`.


### Auto-atribuição

A auto-atribuição é quando queremos atribuir o resultado de uma operação com uma variável à própria variável. Os exemplos a seguir mostram isso com todos os operadores aritiméticos


```javascript
var n = 3;
n = n + 4;
n = n - 5;
n = n * 4;
n = n / 2;
n = n ** 2;
n = n % 5;
```

Essa notação pode ser simplificada por:

```javascript
var n = 3;
n += 4;
n -= 5;
n *= 4;
n /= 2;
n **= 2;
n %= 5;
```

## Atribuição por Incremento ou Decremento

Uma situação muito comum é termos que incrementar ou decrementar uma variável em um. Isso pode ser feito da seguinte forma:

```javascript
var n = 3;
n += 1;
n -= 1;
```

Como é algo muito utilizado, foi simplificado ainda mais da seguinte forma:

```javascript
var n = 3;
n++;
n--;
```




