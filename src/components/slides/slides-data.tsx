import { 
  LayoutGrid, 
  AlertTriangle, 
  Database, 
  Truck, 
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
  Package,
  Calculator,
  Search,
  Bell,
  FileSpreadsheet,
  CloudUpload,
  GitBranch,
  Settings,
  Clock,
  XCircle,
  MessageSquare,
  MapPin,
  Timer
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

  // Slide 2 - Por que não funciona
  {
    name: "O Problema",
    content: (
      <>
        <SlideTitle slideNumber={1} subtitle="Cada marketplace opera como um 'mundo diferente'">
          Por que hoje<br />
          <span className="text-gradient-accent">não funciona?</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <div className="bg-gradient-card border border-accent/30 rounded-2xl p-6 opacity-0 animate-fade-in-up animate-delay-200">
              <LayoutGrid className="w-10 h-10 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Diversidade de Plataformas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mercado Livre, Shopee, Amazon, Magalu — cada canal com seu próprio ecossistema, regras e comportamento.
              </p>
            </div>
            <div className="bg-gradient-card border border-border rounded-2xl p-6 opacity-0 animate-fade-in-up animate-delay-300">
              <Calculator className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Regras Variáveis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada canal tem seu próprio comissionamento, taxas de frete, prazos e condições de repasse.
              </p>
            </div>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 flex flex-col justify-center opacity-0 animate-fade-in-up animate-delay-400">
            <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Resultado</h3>
            <p className="text-muted-foreground leading-relaxed">
              Impossível ter uma <span className="text-red-400 font-medium">visão única e confiável</span> da operação em tempo hábil.
            </p>
          </div>
        </div>
      </>
    )
  },

  // Slide 3 - Gargalo: ERP (BLING)
  {
    name: "ERP BLING",
    content: (
      <>
        <SlideTitle slideNumber={2} subtitle="O sistema não atende os requisitos e opera com ineficiência">
          ERP (BLING) como<br />
          <span className="text-gradient-accent">gargalo estrutural</span>
        </SlideTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <SlideCard
            icon={XCircle}
            title="Falhas de Integração"
            description="Erros recorrentes ao puxar dados dos marketplaces, dados incompletos ou atrasados"
            variant="accent"
            delay={200}
          />
          <SlideCard
            icon={Timer}
            title="Delay em Picos"
            description="Em períodos de alta demanda, o ERP sofre com delay no processamento de dados"
            variant="accent"
            delay={300}
          />
          <SlideCard
            icon={BarChart3}
            title="Sem Tempo Real"
            description="Não sustenta análise operacional em tempo real para tomada de decisão"
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

  // Slide 4 - Gargalo: Logística
  {
    name: "Logística",
    content: (
      <>
        <SlideTitle slideNumber={3} subtitle="Processos físicos sem controle adequado">
          Falhas críticas na<br />
          <span className="text-gradient-accent">logística</span>
        </SlideTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-card border border-accent/30 rounded-2xl p-6 opacity-0 animate-fade-in-up animate-delay-200">
            <Search className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Bipagem Deficiente</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Motoristas com pressa não escaneiam (bipam) os produtos no momento da coleta, gerando inconsistências.
            </p>
          </div>
          <div className="bg-gradient-card border border-red-500/30 rounded-2xl p-6 opacity-0 animate-fade-in-up animate-delay-300">
            <Clock className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Regras Rígidas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shopee cancela pedidos automaticamente em <span className="text-red-400 font-medium">48h</span> sem confirmação, mesmo com produto em trânsito.
            </p>
          </div>
          <div className="bg-gradient-card border border-accent/30 rounded-2xl p-6 opacity-0 animate-fade-in-up animate-delay-400">
            <MapPin className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Sem Auditoria Profissional</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Armazéns terceirizados sem sistema de localização (rua, coluna, andar). Divergências de até <span className="text-accent font-medium">700 itens</span>.
            </p>
          </div>
        </div>
        <div className="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-xl opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-red-400">
            Divergências só são descobertas em <span className="font-semibold">contagens físicas manuais</span>
          </p>
        </div>
      </>
    )
  },

  // Slide 5 - Gargalo: Trabalho Manual
  {
    name: "Trabalho Manual",
    content: (
      <>
        <SlideTitle slideNumber={4} subtitle="1,5 a 2 horas diárias apenas movendo dados">
          Dependência de<br />
          <span className="text-gradient-accent">processos manuais</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <SlideList
              variant="x"
              items={[
                "Exportação manual de XMLs do ERP",
                "Importação em planilhas para análise",
                "Conferências manuais linha a linha",
                "Conciliações financeiras artesanais"
              ]}
            />
          </div>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 opacity-0 animate-fade-in-up animate-delay-400">
              <AlertTriangle className="w-10 h-10 text-red-400 mb-3" />
              <h4 className="text-red-400 font-semibold mb-2">O Risco</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Qualquer erro de digitação ou falha ao copiar uma linha <span className="text-red-400 font-medium">compromete a integridade</span> de todo o faturamento e estoque.
              </p>
            </div>
            <div className="bg-gradient-card border border-accent/30 rounded-xl p-6 opacity-0 animate-fade-in-up animate-delay-500">
              <Clock className="w-10 h-10 text-accent mb-3" />
              <h4 className="text-accent font-semibold mb-2">Tempo Perdido</h4>
              <p className="text-sm text-muted-foreground">
                <span className="text-2xl font-bold text-foreground">1,5 - 2h</span> por dia em tarefas repetitivas
              </p>
            </div>
          </div>
        </div>
      </>
    )
  },

  // Slide 6 - O que é Dadus.AI
  {
    name: "A Solução",
    content: (
      <>
        <SlideTitle slideNumber={5} subtitle="Crie um ERP modular usando planilhas como input">
          O que é a<br />
          <span className="text-gradient-primary">Dadus.AI</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
              A Dadus é uma plataforma de <span className="text-primary font-medium">workflows inteligentes</span> que permite criar virtualmente um ERP usando:
            </p>
            <SlideList
              variant="arrow"
              items={[
                "Planilha do Excel como input",
                "Etapas do workflow como integrações",
                "Output configurável (relatórios, alertas, atualizações)",
                "Qualquer rotina pode ser automatizada"
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <SlideCard icon={FileSpreadsheet} title="Excel" description="Input de dados" delay={200} />
            <SlideCard icon={Mail} title="E-mail" description="NFs e comunicação" delay={250} />
            <SlideCard icon={MessageSquare} title="WhatsApp" description="Alertas e confirmações" delay={300} />
            <SlideCard icon={LayoutGrid} title="Marketplaces" description="Todos os canais" delay={350} />
            <SlideCard icon={Database} title="Base Master" description="Fonte única" delay={400} />
            <SlideCard icon={Link2} title="APIs" description="Integrações" delay={450} />
            <SlideCard icon={BarChart3} title="Dashboards" description="Visualização" delay={500} />
            <SlideCard icon={Workflow} title="Workflows" description="Automação" variant="highlight" delay={550} />
          </div>
        </div>
      </>
    )
  },

  // Slide 7 - Exemplo: Gestão de Envios
  {
    name: "Exemplo: Envios",
    content: (
      <>
        <SlideTitle slideNumber={6} subtitle="Conciliação automatizada com rastreabilidade completa">
          Workflow: Gestão de<br />
          <span className="text-gradient-primary">envios e auditoria</span>
        </SlideTitle>
        <div className="mt-8 flex justify-center">
          <SlideWorkflow
            steps={[
              { title: "Trigger: Status 'Concluído' no Excel", icon: CheckCircle },
              { title: "Procura a NF no e-mail", icon: Mail },
              { title: "Extrai valor da Nota Fiscal", icon: FileText },
              { title: "Adiciona valor no Excel", icon: FileSpreadsheet },
              { title: "Verifica envio no WhatsApp", icon: MessageSquare },
              { title: "Adiciona confirmação no Excel", icon: Database },
              { title: "Consulta pedido no marketplace", icon: LayoutGrid },
              { title: "Calcula divergência", icon: Calculator }
            ]}
          />
        </div>
        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-foreground">
            <span className="text-primary font-semibold">Resultado:</span> Conciliação automática, rastreabilidade completa, zero erro humano
          </p>
        </div>
      </>
    )
  },

  // Slide 8 - Exemplo: Estoque
  {
    name: "Exemplo: Estoque",
    content: (
      <>
        <SlideTitle slideNumber={7} subtitle="Estoque unificado, auditável e previsível">
          Workflow: Atualização<br />
          <span className="text-gradient-primary">de estoque</span>
        </SlideTitle>
        <div className="mt-8 flex justify-center">
          <SlideWorkflow
            steps={[
              { title: "Baixa planilha do ERP", icon: CloudUpload },
              { title: "Atualiza base master", icon: Database },
              { title: "Navega inventário do marketplace", icon: LayoutGrid },
              { title: "Olha estoque de cada produto", icon: Search },
              { title: "Atualiza na master", icon: RefreshCw },
              { title: "Detecta inconsistências", icon: AlertTriangle },
              { title: "Gera relatórios", icon: BarChart3 }
            ]}
          />
        </div>
        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl opacity-0 animate-fade-in-up animate-delay-500">
          <p className="text-center text-foreground">
            <span className="text-primary font-semibold">Resultado:</span> Estoque unificado, previsibilidade de ruptura, auditoria contínua
          </p>
        </div>
      </>
    )
  },

  // Slide 9 - Analytics e Relatórios
  {
    name: "Analytics",
    content: (
      <>
        <SlideTitle slideNumber={8} subtitle="Substitua ferramentas de BI tradicionais">
          Inteligência e<br />
          <span className="text-gradient-primary">Analytics</span>
        </SlideTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <SlideCard
            icon={LineChart}
            title="Dashboards em Tempo Real"
            description="Visualização instantânea da operação, sem esperar exports"
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
            icon={FileText}
            title="Relatórios Personalizados"
            description="Qualquer análise sobre os dados que possui nos Excels"
            variant="highlight"
            delay={600}
          />
          <SlideCard
            icon={Eye}
            title="Substitui o Locker"
            description="Toda a inteligência analítica em uma plataforma só"
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

  // Slide 10 - Diferenciais
  {
    name: "Diferenciais",
    content: (
      <>
        <SlideTitle slideNumber={9}>
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

  // Slide 11 - Resultado Esperado
  {
    name: "Resultado",
    content: (
      <>
        <SlideTitle slideNumber={10}>
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
