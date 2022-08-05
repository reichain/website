import classNames from 'classnames'

const LIST = [
    {
        imageSrc: '/images/home/media-partner/bitcast.png',
        title: 'Bitcast',
        link: 'https://web.facebook.com/thaibitcast',
        className: '',
    },
    {
        imageSrc: '/images/home/media-partner/cryptoqueenth.png',
        title: 'Crypto Queen',
        link: 'https://web.facebook.com/Cryptoqueenth',
        className: '_pdv-0px _mgv-0px',
        containerClassName: '_pdv-8px',
    },
    {
        imageSrc: '/images/home/media-partner/stockerday.png',
        title: 'Stocker Day',
        link: 'https://web.facebook.com/stockerday/',
        className: '',
    },
    {
        imageSrc: '/images/home/media-partner/cat-money-thailand.jpg',
        title: 'Cat Money Thailand',
        link: 'https://web.facebook.com/CatMoneyThailand',
        className: '',
    },
    {
        imageSrc: '/images/home/media-partner/i-learn-a-lot-about-bitcoin.png',
        title: 'I Learn A Lot About Bitcoin',
        link: 'https://web.facebook.com/ILearnALotAboutBitcoin',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/siamblockchain.png',
        title: 'Siam Blockchain',
        link: 'https://web.facebook.com/siamblockchain',
        className: '',
    },
    {
        imageSrc: '/images/home/media-partner/fatcatinvestors.png',
        title: 'Fatcat Investors',
        link: 'https://web.facebook.com/FatcatInvestors/',
        className: '',
    },
    {
        imageSrc: '/images/home/media-partner/newtodefi.png',
        title: 'มือใหม่หัด DeFi',
        link: 'https://web.facebook.com/newtodefi',
        className: '',
    },
    {
        imageSrc: '/images/home/media-partner/jolden-crypto.png',
        title: 'Jolden Crypto',
        link: 'https://www.facebook.com/JoldenCrypto',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/bingaence.jpg',
        title: 'ไบแง๊นน - Bingaence',
        link: 'https://www.facebook.com/Bingaence',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/papayatop.webp',
        title: 'Papayatop',
        link: 'https://www.facebook.com/papayatopz',
        className: '',
        containerClassName: '',
    },
    {
        imageSrc: '/images/home/media-partner/cryptoholysheet.jpg',
        title: 'CryptoHolySheet',
        link: 'https://www.facebook.com/cryptoholysheet/',
        className: '',
        containerClassName: '',
    },
    {
        imageSrc: '/images/home/media-partner/updatefarmnews.png',
        title: 'UpdateFarmNews',
        link: 'https://www.facebook.com/updatefarmnews',
        className: '_pdh-12px',
        containerClassName: '',
    },
    {
        imageSrc: '/images/home/media-partner/insomniacrypto.jpg',
        title: 'InsomniaCrypto',
        link: 'https://www.facebook.com/insomniacrypto',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/hodlbeer.jpg',
        title: 'HODL my beer',
        link: 'https://www.facebook.com/hodlbeer',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/crypto-seeker.jpg',
        title: 'CrypTo Seeker นักล่าคริปโต',
        link: 'https://www.facebook.com/CrypTo-Seeker-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B9%82%E0%B8%95-100706658268254/',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/notjiam.jpg',
        title: 'Notjiam',
        link: 'https://www.youtube.com/c/notjiam',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/ananmoneyknowledge.png',
        title: 'Ananmoneyknowledge',
        link: 'https://www.facebook.com/Ananmoneyknowledge',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/coincuddle.jpg',
        title: 'Coincuddle',
        link: 'https://www.facebook.com/coincuddle/',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/meowcrypto.jpg',
        title: 'เหมียวคริปโต - Meow Crypto',
        link: 'https://www.facebook.com/meowcrypto.9cat',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/mikki-pastel.png',
        title: 'Mikki Pastel',
        link: 'https://www.facebook.com/MikkiPastel',
        className: '',
        containerClassName: '_pdv-4px',
    },
    {
        imageSrc: '/images/home/media-partner/crypto-entertainer.png',
        title: 'Crypto Entertainer',
        link: 'https://www.facebook.com/crypto.entertainer',
        className: '',
        containerClassName: '_pdv-4px',
    },
]

export const MediaPartner = () => {
    return (
        <div
            className="_ptev-n _pst-rlt _ovf-hd _dp-g-sm _ovfx-clp _cl-primary-main _bdbtw-1px _bdcl-grey-20"
            style={{ background: 'rgb(255, 253, 231)' }}
        >
            {/* <img
                src="/images/ecosystem/echosystem-wave.svg"
                className="_pst-asl _t-0px _l-0px _r-0px _w-100pct-sm _tf-n-sm _zid--2"
                style={{ transform: 'translate(-50%, 0)' }}
            /> */}
            <div className="_pst-rlt _t-0px _zid-1 _tal-ct  _pdv-32px _pdv-32px-sm _pdh-32px _pdh-64px-sm ">
                <div className="_pst-rlt _fs-700 _fs-800-sm _tal-ct _mgbt-24px _w-fc _mgh-at _bdrd-4px _pdh-12px _zid-2">
                    Media Partnership
                </div>
                <div className="_dp-f _fw-w _fdrt-r _alit-ct _jtfct-ct _fw-w">
                    {LIST.map((item, index) => (
                        <a
                            key={index}
                            style={{
                                height: 90,
                                width: 220,
                                padding: '12px 16px',
                            }}
                            href={item.link || undefined}
                            className={classNames(
                                item.containerClassName,
                                'rei-button -outlined _ptev-at _mgh-8px _mgh-16px-sm _mgv-8px _mgv-16px-sm'
                            )}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={item.imageSrc}
                                alt={item.title}
                                className={classNames(
                                    item.className,
                                    '_w-100pct _h-100pct _ojf-ct _bgcl-white _bdrd-4px'
                                )}
                                style={{ margin: 8 }}
                                title={item.title}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MediaPartner
