document.body.innerHTML = `  
<form name="meuForm" method="post" id="formulario">
	<div class="box">
		<h1>Login</h1>

		<label>
			<span>Nome Completo</span>
 			<input type="text" class="input_text" name="nome" id="name"/>

		</label>

		<label>
 			<span>Email</span>
			<input type="text" class="input_text" name="email" id="email" Placeholder="exemplo@exemplo.com.br"/>
		 </label>

		<label>
 			<span>Senha</span>
			<input type="password" class="input_text" name="Senha" id="senha" Placeholder="Digite a sua senha"/>
		</label>

		<label>
			<input type="submit" class="button" value="Enviar" />
            <input type="reset" class="button" value="Limpar" />
		</label>
	</div>
</form>
`




document.getElementById('email').disabled = true;

email.removeAttribute('Placeholder')
senha.removeAttribute('Placeholder')