# API de Cadastro de clientes

Esta API é para o cadastro de clientes com cargo, API Desenvolvida utilizando Express com TypeScript e com biblioteca de documentação swagger.

## Endpoints

### GET /users
Este endpoint é responsável por retornar a listagem de todos os usuários cadastrados no banco de dados.

#### Respostas

##### OK! 200
Caso essa resposta ocorra, você receberá a listagem de todos os usuários.

#### Respostas

Exemplo de Resposta sucesso:

```

[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "adm": "1"
    },
    {
        "id": 2,
        "name": "Victor",
        "email": "victor@teste.com",
        "adm": "1"
    }
]


```


### POST /register
Esse endpoint e responsável por fazer o cadastro do usuário

#### Parâmetros

name: Nome do usuário

email: E-mail do usuário.

password: Senha do usuário.

adm: Cargo do usuário (0 normal 1 adm)


Exemplo de Requisição:

```

{
    "name": "Victor"
    "email": "victor@teste.com",
    "password": "12345"
    "adm": "1"

}




```

#### Respostas

##### OK! 200
Caso essa resposta ocorra, seu usuário foi cadastrado com sucesso.

##### Falha no Cadastro! 404
Caso essa resposta ocorra, seu E-mail ja esta cadastrado.


### PUT /update

#### Parâmetros

ID: Id do user deve ser passador na rota ex: `http://localhost:8080/update/id`

```
{
    "name" "victor" <= novo nome
    "email": "victor@teste.com" <= novo email,
    "password": "1234" <= nova senha
    "adm:: "1" <= novo cargo

}

```

#### Respostas

##### OK! 200
Caso essa resposta ocorra, a atualização ocorreu com sucesso.

##### Falha! 404
Caso essa resposta ocorra, novo email ja existe no banco de dados.


Exemplo de Resposta sucesso:

`
OK
`

### DELETE /delete

#### Parâmetros

ID: Id do user deve ser passador na rota ex: `http://localhost:8080/delete/id`

#### Respostas

##### OK! 200
Caso essa resposta ocorra, a deleção ocorreu com sucesso.

##### Falha! 404
Caso essa resposta ocorra, o id informado e invalido.

Exemplo de Resposta sucesso:

`
OK
`








