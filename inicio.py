from flask import Flask, render_template

app = Flask(__name__)

# Rota para carregar a página com o nome "BRASIL"
@app.route('/brasil')
def mostrar_brasil():
    return render_template('brasil.html')

# Rota para carregar a página com o nome "INDIA"
@app.route('/india')
def Mostrar_india():
    return render_template('india.html')


# Inicia a aplicação
app.run()


