import classNames from 'classnames'

const LIST = [
    {
        title: 'EN',
        imageSrc: '/images/home/social/telegram.svg',
        imageStyle: { width: 33 },
        link: 'https://t.me/reichainglobal',
    },
    {
        title: 'TH',
        imageSrc: '/images/home/social/telegram.svg',
        imageStyle: { width: 33 },
        link: 'https://t.me/reichain',
        isSoon: false,
    },
    {
        title: 'Discord',
        imageSrc: '/images/home/social/discord.svg',
        imageStyle: { width: 35 },
        link: 'https://discord.gg/jCsZnjtT9Q',
    },
    {
        title: 'Medium',
        imageSrc: '/images/home/social/medium.svg',
        imageStyle: { width: 30 },
        link: 'https://medium.com/rei-chain',
    },
    // {
    //     title: 'Youtube',
    //     imageSrc: '/images/home/social/youtube.svg',
    //     imageStyle: { width: 35 },
    //     link: '',
    // },
    {
        title: 'Twitter',
        imageSrc: '/images/home/social/twitter.svg',
        imageStyle: { width: 35 },
        link: 'https://twitter.com/_REI_chain',
    },
    {
        title: 'GitHub',
        description: 'Source Code',
        imageSrc: '/images/home/social/github.svg',
        imageStyle: { width: 35 },
        link: 'https://github.com/reichain',
    },
]

export const Community = () => {
    return (
        <div
            className="_dp-g-sm _pst-rlt _ovfx-clp _pdt-32px _pdbt-32px _pdh-32px _pdh-64px-sm _mgh-at _ovfx-clp _w-100pct"
            style={{ maxWidth: 1000 }}
        >
            <div
                id="community"
                className="_pst-asl _h-0px _w-100pct"
                style={{
                    marginTop: 'calc(var(--header-height) * -1)',
                }}
            />
            <div className="_dp-f _fdrt-cl _fdrt-r-sm">
                <div>
                    <div className="_fw-700 _fs-600 _fs-800-sm _cl-text-default-1 _mgbt-4px _pdl-24px _pdl-0px-sm">
                        Join
                    </div>
                    <div className="_fs-500 _fs-700-sm _cl-text-default-3 _lh-130pct _mgbt-16px _mgbt-32px-sm _pdl-24px _pdl-0px-sm">
                        REI Chain Global <br /> community
                    </div>
                    <div className="lo-4 lo-4-md _gg-12px _gg-24px-sm _w-fc _mgh-at _alit-ct _jtfit-ct">
                        {LIST.map((item) => (
                            <a
                                key={item.title}
                                href={item.link || undefined}
                                target="_blank"
                                rel="noreferrer"
                                style={{ width: 80, height: 80 }}
                                title={item.description || item.title}
                                className={classNames(
                                    'rei-button -outlined _pd-0px _w-128px-sm _h-128px-sm _bdcl-text-default-3 _pd-12px-sm _dp-f _fdrt-cl',
                                    item.isSoon && '-disabled'
                                )}
                            >
                                <img
                                    src={item.imageSrc}
                                    alt={item.title}
                                    style={{
                                        maxWidth: '30%',
                                        ...item.imageStyle,
                                    }}
                                    className="_mgbt-8px _mgbt-12px-sm _mxw-us-sm"
                                />
                                <div className="_ffml-secondary _fw-400 _fs-200 _fs-300-sm _dp-f _fdrt-cl _tal-ct">
                                    {item.title}
                                    {item.description && (
                                        <span className="_fw-200 _fs-100 _cl-text-secondary-3 _mgt-2px">
                                            ({item.description})
                                        </span>
                                    )}
                                    {item.isSoon && (
                                        <span className="_fw-600 _fs-100 _cl-text-secondary-3 _mgt-2px">
                                            (Soon)
                                        </span>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="_w-100pct _mgl-0px _mgl-32px-sm _mgl-64px-md _mgt-16px _mgt-at-sm _pdh-32px _pdh-0px-sm">
                    <img
                        className="_mxh-256px _mxh-us-sm _ojf-ct _w-100pct"
                        src="/images/home/join/community-tower.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Community
