import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.taste.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.taste.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Palate',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x17EdC999C310e622F9623Dc8A5baa9EC1dDa6956',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x9b989a7b8963f4b08ec094710e2966fb3c7f6c43',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/TasteFinance/",
      },
      {
        label: "Docs",
        href: "https://docs.taste.finance/",
      },
      {
        label: "Blog",
        href: "https://tastefinance.medium.com/",
      },
    ],
  },
]

export default config
