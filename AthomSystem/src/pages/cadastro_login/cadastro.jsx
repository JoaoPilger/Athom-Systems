import './login.css'

export default function Login(){
    return(
        <section className="login">
            <div className="square">
                <img src="logo.png" alt="logo" width={"200px"}/>
                <div className="near">
                    <div className="info">
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input type="name" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm">Confirme sua senha</label>
                            <input type="passwordConfirm" name="passwordConfirm" id="passwordConfirm" />
                        </div>
                    </div>
                    <div className="divButton">
                        <button className='loginButton'>Cadastrar-se</button>
                    </div>
                </div>
                <a href="/login">Já tenho conta</a>
            </div>

        </section>
    )
}