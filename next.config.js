module.exports = {
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/institucional': { page: '/menu/institucional' },
        '/administrativo': { page: '/menu/administrativo' },
        '/fale-conosco': { page: '/menu/fale-conosco' },
        '/judicial': { page: '/menu/judicial' },
        '/planejamentoestrategico': { page: '/menu/planejamentoestrategico' },
        '/precatorios': { page: '/menu/precatorios' },
        '/noticias': { page: '/noticias' },
      }
    },
  }