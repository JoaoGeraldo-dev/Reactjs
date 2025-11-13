    create database aulabd;
    use aulabd;

    create table alunos(
    codigo int key auto_increment,
    nome varchar(50),
    cidade varchar(50),
    estado varchar(2)
    );

    insert into alunos(nome, cidade, estado) value ("João Geraldo", "Arceburgo",
    "MG");

    select * from alunos;