import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMocks from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
  const mock = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMocks,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighligth: highlightMocks,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighligth: highlightMocks
  }

  return {
    props: mock
  }
}
