# Rascunho de Requisitos

## Objetivo

- Criar um sistema de portfólio pessoal, que terá um banco de dados para se alimentar com as informações pessoais e profissionais. Esse backend será gerenciado por um portal admin, também criado com frontend para que possam ser inseridas as inforções do portifólio, criadas, excluídas e gerenciadas as sessões do portfólio. No portal admin também será possível definir como serão preenchidas e o design das sessões. 

## Tecnologias

### Frontend

- React
- Tailwind
- Bibliotecas de ícones de terceiros

### Backend

- Nodejs
- Express
- Supabase

### Arquitetura

- MVVM para frontend
- MVC para backend

### Fluxo

- O portfolio deve ter um endpoint com um frontend separado para alimentar o backend que salvará no banco de dados com uma interface amigavel. O endpoint principal do portfolio realizarã consultas no banco de dados que foi alimentado pelo admin para preencher as sessões do site.