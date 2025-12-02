```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lucas Gonzalo Hernández - Portafolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Courier New', monospace;
      background: #0f1419;
      color: #b8c5d0;
      overflow-x: hidden;
      position: relative;
    }

    /* Fondo con grid sutil - Capa 1 */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(120, 140, 160, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(120, 140, 160, 0.04) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
      z-index: 0;
    }

    /* Efecto Nebulosa - Capa 2 */
    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(255, 102, 0, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(138, 43, 226, 0.12) 0%, transparent 50%);
      background-size: 300px 300px, 250px 250px, 200px 200px;
      filter: blur(40px);
      pointer-events: none;
      z-index: 0;
      animation: nebula-float 8s ease-in-out infinite alternate;
    }

    @keyframes nebula-float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(20px, -20px); }
    }

    /* Línea de escaneo muy sutil */
    .scan-line {
      position: fixed;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(120, 140, 160, 0.1), transparent);
      animation: scan 12s linear infinite;
      pointer-events: none;
      z-index: 1;
      opacity: 0.4;
    }

    @keyframes scan {
      0% { top: 0; }
      100% { top: 100%; }
    }

    /* Elementos HUD minimalistas */
    .hud-element {
      position: fixed;
      border: 1px solid rgba(120, 140, 160, 0.15);
      pointer-events: none;
      z-index: 1;
    }

    .hud-corner-tl {
      top: 30px;
      left: 30px;
      width: 40px;
      height: 40px;
      border-right: none;
      border-bottom: none;
    }

    .hud-corner-tr {
      top: 30px;
      right: 30px;
      width: 40px;
      height: 40px;
      border-left: none;
      border-bottom: none;
    }

    .hud-corner-bl {
      bottom: 30px;
      left: 30px;
      width: 40px;
      height: 40px;
      border-right: none;
      border-top: none;
    }

    .hud-corner-br {
      bottom: 30px;
      right: 30px;
      width: 40px;
      height: 40px;
      border-left: none;
      border-top: none;
    }

    /* Contenedor principal */
    .container {
      position: relative;
      z-index: 2;
    }

    /* Header minimalista */
    header {
      padding: 40px 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(120, 140, 160, 0.1);
      position: relative;
    }

    .menu-icon {
      width: 45px;
      height: 45px;
      border: 1px solid rgba(184, 197, 208, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 7px;
      padding: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .menu-icon:hover {
      background: rgba(184, 197, 208, 0.05);
      border-color: rgba(184, 197, 208, 0.6);
    }

    .menu-icon span {
      width: 100%;
      height: 1px;
      background: #b8c5d0;
    }

    /* Hero Section neutro y elegante */
    .hero {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 80px;
      align-items: center;
      max-width: 1400px;
      margin: 120px auto;
      padding: 0 80px;
      position: relative;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(120, 140, 160, 0.2), transparent);
    }

    .hero-text {
      position: relative;
    }

    .hero-bracket {
      color: rgba(184, 197, 208, 0.3);
      font-size: 40px;
      line-height: 0.5;
    }

    .hero-text h1 {
      font-size: 44px;
      color: #e6edf3;
      margin: 25px 0;
      font-weight: 300;
      letter-spacing: 3px;
      position: relative;
    }

    .hero-text h1::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 50%;
      height: 1px;
      background: linear-gradient(90deg, rgba(184, 197, 208, 0.4), transparent);
    }

    .hero-text h2 {
      font-size: 16px;
      color: #788c9c;
      margin-bottom: 50px;
      letter-spacing: 4px;
      font-weight: 300;
    }

    .hero-quote {
      color: #6a7d8c;
      font-style: italic;
      line-height: 1.9;
      font-size: 13px;
      border-left: 1px solid rgba(120, 140, 160, 0.3);
      padding-left: 25px;
      position: relative;
      font-weight: 300;
    }

    /* Panel estilo AVANCE */
    .hero-panel {
      position: relative;
      height: 380px;
      background: linear-gradient(135deg, #151b23 0%, #1a2332 100%);
      border: 1px solid rgba(184, 197, 208, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .hero-panel:hover {
      border-color: rgba(184, 197, 208, 0.3);
      box-shadow: 0 0 40px rgba(184, 197, 208, 0.05);
    }

    .hero-panel::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(184, 197, 208, 0.03), transparent);
      animation: shimmer 4s infinite;
    }

    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    /* Esquinas decorativas como AVANCE */
    .hero-panel::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid transparent;
      pointer-events: none;
    }

    .corner-accent {
      position: absolute;
      width: 15px;
      height: 15px;
      border: 1px solid rgba(184, 197, 208, 0.3);
    }

    .corner-accent.tl {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }

    .corner-accent.tr {
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
    }

    .corner-accent.bl {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
    }

    .corner-accent.br {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }

    .hero-panel-content {
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .hero-panel-badge {
      background: rgba(230, 237, 243, 0.95);
      color: #0f1419;
      padding: 15px 35px;
      font-size: 18px;
      font-weight: 400;
      border: 1px solid rgba(15, 20, 25, 0.1);
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
      margin-bottom: 35px;
      display: inline-block;
      letter-spacing: 1px;
    }

    .hero-panel-icon {
      font-size: 70px;
      opacity: 0.8;
      filter: grayscale(0.3);
    }

    /* Títulos de sección estilo neutro */
    .section-title {
      text-align: center;
      font-size: 32px;
      color: #e6edf3;
      margin: 120px 0 70px;
      letter-spacing: 8px;
      position: relative;
      text-transform: uppercase;
      font-weight: 300;
    }

    .section-title::before,
    .section-title::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 100px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(120, 140, 160, 0.3));
    }

    .section-title::before {
      left: 50%;
      transform: translateX(-220px);
    }

    .section-title::after {
      right: 50%;
      transform: translateX(220px) scaleX(-1);
    }

    /* Tarjetas minimalistas */
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 40px;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 80px;
    }

    .card {
      background: rgba(21, 27, 35, 0.5);
      border: 1px solid rgba(120, 140, 160, 0.15);
      padding: 40px;
      transition: all 0.4s ease;
      position: relative;
      backdrop-filter: blur(10px);
    }

    .card::before,
    .card::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border: 1px solid rgba(120, 140, 160, 0.2);
      transition: all 0.3s ease;
    }

    .card::before {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }

    .card::after {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }

    .card:hover {
      background: rgba(21, 27, 35, 0.8);
      border-color: rgba(184, 197, 208, 0.3);
      transform: translateY(-5px);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .card:hover::before,
    .card:hover::after {
      border-color: rgba(184, 197, 208, 0.4);
    }

    .card h3 {
      color: #e6edf3;
      font-size: 18px;
      margin-bottom: 25px;
      text-align: left;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(120, 140, 160, 0.15);
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 300;
    }

    .card p {
      color: #8a9ba8;
      line-height: 1.8;
      font-size: 13px;
      margin-bottom: 15px;
      font-weight: 300;
    }

    /* Grid de tecnologías */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 80px;
    }

    .tech-card {
      background: rgba(21, 27, 35, 0.4);
      border: 1px solid rgba(120, 140, 160, 0.15);
      padding: 40px;
      text-align: center;
      position: relative;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .tech-card:hover {
      border-color: rgba(184, 197, 208, 0.3);
      background: rgba(21, 27, 35, 0.6);
    }

    .tech-card::before,
    .tech-card::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border: 1px solid rgba(120, 140, 160, 0.2);
    }

    .tech-card::before {
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
    }

    .tech-card::after {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
    }

    .tech-card h3 {
      color: #e6edf3;
      margin-bottom: 30px;
      padding: 8px 20px;
      border: 1px solid rgba(120, 140, 160, 0.2);
      display: inline-block;
      font-size: 14px;
      letter-spacing: 3px;
      font-weight: 300;
    }

    .tech-icons {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 25px;
    }

    .tech-icon {
      width: 65px;
      height: 65px;
      background: rgba(30, 40, 50, 0.6);
      border: 1px solid rgba(120, 140, 160, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 11px;
      transition: all 0.3s ease;
      position: relative;
    }

    .tech-icon:hover {
      transform: translateY(-5px);
      border-color: rgba(184, 197, 208, 0.4);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    }

    .tech-icon.js { background: rgba(247, 223, 30, 0.15); color: #f7df1e; border-color: rgba(247, 223, 30, 0.3); }
    .tech-icon.css { background: rgba(21, 114, 182, 0.15); color: #1572b6; border-color: rgba(21, 114, 182, 0.3); }
    .tech-icon.html { background: rgba(227, 79, 38, 0.15); color: #e34f26; border-color: rgba(227, 79, 38, 0.3); }
    .tech-icon.python { background: rgba(55, 118, 171, 0.15); color: #3776ab; border-color: rgba(55, 118, 171, 0.3); }
    .tech-icon.java { background: rgba(0, 115, 150, 0.15); color: #007396; border-color: rgba(0, 115, 150, 0.3); }
    .tech-icon.db { background: rgba(77, 179, 61, 0.15); color: #4db33d; border-color: rgba(77, 179, 61, 0.3); }
    .tech-icon.node { background: rgba(104, 160, 99, 0.15); color: #68a063; border-color: rgba(104, 160, 99, 0.3); }
    .tech-icon.git { background: rgba(240, 80, 50, 0.15); color: #f05032; border-color: rgba(240, 80, 50, 0.3); }

    /* Sección de contacto */
    .contact-section {
      display: flex;
      justify-content: space-around;
      align-items: center;
      max-width: 1400px;
      margin: 120px auto;
      padding: 70px;
      position: relative;
      background: rgba(21, 27, 35, 0.3);
      border: 1px solid rgba(120, 140, 160, 0.15);
      backdrop-filter: blur(10px);
    }

    .contact-section::before,
    .contact-section::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(120, 140, 160, 0.25);
    }

    .contact-section::before {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }

    .contact-section::after {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }

    .contact-title {
      font-size: 32px;
      color: #e6edf3;
      border: 1px solid rgba(120, 140, 160, 0.2);
      padding: 20px 60px;
      display: inline-block;
      letter-spacing: 6px;
      background: rgba(21, 27, 35, 0.5);
      font-weight: 300;
    }

    .contact-icon {
      width: 100px;
      height: 100px;
      background: rgba(230, 237, 243, 0.1);
      border: 1px solid rgba(184, 197, 208, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 30px;
    }

    .contact-icon:hover {
      background: rgba(230, 237, 243, 0.15);
      border-color: rgba(184, 197, 208, 0.5);
      transform: scale(1.05);
    }

    .dragon {
      font-size: 120px;
      animation: float 4s ease-in-out infinite;
      opacity: 0.7;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 60px;
      color: #4a5a6a;
      border-top: 1px solid rgba(120, 140, 160, 0.1);
      margin-top: 120px;
      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 300;
    }

    footer p:last-child {
      margin-top: 15px;
      font-size: 10px;
      color: #788c9c;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero {
        grid-template-columns: 1fr;
        padding: 0 40px;
      }

      .cards-container,
      .tech-grid {
        grid-template-columns: 1fr;
        padding: 0 40px;
      }

      .contact-section {
        flex-direction: column;
        gap: 50px;
      }

      .section-title::before,
      .section-title::after {
        display: none;
      }
    }

    @media (max-width: 768px) {
      header {
        padding: 30px 40px;
      }

      .hero-text h1 {
        font-size: 32px;
      }

      .section-title {
        font-size: 24px;
        letter-spacing: 4px;
      }

      .hud-corner-tl,
      .hud-corner-tr,
      .hud-corner-bl,
      .hud-corner-br {
        display: none;
      }
    }
  </style>
</head>
<body>
  <!-- Línea de escaneo sutil -->
  <div class="scan-line"></div>

  <!-- Elementos HUD minimalistas -->
  <div class="hud-element hud-corner-tl"></div>
  <div class="hud-element hud-corner-tr"></div>
  <div class="hud-element hud-corner-bl"></div>
  <div class="hud-element hud-corner-br"></div>

  <div class="container">
    <!-- Header -->
    <header>
      <div style="color: #788c9c; font-size: 11px; letter-spacing: 2px; font-weight: 300;">SYSTEM</div>
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <div class="hero-bracket">&lt;</div>
        <h1>LUCAS GONZALO HERNÁNDEZ</h1>
        <h2>&lt;DESARROLLADOR JUNIOR&gt;</h2>
        <div class="hero-bracket">&gt;</div>
        <div class="hero-quote">
          <p>"La vulgar es el consumo, lo inverosímil, el sueño. La humanidad ronca, pero el artista está en la obligación de hacerla soñar o no es artista"</p>
        </div>
      </div>

      <div class="hero-panel">
        <div class="corner-accent tl"></div>
        <div class="corner-accent tr"></div>
        <div class="corner-accent bl"></div>
        <div class="corner-accent br"></div>
        <div class="hero-panel-content">
          <div class="hero-panel-badge">CSS is my passion</div>
          <div class="hero-panel-icon">🐱</div>
        </div>
      </div>
    </section>

    <!-- Sobre mí -->
    <h2 class="section-title">Sobre mi</h2>
    
    <!-- Manifiesto principal -->
    <div style="max-width: 900px; margin: 0 auto 80px; padding: 0 80px;">
      <div style="background: rgba(21, 27, 35, 0.6); border: 1px solid rgba(120, 140, 160, 0.2); padding: 50px; backdrop-filter: blur(10px); position: relative;">
        <div style="position: absolute; top: 0; left: 0; width: 15px; height: 15px; border-top: 1px solid rgba(184, 197, 208, 0.3); border-left: 1px solid rgba(184, 197, 208, 0.3);"></div>
        <div style="position: absolute; top: 0; right: 0; width: 15px; height: 15px; border-top: 1px solid rgba(184, 197, 208, 0.3); border-right: 1px solid rgba(184, 197, 208, 0.3);"></div>
        <div style="position: absolute; bottom: 0; left: 0; width: 15px; height: 15px; border-bottom: 1px solid rgba(184, 197, 208, 0.3); border-left: 1px solid rgba(184, 197, 208, 0.3);"></div>
        <div style="position: absolute; bottom: 0; right: 0; width: 15px; height: 15px; border-bottom: 1px solid rgba(184, 197, 208, 0.3); border-right: 1px solid rgba(184, 197, 208, 0.3);"></div>
        
        <p style="color: #e6edf3; font-size: 18px; line-height: 2; margin-bottom: 30px; text-align: center; font-weight: 300;">
          Soy un <span style="color: #00d4ff;">arquitecto del pensamiento lógico</span>. No diseño soluciones para que simplemente funcionen: las construyo para que tengan <span style="color: #00d4ff;">sentido, estructura y trazabilidad</span>.
        </p>
        
        <p style="color: #8a9ba8; font-size: 15px; line-height: 1.9; text-align: center; font-weight: 300; font-style: italic; border-top: 1px solid rgba(120, 140, 160, 0.15); padding-top: 30px;">
          "La creatividad como estructura transformada"
        </p>
      </div>
    </div>

    <div class="cards-container">
      <div class="card">
        <h3>Cómo pienso</h3>
        <p><strong style="color: #00d4ff;">Modularidad conceptual:</strong> Abordo los problemas como sistemas interconectados, separando responsabilidades y buscando patrones replicables.</p>
        <p><strong style="color: #00d4ff;">Aprendizaje reconstructivo:</strong> Aprendo desde el error, descomponiendo y reconstruyendo ideas con método y paciencia.</p>
        <p><strong style="color: #00d4ff;">Comparación de paradigmas:</strong> Me apasiona entender el porqué detrás de cada solución, explorando alternativas y conectando ideas entre lenguajes y enfoques.</p>
      </div>

      <div class="card">
        <h3>Cómo diseño</h3>
        <p><strong style="color: #00d4ff;">Claridad como principio:</strong> Priorizo la semántica, la legibilidad y la intención en cada línea de código.</p>
        <p><strong style="color: #00d4ff;">Autonomía con trazabilidad:</strong> Cada decisión técnica debe poder auditarse, replicarse y justificarse.</p>
        <p><strong style="color: #00d4ff;">Estética funcional:</strong> Busco belleza en la estructura, elegancia en la lógica y armonía en la semántica.</p>
      </div>

      <div class="card">
        <h3>Qué me mueve</h3>
        <p>Celebro cada avance técnico como un logro. Disfruto el aprendizaje guiado, la validación lógica y el diseño que respira propósito.</p>
        <p>Creo en una <strong style="color: #00d4ff;">lógica que respira</strong>, en una <strong style="color: #00d4ff;">estructura que se transforma</strong>, y en una <strong style="color: #00d4ff;">creatividad que piensa</strong>.</p>
        <p>Mi trabajo no es solo técnico: es una forma de pensamiento.</p>
      </div>
    </div>

    <!-- Formación académica -->
    <div style="max-width: 1400px; margin: 60px auto 0; padding: 0 80px;">
      <div style="background: rgba(21, 27, 35, 0.3); border: 1px solid rgba(120, 140, 160, 0.1); padding: 30px; backdrop-filter: blur(10px);">
        <h4 style="color: #e6edf3; font-size: 14px; letter-spacing: 2px; margin-bottom: 20px; font-weight: 300;">FORMACIÓN</h4>
        <p style="color: #8a9ba8; font-size: 13px; line-height: 1.8; font-weight: 300;">
          → Tecnicatura Universitaria en Programación — UTN (Universidad Tecnológica Nacional)<br>
          → Desarrollador Web Full Stack — Digital House<br>
          → Fundamentos permanentes — Plan de aprendizaje continuo
        </p>
      </div>
    </div>

    <!-- Tecnologías -->
    <h2 class="section-title">Tecnologías</h2>
    
    <div class="tech-grid">
      <div class="tech-card">
        <h3>FRONTEND</h3>
        <div class="tech-icons">
          <div class="tech-icon js">JS</div>
          <div class="tech-icon css">CSS</div>
          <div class="tech-icon html">HTML</div>
        </div>
      </div>

      <div class="tech-card">
        <h3>LENGUAJES</h3>
        <div class="tech-icons">
          <div class="tech-icon python">Python</div>
          <div class="tech-icon java">Java</div>
        </div>
      </div>

      <div class="tech-card">
        <h3>ESTRUCTURAL</h3>
        <div class="tech-icons">
          <div class="tech-icon db">DB</div>
          <div class="tech-icon node">Node</div>
        </div>
      </div>

      <div class="tech-card">
        <h3>DATOS</h3>
        <div class="tech-icons">
          <div class="tech-icon git">Git</div>
          <div class="tech-icon" style="background: rgba(66, 133, 244, 0.15); color: #4285f4; border-color: rgba(66, 133, 244, 0.3);">APIs</div>
        </div>
      </div>
    </div>

    <!-- Contacto -->
    <div class="contact-section">
      <div>
        <h2 class="contact-title">CONTACTO</h2>
        <div class="contact-icon">✉️</div>
      </div>
      
      <div class="dragon">🐉</div>
    </div>

    <!-- Footer -->
    <footer>
      <p>© 2025 PORTAFOLIO LUCAS GONZALO HERNÁNDEZ</p>
      <p>INSPIRED BY SIDONIA NO KISHI</p>
    </footer>
  </div>
</body>
</html>
```