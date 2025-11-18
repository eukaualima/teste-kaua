/**
 * Este arquivo é responsável pela gestão do usuário.
 * 
 * Autor: Kauã dos Santos Lima
 * Última modificação: 18/11/2025
 */

/**
 * Classe usuário
 */
class Usuario
{
    /**
     * Construtor da classe usuário.
     * 
     * @param {string} nome Nome do usuário.
     * @param {string} email E-mail do usuário.
     * @param {string} senha Senha do usuário.
     * @param {int} data_nasc Data de nascimento do usuário. 
     * @param {int} telefone Número de telefone do usuário.
     */
    constructor(nome, email, senha, data_nasc, telefone)
    {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.data_nasc = data_nasc;
        this.telefone = telefone;
    }

    // Getters e setters
    getNome()
    {
        return this.nome;
    }

    setNome(nome)
    {
        this.nome = nome;

        console.log('Novo nome: ', this.nome);
    }

    getEmail()
    {
        return this.email;
    }

    setEmail(email)
    {
        this.email = email;

        console.log('Novo e-mail: ', this.email);
    }

    getSenha()
    {
        return this.senha;
    }

    setSenha(senha)
    {
        this.senha = senha;

        console.log('Nova senha: ', this.senha);
    }

    getDataNasc()
    {
        return this.data_nasc;
    }

    setDataNasc(data_nasc)
    {
        this.data_nasc = data_nasc;

        console.log('Nova data de nascimeto: ', this.data_nasc);
    }

    getTelefone()
    {
        return this.telefone;
    }

    setTelefone(telefone)
    {
        this.telefone = telefone;

        console.log('Novo telefone: ', this.telefone);
    }

    /**
     * Método para enviar as informações do usuário no terminal.
     */
    printUsuario()
    {
        console.log({ nome: this.nome, email: this.email, senha: this.senha, data_nasc: this.data_nasc, telefone: this.telefone });
        // Saída: { nome: 'Kauã', email: 'kaualima@gmail.com' ... }
    }
}

const usuario = new Usuario('Kauã', 'kaualima@gmail.com', '123', 2003, 1111111);

let nome_usuario = usuario.getNome();
let email_usuario = usuario.getEmail();
let senha_usuario = usuario.getSenha();
let data_nasc_usuario = usuario.getDataNasc();
let telefone_usuario = usuario.getTelefone();

console.log(`Informações do usuário\n\nNome: ${nome_usuario}\nE-mail: ${email_usuario}\nSenha: ${senha_usuario}\nData de nascimento: ${data_nasc_usuario}\nTelefone: ${telefone_usuario}`);

usuario.setEmail('kaua.lima@ifba.edu.br');

usuario.printUsuario();

usuario.setEmail('kaualima@ifba.edu.br');

usuario.printUsuario();