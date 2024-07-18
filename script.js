function escolherArea() {
    const area = document.getElementById('area').value.toLowerCase();
    const colaboradorSelect = document.getElementById('colaborador');
    colaboradorSelect.innerHTML = '<option value="">Selecione um colaborador</option>';

    if (area === "rh") {
        colaboradorSelect.innerHTML += `
            <option value="paula campos">Paula Campos</option>
            <option value="carlos">Carlos</option>
            <option value="joão silva">João Silva</option>
            <option value="auxiliar contabil">Auxiliar Contábil</option>
            <option value="auxiliar administrativo">Auxiliar Administrativo</option>
        `;
    } else if (area === "financeiro") {
        colaboradorSelect.innerHTML += `
            <option value="gerente geral">Gerente Geral</option>
            <option value="operador de caixa">Operador de Caixa</option>
        `;
    } else {
        document.getElementById('resultado').textContent = "Área inválida";
    }

    document.getElementById('colaborador-section').style.display = 'block';
}

function escolherColaborador() {
    const colaborador = document.getElementById('colaborador').value.toLowerCase();
    document.getElementById('processo-section-paula').style.display = 'none';
    document.getElementById('processo-section-carlos').style.display = 'none';
    document.getElementById('processo-section-joao').style.display = 'none';
    document.getElementById('processo-section-auxiliar-contabil').style.display = 'none';
    document.getElementById('processo-section-auxiliar-administrativo').style.display = 'none';
    document.getElementById('processo-section-gerente-geral').style.display = 'none';
    document.getElementById('processo-section-operador-caixa').style.display = 'none';
    document.getElementById('resultado').textContent = "";

    if (colaborador === "sair") {
        document.getElementById('resultado').textContent = "Encerrando o programa.";
    } else if (colaborador === "paula campos") {
        document.getElementById('processo-section-paula').style.display = 'block';
    } else if (colaborador === "carlos") {
        document.getElementById('processo-section-carlos').style.display = 'block';
    } else if (colaborador === "joão silva") {
        document.getElementById('processo-section-joao').style.display = 'block';
    } else if (colaborador === "auxiliar contabil") {
        document.getElementById('processo-section-auxiliar-contabil').style.display = 'block';
    } else if (colaborador === "auxiliar administrativo") {
        document.getElementById('processo-section-auxiliar-administrativo').style.display = 'block';
    } else if (colaborador === "gerente geral") {
        document.getElementById('processo-section-gerente-geral').style.display = 'block';
    } else if (colaborador === "operador de caixa") {
        document.getElementById('processo-section-operador-caixa').style.display = 'block';
    } else {
        document.getElementById('resultado').textContent = "Nome de colaborador inválido";
    }
}

function mostrarProcessoPaula() {
    const processo = document.getElementById('processo-paula').value;
    mostrarProcesso('paula campos', processo);
}

function mostrarProcessoCarlos() {
    const processo = document.getElementById('processo-carlos').value;
    mostrarProcesso('carlos', processo);
}

function mostrarProcessoJoao() {
    const processo = document.getElementById('processo-joao').value;
    mostrarProcesso('joão silva', processo);
}

function mostrarProcessoAuxiliarContabil() {
    const processo = document.getElementById('processo-auxiliar-contabil').value;
    mostrarProcesso('auxiliar contabil', processo);
}

function mostrarProcessoAuxiliarAdministrativo() {
    const processo = document.getElementById('processo-auxiliar-administrativo').value;
    mostrarProcesso('auxiliar administrativo', processo);
}

function mostrarProcessoGerenteGeral() {
    const processo = document.getElementById('processo-gerente-geral').value;
    mostrarProcesso('gerente geral', processo);
}

function mostrarProcessoOperadorCaixa() {
    const processo = document.getElementById('processo-operador-caixa').value;
    mostrarProcesso('operador de caixa', processo);
}

function mostrarProcesso(colaborador, processo) {
    const area = document.getElementById('area').value.toLowerCase();
    fetch('dados.txt')
        .then(response => response.text())
        .then(text => {
            const linhas = text.split('\n');
            const resultado = linhas.find(linha => {
                const partes = linha.split(',');
                return partes[0] === area && partes[1] === colaborador && partes[2] === processo;
            });

            if (resultado) {
                const partes = resultado.split(',');
                const processoNome = partes[3];
                const detalhes = partes.slice(4).map((etapa, index) => `${index + 1}. ${etapa}`).join('\n');
                document.getElementById('resultado').textContent = detalhes;
                adicionarAoHistorico(colaborador, processoNome, detalhes);
            } else {
                document.getElementById('resultado').textContent = "Processo não encontrado";
            }
        })
        .catch(error => {
            document.getElementById('resultado').textContent = "Erro ao carregar dados";
        });
}
function escolherColaborador() {
    const colaborador = document.getElementById('colaborador').value.toLowerCase();
    document.getElementById('processo-section-paula').style.display = 'none';
    document.getElementById('processo-section-carlos').style.display = 'none';
    document.getElementById('processo-section-joao').style.display = 'none';
    document.getElementById('processo-section-auxiliar-contabil').style.display = 'none';
    document.getElementById('processo-section-auxiliar-administrativo').style.display = 'none';
    document.getElementById('processo-section-gerente-geral').style.display = 'none';
    document.getElementById('processo-section-operador-caixa').style.display = 'none';
    document.getElementById('resultado').textContent = "";

    if (colaborador === "sair") {
        document.getElementById('resultado').textContent = "Encerrando o programa.";
    } else if (colaborador === "paula campos") {
        document.getElementById('processo-section-paula').style.display = 'block';
    } else if (colaborador === "carlos") {
        document.getElementById('processo-section-carlos').style.display = 'block';
    } else if (colaborador === "joão silva") {
        document.getElementById('processo-section-joao').style.display = 'block';
    } else if (colaborador === "auxiliar contabil") {
        document.getElementById('processo-section-auxiliar-contabil').style.display = 'block';
    } else if (colaborador === "auxiliar administrativo") {
        document.getElementById('processo-section-auxiliar-administrativo').style.display = 'block';
    } else if (colaborador === "gerente geral") {
        document.getElementById('processo-section-gerente-geral').style.display = 'block';
    } else if (colaborador === "operador de caixa") {
        document.getElementById('processo-section-operador-caixa').style.display = 'block';
    } else {
        document.getElementById('resultado').textContent = "Nome de colaborador inválido";
    }
}

function mostrarProcessoPaula() {
    const processo = document.getElementById('processo-paula').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "1":
            resultado = "Controle de Férias:\n1. Quando é solicitado ou há necessidade\n2. Entrar no sistema\n3. Clicar em férias\n4. Solicitar férias\n5. Preencher informações dos colaboradores\n6. Clicar em enviar\n7. Aguardar contabilidade aprovar férias\n8. Receber contrato da contabilidade\n9. Chamar colaborador para assinar documentação das férias (Fica com um e envia para o outro)\n10. Digitalizar documento e colocar na pasta de férias (RH) e na pasta do funcionário (FUNCIONÁRIOS) (são duas diferentes)";
            processoNome = "Controle de Férias";
            break;
        case "2":
            resultado = "Controle de Rescisão:\n1. Quando um funcionário for desligado\n2. Solicitar rescisão\n3. Preencher informações\n4. Clicar em Enviar\n5. Aguardar a contabilidade responder\n6. Chamar colaborador para assinar documentação\n7. Digitalizar documento\n8. Colocar na pasta do funcionário (FUNCIONÁRIOS) e na pasta de rescisão do RH\n9. Colocar o nome da empresa\n10. Colocar contrato na pasta do ano";
            processoNome = "Controle de Rescisão";
            break;
        case "3":
            resultado = "Controle de Admissões:\n1. Quando há necessidade\n2. Abrir pasta de RH\n3. Abrir pasta 'Documento Admissional'\n4. Imprimir documento 'ficha de admissão' (borrar nome dos funcionários)\n5. Digitalizar o documento\n6. Colocar dentro da pasta de 'FUNCIONÁRIOS (DOCUMENTOS)'\n7. Abrir site\n8. Clicar em 'Nova Admissão'\n9. Preencher dados\n10. Realizar lançamentos\nProcesso finalizado";
            processoNome = "Controle de Admissões";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("Paula Campos", processoNome, resultado);
}

function mostrarProcessoCarlos() {
    const processo = document.getElementById('processo-carlos').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "4":
            resultado = "Atendimento ao Cliente:\n1. Receber cliente\n2. Entender demanda do cliente\n3. Cliente está “estressado”?\n4. Se sim: Levar cliente à sala para atender cliente com maior atenção\n5. Se não: Atender cliente normalmente na loja\nProcesso encerrado";
            processoNome = "Atendimento ao Cliente";
            break;
        case "5":
            resultado = "Atendimento aos Vendedores:\n1. Receber a demanda do vendedor\n2. Fornecer o suporte necessário para ele\nProcesso finalizado";
            processoNome = "Atendimento aos Vendedores";
            break;
        case "6":
            resultado = "Manutenção da Loja:\n1. Entrar em contato com colaborador específico\n2. Ele verifica quem pode realizar os serviços\n3. Aguardar colaborador coletar o orçamento\n4. Repasse para a diretoria com o orçamento\n5. Realização da manutenção\nProcesso finalizado";
            processoNome = "Manutenção da Loja";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("Carlos", processoNome, resultado);
}

function mostrarProcessoJoao() {
    const processo = document.getElementById('processo-joao').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "7":
            resultado = "Processo X:\n1. Passo X1\n2. Passo X2\n3. Passo X3";
            processoNome = "Processo X";
            break;
        case "8":
            resultado = "Processo Y:\n1. Passo Y1\n2. Passo Y2\n3. Passo Y3";
            processoNome = "Processo Y";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("João Silva", processoNome, resultado);
}

function mostrarProcessoAuxiliarContabil() {
    const processo = document.getElementById('processo-auxiliar-contabil').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "9":
            resultado = "Admissão:\n1. Fazer checklist com documentos da pessoa\n2. Tirar cópias dos documentos\n3. Encaminhar pessoa para fazer exame admissional\n4. Abrir conta do colaborador no Itaú 'convênio da empresa'\n5. Analisar exames realizados pelo colaborador\n6. Realizar cadastro do colaborador\n7. Quando o exame estiver apto, pedir para o auxiliar de escritório buscar o exame na clínica\n8. Emitir contrato do colaborador\n9. Solicitar assinatura do colaborador no contrato\n10. Entregar fardamentos para os colaboradores\n11. Solicitar crachás para a gráfica via e-mail\n12. Entregar crachás para os colaboradores\n13. Guardar todos os dados, documentos e exames dos funcionários na pasta física\n14. Processo finalizado";
            processoNome = "Admissão";
            break;
        case "10":
            resultado = "Rescisão:\n1. Analisar checklist do colaborador\n2. Todos os documentos e exames estão em dia?\n3. Se sim, seguir para A05\n4. Se não, realizar a carta para encaminhar o colaborador para renovar o exame na clínica\n5. Atualizar todos os dados no documento do colaborador\n6. Salvar documentos no sistema da empresa (GRRF)\n7. Montar termo de rescisão\n8. Imprimir termo de rescisão\n9. Solicitar assinatura do colaborador e da Gerente financeira\n10. Salvar documento assinados na nuvem do sistema\n11. Gerar arquivo do pagamento da rescisão (sistema da metadados)\n12. Emitir boleto\n13. Entregar no setor financeiro\n14. Processo encerrado";
            processoNome = "Rescisão";
            break;
        case "11":
            resultado = "Férias:\n1. Analisar no sistema uma programação de férias (3 meses de antecedência)\n2. Realizar programação manualmente na planilha\n3. Tirar as médias do colaborador\n4. Liberar processo de férias para os colaboradores\n5. Realizar pagamento de férias ao colaborador\n6. Enviar documentos das férias do colaborador para a contadora\n7. Imprimir documento de férias (3 vias)\n8. Solicitar assinaturas do colaborador e da empresa\n9. Entregar via assinada para colaborador e para o setor financeiro\n10. Processo finalizado";
            processoNome = "Férias";
            break;
        case "12":
            resultado = "Vale-transporte (Final do mês):\n1. Entrar nos 3 sistemas (Dependendo do endereço dos colaboradores)\n2. Registrar colaboradores no sistema da empresa\n3. Realizar a recarga do VT\n4. Emitir boletos\n5. Realizar pagamentos\n6. Processo finalizado";
            processoNome = "Vale-transporte";
            break;
        case "13":
            resultado = "Vale Alimentação:\n1. Alimentar planilha\n2. Enviar para Gerente Geral";
            processoNome = "Vale Alimentação";
            break;
        case "14":
            resultado = "Ponto eletrônico (Diário):\n1. Cadastrar novos colaboradores no sistema\n2. Analisar diariamente o controle de ponto\n3. Incluir batidas diariamente em caso de falta\n4. Calcular se há colaboradores com hora extra\n5. Colaborador tem hora extra?\n6. Se sim, lançar termo de hora extra para o colaborador\n7. Se não, seguir para A08\n8. Imprimir espelho de pontos";
            processoNome = "Ponto eletrônico";
            break;
        case "15":
            resultado = "Sorriso para todos:\n1. Alimentar planilha para adicionar ou excluir colaboradores\n2. Verificar e-mail do sindicato com o link do boleto\n3. Gerar boleto\n4. Imprimir boleto\n5. Entregar boleto no financeiro\n6. Imprimir planilha do Sorriso para todos\n7. Guardar planilha na pasta física\n8. Processo finalizado";
            processoNome = "Sorriso para todos";
            break;
        case "16":
            resultado = "Taxa negocial (1 vez por ano)(Desconto em convenção):\n1. Analisar data de pagamento da taxa\n2. Analisar valores no sistema da empresa\n3. Descontar da falha dos colaboradores\n4. Verificar e-mail com link do boleto\n5. Gerar boleto\n6. Imprimir boleto\n7. Entregar boleto no financeiro\n8. Imprimir planilha da taxa para todos\n9. Guardar planilha e recibo na pasta física\n10. Processo finalizado";
            processoNome = "Taxa negocial";
            break;
            case "17":
            resultado = "Folha de pagamento (mensalmente):\n1. Entrar no sistema pessoal\n2. Consultar os valores e as datas salariais\n3. Gerar folha automática de pagamento\n4. Adicionar descontos extras na folha de pagamento (manualmente)\n5. Lançar folha no Meta dados\n6. Salvar documento da folha\n7. Enviar para contadora\n8. Gerar arquivo do FGTS no metadados\n9. Lançar arquivo no sistema\n10. Conferir valor da folha\n11. Valor está ok?\n12. Se sim, emitir boleto\n13. Se não, reajustar valores\n14. Entregar boleto para o financeiro\n15. Realizar pagamento no app do Itaú\n16. Imprimir comprovante de pagamento\n17. Guardar comprovantes na pasta física\n18. Solicitar assinatura do documento de comprovante para os colaboradores (Contra cheque)\n19. Guardar documento nas pastas físicas\n20. Processo encerrado";
            processoNome = "Folha de pagamento";
            break;
        case "18":
            resultado = "Declaração DCTF Web (Relatório do imposto de Renda):\n1. Lançar abertura e fechamento da folha no E social\n2. Abrir site da receita\n3. Emitir boleto\n4. Conferir valores\n5. Imprimir boleto\n6. Entregar boleto para o financeiro\n7. Anotar valores manualmente\n8. Entregar valores para o financeiro\n9. Emitir guia do mês\n10. Emitir relatório do mês\n11. Processo encerrado";
            processoNome = "Declaração DCTF Web";
            break;
        case "19":
            resultado = "DCTF Mensal:\n1. Verificar valores mensais\n2. Emitir boleto\n3. Enviar boleto para o financeiro\n4. Aguardar pagamento\n5. Informar pagamento no aplicativo\n6. Processo encerrado";
            processoNome = "DCTF Mensal";
            break;
        case "20":
            resultado = "Pis e Cofins:\n1. Verificar valores na contabilidade\n2. Emitir boletos no site da receita federal\n3. Entregar boleto para o financeiro\n4. Informar pagamento no site da receita\n5. Processo encerrado";
            processoNome = "Pis e Cofins";
            break;
        case "21":
            resultado = "Contestação de notas da Sefaz (Relatório de mercadorias compradas mensais):\n1. Verificar valores de compra de mercadorias\n2. Há algum valor errado?\n3. Se sim, contestar valores errados no site da Sefaz\n4. Se não, emitir boleto\n5. Entregar boleto para o financeiro\n6. Processo encerrado";
            processoNome = "Contestação de notas da Sefaz";
            break;
        case "22":
            resultado = "Fechamento de trimestre:\n1. Analisar planilha de lucros e prejuízos recebida pela contadora\n2. Lançar valores na contabilidade da empresa via Dealer Net\n3. Processo encerrado";
            processoNome = "Fechamento de trimestre";
            break;
        case "23":
            resultado = "Conferência contábil (Mensalmente):\n1. Conferir balancete do mês\n2. Há algo errado?\n3. Se sim, passar erro para o responsável da área\n4. Se não, processo encerrado";
            processoNome = "Conferência contábil";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("Auxiliar Contábil", processoNome, resultado);
}

function mostrarProcessoAuxiliarAdministrativo() {
    const processo = document.getElementById('processo-auxiliar-administrativo').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "24":
            resultado = "Subir as notas:\n1. Preencher solicitação manualmente (cor, modelo, contato…)\n2. Colocar notas fiscais da moto na solicitação (grampeia)\n3. Tirar xerox para o financeiro (cópia)\n4. Guardar via original na pasta\n5. Processo encerrado";
            processoNome = "Subir as notas";
            break;
        case "25":
            resultado = "Enviar pagamentos para Honda:\n1. Abrir sistema IHS\n2. Anexar nota fiscal\n3. Incluir o valor da nota\n4. Enviar para pagamento\n5. Processo finalizado";
            processoNome = "Enviar pagamentos para Honda";
            break;
        case "26":
            resultado = "Processo de retirada de motos:\n1. Recepcionar cliente\n2. Receber documentação do cliente\n3. Entregar a solicitação para ser preenchida pelo cliente\n4. Preencher dados do cliente no sistema IHS\n5. Completar dados não preenchidos do cliente\n6. Tem a moto no estoque?\n7. Se sim, entregar\n8. Se não, aguardar chegada para entrega\n9. Processo finalizado";
            processoNome = "Processo de retirada de motos";
            break;
        case "27":
            resultado = "Entrada de motos:\n1. Alimentar planilha de chegada de motos no Excel\n2. Dealer sistema, dar entrada nas motos que chegaram\n3. Ir para a fila de espera e sinalizar as motos\n4. Avisar ao cliente que a moto chegou\n5. A modalidade é financiamento ou consórcio?\n6. Se sim, pedir para o cliente ir à loja assinar contrato\n7. Se não, pedir para o cliente ir presencialmente na loja pagar\n8. Processo finalizado";
            processoNome = "Entrada de motos";
            break;
        case "28":
            resultado = "Faturamento de motos:\n1. Fazer cadastro do cliente no Dealer\n2. Faturar motos no sistema\n3. Imprimir as notas fiscais (Manual, Financeiro e as que ficam com ela)";
            processoNome = "Faturamento de motos";
            break;
        case "29":
            resultado = "Faturamento de motos para Honda:\n1. Entrar no sistema Honda motocicletas\n2. Puxar lista de motos no dia\n3. Imprimir lista\n4. Guardar lista nas pastas\n5. Fazer download dos documentos\n6. Importar documentos no Dealer\n7. Processo finalizado";
            processoNome = "Faturamento de motos para Honda";
            break;
        case "30":
            resultado = "Envio de planilha de fechamento do dia para gestor:\n1. Preencher planilha com quantas motos chegaram no dia e quantas motos foram faturadas, e quantas foram faturadas pela honda\n2. Conferir se a planilha está batendo com o estoque físico\n3. Baixar planilha em pdf\n4. Enviar planilha para o chefe via wpp";
            processoNome = "Envio de planilha de fechamento do dia para gestor";
            break;
        case "31":
            resultado = "Envio da cota (Processo igual ao de processos):\n1. Transferência simples\n2. Receber dados e documentos do cliente\n3. Cadastrar ficha do cliente\n4. Enviar ficha para a Honda\n5. Informar renda do cliente (Transferência Pré-contemplada)\n6. Transferência Aditamento (Cliente com a moto)\n7. Processo encerrado";
            processoNome = "Envio da cota";
            break;
        case "32":
            resultado = "Taxa de correção (Dados errados no sistema):\n1. Receber solicitação de dados errados no sistema\n2. Enviar para correção do Detran\n3. Emplacar a moto normalmente após correção";
            processoNome = "Taxa de correção";
            break;
        case "33":
            resultado = "Fechamento do mês:\n1. Alimentar planilha com dados da venda das motos (vendedor)\n2. Analisar vendedor por vendedor\n3. Corrigir números\n4. Enviar para a chefe do setor administrativo (ela faz as contas)\n5. Processo encerrado";
            processoNome = "Fechamento do mês";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("Auxiliar Administrativo", processoNome, resultado);
}

function mostrarProcessoGerenteGeral() {
    const processo = document.getElementById('processo-gerente-geral').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "34":
            resultado = "Examinar estrutura da loja:\n1. Chegar na loja\n2. Analisar estrutura\n3. Tem algo errado na estrutura?\n4. Se sim, reportar para o gestor a manutenção da estrutura\n5. Se não, entrar no sistema para analisar os números de cada loja do dia\n6. Processo encerrado";
            processoNome = "Examinar estrutura da loja";
            break;
        case "35":
            resultado = "Reunião diária com grupo e gestores:\n1. Preparar conteúdo de reunião\n2. Realizar reunião individual com cada gestor para entender o que está acontecendo\n3. Reunião mensal de acompanhamento do processo do SEC e 4 Asas (com gestores)\n4. Processo finalizado";
            processoNome = "Reunião diária com grupo e gestores";
            break;
        case "36":
            resultado = "Treinamentos:\n1. Estudar treinamento pronto\n2. Reunir turmas (equipes de vendas) na mesma loja de acordo com a disponibilidade\n3. Realizar o treinamento durante 2 dias com as duas turmas presencialmente\n4. Processo finalizado";
            processoNome = "Treinamentos";
            break;
        case "37":
            resultado = "Preparação de gestores (Quando há necessidade):\n1. Guiar novos gestores, na prática sobre o sistema\n2. Ensinar os gestores sobre o negócio (via conversas)\n3. Mostrar os números da Honda diariamente\n4. Processo encerrado";
            processoNome = "Preparação de gestores";
            break;
        case "38":
            resultado = "Acompanhamento de estoque:\n1. Entrar no sistema\n2. Verificar faturamento da fábrica e adicionais\n3. Analisar estoque físico e em trânsito\n4. Tem algo errado?\n5. Se sim, ligar para o gestor e reportar o erro para reparo\n6. Se não, fazer ação (estratégias) em cima do estoque físico (Marketing, preço)\n7. Processo encerrado";
            processoNome = "Acompanhamento de estoque";
            break;
        case "39":
            resultado = "IHS consórcio Honda (Analisar índice de cancelamento e retenção):\n1. Entrar no sistema\n2. Analisar adimplência de cada concessionária\n3. Ligar para as lojas com adimplência em baixa (setor de pós venda)\n4. Montar estratégia com a equipe\n5. Analisar índice de cancelamento e retenção\n6. Tem algo errado?\n7. Se sim, entrar em contato com o setor de pós-venda para ajuste\n8. Se não, Processo encerrado";
            processoNome = "IHS consórcio Honda";
            break;
        case "40":
            resultado = "Verificação de carteira da concessionária:\n1. Entrar no IHS\n2. Analisar carteira de cada loja\n3. Montar estratégia com a equipe de venda e pós venda para contemplar mais as carteiras\n4. Ligar para clientes ofertando\n5. Processo encerrado";
            processoNome = "Verificação de carteira da concessionária";
            break;
        case "41":
            resultado = "Verificação de vendas diárias:\n1. Entrar no IHS\n2. Analisar número de vendas diárias\n3. Ligar para o gestor da concessionária para marcar uma reunião\n4. Realizar reunião para mostrar os dados e analisar vendedor por vendedor\n5. Solicitar ao gestor para entrar em contato com o supervisor para conversar com os vendedores que estão em baixa\n6. Se não, processo finalizado";
            processoNome = "Verificação de vendas diárias";
            break;
        case "42":
            resultado = "Projeto com a Honda (Uma vez por ano):\n1. Analisar números da concessionária e do mercado\n2. Montar um projeto (PPT) com orçamento da Honda pro ano\n3. Mandar o projeto para Honda via e-mail\n4. Projeto foi aprovado?\n5. Se sim, dar início ao projeto\n6. Se não, esperar a Honda aprovar\n7. Processo finalizado";
            processoNome = "Projeto com a Honda";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("Gerente Geral", processoNome, resultado);
}

function mostrarProcessoOperadorCaixa() {
    const processo = document.getElementById('processo-operador-caixa').value;
    let resultado = "";
    let processoNome = "";

    switch (processo) {
        case "43":
            resultado = "Análise de pagamentos:\n1. Bater o ponto\n2. Ligar computador\n3. Analisar pagamentos aprovados do dia anterior\n4. Analisar os efetivados\n5. Arquivar os efetivados\n6. Passar os arquivos para o setor responsável da entrega da moto (setor de faturamento)\n7. Processo finalizado";
            processoNome = "Análise de pagamentos";
            break;
        case "44":
            resultado = "Passar folhas (diariamente):\n1. Passar solicitação\n2. Se tiver moto, passar solicitação para o setor de faturamento\n3. Solicitar ao cliente vir em loja assinar\n4. Se não tiver, tem opção de link (de bancos)\n5. Aguardar aprovação banco (créditos e assinaturas)\n6. Processo finalizado";
            processoNome = "Passar folhas";
            break;
        case "45":
            resultado = "Passamento de fichas aos bancos:\n1. Entrar no credere (sistema)\n2. Analisar fichas\n3. Passar fichas pro banco\n4. Aguardar análise do banco\n5. Aguardar aprovação do banco\n6. Processo finalizado";
            processoNome = "Passamento de fichas aos bancos";
            break;
        case "46":
            resultado = "Recebimento do carnê:\n1. Após 15 dias de efetivação da moto\n2. Receber o cliente na loja\n3. Solicitar CPF do cliente\n4. Buscar no sistema\n5. Retirada da moto\n6. Processo finalizado";
            processoNome = "Recebimento do carnê";
            break;
        default:
            resultado = "Processo inválido";
            processoNome = "Processo inválido";
            break;
    }

    document.getElementById('resultado').textContent = resultado;
    adicionarAoHistorico("Operador de Caixa", processoNome, resultado);
}

function adicionarAoHistorico(colaborador, processoNome, processo) {
    const historico = document.getElementById('historico');
    const item = document.createElement('div');
    item.className = 'historico-item';
    item.textContent = `${colaborador} - ${processoNome}`;

    const detalhes = document.createElement('pre');
    detalhes.className = 'historico-detalhes';
    detalhes.textContent = processo;

    item.appendChild(detalhes);
    item.addEventListener('click', () => {
        detalhes.style.display = detalhes.style.display === 'none' ? 'block' : 'none';
    });

    historico.appendChild(item);
}