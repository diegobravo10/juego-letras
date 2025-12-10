// Datos
const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const paises = [
    { codigo: 'AF', nombre: 'Afganistán', imagen: 'banderas/af.png' },
    { codigo: 'AX', nombre: 'Åland', imagen: 'banderas/ax.png' },
    { codigo: 'AL', nombre: 'Albania', imagen: 'banderas/al.png' },
    { codigo: 'DZ', nombre: 'Argelia', imagen: 'banderas/dz.png' },
    { codigo: 'AD', nombre: 'Andorra', imagen: 'banderas/ad.png' },
    { codigo: 'AO', nombre: 'Angola', imagen: 'banderas/ao.png' },
    { codigo: 'AI', nombre: 'Anguila', imagen: 'banderas/ai.png' },
    { codigo: 'AQ', nombre: 'Antártida', imagen: 'banderas/aq.png' },
    { codigo: 'AG', nombre: 'Antigua y Barbuda', imagen: 'banderas/ag.png' },
    { codigo: 'SA', nombre: 'Arabia Saudita', imagen: 'banderas/sa.png' },
    { codigo: 'AR', nombre: 'Argentina', imagen: 'banderas/ar.png' },
    { codigo: 'AM', nombre: 'Armenia', imagen: 'banderas/am.png' },
    { codigo: 'AW', nombre: 'Aruba', imagen: 'banderas/aw.png' },
    { codigo: 'AU', nombre: 'Australia', imagen: 'banderas/au.png' },
    { codigo: 'AT', nombre: 'Austria', imagen: 'banderas/at.png' },
    { codigo: 'AZ', nombre: 'Azerbaiyán', imagen: 'banderas/az.png' },
    { codigo: 'BS', nombre: 'Bahamas', imagen: 'banderas/bs.png' },
    { codigo: 'BH', nombre: 'Baréin', imagen: 'banderas/bh.png' },
    { codigo: 'BD', nombre: 'Bangladés', imagen: 'banderas/bd.png' },
    { codigo: 'BB', nombre: 'Barbados', imagen: 'banderas/bb.png' },
    { codigo: 'BE', nombre: 'Bélgica', imagen: 'banderas/be.png' },
    { codigo: 'BZ', nombre: 'Belice', imagen: 'banderas/bz.png' },
    { codigo: 'BJ', nombre: 'Benín', imagen: 'banderas/bj.png' },
    { codigo: 'BM', nombre: 'Bermudas', imagen: 'banderas/bm.png' },
    { codigo: 'BY', nombre: 'Bielorrusia', imagen: 'banderas/by.png' },
    { codigo: 'BO', nombre: 'Bolivia', imagen: 'banderas/bo.png' },
    { codigo: 'BA', nombre: 'Bosnia y Herzegovina', imagen: 'banderas/ba.png' },
    { codigo: 'BW', nombre: 'Botsuana', imagen: 'banderas/bw.png' },
    { codigo: 'BR', nombre: 'Brasil', imagen: 'banderas/br.png' },
    { codigo: 'BN', nombre: 'Brunéi', imagen: 'banderas/bn.png' },
    { codigo: 'BG', nombre: 'Bulgaria', imagen: 'banderas/bg.png' },
    { codigo: 'BF', nombre: 'Burkina Faso', imagen: 'banderas/bf.png' },
    { codigo: 'BI', nombre: 'Burundi', imagen: 'banderas/bi.png' },
    { codigo: 'BT', nombre: 'Bután', imagen: 'banderas/bt.png' },
    { codigo: 'CV', nombre: 'Cabo Verde', imagen: 'banderas/cv.png' },
    { codigo: 'KH', nombre: 'Camboya', imagen: 'banderas/kh.png' },
    { codigo: 'CM', nombre: 'Camerún', imagen: 'banderas/cm.png' },
    { codigo: 'CA', nombre: 'Canadá', imagen: 'banderas/ca.png' },
    { codigo: 'BQ', nombre: 'Caribe Neerlandés', imagen: 'banderas/bq.png' },
    { codigo: 'QA', nombre: 'Catar', imagen: 'banderas/qa.png' },
    { codigo: 'TD', nombre: 'Chad', imagen: 'banderas/td.png' },
    { codigo: 'CL', nombre: 'Chile', imagen: 'banderas/cl.png' },
    { codigo: 'CN', nombre: 'China', imagen: 'banderas/cn.png' },
    { codigo: 'CY', nombre: 'Chipre', imagen: 'banderas/cy.png' },
    { codigo: 'VA', nombre: 'Ciudad del Vaticano', imagen: 'banderas/va.png' },
    { codigo: 'CO', nombre: 'Colombia', imagen: 'banderas/co.png' },
    { codigo: 'KM', nombre: 'Comoras', imagen: 'banderas/km.png' },
    { codigo: 'CG', nombre: 'Congo', imagen: 'banderas/cg.png' },
    { codigo: 'CD', nombre: 'Congo (Rep. Dem.)', imagen: 'banderas/cd.png' },
    { codigo: 'KP', nombre: 'Corea del Norte', imagen: 'banderas/kp.png' },
    { codigo: 'KR', nombre: 'Corea del Sur', imagen: 'banderas/kr.png' },
    { codigo: 'CI', nombre: 'Costa de Marfil', imagen: 'banderas/ci.png' },
    { codigo: 'CR', nombre: 'Costa Rica', imagen: 'banderas/cr.png' },
    { codigo: 'HR', nombre: 'Croacia', imagen: 'banderas/hr.png' },
    { codigo: 'CU', nombre: 'Cuba', imagen: 'banderas/cu.png' },
    { codigo: 'CW', nombre: 'Curazao', imagen: 'banderas/cw.png' },
    { codigo: 'DK', nombre: 'Dinamarca', imagen: 'banderas/dk.png' },
    { codigo: 'DJ', nombre: 'Yibuti', imagen: 'banderas/dj.png' },
    { codigo: 'DM', nombre: 'Dominica', imagen: 'banderas/dm.png' },
    { codigo: 'EC', nombre: 'Ecuador', imagen: 'banderas/ec.png' },
    { codigo: 'EG', nombre: 'Egipto', imagen: 'banderas/eg.png' },
    { codigo: 'SV', nombre: 'El Salvador', imagen: 'banderas/sv.png' },
    { codigo: 'AE', nombre: 'Emiratos Árabes Unidos', imagen: 'banderas/ae.png' },
    { codigo: 'ER', nombre: 'Eritrea', imagen: 'banderas/er.png' },
    { codigo: 'SI', nombre: 'Eslovenia', imagen: 'banderas/si.png' },
    { codigo: 'ES', nombre: 'España', imagen: 'banderas/es.png' },
    { codigo: 'US', nombre: 'Estados Unidos', imagen: 'banderas/us.png' },
    { codigo: 'EE', nombre: 'Estonia', imagen: 'banderas/ee.png' },
    { codigo: 'ET', nombre: 'Etiopía', imagen: 'banderas/et.png' },
    { codigo: 'PH', nombre: 'Filipinas', imagen: 'banderas/ph.png' },
    { codigo: 'FI', nombre: 'Finlandia', imagen: 'banderas/fi.png' },
    { codigo: 'FJ', nombre: 'Fiyi', imagen: 'banderas/fj.png' },
    { codigo: 'FR', nombre: 'Francia', imagen: 'banderas/fr.png' },
    { codigo: 'GA', nombre: 'Gabón', imagen: 'banderas/ga.png' },
    { codigo: 'GM', nombre: 'Gambia', imagen: 'banderas/gm.png' },
    { codigo: 'GE', nombre: 'Georgia', imagen: 'banderas/ge.png' },
    { codigo: 'GH', nombre: 'Ghana', imagen: 'banderas/gh.png' },
    { codigo: 'GI', nombre: 'Gibraltar', imagen: 'banderas/gi.png' },
    { codigo: 'GR', nombre: 'Grecia', imagen: 'banderas/gr.png' },
    { codigo: 'GD', nombre: 'Granada', imagen: 'banderas/gd.png' },
    { codigo: 'GL', nombre: 'Groenlandia', imagen: 'banderas/gl.png' },
    { codigo: 'GP', nombre: 'Guadalupe', imagen: 'banderas/gp.png' },
    { codigo: 'GU', nombre: 'Guam', imagen: 'banderas/gu.png' },
    { codigo: 'GT', nombre: 'Guatemala', imagen: 'banderas/gt.png' },
    { codigo: 'GF', nombre: 'Guayana Francesa', imagen: 'banderas/gf.png' },
    { codigo: 'GG', nombre: 'Guernsey', imagen: 'banderas/gg.png' },
    { codigo: 'GN', nombre: 'Guinea', imagen: 'banderas/gn.png' },
    { codigo: 'GQ', nombre: 'Guinea Ecuatorial', imagen: 'banderas/gq.png' },
    { codigo: 'GW', nombre: 'Guinea-Bisáu', imagen: 'banderas/gw.png' },
    { codigo: 'GY', nombre: 'Guyana', imagen: 'banderas/gy.png' },
    { codigo: 'HT', nombre: 'Haití', imagen: 'banderas/ht.png' },
    { codigo: 'HN', nombre: 'Honduras', imagen: 'banderas/hn.png' },
    { codigo: 'HK', nombre: 'Hong Kong', imagen: 'banderas/hk.png' },
    { codigo: 'HU', nombre: 'Hungría', imagen: 'banderas/hu.png' },
    { codigo: 'IN', nombre: 'India', imagen: 'banderas/in.png' },
    { codigo: 'ID', nombre: 'Indonesia', imagen: 'banderas/id.png' },
    { codigo: 'IQ', nombre: 'Irak', imagen: 'banderas/iq.png' },
    { codigo: 'IR', nombre: 'Irán', imagen: 'banderas/ir.png' },
    { codigo: 'IE', nombre: 'Irlanda', imagen: 'banderas/ie.png' },
    { codigo: 'IS', nombre: 'Islandia', imagen: 'banderas/is.png' },
    { codigo: 'IL', nombre: 'Israel', imagen: 'banderas/il.png' },
    { codigo: 'IT', nombre: 'Italia', imagen: 'banderas/it.png' },
    { codigo: 'JM', nombre: 'Jamaica', imagen: 'banderas/jm.png' },
    { codigo: 'JP', nombre: 'Japón', imagen: 'banderas/jp.png' },
    { codigo: 'JE', nombre: 'Jersey', imagen: 'banderas/je.png' },
    { codigo: 'JO', nombre: 'Jordania', imagen: 'banderas/jo.png' },
    { codigo: 'KZ', nombre: 'Kazajistán', imagen: 'banderas/kz.png' },
    { codigo: 'KE', nombre: 'Kenia', imagen: 'banderas/ke.png' },
    { codigo: 'KG', nombre: 'Kirguistán', imagen: 'banderas/kg.png' },
    { codigo: 'KI', nombre: 'Kiribati', imagen: 'banderas/ki.png' },
    { codigo: 'KW', nombre: 'Kuwait', imagen: 'banderas/kw.png' },
    { codigo: 'LA', nombre: 'Laos', imagen: 'banderas/la.png' },
    { codigo: 'LV', nombre: 'Letonia', imagen: 'banderas/lv.png' },
    { codigo: 'LB', nombre: 'Líbano', imagen: 'banderas/lb.png' },
    { codigo: 'LR', nombre: 'Liberia', imagen: 'banderas/lr.png' },
    { codigo: 'LY', nombre: 'Libia', imagen: 'banderas/ly.png' },
    { codigo: 'LI', nombre: 'Liechtenstein', imagen: 'banderas/li.png' },
    { codigo: 'LT', nombre: 'Lituania', imagen: 'banderas/lt.png' },
    { codigo: 'LU', nombre: 'Luxemburgo', imagen: 'banderas/lu.png' },
    { codigo: 'MO', nombre: 'Macao', imagen: 'banderas/mo.png' },
    { codigo: 'MK', nombre: 'Macedonia del Norte', imagen: 'banderas/mk.png' },
    { codigo: 'MG', nombre: 'Madagascar', imagen: 'banderas/mg.png' },
    { codigo: 'MY', nombre: 'Malasia', imagen: 'banderas/my.png' },
    { codigo: 'MW', nombre: 'Malawi', imagen: 'banderas/mw.png' },
    { codigo: 'MV', nombre: 'Maldivas', imagen: 'banderas/mv.png' },
    { codigo: 'ML', nombre: 'Malí', imagen: 'banderas/ml.png' },
    { codigo: 'MT', nombre: 'Malta', imagen: 'banderas/mt.png' },
    { codigo: 'MA', nombre: 'Marruecos', imagen: 'banderas/ma.png' },
    { codigo: 'MQ', nombre: 'Martinica', imagen: 'banderas/mq.png' },
    { codigo: 'MU', nombre: 'Mauricio', imagen: 'banderas/mu.png' },
    { codigo: 'MR', nombre: 'Mauritania', imagen: 'banderas/mr.png' },
    { codigo: 'YT', nombre: 'Mayotte', imagen: 'banderas/yt.png' },
    { codigo: 'MX', nombre: 'México', imagen: 'banderas/mx.png' },
    { codigo: 'FM', nombre: 'Micronesia', imagen: 'banderas/fm.png' },
    { codigo: 'MD', nombre: 'Moldavia', imagen: 'banderas/md.png' },
    { codigo: 'MC', nombre: 'Mónaco', imagen: 'banderas/mc.png' },
    { codigo: 'MN', nombre: 'Mongolia', imagen: 'banderas/mn.png' },
    { codigo: 'ME', nombre: 'Montenegro', imagen: 'banderas/me.png' },
    { codigo: 'MS', nombre: 'Montserrat', imagen: 'banderas/ms.png' },
    { codigo: 'MZ', nombre: 'Mozambique', imagen: 'banderas/mz.png' },
    { codigo: 'NA', nombre: 'Namibia', imagen: 'banderas/na.png' },
    { codigo: 'NR', nombre: 'Nauru', imagen: 'banderas/nr.png' },
    { codigo: 'NP', nombre: 'Nepal', imagen: 'banderas/np.png' },
    { codigo: 'NI', nombre: 'Nicaragua', imagen: 'banderas/ni.png' },
    { codigo: 'NE', nombre: 'Níger', imagen: 'banderas/ne.png' },
    { codigo: 'NG', nombre: 'Nigeria', imagen: 'banderas/ng.png' },
    { codigo: 'NU', nombre: 'Niue', imagen: 'banderas/nu.png' },
    { codigo: 'NF', nombre: 'Isla Norfolk', imagen: 'banderas/nf.png' },
    { codigo: 'NO', nombre: 'Noruega', imagen: 'banderas/no.png' },
    { codigo: 'NC', nombre: 'Nueva Caledonia', imagen: 'banderas/nc.png' },
    { codigo: 'NZ', nombre: 'Nueva Zelanda', imagen: 'banderas/nz.png' },
    { codigo: 'OM', nombre: 'Omán', imagen: 'banderas/om.png' },
    { codigo: 'NL', nombre: 'Países Bajos', imagen: 'banderas/nl.png' },
    { codigo: 'PK', nombre: 'Pakistán', imagen: 'banderas/pk.png' },
    { codigo: 'PW', nombre: 'Palaos', imagen: 'banderas/pw.png' },
    { codigo: 'PA', nombre: 'Panamá', imagen: 'banderas/pa.png' },
    { codigo: 'PG', nombre: 'Papúa Nueva Guinea', imagen: 'banderas/pg.png' },
    { codigo: 'PY', nombre: 'Paraguay', imagen: 'banderas/py.png' },
    { codigo: 'PE', nombre: 'Perú', imagen: 'banderas/pe.png' },
    { codigo: 'PN', nombre: 'Islas Pitcairn', imagen: 'banderas/pn.png' },
    { codigo: 'PL', nombre: 'Polonia', imagen: 'banderas/pl.png' },
    { codigo: 'PT', nombre: 'Portugal', imagen: 'banderas/pt.png' },
    { codigo: 'PR', nombre: 'Puerto Rico', imagen: 'banderas/pr.png' },
    { codigo: 'RE', nombre: 'Reunión', imagen: 'banderas/re.png' },
    { codigo: 'RO', nombre: 'Rumanía', imagen: 'banderas/ro.png' },
    { codigo: 'RU', nombre: 'Rusia', imagen: 'banderas/ru.png' },
    { codigo: 'RW', nombre: 'Ruanda', imagen: 'banderas/rw.png' },
    { codigo: 'BL', nombre: 'San Bartolomé', imagen: 'banderas/bl.png' },
    { codigo: 'SH', nombre: 'Santa Elena', imagen: 'banderas/sh.png' },
    { codigo: 'KN', nombre: 'San Cristóbal y Nieves', imagen: 'banderas/kn.png' },
    { codigo: 'LC', nombre: 'Santa Lucía', imagen: 'banderas/lc.png' },
    { codigo: 'MF', nombre: 'San Martín', imagen: 'banderas/mf.png' },
    { codigo: 'PM', nombre: 'San Pedro y Miquelón', imagen: 'banderas/pm.png' },
    { codigo: 'VC', nombre: 'San Vicente y las Granadinas', imagen: 'banderas/vc.png' },
    { codigo: 'WS', nombre: 'Samoa', imagen: 'banderas/ws.png' },
    { codigo: 'SM', nombre: 'San Marino', imagen: 'banderas/sm.png' },
    { codigo: 'ST', nombre: 'Santo Tomé y Príncipe', imagen: 'banderas/st.png' },
    { codigo: 'SN', nombre: 'Senegal', imagen: 'banderas/sn.png' },
    { codigo: 'RS', nombre: 'Serbia', imagen: 'banderas/rs.png' },
    { codigo: 'SC', nombre: 'Seychelles', imagen: 'banderas/sc.png' },
    { codigo: 'SL', nombre: 'Sierra Leona', imagen: 'banderas/sl.png' },
    { codigo: 'SG', nombre: 'Singapur', imagen: 'banderas/sg.png' },
    { codigo: 'SX', nombre: 'Sint Maarten', imagen: 'banderas/sx.png' },
    { codigo: 'SK', nombre: 'Eslovaquia', imagen: 'banderas/sk.png' },
    { codigo: 'SB', nombre: 'Islas Salomón', imagen: 'banderas/sb.png' },
    { codigo: 'SO', nombre: 'Somalia', imagen: 'banderas/so.png' },
    { codigo: 'SD', nombre: 'Sudán', imagen: 'banderas/sd.png' },
    { codigo: 'SS', nombre: 'Sudán del Sur', imagen: 'banderas/ss.png' },
    { codigo: 'SE', nombre: 'Suecia', imagen: 'banderas/se.png' },
    { codigo: 'CH', nombre: 'Suiza', imagen: 'banderas/ch.png' },
    { codigo: 'SR', nombre: 'Surinam', imagen: 'banderas/sr.png' },
    { codigo: 'SJ', nombre: 'Svalbard y Jan Mayen', imagen: 'banderas/sj.png' },
    { codigo: 'SZ', nombre: 'Suazilandia', imagen: 'banderas/sz.png' },
    { codigo: 'SY', nombre: 'Siria', imagen: 'banderas/sy.png' },
    { codigo: 'TJ', nombre: 'Tayikistán', imagen: 'banderas/tj.png' },
    { codigo: 'TZ', nombre: 'Tanzania', imagen: 'banderas/tz.png' },
    { codigo: 'TH', nombre: 'Tailandia', imagen: 'banderas/th.png' },
    { codigo: 'TL', nombre: 'Timor Oriental', imagen: 'banderas/tl.png' },
    { codigo: 'TG', nombre: 'Togo', imagen: 'banderas/tg.png' },
    { codigo: 'TK', nombre: 'Tokelau', imagen: 'banderas/tk.png' },
    { codigo: 'TO', nombre: 'Tonga', imagen: 'banderas/to.png' },
    { codigo: 'TT', nombre: 'Trinidad y Tobago', imagen: 'banderas/tt.png' },
    { codigo: 'TN', nombre: 'Túnez', imagen: 'banderas/tn.png' },
    { codigo: 'TM', nombre: 'Turkmenistán', imagen: 'banderas/tm.png' },
    { codigo: 'TR', nombre: 'Turquía', imagen: 'banderas/tr.png' },
    { codigo: 'TV', nombre: 'Tuvalu', imagen: 'banderas/tv.png' },
    { codigo: 'UA', nombre: 'Ucrania', imagen: 'banderas/ua.png' },
    { codigo: 'UG', nombre: 'Uganda', imagen: 'banderas/ug.png' },
    { codigo: 'UY', nombre: 'Uruguay', imagen: 'banderas/uy.png' },
    { codigo: 'UZ', nombre: 'Uzbekistán', imagen: 'banderas/uz.png' },
    { codigo: 'VU', nombre: 'Vanuatu', imagen: 'banderas/vu.png' },
    { codigo: 'VE', nombre: 'Venezuela', imagen: 'banderas/ve.png' },
    { codigo: 'VN', nombre: 'Vietnam', imagen: 'banderas/vn.png' },
    { codigo: 'WF', nombre: 'Wallis y Futuna', imagen: 'banderas/wf.png' },
    { codigo: 'YE', nombre: 'Yemen', imagen: 'banderas/ye.png' },
    { codigo: 'ZM', nombre: 'Zambia', imagen: 'banderas/zm.png' },
    { codigo: 'ZW', nombre: 'Zimbabue', imagen: 'banderas/zw.png' }
];

// Variables globales
let seleccionando = false;
let puntos = 0;
let paisCorrecto = null;
let opcionesActuales = [];

// ==================== NAVEGACIÓN ====================

function irALetras() {
    document.getElementById('menuPrincipal').classList.add('ocultar');
    document.getElementById('pantallaLetras').classList.add('mostrar');
}

function irABanderas() {
    document.getElementById('menuPrincipal').classList.add('ocultar');
    document.getElementById('pantallaBanderas').classList.add('mostrar');
}

function irAAdivinar() {
    document.getElementById('menuPrincipal').classList.add('ocultar');
    document.getElementById('pantallaAdivinar').classList.add('mostrar');
    puntos = 0;
    document.getElementById('puntos').textContent = puntos;
    generarPregunta();
}

function volverMenu() {
    document.getElementById('menuPrincipal').classList.remove('ocultar');
    document.getElementById('pantallaLetras').classList.remove('mostrar');
    document.getElementById('pantallaBanderas').classList.remove('mostrar');
    document.getElementById('pantallaAdivinar').classList.remove('mostrar');
    
    // Reset displays
    document.getElementById('letraDisplay').textContent = '?';
    document.getElementById('banderaDisplay').src = 'banderas/ar.png';
}

// ==================== FUNCIONES DE LETRAS ====================

function getLetraAleatoria() {
    return abecedario[Math.floor(Math.random() * abecedario.length)];
}

function crearParticulas(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        const angulo = (Math.PI * 2 * i) / 20;
        const distancia = 100 + Math.random() * 50;
        particula.style.setProperty('--x', Math.cos(angulo) * distancia + 'px');
        particula.style.setProperty('--y', Math.sin(angulo) * distancia + 'px');
        particula.style.left = '50%';
        particula.style.top = '50%';
        contenedor.appendChild(particula);
    }
}

function seleccionarLetra() {
    if (seleccionando) return;
    
    const display = document.getElementById('letraDisplay');
    const boton = document.getElementById('botonSeleccionarLetra');
    
    seleccionando = true;
    boton.disabled = true;
    display.classList.remove('resultado');
    display.classList.add('seleccionando');
    
    let contador = 0;
    const intervalo = setInterval(() => {
        display.textContent = getLetraAleatoria();
        contador++;
        
        if (contador >= 20) {
            clearInterval(intervalo);
            display.classList.remove('seleccionando');
            display.classList.add('resultado');
            crearParticulas('particulasLetras');
            
            setTimeout(() => {
                seleccionando = false;
                boton.disabled = false;
                display.classList.remove('resultado');
            }, 1000);
        }
    }, 50);
}

// ==================== FUNCIONES DE BANDERAS ====================

function getPaisAleatorio() {
    return paises[Math.floor(Math.random() * paises.length)];
}

function seleccionarBandera() {
    if (seleccionando) return;
    
    const display = document.getElementById('banderaDisplay');
    const boton = document.getElementById('botonSeleccionarBandera');
    
    seleccionando = true;
    boton.disabled = true;
    display.classList.remove('resultado');
    display.classList.add('seleccionando');
    
    let contador = 0;
    const intervalo = setInterval(() => {
        const paisTemp = getPaisAleatorio();
        display.src = paisTemp.imagen;
        contador++;
        
        if (contador >= 20) {
            clearInterval(intervalo);
            const paisFinal = getPaisAleatorio();
            display.src = paisFinal.imagen;
            
            display.classList.remove('seleccionando');
            display.classList.add('resultado');
            crearParticulas('particulasBanderas');
            
            setTimeout(() => {
                seleccionando = false;
                boton.disabled = false;
                display.classList.remove('resultado');
            }, 1000);
        }
    }, 50);
}

// ==================== FUNCIONES DE ADIVINAR ====================

function generarPregunta() {
    // Limpiar estado anterior
    document.getElementById('resultadoMensaje').textContent = '';
    document.getElementById('botonSiguiente').style.display = 'none';
    
    // Seleccionar país correcto
    paisCorrecto = getPaisAleatorio();
    document.getElementById('banderaAdivinar').src = paisCorrecto.imagen;
    
    // Generar opciones (2 incorrectas + 1 correcta)
    opcionesActuales = [paisCorrecto];
    
    while (opcionesActuales.length < 3) {
        const paisAleatorio = getPaisAleatorio();
        // Evitar duplicados
        if (!opcionesActuales.find(p => p.codigo === paisAleatorio.codigo)) {
            opcionesActuales.push(paisAleatorio);
        }
    }
    
    // Mezclar opciones
    opcionesActuales.sort(() => Math.random() - 0.5);
    
    // Mostrar opciones en botones
    const botones = document.querySelectorAll('.opcion-respuesta');
    botones.forEach((boton, index) => {
        boton.textContent = opcionesActuales[index].nombre;
        boton.disabled = false;
        boton.classList.remove('opcion-correcta', 'opcion-incorrecta');
    });
}

function verificarRespuesta(indice) {
    const paisSeleccionado = opcionesActuales[indice];
    const botones = document.querySelectorAll('.opcion-respuesta');
    const mensajeElement = document.getElementById('resultadoMensaje');
    
    // Deshabilitar todos los botones
    botones.forEach(btn => btn.disabled = true);
    
    // Verificar si es correcto
    if (paisSeleccionado.codigo === paisCorrecto.codigo) {
        // Respuesta CORRECTA
        botones[indice].classList.add('opcion-correcta');
        mensajeElement.textContent = '✓ ¡Correcto!';
        mensajeElement.style.color = '#4CAF50';
        puntos++;
        document.getElementById('puntos').textContent = puntos;
    } else {
        // Respuesta INCORRECTA
        botones[indice].classList.add('opcion-incorrecta');
        mensajeElement.textContent = '✗ Incorrecto. Era: ' + paisCorrecto.nombre;
        mensajeElement.style.color = '#f44336';
        
        // Mostrar también la opción correcta
        botones.forEach((boton, idx) => {
            if (opcionesActuales[idx].codigo === paisCorrecto.codigo) {
                boton.classList.add('opcion-correcta');
            }
        });
    }
    
    // Mostrar botón de siguiente
    document.getElementById('botonSiguiente').style.display = 'inline-block';
}

function siguienteBandera() {
    generarPregunta();
}