public class Pessoa {

    public String nome;
    public char sexo;
    public Date dataNascimento;

    public Pessoa() {}

    public Pessoa(String nome) {
        this.nome = nome;
    }

    public Pessoa(String nome, char sexo, Date dataNascimento) {
        this.nome = nome;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
    }

    public String getInformacoes() {
        return "Nome: " + nome + "\nSexo: " + sexo + "\nData de Nascimento: " + dataNascimento.toString();
    }

    public int getIdadeAtual() {
        return new Date().getFullYear() - this.dataNascimento.getFullYear();
    }

    public static void imprimirIdade(Pessoa p) {
        System.out.println(p.getIdadeAtual())   
    }

}

// Método
// Pessoa pessoaObjeto = new Pessoa();
// pessoaObjeto.getInformacoes()

// Método estático
// Pessoa.imprimirIdade(pessoaObjeto);