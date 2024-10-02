from flask import Flask, redirect, render_template, request, jsonify, session, url_for
from werkzeug.security import generate_password_hash, check_password_hash
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Cambia con una chiave sicura

# Configura i dettagli di connessione al database MySQL
db_config = {
    'host': 'localhost',         # Cambia con l'host del tuo server MySQL
    'user': 'root',              # Cambia con il tuo utente MySQL
    'password': 'logos159',      # Cambia con la tua password MySQL
    'database': 'ed_civica'      # Cambia con il nome del tuo database
}

@app.route('/')
def index():
    return render_template('Index.html')

# Rotta per la registrazione
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16)

         
        try:
            # Connessione al database MySQL
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()
            
            cursor.execute('SELECT email FROM utenti WHERE email = %s', (email,))
            account = cursor.fetchone()
            
            if account:
                return jsonify({"success": False, "message": "Utente già registrato"})
            else:
                cursor.execute('INSERT INTO utenti (email, password) VALUES (%s, %s)', (email, hashed_password))
                conn.commit()
                return jsonify({"success": True, "message": "Registrazione avvenuta con successo"})
        
        except Error as e:
            return jsonify({"success": False, "message": str(e)})
        
        finally:
            if conn.is_connected():
                cursor.close()
                conn.close()
    
    return render_template('registrazione.html')

# Rotta per il login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        try:
            # Connessione al database MySQL
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()

            cursor.execute('SELECT email, password FROM utenti WHERE email = %s', (email,))
            account = cursor.fetchone()

            if account and check_password_hash(account[1], password):
                session['email'] = email  # Imposta la sessione dell'utente dopo il login
                return jsonify({"success": True, "message": "Login avvenuto con successo"})
               
                

                
            else:
                return jsonify({"success": False, "message": "Email o password non corretti"})

        except Error as e:
            return jsonify({"success": False, "message": str(e)})

        finally:
            if conn.is_connected():
                cursor.close()
                conn.close()

    return render_template('login.html')

# Logout dell'utente
@app.route('/logout')
def logout():
    session.pop('email', None)
    return redirect(url_for('index'))


@app.route('/explanation')
def explanation():
    if 'email' not in session:
        return redirect(url_for('login'))
    return render_template('spiegazione.html')

# Maker route
@app.route('/maker')
def maker():
    if 'email' not in session:
        return redirect(url_for('login'))
    return render_template('maker.html')

if __name__ == "__main__":
    app.run(debug=True)
