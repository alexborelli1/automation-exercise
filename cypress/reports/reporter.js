const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Versao": "Automation Exercise",
        "Ambiente Teste": "192.168.50.52",
        "Navegador": "Chrome  120.0.6099.110",
        "Plataforma": "Windows 2022",
        "Executado": "Local"
    },
};

reporter.generate(options)