// ═══════════════════════════════════════════════════════
//  config.js  —  Ajusta estos valores si cambian
// ═══════════════════════════════════════════════════════
const CONFIG = {
  participante: "Jean Pardo",
  institucion:  "GDR",
  cedula:       "1900606540",
  torneo:       "FIFA World Cup 2026",
  // API gratuita TheSportsDB — no requiere registro ni clave
  apiUrl: "https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4429&s=2026",
  // Intervalo de auto-refresh en milisegundos (3 min = 180000)
  refreshInterval: 180000,
  // Puntuación
  ptsExacto: 3,
  ptsSigno:  1,
  ptsFallo:  0,
};
