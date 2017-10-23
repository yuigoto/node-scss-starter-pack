/**
 * 
 */

// Carregando bibliotecas do Node
const async     = require("async");
const copy      = require("copy");
const express   = require("express");
const fs        = require("fs");
const node_sass = require("node-sass");
const path      = require("path");
const rimraf    = require("rimraf");

// Inicializando aplicação
const app       = express();

// Define a porta local para servir o projeto
const app_port  = process.env.PORT || 3000;

// Verifica se está em modo de desenvolvimento (não usado no momento)
const app_env   = process.env.NODE_ENV || "development";

// Executando tudo em série, de forma assíncrona :)
async.series(
    [
        // Utilizando o módulo "rimraf" para excluír o build anterior
        (callback) => {
            rimraf("public/", (err) => {
                // Verifica se houve erros e prossegue
                callback(err, (err) ? false : true);
            });
        }, 
        // Utilizando "copy" para copiar o conteúdo de "static" para "public"
        (callback) => {
            copy(
                "static/**/*", 
                "public", 
                (err, files) => {
                    // Executando callback async
                    callback(err, files);
                }
            )
        }, 
        // Usando "copy" para copiar o conteúdo de "assets" para "public/assets"
        (callback) => {
            copy(
                "assets/**/*", 
                "public/assets", 
                (err, files) => {
                    // Executando callback async
                    callback(err, files);
                }
            )
        }, 
        // Realizando o transpiling de "site.scss" para "public/assets/css"
        (callback) => {
            node_sass.render(
                {
                    // Arquivo de origem
                    file: "src/site.scss",
                    // Arquivo de destino
                    outFile: "public/assets/css/site.css", 
                    // Comprimir output
                    outputStyle: "compressed", 
                    // Grau de precisão 8 para métricas, recomendado pelo Bootstrap
                    precision: 8, 
                    // Source map
                    sourceMap: true
                }, 
                (err, result) => {
                    // Cria pasta "css" em "public/assets"
                    fs.mkdir("public/assets/css");

                    // Salvando sourcemap e arquivo CSS
                    fs.writeFile(
                        "public/assets/css/site.css", 
                        result.css.toString(), 
                        (err) => {
                            if (err) {
                                console.log("Não foi possível salvar `site.css`");
                            }
                        }
                    );
                    fs.writeFile(
                        "public/assets/css/site.map.css", 
                        result.map.toString(), 
                        (err) => {
                            if (err) {
                                console.log("Não foi possível salvar `site.css`");
                            }
                        }
                    );

                    // Executando callback async
                    callback(err, result);
                }
            );
        }, 
        // Servindo o website, da pasta public
        (callback) => {
            // Servindo a pasta public, para permitir acesso aos assets
            app.use("/", express.static("public"));

            // Servindo o arquivo index.html
            app.use("/", (req, res) => {
                res.sendFile(
                    path.resolve(__dirname, "public", "index.html")
                );
            });

            // Servindo a aplicação na porta definida
            app.listen(
                app_port, 
                (err) => {
                    // Se houver erro, dá um throw
                    if (err) {
                        console.log("Erro: não foi possível servir o projeto...");
                        throw err;
                    } else {
                        console.log(
                            "\x1b[36m[---------------------------------------------------------"
                        );

                        console.log(
                            "\x1b[37m[STARTER PACK]: Servindo a aplicação em: http://localhost:" + app_port
                        );

                        console.log(
                            "\x1b[36m[STARTER PACK]: Executando watcher em `static` e `assets`"
                        );

                        console.log(
                            "\x1b[33m[STARTER PACK]: Digite `rs` e tecle ENTER para reiniciar\n" + 
                            "\x1b[33m[STARTER PACK]: Pressione CTRL + V para encerrar o processo"
                        );

                        console.log(
                            "\x1b[36m[STARTER PACK]: Escreva seu código e seja feliz! ;)"
                        );

                        console.log(
                            "\x1b[36m---------------------------------------------------------\x1b[0m"
                        );
                    }
                }
            );

            // Executa o callback async, mas só para finalizar a série
            callback(null, true);
        }
    ], 
    (err, results) => {
        // Houve erro?
        if (err) {
            // Log de erros
            console.log("Erros de execução:");
            console.log(err);

            console.log("------------------------------");

            // Resultados de cada um dos passos
            console.log("Resultados das operações:");
            console.log(results);
        }
    }
);
