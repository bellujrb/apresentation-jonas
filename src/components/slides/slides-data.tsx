import { 
  LayoutGrid, 
  AlertTriangle, 
  Database, 
  Truck, 
  Users, 
  Workflow,
  Link2,
  Zap,
  FileText,
  Mail,
  CheckCircle,
  BarChart3,
  LineChart,
  PieChart,
  Target,
  Shield,
  TrendingUp,
  Layers,
  RefreshCw,
  Eye,
  Sparkles,
  ArrowUpRight,
  Package,
  Calculator,
  Search,
  Bell,
  FileSpreadsheet,
  CloudUpload,
  GitBranch,
  Settings
} from "lucide-react";
import { SlideTitle } from "./SlideTitle";
import { SlideCard } from "./SlideCard";
import { SlideList } from "./SlideList";
import { SlideWorkflow } from "./SlideWorkflow";

export const slides = [
  // Slide 1 - Cover
  {
    name: "Capa",
    content: (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="mb-8 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Plataforma Enterprise
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100">
          <span className="text-gradient-primary">Dadus</span>
          <span className="text-foreground">.AI</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
          Plataforma de Workflows e Analytics<br />para E-commerce em Escala
        </p>
        <div className="flex items-center gap-6 mt-12 opacity-0 animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Workflow className="w-5 h-5 text-primary" />
            <span>Automação</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span>Analytics</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Governança</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2 - Diagnóstico
  {
    name: "Diagnóstico",
    content: (
      <>
        <SlideTitle slideNumber={1} subtitle="Características típicas de empresas de e-commerce em fase de escala">
          Diagnóstico do<br />
          <span className="text-gradient-primary">cenário atual</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <SlideList
              variant="warning"
              items={[
                "Crescimento acelerado de volume",
                "Aumento de canais de venda",
                "Maior complexidade logística",
                "Dependência de processos manuais"
              ]}
            />
          </div>
          <div className="bg-gradient-card border border-accent/30 rounded-2xl p-8 opacity-0 animate-fade-in-up animate-delay-400">
            <AlertTriangle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Problema Central</h3>
            <p className="text-muted-foreground leading-relaxed">
              Não é esforço operacional, mas <span className="text-accent font-medium">ausência de uma camada unificada</span> de dados, automação e governança.
            </p>
          </div>
        </div>
      </>
    )
  },

  // Slide 3 - Gargalo: Fragmentação
  {
    name: "Fragmentação",
    content: (
      <>
        <SlideTitle slideNumber={2.1} subtitle="Cada marketplace opera como um ecossistema próprio">
          Fragmentação entre<br />
          <span className="text-gradient-accent">marketplaces</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <SlideCard
            icon={Calculator}
            title="Comissões"
            description="Regras diferentes de comissão em cada canal"
            delay={200}
          />
          <SlideCard
            icon={Truck}
            title="Frete"
            description="Modelos distintos de cálculo e gestão de frete"
            delay={300}
          />
          <SlideCard
            icon={RefreshCw}
            title="Repasse"
            description="Prazos variáveis de repasse financeiro"
            delay={400}
          />
          <SlideCard
            icon={AlertTriangle}
            title="Status"
            description="Lógicas inconsistentes de status e cancelamento"
            variant="accent"
            delay={500}
          />
        </div>
        <div className="mt-12 p-6 bg-red-500/5 border border-red-500/20 rounded-xl opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-lg text-red-400">
            Isso inviabiliza uma <span className="font-semibold">visão única, confiável e em tempo hábil</span> da operação
          </p>
        </div>
      </>
    )
  },

  // Slide 4 - Gargalo: ERP
  {
    name: "ERP",
    content: (
      <>
        <SlideTitle slideNumber={2.2} subtitle="O sistema atual não sustenta a operação em escala">
          ERP como<br />
          <span className="text-gradient-accent">gargalo estrutural</span>
        </SlideTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <SlideCard
            icon={RefreshCw}
            title="Falhas de Sincronização"
            description="Erros recorrentes na sincronização de dados entre sistemas"
            variant="accent"
            delay={200}
          />
          <SlideCard
            icon={TrendingUp}
            title="Atrasos em Picos"
            description="Sistema não aguenta volume em períodos de alta demanda"
            variant="accent"
            delay={300}
          />
          <SlideCard
            icon={BarChart3}
            title="Sem Tempo Real"
            description="Não sustenta análise operacional em tempo real"
            variant="accent"
            delay={400}
          />
        </div>
        <div className="mt-12 bg-gradient-card border border-border rounded-2xl p-8 opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-xl text-center text-muted-foreground">
            Na prática, funciona como <span className="text-accent font-semibold">repositório atrasado</span> de dados,
            <br />não como <span className="text-foreground font-semibold">sistema de decisão</span>
          </p>
        </div>
      </>
    )
  },

  // Slide 5 - Gargalo: Logística
  {
    name: "Logística",
    content: (
      <>
        <SlideTitle slideNumber={2.3} subtitle="Processos físicos sem controle adequado">
          Falhas críticas de<br />
          <span className="text-gradient-accent">logística e controle</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <SlideList
            variant="x"
            items={[
              "Coletas sem bipagem adequada",
              "Cancelamentos automáticos por ausência de confirmação",
              "Armazéns terceirizados sem sistema profissional de endereçamento",
              "Divergências massivas de estoque detectadas apenas em inventários manuais"
            ]}
          />
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 opacity-0 animate-fade-in-up animate-delay-400">
              <h4 className="text-red-400 font-semibold mb-2">Consequências</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Prejuízos ocultos</li>
                <li>• Ruptura de estoque</li>
                <li>• Perda de ranking em marketplaces</li>
                <li>• Insegurança financeira</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  },

  // Slide 6 - Gargalo: Trabalho Manual
  {
    name: "Trabalho Manual",
    content: (
      <>
        <SlideTitle slideNumber={2.4} subtitle="Rotinas diárias que consomem horas da equipe">
          Dependência de<br />
          <span className="text-gradient-accent">trabalho manual</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <SlideCard
            icon={FileText}
            title="XMLs"
            description="Exportação manual de arquivos XML"
            delay={200}
          />
          <SlideCard
            icon={FileSpreadsheet}
            title="Planilhas"
            description="Importação e manipulação de planilhas"
            delay={300}
          />
          <SlideCard
            icon={Search}
            title="Conferências"
            description="Validações e conferências manuais"
            delay={400}
          />
          <SlideCard
            icon={Calculator}
            title="Conciliações"
            description="Conciliações financeiras artesanais"
            delay={500}
          />
        </div>
        <div className="mt-12 bg-gradient-card border border-accent/30 rounded-2xl p-8 opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-lg text-muted-foreground">
            Esse modelo <span className="text-accent font-semibold">consome horas diárias</span> e introduz
            <br /><span className="text-foreground font-semibold">erro sistêmico</span> no faturamento, estoque e financeiro
          </p>
        </div>
      </>
    )
  },

  // Slide 7 - O que é Dadus.AI
  {
    name: "O que é Dadus",
    content: (
      <>
        <SlideTitle slideNumber={3} subtitle="Uma camada operacional e analítica que conecta sistemas">
          O que é a<br />
          <span className="text-gradient-primary">Dadus.AI</span>
        </SlideTitle>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <SlideCard icon={FileSpreadsheet} title="Planilhas" description="Excel, Google Sheets" delay={200} />
          <SlideCard icon={Database} title="ERPs" description="Sistemas de gestão" delay={250} />
          <SlideCard icon={LayoutGrid} title="Marketplaces" description="Todos os canais" delay={300} />
          <SlideCard icon={Mail} title="E-mail" description="Comunicação automatizada" delay={350} />
          <SlideCard icon={Bell} title="WhatsApp" description="Notificações e alertas" delay={400} />
          <SlideCard icon={Database} title="Bancos de Dados" description="Fontes estruturadas" delay={450} />
          <SlideCard icon={Link2} title="APIs" description="Internas e externas" delay={500} />
          <SlideCard icon={Workflow} title="Workflows" description="Automações sob medida" variant="highlight" delay={550} />
        </div>
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-lg text-foreground">
            Na prática, a Dadus permite estruturar um <span className="text-primary font-semibold">ERP modular</span>,
            <br />adaptado à realidade do negócio
          </p>
        </div>
      </>
    )
  },

  // Slide 8 - Como a Dadus resolve
  {
    name: "Solução",
    content: (
      <>
        <SlideTitle slideNumber={4.1} subtitle="Workflows operacionais inteligentes">
          Como a Dadus<br />
          <span className="text-gradient-primary">resolve os gargalos</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 opacity-0 animate-fade-in-up animate-delay-200">
              A empresa define:
            </h3>
            <SlideList
              variant="arrow"
              items={[
                "Gatilhos de execução",
                "Fontes de dados",
                "Regras de validação",
                "Ações automáticas",
                "Saídas (relatórios, atualizações, alertas, dashboards)"
              ]}
            />
          </div>
          <div className="bg-gradient-card border border-primary/30 rounded-2xl p-8 opacity-0 animate-fade-in-up animate-delay-400">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Execução Inteligente</h3>
            <p className="text-muted-foreground leading-relaxed">
              A Dadus <span className="text-primary font-medium">executa, registra, valida</span> e transforma esses fluxos em <span className="text-foreground font-medium">dados estruturados</span>.
            </p>
          </div>
        </div>
      </>
    )
  },

  // Slide 9 - Exemplo: Gestão de Envios
  {
    name: "Exemplo: Envios",
    content: (
      <>
        <SlideTitle slideNumber={4.2} subtitle="Conciliação automatizada com rastreabilidade completa">
          Gestão de envios e<br />
          <span className="text-gradient-primary">auditoria financeira</span>
        </SlideTitle>
        <div className="mt-8 flex justify-center">
          <SlideWorkflow
            steps={[
              { title: "Pedido marcado 'Concluído' no Excel", icon: CheckCircle },
              { title: "Busca automática da NF no e-mail", icon: Mail },
              { title: "Extração do valor fiscal", icon: FileText },
              { title: "Registro na base master", icon: Database },
              { title: "Verificação de confirmação de envio", icon: Truck },
              { title: "Consulta do pedido no marketplace", icon: LayoutGrid },
              { title: "Cálculo de divergências", icon: Calculator },
              { title: "Geração de alertas e relatórios", icon: Bell }
            ]}
          />
        </div>
      </>
    )
  },

  // Slide 10 - Exemplo: Estoque
  {
    name: "Exemplo: Estoque",
    content: (
      <>
        <SlideTitle slideNumber={4.3} subtitle="Estoque unificado, auditável e previsível">
          Atualização inteligente<br />
          <span className="text-gradient-primary">de estoque</span>
        </SlideTitle>
        <div className="mt-8 flex justify-center">
          <SlideWorkflow
            steps={[
              { title: "Importa planilhas do ERP e armazéns", icon: CloudUpload },
              { title: "Atualiza a base central", icon: Database },
              { title: "Consulta estoques nos marketplaces", icon: LayoutGrid },
              { title: "Cruza SKU a SKU", icon: GitBranch },
              { title: "Detecta inconsistências", icon: AlertTriangle },
              { title: "Atualiza bases operacionais", icon: RefreshCw },
              { title: "Gera relatórios e indicadores", icon: BarChart3 }
            ]}
          />
        </div>
      </>
    )
  },

  // Slide 11 - Analytics
  {
    name: "Analytics",
    content: (
      <>
        <SlideTitle slideNumber={5} subtitle="Leitura estratégica da operação em tempo real">
          Camada de inteligência<br />
          <span className="text-gradient-primary">e analytics</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <SlideCard
            icon={LineChart}
            title="Dashboards Executivos"
            description="Visualização em tempo real da operação"
            delay={200}
          />
          <SlideCard
            icon={Package}
            title="Previsão de Ruptura"
            description="Antecipe problemas de estoque antes que aconteçam"
            delay={300}
          />
          <SlideCard
            icon={PieChart}
            title="Margem por Canal"
            description="Análise real de rentabilidade por marketplace"
            delay={400}
          />
          <SlideCard
            icon={Shield}
            title="Auditoria Contínua"
            description="Verificação automática de pedidos, fretes e repasses"
            delay={500}
          />
          <SlideCard
            icon={Truck}
            title="Gargalos Logísticos"
            description="Detecção e alerta de problemas na operação"
            delay={600}
          />
          <SlideCard
            icon={FileText}
            title="Relatórios Personalizados"
            description="Análises sob demanda sobre qualquer fonte"
            variant="highlight"
            delay={700}
          />
        </div>
        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-muted-foreground">
            Sem dependência de BI tradicional, exports manuais ou times técnicos
          </p>
        </div>
      </>
    )
  },

  // Slide 12 - Diferenciais
  {
    name: "Diferenciais",
    content: (
      <>
        <SlideTitle slideNumber={6}>
          Diferenciais estratégicos<br />
          <span className="text-gradient-primary">da Dadus.AI</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <SlideCard
            icon={Link2}
            title="Não substitui sistemas"
            description="Orquestra e conecta o stack existente, preservando investimentos anteriores"
            delay={200}
          />
          <SlideCard
            icon={Settings}
            title="Não é engessada"
            description="Workflows evoluem conforme a operação muda, sem dependência de TI"
            delay={300}
          />
          <SlideCard
            icon={Layers}
            title="Construção incremental"
            description="Começa em um gargalo crítico e expande gradualmente"
            delay={400}
          />
          <SlideCard
            icon={Eye}
            title="Fonte única de verdade"
            description="Cria uma visão operacional unificada e confiável"
            delay={500}
          />
          <SlideCard
            icon={Zap}
            title="Reduz trabalho manual"
            description="Elimina erro humano e prejuízos invisíveis"
            delay={600}
          />
          <SlideCard
            icon={Target}
            title="Decisões baseadas em dados"
            description="Sustenta decisões táticas e estratégicas com dados confiáveis"
            variant="highlight"
            delay={700}
          />
        </div>
      </>
    )
  },

  // Slide 13 - Resultado Esperado
  {
    name: "Resultado",
    content: (
      <>
        <SlideTitle slideNumber={7}>
          Resultado<br />
          <span className="text-gradient-primary">esperado</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-6">
              De uma operação...
            </h3>
            <SlideList
              variant="x"
              items={[
                "Reativa",
                "Manual",
                "Fragmentada",
                "Dependente de conciliações humanas"
              ]}
            />
          </div>
          <div className="opacity-0 animate-fade-in-up animate-delay-400">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-6">
              Para uma operação...
            </h3>
            <SlideList
              variant="check"
              items={[
                "Automatizada",
                "Auditável",
                "Previsível",
                "Orientada por dados",
                "Preparada para escala"
              ]}
            />
          </div>
        </div>
      </>
    )
  }
];

export const slideNames = slides.map(s => s.name);
