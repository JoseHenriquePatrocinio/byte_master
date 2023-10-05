<template>
    <div id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link> 
      <router-link to="/">Inicio</router-link> 
      <router-link to="/cliente">Clientes</router-link>
      <router-link to="/orcamento">Orcamentos</router-link>
      <router-link to="/servico">Ordens de Serviço</router-link>
      <router-link to="/produto">Produtos</router-link>
      <router-link to="/relatorio">Relatórios</router-link>
      <router-link to="/usuario">Usuários</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    props: ["logo", "alt"]
  
  }
  </script>
  
  <style scoped>
  #nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url{
    margin: auto;
    margin-left: 0;
  }
  #logo{
    width: 50%;
    height: 50%;
  }
  #nav a{
    color:#FCBA03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }
  #nav a:hover{
    color:#FFF
  }
  </style>