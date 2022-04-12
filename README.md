Para rodar

- Intalar o docker -> https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt
- rodar o comando -> docker run --name graphqltestjr -p 5432:5432 -e POSTGRES_PASSWORD="graphqljr" -d postgres
- nvm use 14
- npm i 
- npx knex migrate:latest
- npm start
