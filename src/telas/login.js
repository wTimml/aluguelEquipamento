import React from 'react'
import './login.css'
import { Cores } from '../constantes/cores'
import Card1 from '../componentes/Cards/Card1'

const Login = () => {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    })
    const [error, setError] = React.useState('')

    // const handleSignIn = (e) =>{
    //     e.preventDefault()
    //     console.log('dale')
    // }
    const handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = state;
        if (!email || !password) {
            setError({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                console.log("asdoas")
                // const response = await Api.post("/auth/login", { email, password });
                // login(response.data);
                // props.history.push('/');

            } catch (err) {
                setError({
                    error:
                        "Houve um problema com o login, verifique suas credenciais."
                });
            }
        }
    };


    // if (isAuthenticated()) return (
    //     <section>
    //         <Header />
    //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //             <p>Você já esta logado!
    //         <Link to={'/'}> Clique aqui para voltar</Link></p>
    //         </div>
    //         <Footer />
    //     </section>


    // )
    // else 
    return (
        <section>
            <Card1/>
            <div className='loginContainer'>
                <form className='formLogin' onSubmit={handleSignIn} style={{ background: Cores.primariaEscura }}>
                    {/* <img src={Logo} alt="Emprestimo de Equipamentos" /> */}
                    {/* {error && <p>{error}</p>} */}
                    <input
                        className='inputLogin'
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => setState({ email: e.target.value })}
                    />
                    <input
                        className='inputLogin'
                        type="password"
                        placeholder="Senha"
                        onChange={e => setState({ password: e.target.value })}
                    />
                    <button type="submit" className='botaoLogin' style={{ background: Cores.botaoClaro }}>Login</button>
                    {/* <hr />
                    <Link to="/" id="SignUpLogin">Esqueceu a senha?</Link>
                    <hr />
                    <Link to="/SignUp" id="SignUpLogin">Não é registrado ainda? Registre-se!</Link> */}
                </form>
            </div>
        </section>
    )

}
export default Login;