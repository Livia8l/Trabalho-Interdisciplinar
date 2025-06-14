function autenticar(email, senha, cooperativaMarcada, instituicaoMarcada) {
    if (!email || !senha) {
        showToast('Por favor, preencha todos os campos de e-mail e senha.');
        return false;
    }

    if (!cooperativaMarcada && !instituicaoMarcada) {
        showToast('Por favor, selecione um tipo de acesso.');
        return false;
    }

    let autenticado = false;

    if (cooperativaMarcada) {
        if (email === 'cooperativas@fortes.com.br' && senha === '123456') {
            localStorage.setItem('tipo_usuario', 'cooperativa');
            window.location.href = 'cooperativa/index.html';
            autenticado = true;
        } else {
            showToast('Credenciais de cooperativa inválidas.');
        }
    } else if (instituicaoMarcada) {
        if (email === 'admin@fortes.com.br' && senha === '123456') {
            localStorage.setItem('tipo_usuario', 'instituicao');
            window.location.href = 'instituicao/index.html';
            autenticado = true;
        } else {
            showToast('Credenciais de instituição inválidas.');
        }
    }
    return autenticado;
}

function verificarAutenticacao(tipoUsuarioEsperado) {
    const tipoUsuario = localStorage.getItem('tipo_usuario');
    if (tipoUsuario !== tipoUsuarioEsperado) {
        window.location.href = '../login.html';
    }
}

function sair() {
    localStorage.removeItem('tipo_usuario');
    window.location.href = '../login.html?logout=1';
} 