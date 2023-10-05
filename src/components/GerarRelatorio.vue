<template>
    <div>
        <div class="container">
            <h1>Geração de Relatório</h1>
            <form>
                <div class="form-group">
                    <label for="dataDe">De:</label>
                    <input type="date" id="dataDe" name="dataDe" required>
                </div>
                <div class="form-group">
                    <label for="dataAte">Até:</label>
                    <input type="date" id="dataAte" name="dataAte" required>
                </div>
                <button type="submit">Gerar Relatório</button>
            </form>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2023-10-01</td>
                    <td>Compra de material de escritório</td>
                    <td>R$ 150,00</td>
                </tr>
                <tr>
                    <td>2023-10-02</td>
                    <td>Aluguel de escritório</td>
                    <td>R$ 1.200,00</td>
                </tr>
                <tr>
                    <td>2023-10-03</td>
                    <td>Receita de vendas</td>
                    <td>R$ 2.500,00</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "GerarRelatorio"
}
</script>

<style scoped>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .form-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
        }
        input[type="date"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #007BFF;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #007BFF;
            color: #fff;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
</style>