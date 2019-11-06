// By Renzo Nogueira
// 04/11/2019
// v1.0.0
class WindowDebug {

	// Constantes globais
	attWindowDebug = {
		myWindowDebug: {
			init: false,
			id: 'myWindowDebug',
			windowOpen: false,
			windowConfingOpen: false,
			width: '210px',
			height: '280px',
			top: '10px',
			right: '85%',
			left: false
		},
		containerPai: 'body',
		theme: {
			aplicate: '',
			default: 'default',
			ligth: 'ligth',
			dark: 'dark'
		},
		color: {
			default: '#536DFE',
			ligth: '#FFFFFF',
			dark: '#000000'
		},
	};

	// Construtor
	constructor(config) {
		this.confing = config;
		const self = this;

		// Elementos Janela Window Debug
		this.spanIcon1 = document.createElement('span');
		this.spanIcon2 = document.createElement('span');
		this.spanIcon3 = document.createElement('span');
		this.spanIcon4 = document.createElement('span');
		this.spanIcon5 = document.createElement('span');
		this.spanRodape = document.createElement('span');
		this.myWindowDebug = document.createElement('div');
		this.myWindowDebugLinkIcons = document.createElement('link'); // Para google icons
		this.myWindowDebugLinkIconsJQuery = document.createElement('script'); // Para JQuery
		this.headerMyWindowDebug = document.createElement('div');
		this.iconWindonDebug = document.createElement('i');
		this.confingWindowDebug = document.createElement('i');
		this.minimizerWindowDebug = document.createElement('i');
		this.clearWindowDebug = document.createElement('i');
		this.closeWindowDebug = document.createElement('i');
		this.canvaWindowDebug = document.createElement('div');
		this.footerWindowDebug = document.createElement('div');

		// Elementos Janela de configurações Window Debug
		this.myWindowDebugConfing = document.createElement('div');

		//	Console
		var console = (function (oldCons) {
			return {
				log: function (text) {
					oldCons.log(text);
					self.logWindowDebug(text);
				},
				info: function (text) {
					oldCons.info(text);
					self.logWindowDebug(text);
				},
				warn: function (text) {
					oldCons.warn(text);
					self.logWindowDebug(text);
				},
				error: function (text) {
					oldCons.error(text);
					self.logWindowDebug(text);
				}
			};
		}(window.console));
		window.console = console;

		// console.log = function (msg) {
		// 	self.logWindowDebug(msg.info);
		// }
		//	Tema
		this.attWindowDebug.theme.aplicate = config.theme;

		// Aplica estilos
		this.style();

	}

	// Monta elemntos em myWindowDebug
	create() {

		// Icones
		this.spanIcon1.appendChild(this.iconWindonDebug);
		this.spanIcon2.appendChild(this.confingWindowDebug);
		this.spanIcon3.appendChild(this.minimizerWindowDebug);
		this.spanIcon3.appendChild(this.clearWindowDebug);
		this.spanIcon4.appendChild(this.minimizerWindowDebug);
		this.spanIcon5.appendChild(this.closeWindowDebug);
		this.spanIcon2.setAttribute('class', 'close');
		this.spanIcon3.setAttribute('class', 'close');
		this.spanIcon4.setAttribute('class', 'close');
		this.spanIcon5.setAttribute('class', 'close');
		this.headerMyWindowDebug.appendChild(this.spanIcon1);
		this.headerMyWindowDebug.appendChild(this.spanIcon2);
		this.headerMyWindowDebug.appendChild(this.spanIcon3);
		this.headerMyWindowDebug.appendChild(this.spanIcon4);
		this.headerMyWindowDebug.appendChild(this.spanIcon5);

		this.myWindowDebug.appendChild(this.myWindowDebugLinkIcons); // Import dos icones
		this.myWindowDebug.appendChild(this.headerMyWindowDebug); // Header
		this.myWindowDebug.appendChild(this.canvaWindowDebug); //	Canvas
		this.myWindowDebug.appendChild(this.spanRodape); // Rodapé
	}

	// Adiciona eventos aos elementos
	events() {
		const self = this;
		// Hover butoons
		const butoons = document.getElementsByClassName('btnWindowDebug');
		const btnClose = document.getElementById('closeWindowDebug');
		const btnMinimizer = document.getElementById('minimizerWindowDebug');
		const btnIcone = document.getElementById('iconWindonDebug');
		const btnClear = document.getElementById('clearWindowDebug');
		const btnConfing = document.getElementById('confingWindowDebug');
		btnConfing.addEventListener('click', function () {
			self.openConfingWindowDebug();
		});
		btnClear.addEventListener('click', function () {
			self.clearConsoleWindowDebug();
		});
		btnIcone.addEventListener('click', function () {
			self.open()
		});
		btnMinimizer.addEventListener('click', function () {
			self.open()
		});
		btnClose.addEventListener('click', function () {
			self.closeWindow()
		});

		for (let i of butoons) { //	Botões
			i.addEventListener('mouseenter', function () {
				i.style.padding = '4px';
			});
			i.addEventListener('mouseout', function () {
				i.style.padding = '2px';
			});
		}
		if (typeof jQuery == 'function') {
			$("#" + this.attWindowDebug.myWindowDebug.id).draggable();
		}
	}

	// Aplica estilos e atributos
	style() {
		// Importação de icones
		this.myWindowDebugLinkIcons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
		this.myWindowDebugLinkIcons.setAttribute('rel', 'stylesheet');

		//	Icones
		this.iconWindonDebug.setAttribute('class', 'material-icons');
		this.confingWindowDebug.setAttribute('class', 'btnWindowDebug material-icons');
		this.minimizerWindowDebug.setAttribute('class', 'btnWindowDebug material-icons');
		this.clearWindowDebug.setAttribute('class', 'btnWindowDebug material-icons');
		this.closeWindowDebug.setAttribute('class', 'btnWindowDebug material-icons');
		this.iconWindonDebug.innerHTML = 'bug_report'
		this.confingWindowDebug.innerHTML = 'build';
		this.minimizerWindowDebug.innerHTML = 'remove';
		this.clearWindowDebug.innerHTML = 'delete_forever';
		this.closeWindowDebug.innerHTML = 'close';
		if (this.attWindowDebug.theme.aplicate == this.attWindowDebug.theme.dark) { //	Icone
			this.iconWindonDebug.style.color = this.attWindowDebug.color.ligth;
			this.iconWindonDebug.style.border = '2px solid ' + this.attWindowDebug.color.ligth;
		}
		this.confingWindowDebug.style.backgroundColor = '#FFFFFF';
		this.minimizerWindowDebug.style.backgroundColor = '#FFFFFF';
		this.closeWindowDebug.style.backgroundColor = '#FFFFFF';
		this.clearWindowDebug.style.backgroundColor = '#FFFFFF';
		this.iconWindonDebug.style.width = '30px';
		this.confingWindowDebug.style.width = '25px';
		this.minimizerWindowDebug.style.width = '25px';
		this.closeWindowDebug.style.width = '25px';
		this.clearWindowDebug.style.width = '25px';
		this.iconWindonDebug.style.height = '30px';
		this.confingWindowDebug.style.height = '25px';
		this.minimizerWindowDebug.style.height = '25px';
		this.closeWindowDebug.style.height = '25px';
		this.clearWindowDebug.style.height = '25px';
		this.iconWindonDebug.style.borderRadius = '100px';
		this.confingWindowDebug.style.borderRadius = '100px';
		this.minimizerWindowDebug.style.borderRadius = '100px';
		this.closeWindowDebug.style.borderRadius = '100px';
		this.clearWindowDebug.style.borderRadius = '100px';
		this.iconWindonDebug.style.boxShadow = '0px 2px 10px 0px black';
		this.confingWindowDebug.style.boxShadow = '0px 2px 10px 0px black';
		this.minimizerWindowDebug.style.boxShadow = '0px 2px 10px 0px black';
		this.closeWindowDebug.style.boxShadow = '0px 2px 10px 0px black';
		this.clearWindowDebug.style.boxShadow = '0px 2px 10px 0px black';
		this.iconWindonDebug.style.padding = '2px';
		this.confingWindowDebug.style.padding = '2px';
		this.minimizerWindowDebug.style.padding = '2px';
		this.closeWindowDebug.style.padding = '2px';
		this.clearWindowDebug.style.padding = '2px';
		this.clearWindowDebug.setAttribute('id', 'clearWindowDebug');
		this.closeWindowDebug.setAttribute('id', 'closeWindowDebug');
		this.minimizerWindowDebug.setAttribute('id', 'minimizerWindowDebug');
		this.iconWindonDebug.setAttribute('id', 'iconWindonDebug');
		this.confingWindowDebug.setAttribute('id', 'confingWindowDebug');

		//	Cabeçalho
		this.headerMyWindowDebug.style.display = 'grid';
		this.headerMyWindowDebug.style.gridTemplateColumns = 'auto auto auto auto auto';
		this.headerMyWindowDebug.style.textAlign = 'center';
		this.headerMyWindowDebug.style.fontWeight = 'bold';

		// Rodapé
		this.footerWindowDebug.style.padding = '2px';
		this.spanRodape.style.fontWeight = 'bold';
		this.spanRodape.style.fontSize = '12px';
		this.spanRodape.innerHTML = '-- Window Debug --';
		this.spanRodape.setAttribute('id', 'footerWindowDebug');
		this.spanRodape.setAttribute('class', 'close');
		this.footerWindowDebug.appendChild(this.spanRodape);

		//	Canva
		this.canvaWindowDebug.style.width = '100%';
		this.canvaWindowDebug.style.height = '80%';
		this.canvaWindowDebug.style.marginTop = '10px';
		this.canvaWindowDebug.style.border = '1px solid black';
		this.canvaWindowDebug.style.backgroundColor = this.myWindowDebug.style.backgroundColor;
		this.canvaWindowDebug.style.overflow = 'auto';
		this.canvaWindowDebug.style.boxShadow = '0px 1px 5px 0px black';
		this.canvaWindowDebug.setAttribute('class', 'close');
		this.canvaWindowDebug.setAttribute('id', 'canvaWindowDebug');

		// MyWindownDebug
		if (this.confing.top && this.confing.right) {
			this.myWindowDebug.style.top = this.confing.top;
			this.myWindowDebug.style.right = this.confing.right;
			this.attWindowDebug.myWindowDebug.top = this.confing.top;
			this.attWindowDebug.myWindowDebug.right = this.confing.right;
		} else if (this.confing.left && this.confing.top) {
			this.myWindowDebug.style.left = this.confing.left;
			this.myWindowDebug.style.top = this.confing.top;
			this.attWindowDebug.myWindowDebug.left = this.confing.left;
			this.attWindowDebug.myWindowDebug.top = this.confing.top;
		} else {
			this.myWindowDebug.style.top = '10px'
			this.myWindowDebug.style.right = '85%'
		}
		if (this.confing.theme == this.attWindowDebug.theme.ligth) {
			this.myWindowDebug.style.backgroundColor = this.attWindowDebug.color.ligth;
		} else if (this.confing.theme == this.attWindowDebug.theme.dark) {
			this.myWindowDebug.style.backgroundColor = this.attWindowDebug.color.dark;
		} else {
			this.myWindowDebug.style.backgroundColor = this.attWindowDebug.color.default;
		}
		this.myWindowDebug.style.position = 'absolute';
		this.myWindowDebug.style.padding = '10px';
		this.myWindowDebug.style.boxShadow = '0px 10px 20px 0px black';
		this.myWindowDebug.style.width = this.attWindowDebug.myWindowDebug.width;
		this.myWindowDebug.style.height = this.attWindowDebug.myWindowDebug.height;
		this.myWindowDebug.style.borderRadius = '10px';
		this.myWindowDebug.style.zIndex = Math.pow(10, 10);
		this.myWindowDebug.setAttribute('id', this.attWindowDebug.myWindowDebug.id);

		// Janelas de configurações	****
		this.myWindowDebugConfing.style.width = '300px';
		this.myWindowDebugConfing.style.height = '300px';
		if (this.attWindowDebug.theme.aplicate == this.attWindowDebug.theme.ligth) {
			this.myWindowDebugConfing.style.backgroundColor = this.attWindowDebug.color.ligth;
		} else if (this.attWindowDebug.theme.aplicate == this.attWindowDebug.theme.dark) {
			this.myWindowDebugConfing.style.backgroundColor = this.attWindowDebug.color.dark;
		} else {
			this.myWindowDebugConfing.style.backgroundColor = this.attWindowDebug.color.default;
		}
		this.myWindowDebugConfing.setAttribute('id', 'myWindowDebugConfing');
		this.myWindowDebugConfing.style.opacity = '.80';
		this.myWindowDebugConfing.style.filter = 'alpha(opacity=80)';
		this.myWindowDebugConfing.style.display = 'none';
		this.myWindowDebugConfing.style.right = '50%'
		this.myWindowDebugConfing.style.marginRight = '-15%'
		this.myWindowDebugConfing.style.top = '50%';
		this.myWindowDebugConfing.style.marginTop = '-25%';
		this.myWindowDebugConfing.style.position = 'absolute';
		this.myWindowDebugConfing.style.padding = '10px';
		this.myWindowDebugConfing.style.boxShadow = '0px 10px 20px 0px black';
		this.myWindowDebugConfing.style.width = this.attWindowDebug.myWindowDebug.width;
		this.myWindowDebugConfing.style.height = this.attWindowDebug.myWindowDebug.height;
		this.myWindowDebugConfing.style.borderRadius = '10px';
		this.myWindowDebugConfing.setAttribute('class', this.attWindowDebug.myWindowDebug.id);

		//	Monta janela
		this.create();
	}

	// Abre myWindowDebug
	open() {
		const elements = document.getElementsByClassName('close')

		this.myWindowDebug.style.transitionProperty = 'width height top left right'
		this.myWindowDebug.style.transitionDuration = '0.5s';
		if (this.attWindowDebug.myWindowDebug.windowOpen == false) {
			this.myWindowDebug.style.width = '48px';
			this.myWindowDebug.style.height = '48px';
			if (!this.attWindowDebug.myWindowDebug.left) {
				this.myWindowDebug.style.right = this.attWindowDebug.myWindowDebug.right;
				this.myWindowDebug.style.top = this.attWindowDebug.myWindowDebug.top;
			} else {
				this.myWindowDebug.style.left = this.attWindowDebug.myWindowDebug.left;
				this.myWindowDebug.style.top = this.attWindowDebug.myWindowDebug.top;
			}
			this.myWindowDebug.style.margin = '0';
			this.attWindowDebug.myWindowDebug.windowOpen = true;
			this.myWindowDebug.style.alignItems = 'center';
			this.myWindowDebug.style.justifyContent = 'center';
			this.myWindowDebug.style.display = 'grid';

			this.myWindowDebug.style.opacity = '.50';
			this.myWindowDebug.style.filter = 'alpha(opacity=50)';
			this.myWindowDebug.style.padding = '0';
			for (let i of elements) {
				i.style.display = 'none';
			}
		} else {
			if (this.attWindowDebug.myWindowDebug.left) {
				this.myWindowDebug.style.left = '50%';
			} else {
				this.myWindowDebug.style.right = '50%'
			};
			this.myWindowDebug.style.top = '50%';
			if (this.attWindowDebug.myWindowDebug.left) {
				this.myWindowDebug.style.marginLeft = '-10%';
			} else {
				this.myWindowDebug.style.marginRight = '-10%';
			};
			this.myWindowDebug.style.marginTop = '-10%';
			this.myWindowDebug.style.width = this.attWindowDebug.myWindowDebug.width;
			this.myWindowDebug.style.height = this.attWindowDebug.myWindowDebug.height;
			this.myWindowDebug.style.padding = '10px';
			this.myWindowDebug.style.display = 'block';
			this.myWindowDebug.style.opacity = '.80';
			this.myWindowDebug.style.filter = 'alpha(opacity=80)';
			for (let i of elements) {
				i.style.display = 'block';
			}
			this.attWindowDebug.myWindowDebug.windowOpen = false;
		}
	}

	//	Fecha a janela
	closeWindow() {
		this.myWindowDebug = document.getElementById(this.attWindowDebug.myWindowDebug.id);
		this.myWindowDebugConfung = document.getElementById('myWindowDebugConfing');
		for (let i of document.getElementsByTagName(this.attWindowDebug.containerPai)) {
			i.removeChild(this.myWindowDebug);
			i.removeChild(this.myWindowDebugConfung);
		}
		const date = new Date();
		this.attWindowDebug.myWindowDebug.init = false;
		const statusLogWindowLog = {
			status: 'closed',
			time: date.getHours() + "H:" + date.getMinutes() + "M:" + date.getSeconds() + "s"
		}
		console.log({
			statusLogWindowLog
		});
	}

	//Log
	logWindowDebug(msg) {
		if (this.attWindowDebug.myWindowDebug.init) {
			const list = document.getElementById('canvaWindowDebug');
			this.itemListWindowDebug = document.createElement('li');
			this.itemListWindowDebug.setAttribute('class', 'itemListWindowDebug');
			this.itemListWindowDebug.style.listStyle = 'none';
			this.itemListWindowDebug.style.backgroundColor = '#ECEFF1';
			this.itemListWindowDebug.style.borderBottom = '1px solid black';
			this.itemListWindowDebug.style.padding = '5px';
			this.itemListWindowDebug.innerHTML = msg;
			list.appendChild(this.itemListWindowDebug);

			const itensList = document.getElementsByClassName('itemListWindowDebug');
			for (let f of itensList) { // Lista
				f.addEventListener('mouseenter', function () {
					f.style.padding = '10px';
					f.style.backgroundColor = '#CFD8DC';
					f.style.boxShadow = '0px 4px 10px 0px black';
				});
				f.addEventListener('mouseout', function () {
					f.style.backgroundColor = '#ECEFF1';
					f.style.borderBottom = '1px solid black';
					f.style.boxShadow = 'none';
					f.style.padding = '5px'
				});
			}
		}
	}

	// Limpa o console da janela
	clearConsoleWindowDebug() {
		const list = document.getElementById('canvaWindowDebug');
		list.innerHTML = "";
	}

	// Abre as configurações
	openConfingWindowDebug() {
		const self = this;
		const window = document.getElementById('myWindowDebugConfing');
		if (!this.attWindowDebug.myWindowDebug.windowConfingOpen) {
			window.style.display = 'block';
			this.attWindowDebug.myWindowDebug.windowConfingOpen = true;
		} else {
			window.style.display = 'none';
			this.attWindowDebug.myWindowDebug.windowConfingOpen = false;
		}
		self.open();
	}

	// Aplica o myWindowDebug no corpo do documento
	show() {
		for (let i of document.getElementsByTagName(this.attWindowDebug.containerPai)) {
			i.appendChild(this.myWindowDebugConfing);
			i.appendChild(this.myWindowDebug);
		}
		this.open();
		this.events();
		this.attWindowDebug.myWindowDebug.init = true;
	}
}