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

        <table class="item-table">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Marca</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Disco Rígido</td>
                    <td>HyperCore</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Unidade de Estado Sólido</td>
                    <td>QuantumStorage</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "FormProduto"
}
</script>

<style scoped>
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

.item-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-size: 16px;
}

.item-table th,
.item-table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

.item-table th {
    background-color: #007bff;
    color: #fff;
}

.item-table tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>