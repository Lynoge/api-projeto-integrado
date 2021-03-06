define({ "api": [
  {
    "type": "get",
    "url": "/chat",
    "title": "Obter lista de conversas do usuário",
    "group": "Chat",
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n  \"items\": [object,object...]\n}",
          "type": "json"
        },
        {
          "title": "204",
          "content": "HTTP/1.1 204 No Content\n{\n  \"items\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/chat.js",
    "groupTitle": "Chat",
    "name": "GetChat",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/account",
    "title": "Obter dados do usuário atual",
    "group": "Conta",
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"user\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/account.js",
    "groupTitle": "Conta",
    "name": "GetAccount",
    "error": {
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Registro não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/password",
    "title": "Alterar senha",
    "group": "Conta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "older",
            "description": "<p>Senha velha</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newer",
            "description": "<p>Senha nova</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"message\": \"Alterado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/account.js",
    "groupTitle": "Conta",
    "name": "PostPassword",
    "error": {
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Registro não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Criar uma nova conta",
    "group": "Conta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Apelido do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome de usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Telefone do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>(P)rofissional ou (R)equerente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "{\n   nickname: \"fulaninho\",\n   name: \"fulano\",\n   email: \"fulano@mail.com\",\n   password: \"123Abc#\",\n   phone: 999999999,\n   type: 'R'\n}",
          "type": "object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "201",
          "content": " HTTP/1.1 201 Ok\n{\n  \"user\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/account.js",
    "groupTitle": "Conta",
    "name": "PostSignup",
    "error": {
      "examples": [
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/token",
    "title": "Gerar novo token",
    "group": "Conta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"user\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/account.js",
    "groupTitle": "Conta",
    "name": "PostToken",
    "error": {
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Registro não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/image",
    "title": "Obter imagem",
    "group": "Imagem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome/Path completo da imagem.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/image.js",
    "groupTitle": "Imagem",
    "name": "GetImage",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/image",
    "title": "Obter lista de nomes das imagens já salvas",
    "group": "Imagem",
    "version": "0.0.0",
    "filename": "src/routes/image.js",
    "groupTitle": "Imagem",
    "name": "GetImage",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/image",
    "title": "Alterar imagem do perfil",
    "group": "Imagem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Imagem a ser salva.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n   \"item\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/image.js",
    "groupTitle": "Imagem",
    "name": "PostImage",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/imagechat",
    "title": "Enviar imagem para o chat",
    "group": "Imagem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Imagem a ser salva.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n   \"item\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/image.js",
    "groupTitle": "Imagem",
    "name": "PostImagechat",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/profission",
    "title": "Remover",
    "group": "Profissao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da profissão a ser removida</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n   {\n     \"item\": object\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/profission.js",
    "groupTitle": "Profissao",
    "name": "DeleteProfission",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Registro não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/profission",
    "title": "Obter lista",
    "group": "Profissao",
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n  \"items\": [object,object...]\n}",
          "type": "json"
        },
        {
          "title": "204",
          "content": "HTTP/1.1 204 No Content\n{\n  \"items\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/profission.js",
    "groupTitle": "Profissao",
    "name": "GetProfission",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/profission",
    "title": "Cadastrar",
    "group": "Profissao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da nova profissão</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"item\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/profission.js",
    "groupTitle": "Profissao",
    "name": "PostProfission",
    "error": {
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Registro não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/professional/profission/:id",
    "title": "Remover profissão do profissional",
    "group": "Profissional",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único da profissão</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/professional.js",
    "groupTitle": "Profissional",
    "name": "DeleteProfessionalProfissionId",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/professional",
    "title": "Obter lista",
    "group": "Profissional",
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n  \"items\": [object,object...]\n}",
          "type": "json"
        },
        {
          "title": "204",
          "content": "HTTP/1.1 204 No Content\n{\n  \"items\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/professional.js",
    "groupTitle": "Profissional",
    "name": "GetProfessional",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/professional/:id",
    "title": "Obter por id",
    "group": "Profissional",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id único do professional</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"item\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/professional.js",
    "groupTitle": "Profissional",
    "name": "GetProfessionalId",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Professional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/professional/profission/:profission",
    "title": "Obter por profissão",
    "group": "Profissional",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profission",
            "description": "<p>Identificador único ou nome da profissão</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"item\": object\n}",
          "type": "json"
        },
        {
          "title": "204",
          "content": "HTTP/1.1 204 No Content\n{\n  \"items\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/professional.js",
    "groupTitle": "Profissional",
    "name": "GetProfessionalProfissionProfission",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Professional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/professional/profission/:id",
    "title": "Adicionar profissão ao profissional",
    "group": "Profissional",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único da profissão</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/professional.js",
    "groupTitle": "Profissional",
    "name": "PostProfessionalProfissionId",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/professional",
    "title": "Atualizar",
    "group": "Profissional",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "professional",
            "description": "<p>Propriedades a serem alteradas</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": " HTTP/1.1 200 Ok\n{\n  \"message\": \"Alterado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/professional.js",
    "groupTitle": "Profissional",
    "name": "PutProfessional",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/requester",
    "title": "Obter lista",
    "group": "Requester",
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n  \"items\": [object,object...]\n}",
          "type": "json"
        },
        {
          "title": "204",
          "content": "HTTP/1.1 204 No Content\n{\n  \"items\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/requester.js",
    "groupTitle": "Requester",
    "name": "GetRequester",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/requester/:id",
    "title": "Obter por id",
    "group": "Requester",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id único do requester</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n   {\n     \"item\": object\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/requester.js",
    "groupTitle": "Requester",
    "name": "GetRequesterId",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Requester não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/requester",
    "title": "Atualizar",
    "group": "Requester",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "requester",
            "description": "<p>Propriedades a serem alteradas</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n   \"message\": \"Alterado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/requester.js",
    "groupTitle": "Requester",
    "name": "PutRequester",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/visit",
    "title": "Obter lista de visitas do usuário logado",
    "group": "Visitas",
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n  \"items\": [object,object...]\n}",
          "type": "json"
        },
        {
          "title": "204",
          "content": "HTTP/1.1 204 No Content\n{\n  \"items\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/visit.js",
    "groupTitle": "Visitas",
    "name": "GetVisit",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/visit/:id",
    "title": "Obter por id",
    "group": "Visitas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da visita</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n  \"item\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/visit.js",
    "groupTitle": "Visitas",
    "name": "GetVisitId",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Registro não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/rating",
    "title": "Avaliar uma nova visita",
    "group": "Visitas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da visita</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Valor da avaliação de 0 à 5</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n   \"message\": \"Avaliado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/visit.js",
    "groupTitle": "Visitas",
    "name": "PostRating",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/visit",
    "title": "Cadastrar uma nova visita",
    "group": "Visitas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "professionalId",
            "description": "<p>Identificador do profissional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>DataHora em que será realizada a visita</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "{\n    professionalId: 3,\n    date: 'Thu Jul 13 2017 19:16:23 GMT-0300 (BRT)'\n}",
          "type": "object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n   \"item\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/visit.js",
    "groupTitle": "Visitas",
    "name": "PostVisit",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Profissional não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
