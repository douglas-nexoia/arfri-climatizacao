# BRIEF DO SITE — arfri-climatizacao

> **O que é este arquivo:** a ficha com **apenas** as informações que o site precisa.
> Ele consolida os dados do projeto legado, briefing da Arquitetura e rastreamento oficial do Google Ads.
>
> **Fluxo:** Briefing & Onboarding ➔ **BRIEF.md** (esta ficha) ➔ `site.config.json` ➔ `node builder/build-site.js arfri-climatizacao`

---

## 1. IDENTIFICAÇÃO DA EMPRESA

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Nome comercial completo | AR FRI Climatização e Ar Condicionado | `company.fullName` | Nome oficial da marca |
| Nome curto do Header | AR FRI | `company.brandUpper` | 6 caracteres (máx. 18) |
| Tag do Header | CLIMATIZAÇÃO | `company.brandTag` | 12 caracteres (máx. 16) |
| Responsável Técnico | Renato Tortorelli | (referência — OS / Garantia) | Técnico responsável |
| CNPJ | PENDENTE | `company.cnpj` | Ocultar do rodapé público visual |
| Slug da pasta | `arfri-climatizacao` | `company.slug` | Minúsculas e hífens |
| Descrição curta (rodapé) | Assistência técnica especializada em conserto, instalação, higienização e contratos PMOC de ar-condicionado em Indaiatuba, Salto e Itu. | `company.footerDescription` | 1 frase: serviços + cidades |

## 2. LOCALIZAÇÃO E COBERTURA

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Cidade principal | Indaiatuba | `company.city` | |
| Região exibida no H1 | em Indaiatuba, Salto e Itu. | `company.region` | 27 caracteres cravados para o H1 |
| Região expandida | Indaiatuba, Salto, Itu e Região Metropolitana | (Subtítulo / Cobertura) | |
| UF | SP | `company.state` | 2 letras |
| Rótulo do mapa (HUD) | INDAIATUBA & REGIÃO | `coverage.hudRegionLabel` | MAIÚSCULAS curtas |
| Público atendido (HUD) | RESIDÊNCIAS, COMÉRCIOS & EMPRESAS | `coverage.hudAudienceLabel` | Público completo (inclui B2B/PMOC) |
| Chip extra de bairros | + 20 bairros e condomínios | `coverage.extraChipLabel` | Inclui Morumbi, Suíça, Bela Vista, Helvetia |
| Link do Google Maps (embed) | `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.41162397759!2d-47.30138980839845!3d-23.109015099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b417e296317b%3A0xa1dfb5c92c813be8!2sIndaiatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr` | `coverage.mapEmbedUrl` | URL real preservada do site legado |

**Bairros e cidades atendidos (10 polos prioritários em Indaiatuba, Salto e Itu)** ➔ `coverage.neighborhoods`

1. Centro
2. Cidade Nova
3. Itaici
4. Jardim Morada do Sol
5. Jardim Esplanada
6. Parque Ecológico
7. Jardim Pau Preto
8. Salto (Centro)
9. Itu (Centro)
10. Condomínios Fechados da Região

## 3. CONTATO E HORÁRIO

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Telefone exibido | (19) 99787-1301 | `company.phoneDisplay` | Formato (XX) XXXXX-XXXX |
| Telefone para discagem | +5519997871301 | `company.phoneTel` | Só dígitos com DDI |
| WhatsApp | 5519997871301 | `company.whatsappNumber` | `55` + DDD + número |
| E-mail público | Renatotortorelli95@gmail.com | `company.email` | E-mail público de contato |
| Horário curto (Header/Rodapé) | Seg a Sex das 8h às 18h · Sáb das 8h às 13h | `company.hoursShort` | |
| Horário completo (Contato) | Segunda a sexta das 8h às 18h · Sábados das 8h às 13h. Rotas diárias de atendimento em Indaiatuba, Salto e Itu. | `company.contactScheduleText` | Inclui atendimento na região |
| Atendimento / Agilidade | Chamados até 15h | Hero / Passos / FAQ | Rotas diárias na região |

## 4. PROVA SOCIAL (GOOGLE MEU NEGÓCIO)

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Nota no Google | 4,6 | `company.googleRating` | Valor real extraído do site legado |
| Total de avaliações | 142 | `company.googleReviewsCount` | Valor real extraído do site legado |
| Link do perfil no Google | PENDENTE | (referência) | |

**3 avaliações reais (extraídas do Google / componente legado `SocialProof.tsx`)** ➔ `reviews`

| # | Nome completo | Há quanto tempo | Bairro | Texto literal da avaliação |
|---|---|---|---|---|
| 1 | Nilce Tortorelli | há 9 meses | Indaiatuba | Excelente desempenho! Gostei muito do trabalho realizado e recomendo a todos que precisarem de uma indicação de um profissional competente! |
| 2 | Marcos Rezende Marquinho | há 3 meses | Indaiatuba | Serviços ficou muito bom gostei muito |
| 3 | Kevyn Melo | há 8 meses | Indaiatuba e Região | Serviço ficou ótimo gostei muito |

## 5. SERVIÇOS, PRODUTOS E ROTAS

**Escopo de atuação (100% Climatização & Ar-Condicionado):**

- Conserto e Manutenção Corretiva (não gela, pinga água, códigos de erro, placa inverter, compressor, carga de gás)
- Instalação Padrão de Fábrica (100% tubulação em cobre, teste de estanqueidade e vácuo com vacuômetro digital)
- Limpeza e Higienização Química Profunda (bolsa coletora impermeável e bactericida padrão ANVISA)
- Contratos e Implantação de PMOC (Lei Federal 13.589/2018 para empresas, clínicas, escolas e escritórios com ART/TRT e laudo técnico)

**Carro-chefe (maior demanda / pill pré-selecionada da Home):** `Conserto` ➔ `pages[index].defaultCheckedPill`

**Rotas do site (5 páginas planejadas)** ➔ `pages`

| Rota (URL) | Serviço / Campanha | Chave da mensagem | Imagem do Hero |
|---|---|---|---|
| `/` (index) | Geral Especializada em Ar-Condicionado & Climatização | `home` | `/images/hero-indaiatuba.webp` |
| `/conserto-ar-condicionado` | Conserto & Manutenção Corretiva | `conserto` | `/images/hero-conserto.webp` |
| `/instalacao-ar-condicionado` | Instalação Padrão de Fábrica | `instalacao` | `/images/hero-instalacao.webp` |
| `/limpeza-higienizacao-ar-condicionado` | Higienização Química Profunda | `higienizacao` | `/images/hero-higienizacao.webp` |
| `/pmoc-ar-condicionado` | Contratos e Implantação de PMOC (Lei 13.589/2018) | `pmoc` | `/images/hero-pmoc.webp` |

**Agrupamento nos 3 cards da Home** ➔ `pages[index].servicesSection.cards`

| Card | Título | Serviços & Links agrupados |
|---|---|---|
| 1 | Conserto & Manutenção Rápida | Ar que não gela, pinga água na parede, códigos de erro, placa inverter e carga de gás (`/conserto-ar-condicionado`) |
| 2 | Instalação Padrão de Fábrica | Fixação técnica, tubulação 100% em cobre, teste de estanqueidade, vácuo digital e preservação da garantia (`/instalacao-ar-condicionado`) |
| 3 | Higienização & Contratos PMOC | Limpeza bactericida profunda antiácaros (`/limpeza-higienizacao-ar-condicionado`) e implantação de PMOC com ART/TRT e laudo para empresas (`/pmoc-ar-condicionado`) |

**Pills do formulário de contato (4 opções, ≤ 15 caracteres)** ➔ `devicePills`

1. Conserto
2. Instalação
3. Higienização
4. PMOC

**Links de serviços no rodapé (4 links simétricos)** ➔ `footerServices`

1. Conserto de Ar-Condicionado ➔ `/conserto-ar-condicionado`
2. Instalação de Ar-Condicionado ➔ `/instalacao-ar-condicionado`
3. Higienização Química ➔ `/limpeza-higienizacao-ar-condicionado`
4. Contratos de PMOC (Empresas) ➔ `/pmoc-ar-condicionado`

**Marcas atendidas (8 principais pelo limite do Chassi v2.1; Springer pertence ao grupo Midea Carrier)** ➔ `brands`

- Daikin
- Fujitsu
- LG
- Samsung
- Midea
- Gree
- Carrier
- Elgin

> Nota: Equipamentos **Springer** também são atendidos normalmente (mencionado no copy/FAQ junto à linha Midea Carrier).

**Marcas das quais a empresa se declara AUTORIZADA:**
- PENDENTE (Atuação como empresa especializada independente multimarcas)

## 6. GARANTIA E DIFERENCIAIS

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Prazo de garantia | 90 dias em peças e mão de obra com OS formal (e 1 ano em novas instalações) | `guarantee.rows[0]`, `heroStats` | Garantia formal por escrito |
| Usa peças originais? | Sim, tubulação 100% cobre e peças originais | `guarantee.rows[1]` | Componentes de primeira linha |
| Técnico uniformizado / OS formal? | Sim, técnico Renato Tortorelli com ordem de serviço formal e laudo | `guarantee.rows[3]` | Identificação e segurança |
| Atende em domicílio? | Sim, residências e condomínios fechados | `heroBadges` | Indaiatuba, Salto e Itu |
| Atende comercial / PMOC? | Sim, empresas, clínicas, escolas e escritórios conforme Lei 13.589/2018 e ANVISA com ART/TRT | Copy / HUD / `/pmoc-ar-condicionado` | |
| Outros diferenciais reais | Bomba de vácuo com vacuômetro digital, teste de estanqueidade com nitrogênio, bolsa coletora impermeável sem sujeira e emissão de PMOC com ART/TRT. | Copy / FAQ | Sem preços, taxas ou superlativos |

## 7. IDENTIDADE VISUAL

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Cor de acento | `#1762CC` (Azul AR FRI calibrado WCAG AA ≥ 4.5:1 do original `#1D74E8`; hover `#1D74E8` / `accLight` `#4B95F5`) | `theme.acc` / `accLight` / `accHover` | `#1D74E8` puro dá 4.05:1 no `#F5F4F1`; `#1762CC` garante 5.22:1 e 5.74:1 no branco |
| Tom da base escura | `#0A141E` (Navy escuro v2.1) | `theme.base` / `base2` / `base3` | Padrão Chassi v2.1 |

## 8. DOMÍNIO E RASTREAMENTO (GOOGLE ADS & OCT)

| Campo | Valor | ➔ config | Regra |
|---|---|---|---|
| Domínio oficial | `https://www.arfriclimatizacao.com.br` | `tracking.domain` | Sem barra final |
| Google Ads ID | `AW-18416024511` | `tracking.googleAdsId` | Tag Global de Conversão |
| Rótulo conversão WhatsApp | `AW-18416024511/gD9VCPnrk-ocEL_3uM1E` | `tracking.whatsappConversionLabel` | Disparo no clique WhatsApp |
| Rótulo conversão Telefone | `AW-18416024511/x8QFCN7rk-ocEL_3uM1E` | `tracking.phoneConversionLabel` | Disparo no clique Telefone |
| Prefixo do protocolo OCT | `AF` | `tracking.octPrefix` | Gera protocolos `#AF-XXXX` para Supabase / Iara |

> Toda mensagem de WhatsApp (`tracking.messages`) deve conter literalmente `"vim pelo site, gostaria de um atendimento"`.
> Mensagem específica da rota PMOC: `"Olá! Vim pelo site, gostaria de um atendimento para contrato de PMOC ou laudo técnico de ar-condicionado."`

## 9. INFORMAÇÕES PARA O FAQ

- Diagnóstico técnico no local avaliando pressão de gás, corrente elétrica, sensores e placas inverter antes de qualquer intervenção.
- Limpeza com bolsa coletora impermeável e bactericida padrão ANVISA, sem respingar água ou sujar paredes e móveis.
- Instalação padrão de fábrica com tubulação 100% em cobre, isolamento térmico blindado, teste de estanqueidade e vácuo com vacuômetro digital.
- Implantação e renovação de contratos **PMOC (Lei Federal 13.589/2018)** para empresas, clínicas, escolas, lojas e escritórios em Indaiatuba, Salto e Itu com responsável técnico habilitado, ART/TRT e laudo periódico.

## 10. ORIENTAÇÕES PARA AS IMAGENS

| Item | Valor |
|---|---|
| Aparelhos que **devem** aparecer | Ar-condicionado Split Hi-Wall, Cassete/Piso-Teto comercial, condensadoras externas, ferramentas de refrigeração (manifold digital, bomba de vácuo, vacuômetro), bolsa coletora de higienização e prancheta técnica/laudo PMOC em ambiente corporativo. |
| Aparelhos que **NÃO podem** aparecer (fora do escopo) | **PROIBIDO:** Geladeiras, freezers, máquinas de lavar, lava e seca, lava-louças, micro-ondas, fogões, cooktops ou fornos. |
| Ambiente predominante | Residências, condomínios, clínicas e escritórios modernos em Indaiatuba, Salto e Itu. |

> Uniforme sempre **100% liso**, sem logo, texto ou crachá de terceiros.

## 11. O QUE NÃO ENTRA (fica só no robô do Google Ads)

- CPF, RG, dados pessoais ou bancários
- Logins, senhas e e-mails de acesso do Google Ads
- Orçamentos de mídia, CPC ou metas de lances
- Preços, taxas de visita ou valores de serviço

---

## ✅ CHECKLIST ANTES DE GERAR O `site.config.json`

- [x] Seções 1 a 8 preenchidas (CNPJ marcado como `PENDENTE` para ocultar do rodapé)
- [x] 10 bairros/cidades reais de Indaiatuba, Salto e Itu
- [x] 3 avaliações reais extraídas do legado (com nome completo, tempo e bairro)
- [x] 5 rotas definidas (incluindo `/pmoc-ar-condicionado`) + carro-chefe da Home (`Conserto`)
- [x] 3 cards da Home com agrupamento definido
- [x] 4 pills (≤ 15 caracteres) e 4 links de rodapé
- [x] 8 marcas principais (+ nota sobre Springer no grupo Midea Carrier)
- [x] Google Ads ID `AW-18416024511`, rótulos de conversão e prefixo OCT `AF`
- [x] Nenhum dado da seção 11 presente
