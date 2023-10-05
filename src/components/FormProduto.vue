<template>
    <div>

        <div class="container">
            <h1>Cadastro de Produto</h1>
            <form action="#">
                <div class="form-group">
                    <label for="produto">Produto:</label>
                    <select id="produto" name="produto">
                        <option value="">Selecione</option>
                        <option value="Disco Rígido">Disco Rígido</option>
                        <option value="Unidade de Estado Sólido">Unidade de Estado Sólido</option>
                        <option value="Central de Processamento">Central de Processamento</option>
                        <option value="Processamento Gráfico">Processamento Gráfico</option>
                        <option value="Memória de Acesso Aleatório">Memória de Acesso Aleatório</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="marca">Marca:</label>
                    <select id="marca" name="marca">
                        <option value="">Selecione</option>
                        <option value="HyperCore">HyperCore</option>
                        <option value="QuantumStorage">QuantumStorage</option>
                        <option value="FlashSpeed">FlashSpeed</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="quantidade">Quantidade:</label>
                    <input type="number" id="quantidade" name="quantidade" min="1">
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    name: "FormProduto"
}
</script>

<style>

.container {
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

select,
input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>