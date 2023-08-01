![CAPA - PYTHON](images\capa.png)

# Estudo de Caso: Análise Exploratória de Dados e Comparação de Modelos de Aprendizado de Máquina

### Salve família!!!
Cientista de Dados! Uma das profissões mais jovens, você não acha?

Esta especialidade surgiu nos meados dos anos 2000 e sua presença na área decolou rapidamente!

Agora, o mundo da tecnologia reconhece a importância do profissional em Ciência de Dados, que tem se tornado cada vez mais valorizado e procurado.

Mas, e você… Já viu Ciência de Dados na prática? O que um Cientista de Dados produz? Caso não tenha visto, vamos lá!

Teremos o seguinte trajeto:  

- Introdução (o que será abordado?)
- Apresentação de Conceitos Iniciais (qual a base teórica contida?)
- Contextualização: Entendendo o Problema (qual o enredo da história?)
- Análise Exploratória (mão na massa vol.1!)
- Aplicação dos Modelos (mão na massa vol. 2!!)
- Conclusão (como podemos aproveitar e aperfeiçoar o estudo?)
- Referências (não chegamos até aqui sozinhos…)

## 1. Introdução
Devido à forte competitividade de mercado e o aumento significativo da quantidade de dados gerados, as organizações precisam extrair deles informações valiosas. Estas são extremamente necessárias para tomadas de decisões estratégicas cada vez mais assertivas.

Neste contexto, o cientista de dados desempenha um papel fundamental, sendo responsável por coletar, limpar, analisar e interpretar volumes imensos (ou nem tanto) de dados, utilizando técnicas avançadas de análise e aprendizado de máquina.

Este artigo mostra um estudo de caso, aplicando conhecimentos de ciência de dados. Serão utilizadas técnicas de análise exploratória de dados. Além da implementação de modelos de aprendizado de máquina, aplicados a problemas de classificação. No final, será feita a apresentação dos indicadores alcançados, com comparação entre os resultados.

Para desenvolvimento dos códigos demonstrados, foi utilizada a linguagem de programação Python (a true love), através da plataforma Google Colaboratory.

## 2. Apresentação de Conceitos Iniciais
Antes de tudo, faz-se necessário percorrer alguns conceitos importantes, para melhor entendimento dos desafios propostos.

### 2.1 Ciência de Dados
Segundo Peter e Andrew Bruce, a Ciência de Dados é uma fusão de múltiplas disciplinas, incluindo estatística, ciências da computação, tecnologia da informação e campos de domínio específicos. Consequentemente, podem-se utilizar termos diferentes para se referir a este mesmo conceito. (Fonte: Practical Statistics for Data Scientists. 2020)

- Partindo dessa definição, devemos verificar as seguintes observações:

- A ciência de dados é considerada uma disciplina, enquanto os cientistas de dados são os praticantes desse campo;

- É comum confundir os conceitos de ciência de dados e inteligência de negócios (BI), pois ambos se relacionam com os dados de uma organização. Mas as duas áreas possuem focos diferentes;

- Embora a profissão de cientista de dados seja relativamente recente, o termo ciência de dados apareceu pela primeira vez na década de 1960, como um nome alternativo para estatísticas.

Na figura abaixo, está sendo apresentado John Tukey, ilustre estatístico americano que formulou ideias, consideradas fundamentos da ciência de dados.

![John Tukey](images\john_tukey.png)

### 2.2 Análise Exploratória de Dados
A análise exploratória de dados (Exploratory Data Analysis - EDA) inclui métodos para explorar conjuntos de dados, a fim de resumir suas principais características e identificar quaisquer problemas nos dados. Utilizando métodos estatísticos e visualizações, você pode obter informações sobre um conjunto de dados para determinar sua prontidão para análise e informar quais técnicas aplicar para a preparação dos dados. (Fonte: Exploratory data analysis on Databricks: Tools and techniques. 2023)

Existem quatro abordagens principais para análise exploratória:

- Análise uni-variada não gráfica: o objetivo principal é descrever os dados e encontrar padrões existentes neles. Entretanto, como se trata de uma única variável, não lida com causas ou relações;

- Análise uni-variada gráfica: utilizada para fornecer um entendimento mais completo às análises não gráficas, através da visualização de histogramas, box-plot e diagramas de caule e folhas;

- Análise multivariada não gráfica: geralmente mostram a relação entre duas ou mais variáveis por meio de medidas estatísticas, como coeficiente de correlação;

- Análise multivariada gráfica: tem como objetivo visualizar relações entre duas ou mais variáveis. Para isso, são utilizados comumente, gráficos de dispersão, gráfico de bolhas, mapas de calor e matrizes de correlação.

### 2.3. Aprendizagem de Máquina
Aprendizagem de máquina (Machine Learning) é um subcampo da inteligência artificial, que é amplamente definida como a capacidade de uma máquina imitar o comportamento humano inteligente. Sistemas de inteligência artificial são usados para realizar tarefas complexas de forma semelhante à maneira como os humanos resolvem problemas. (Fonte: Machine learning, explained. 2021)

Na prática, os modelos de Machine Learning buscam reconhecer padrões. Além disso, são divididos em dois tipos.

- Modelos supervisionados: conhecemos o valor que queremos predizer. Aplicados a problemas de classificação ou regressão;

- Modelos não-supervisionados: não conhecemos o que queremos predizer. Aplicados a problemas de clusterização.

#### 2.4 Métricas de Avaliação de Modelos
Existem várias métricas para verificação da qualidade de predição e desempenho de um modelo. Porém, como neste estudo de caso é utilizado um problema de classificação, vamos nos atentar as seguintes métricas:

- Acurácia (accuracy): representa a proporção de exemplos corretamente classificados em relação ao total de exemplos no conjunto de dados. Indica uma performance geral do modelo;

- Precisão (precision): também chamada de valor preditivo positivo, esta métrica verifica a proporção de exemplos positivos corretamente classificados como positivos, em relação a todos os exemplos classificados como positivos pelo modelo;

- Revocação (recall): também conhecida como taxa de recuperação ou sensibilidade, representa a capacidade de um modelo em identificar corretamente os exemplos positivos entre todos os exemplos positivos existentes no conjunto de dados;

- Escore F1 (F1-Score): métrica calculada a partir da média harmônica entre a precisão e o recall, fornecendo uma medida entre a capacidade do modelo de identificar corretamente exemplos positivos e evitar falsos positivos;

![Métricas](images\metricas.png)

- Matriz de confusão (confusion matrix): é uma tabela onde se visualiza a contagem de previsões corretas e incorretas feitas pelo modelo, permitindo a análise de erros da classificação.

![Matriz](images\matriz.png)

Vale ressaltar que as métricas foram apresentadas de forma resumida. Fica como sugestão a pesquisa mais profunda da definição e aplicação de cada uma delas.

## 3. Contextualização: Entendendo o Problema
Apesar dos esforços contínuos dos bancos para atrair e reter clientes, o setor bancário enfrenta um desafio constante, apresentado na forma de perda de clientes, levando a prejuízos financeiros.

![Churn](images\churn.png)

É vantajoso para os bancos saber o que leva um cliente à decisão de sair da empresa ou deixar de consumir determinado serviço bancário. Logo, este pequeno projeto tem como variável alvo (target) a taxa de rotatividade  (churn rate) de clientes de um banco, a partir de um conjunto de dados apresentando as características destes clientes (features), disponibilizados na plataforma Kaggle.

Após a análise, serão realizados treinos de modelos de aprendizado de máquina. E, a partir dos resultados, podem ser geradas conclusões úteis, para  entender os principais fatores que influenciam significativamente na saída do cliente.

No final, serão visualizados os resultados da modelagem, a partir da verificação de métricas. Além disso, serão apresentadas possíveis melhorias, através da sugestão de aplicações de metodologias mais avançadas, que não fazem parte deste estudo.

