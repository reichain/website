import classNames from 'classnames'
import { useCallback, useState } from 'react'
import Particles from 'react-tsparticles'
import type { Container } from 'tsparticles'
import './styles.scss'

const LIST = [
    {
        imageSrc: './images/ecosystem/list/aleswap.png',
        title: 'AleSwap',
        description:
            'Every coin can dine. Redeem craft beer on Rei Chain. Spend your Coin with our beloved Partners.',
        link: 'https://rei.aleswap.finance/#/redeem',
        tagList: ['DApp'],
    },
    {
        imageSrc: './images/ecosystem/list/ryoii.png',
        title: 'Ryoii',
        description:
            'Platform that offers token rewards to users for high quality restaurant review.',
        link: 'https://ryoii.io/',
        tagList: ['DApp', 'Wallet', 'NFT'],
    },
    {
        imageSrc: './images/ecosystem/list/payd.svg',
        title: 'PayD',
        description:
            'Cryptocurrency Payment Processing for Business, to accept cryptocurrency on both online and offline platform.',
        link: 'https://www.paydprotocol.finance/',
        tagList: ['DApp', 'Wallet'],
    },
    {
        imageSrc: './images/ecosystem/list/laika.svg',
        title: 'LAIKA',
        description:
            'We help you make requests to smart contracts without a single line of code.',
        link: 'https://getlaika.app/',
        tagList: ['DApp', 'Tooling'],
    },
    {
        imageSrc: './images/ecosystem/list/speedboat.png',
        title: 'Speedboat',
        description:
            'World`s Finest NFT Generator. Metaverse Infrastructure Platform.',
        link: 'https://rei.speedboat.studio/',
        tagList: ['DApp', 'NFT'],
    },
    {
        imageSrc: './images/ecosystem/list/foodcourt.svg',
        title: 'Foodcourt',
        description: '1# Innovation of Bridged yield farming on REI.',
        link: 'https://rei.foodcourt.finance/',
        tagList: ['DApp', 'DEX'],
    },
    {
        imageSrc: './images/ecosystem/list/kururu.svg',
        title: 'Kururu',
        description:
            'kururu allows you to easily manage your tokens such as ERC20, NFT, or liquidity tokens across our services.',
        link: 'https://kururu.finance/?chainId=55555',
        tagList: ['DApp', 'Tooling'],
    },
    {
        imageSrc: './images/ecosystem/list/kuma.svg',
        title: 'KUMA',
        description:
            'Cross-chain Stable coin peg by multiple chains stable coins.',
        link: 'https://kururu.finance/kuma?chainId=55555#redeem',
        tagList: ['Stablecoin'],
    },
    {
        imageSrc: './images/ecosystem/list/reamverse.png',
        title: 'Reamverse',
        description: 'Crowd Driven GameFi sponsored by KillSwitch',
        link: 'https://alpha.reamverse.io/',
        tagList: ['DApp', 'NFT', 'Game'],
    },
    {
        imageSrc: './images/ecosystem/list/loremboard.png',
        title: 'Loremboard',
        description: 'Multichain portfolio, the investment oracle. ',
        link: 'https://loremboard.finance/',
        tagList: ['DApp', 'Visualizer'],
    },
    {
        imageSrc: './images/ecosystem/list/inspex.png',
        title: 'Inspex',
        description:
            'Cybersecurity professional service, specialized in blockchain and smart contract audit.',
        link: 'https://inspex.co/',
        tagList: ['Auditor'],
    },
    {
        imageSrc: './images/ecosystem/list/northbridge.svg',
        title: 'NorthBridge',
        description:
            'A system where farmers transfer through a Bridge similar to an original chain.',
        link: 'https://northbridge.link/',
        tagList: ['DApp', 'Bridge'],
    },
    {
        imageSrc: './images/ecosystem/list/dechess.png',
        title: 'Dechess',
        description: 'NFT Chesswar Game',
        link: null,
        tagList: ['DApp', 'NFT', 'Game'],
    },
    {
        imageSrc: './images/ecosystem/list/dicert.png',
        title: 'diCERT',
        description: 'Sweetly Reliably NFT Certificates.',
        link: 'https://www.dicert.co/',
        tagList: ['DApp', 'NFT'],
    },
    {
        imageSrc: './images/ecosystem/list/aurumdefi.png',
        title: 'AurumDefi',
        description: (
            <>
                Lending Platform {'\n'}Coming Soon on Mainnet.{'\n'}(
                <span className="_cl-negative-500">
                    Now Available on Rei Testnet
                </span>
                )
            </>
        ),
        link: 'https://www.aurumdefi.com/',
        tagList: ['DApp', 'Lending'],
    },
    {
        imageSrc: './images/ecosystem/list/arken.svg',
        title: 'Arken',
        description: 'Discover your Best Swap on any coins with Charts.',
        link: 'https://arken.finance/',
        tagList: ['DApp', 'DEX'],
    },
    {
        imageSrc: './images/ecosystem/list/deeplogo.png',
        title: 'Deeplogo',
        description:
            'Play your favourite games and earn token. お気に入りのゲームをプレイしてトークンを獲得しましょう',
        isComingSoon: new Date() < new Date('2022-04-24'),
        link: 'https://deeplogo.co/',
        tagList: ['DApp', 'Game', 'E-Sport'],
    },
    {
        imageSrc: './images/ecosystem/list/acckenn.svg',
        title: 'Acckenn',
        description:
            'We provide crypto tax and accounting services by professional accountants who understand crypto and blockchain technology. To simplify crypto tax and accounting compliance.',
        isComingSoon: true,
        link: 'https://acckenn.com/',
        tagList: ['DApp', 'Accounting'],
    },
    {
        imageSrc: './images/ecosystem/list/nftgt.png',
        title: 'NFTGT',
        description:
            'A unique nft marketplace with advanced market functionality. NFT assets can be tokenized, fractionalized, and collaterized, creating new investment opportunities.',
        isComingSoon: true,
        link: 'https://nftgt.net',
        tagList: ['DApp', 'NFT'],
    },
    {
        imageSrc: './images/ecosystem/list/metaschool.png',
        title: 'MetaSchool',
        description: 'Make education more fun with VR and Blockchain.',
        isComingSoon: true,
        link: 'http://metaschool.town',
        tagList: ['DApp', 'Education', 'VR', 'Metaverse'],
    },
    {
        imageSrc: './images/ecosystem/list/buddybeater.jpg',
        title: 'Buddy Beater',
        description: (
            <>
                Buddy Beater's{' '}
                <span className="_cl-negative-500">NFTs on Rei Chain</span>{' '}
                (Soon on Speedboat NFT Centralize Bridge)
            </>
        ),
        isComingSoon: true,
        link: 'https://buddybeater.io/',
        tagList: ['DApp', 'NFT', 'Game'],
    },
    {
        imageSrc: './images/ecosystem/list/avantis.svg',
        title: 'Avantis Protocol',
        description:
            'DeFi multi-asset trading platform. Invest in global assets via a single state-of-the-art investment platform',
        isComingSoon: true,
        link: 'https://avantis.finance/',
        tagList: ['DApp', 'Real-Asset'],
    },
].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

const TAG_LIST = (
    [
        ...LIST.reduce(
            (memo, item) => new Set([...item.tagList, ...memo]),
            new Set()
        ),
    ] as string[]
).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

export const Home = () => {
    const [currentTag, setCurrentTag] = useState<string | null>(null)
    const [currentSearch, setCurrentSearch] = useState<string>('')
    const handleClickTag = useCallback((tag) => {
        setCurrentTag((prev) => (prev === tag ? null : tag))
    }, [])
    const handleChangeSearch = useCallback((element) => {
        setCurrentSearch(element.target.value.trim())
    }, [])
    const onLoadedParticles = useCallback(async (container: Container) => {
        const fn = () => {
            container?.canvas?.element?.style.setProperty(
                'position',
                'absolute'
            )
        }
        fn()
        setTimeout(fn, 100)
    }, [])
    return (
        <div
            className="ecosystem-page _pst-rlt _mgbt-24px _mgbt-48px-sm _ovfx-hd"
            style={{
                paddingTop: 'var(--header-height)',
            }}
        >
            <div className="_pst-rlt _zid-1 _tal-ct _mgt-24px _pdbt-32px">
                <img
                    src="./images/ecosystem/echosystem-wave.svg"
                    className="_pst-asl _t-0px _l-0px _r-0px _w-100pct-sm _tf-n-sm _zid--2"
                    style={{ transform: 'translate(-50%, 0)' }}
                />
                <Particles
                    canvasClassName="_pst-asl _zid--1"
                    style={{ position: 'absolute' }}
                    url="./images/ecosystem/particlesjs-config.json"
                    loaded={onLoadedParticles}
                />
                <div
                    className="_fs-800 _fs-900-sm _pdv-4px _pdh-4px _bdrd-4px _mgbt-12px _bdfb-1px _w-fc _mgh-at"
                    style={{ backgroundColor: 'rgb(244 222 129 / 30%)' }}
                >
                    REI Ecosystem
                </div>
                <div
                    className="_fs-400 _fs-500-sm _pdv-4px _pdh-4px _bdrd-4px _mgbt-48px _bdfb-1px _w-fc _mgh-at"
                    style={{ backgroundColor: 'rgb(244 222 129 / 30%)' }}
                >
                    Connects a decentralized world into everyday lives with
                    ease.
                </div>
                <a
                    className="rei-button _w-fc _mgh-at"
                    target="_blank"
                    href="https://q4cgscoyhne.typeform.com/to/VcKMbwm4"
                    rel="noreferrer"
                >
                    Contact Us
                </a>
            </div>
            <input
                className="_w-fc _ffml-secondary _fs-300 _fs-400-sm _pdl-48px _pdr-12px _pdv-8px _zid-1 _mgh-at _mgt-32px _mgbt-32px"
                style={{
                    border: '1px solid rgba(196, 196, 196, 1)',
                    color: 'rgba(98, 98, 98, 1)',
                    backgroundColor: 'rgba(255,255,255, 0.97)',
                    backgroundImage: "url('./images/ecosystem/search.svg')",
                    backgroundPosition: '10px 5px',
                    backgroundRepeat: 'no-repeat',
                    minWidth: 'min(350px, 90vw)',
                }}
                onChange={handleChangeSearch}
                placeholder="Search projects by name"
            />
            <div className="rei-hide-scollbar _dp-f _fw-w-sm _ovfx-at _jtfct-ct-sm _zid-1 _mgbt-16px">
                {TAG_LIST.map((tag) => (
                    <div
                        key={tag}
                        className={classNames(
                            'rei-button _mnh-fc _bdcl-base-200 _wsp-nw _lh-150pct _lh-115pct-sm _fs-100 _fs-200-sm _fw-500 _pdv-4px _pdv-8px-sm _pdh-8px _pdh-16px-sm _mgh-4px _mgh-8px-sm _mgbt-12px',
                            currentTag === tag ? '-primary' : '-secondary'
                        )}
                        onClick={() => handleClickTag(tag)}
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="_dp-f _fw-w _jtfct-ct _zid-1">
                {LIST.filter(
                    (item) =>
                        (currentTag
                            ? item.tagList.includes(currentTag)
                            : true) &&
                        (currentSearch
                            ? item.title
                                  .toLocaleLowerCase()
                                  .includes(currentSearch.toLowerCase())
                            : true)
                ).map((item) => (
                    <div
                        key={item.title}
                        className="rei-card _bgcl-grey-10-hover _mgh-4px _mgh-16px-sm _mgh-24px-lg _mgbt-12px _mgbt-24px-sm _mgbt-48px-lg _dp-f _fdrt-cl"
                        style={{ width: 'min(250px, 47%)' }}
                    >
                        <div className="_pdl-12px _pdt-12px rei-hide-scollbar _dp-f _fw-w-sm _wsp-nw _ovfx-at _mgbt-0px _mgbt-4px-sm">
                            {item.tagList.map((tag) => (
                                <div
                                    key={tag}
                                    onClick={() => setCurrentTag(tag)}
                                    className="rei-card rei-button -secondary _bdcl-base-100 _mnh-fc _w-fc _fs-100 _fs-200-sm _fw-500 _pdh-8px _pdv-8px _mgbt-8px _mgr-8px"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="_pd-12px _dp-f _fdrt-cl">
                            <a
                                className="_w-100pct _dp-f"
                                href={item.link || undefined}
                                title={`Visit ${item.title}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={item.imageSrc}
                                    className="_ojf-ct _mgh-at _mgbt-16px _mxw-100pct _pdh-8px _pdh-32px-sm"
                                    style={{
                                        objectPosition: '50% 70%',
                                        height: 'min(75px, 20vw)',
                                    }}
                                />
                            </a>
                            <div className="_fs-400 _fs-500-sm _fs-600-md _fw-400 _tal-ct _mgbt-8px _mgbt-12px-sm">
                                {item.title}
                            </div>
                            <div
                                className="card-description _wsp-pl _ffml-secondary _fs-200 _fs-300-sm _fs-400-sm _pdh-2px _pdh-8px-sm"
                                title={
                                    typeof item.description === 'string'
                                        ? item.description
                                        : item.title
                                }
                            >
                                {item.description}
                            </div>
                        </div>
                        <a
                            className={classNames(
                                'rei-button -ghost _fs-100 _fs-200-sm _fw-500 _dp-f _jtfct-fst _mgt-at _pdh-24px',
                                !item.link && '-disabled'
                            )}
                            href={item.link || undefined}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {item.link ? (
                                <>
                                    <div>Visit</div>
                                    <svg
                                        className="_mgl-8px _mgt-1px"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
                                            fill="black"
                                        />
                                    </svg>
                                    {item.isComingSoon && (
                                        <span className="_cl-negative-500 _mgl-12px">
                                            (Coming Soon)
                                        </span>
                                    )}
                                </>
                            ) : (
                                <span className="_cl-text-secondary-3">
                                    Coming Soon
                                </span>
                            )}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
