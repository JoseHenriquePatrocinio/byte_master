<template>
    <div>
        <div class="container">
            <h2 class="form-title">Formulário de Cadastro</h2>
            <form action="#">
                <div class="form-group">
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required>
                </div>
                <div class="form-group">
                    <label for="documento">Documento:</label>
                    <input type="text" id="documento" name="documento" required>
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormCliente"
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
}

.container {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
}

.form-group {
    margin-bottom: 15px;
}

.form-title {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="tel"],
input[type="email"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button[type="submit"] {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
</style>