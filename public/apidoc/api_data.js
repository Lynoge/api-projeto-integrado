define({ "api": [
  {
    "type": "get",
    "url": "/professional",
    "title": "Obter lista",
    "group": "Professional",
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
    "groupTitle": "Professional",
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
    "group": "Professional",
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
    "groupTitle": "Professional",
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
    "url": "/professional/profission/:id",
    "title": "Obter por profissão",
    "group": "Professional",
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
    "groupTitle": "Professional",
    "name": "GetProfessionalProfissionId",
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
    "url": "/professional",
    "title": "Registrar",
    "group": "Professional",
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
    "groupTitle": "Professional",
    "name": "PostProfessional",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro interno\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Email já cadastrado\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/professional",
    "title": "Atualizar",
    "group": "Professional",
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
    "groupTitle": "Professional",
    "name": "PutProfessional",
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
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Email já cadastrado\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/profission",
    "title": "Remover",
    "group": "Profission",
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
    "groupTitle": "Profission",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não encontrado\"\n}",
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
    "group": "Profission",
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
    "groupTitle": "Profission",
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
    "group": "Profission",
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
    "groupTitle": "Profission",
    "name": "PostProfission",
    "error": {
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não encontrado\"\n}",
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
    "url": "/profission",
    "title": "Atualizar",
    "group": "Profission",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Novo nome da profissão</p>"
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
    "groupTitle": "Profission",
    "name": "PutProfission",
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não encontrado\"\n}",
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
    "type": "post",
    "url": "/requester",
    "title": "Cadastrar",
    "group": "Requester",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Nickname do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome de usuário do sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Telefone do requester</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 Created",
          "content": "HTTP/1.1 201 Created\n{\n   \"item\": object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/requester.js",
    "groupTitle": "Requester",
    "name": "PostRequester",
    "error": {
      "examples": [
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Email já cadastrado\"\n}",
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
    "title": "Alterar cadastro",
    "group": "Requester",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Nickname do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome de usuário do sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do requester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Telefone do requester</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "{\n    id :3,\n    nickname: \"fulaninho\",\n    name: \"fulano\",\n    email: \"fulano@mail.com\",\n    password: \"123Abc#\",\n    phone: 999999999\n}",
          "type": "object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "200",
          "content": "HTTP/1.1 200 Ok\n{\n   \"item\": object\n}",
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
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Requester não encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "422",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Email já cadastrado\"\n}",
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
