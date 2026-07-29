import './login.css'

export default function Login(){
    return(
        <section className="login">
            <div className="square">
                <img src="logo.png" alt="logo" width={"200px"}/>
                <div className="near">
                    <div className="info">
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="divButton">
                        <button className='loginButton'>Login</button>
                        <button className='forgotButton'>Esqueci minha senha</button>
                    </div>
                </div>
                <a href="/cadastro">Criar Conta</a>
            </div>

        </section>
    )
}