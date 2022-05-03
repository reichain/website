import CircleSpiner from 'components/CircleSpiner/CircleSpiner'

const LIST = [
    {
        imageSrc: './images/home/why-rei-chain/instant-transaction.png',
        title: 'Instant transaction',
        description:
            'As a single validator node, decision-making is made almost instantly.',
        className: '_ojf-ct _h-128px-sm _mgbt-4px',
        imageStyle: {
            width: '60%',
            objectPosition: 'bottom',
        },
    },
    {
        imageSrc: './images/home/why-rei-chain/low-gas-fee.png',
        title: 'Low gas fee',
        description:
            'One of REI’s special traits: is affordable and uniquely low gas fee due to the adoption of a private blockchain.',
        className: '_w-50pct _ojf-ct _h-128px-sm',
    },
    {
        imageSrc: './images/home/why-rei-chain/customer-centric.png',
        title: 'Customer Centric ',
        description:
            '“Empathy at heart” understanding needs from both Developers’ side and Users’ side to establish a friendly community.',
        className: '_ojf-ct _h-128px-sm _mgbt-4px',
        imageStyle: { width: '70%', objectPosition: 'bottom' },
    },
    {
        imageSrc: './images/home/why-rei-chain/scalability.png',
        title: 'Scalability',
        description:
            'REI chain uses Quorum, which is forked and derived from Ethereum that improves performance, security at all times, and fast transaction due to being a single validator node.',
        className: '_w-50pct _ojf-ct _h-128px-sm _mgbt-4px',
        imageStyle: { width: '70%', objectPosition: 'bottom' },
    },
]

export const WhyRei = () => {
    return (
        <div className="full-width _ovf-hd _pst-rlt _dp-g-sm _pst-rlt _ovfx-clp _bgcl-primary-main _cl-white _tal-ct _pdt-48px _pdbt-12px _pdbt-32px-sm">
            <div className="_pst-asl _l-0px _t-0px _w-100pct _w-us-md">
                <CircleSpiner
                    isSingle
                    className="circle _cl-white"
                    size="250px"
                    strokeWidth="0.05px"
                    style={
                        {
                            '--transform': 'translate(0%, -50%)',
                            '--transform-sm': 'translate(0%, -40%)',
                            '--duration': '8s',
                        } as any
                    }
                    dotSize={8}
                />
                <CircleSpiner
                    isSingle
                    className="circle _cl-white _dp-n _dp-b-md"
                    size="220px"
                    strokeWidth="0.05px"
                    style={
                        {
                            '--transform': 'translate(0%, -90%)',
                            '--duration': '6s',
                        } as any
                    }
                    dotSize={8}
                />
                <CircleSpiner
                    isSingle
                    className="circle _cl-white _dp-n _dp-b-md"
                    size="175px"
                    strokeWidth="0.05px"
                    style={
                        {
                            '--transform': 'translate(0%, -160%)',
                            '--duration': '5s',
                        } as any
                    }
                    dotSize={8}
                />
            </div>
            <div
                id="why-rei"
                className="_pst-asl _h-0px _w-100pct"
                style={{
                    marginTop: 'calc(var(--header-height) * -1)',
                }}
            />
            <div>
                <div className="_fs-800 _fs-800-sm _mgbt-32px _mgbt-4px-sm">
                    Why REI Chain
                </div>
            </div>
            <div className="_dp-f _fdrt-r _alit-ct _jtfct-ct _fw-w _zid-1">
                {LIST.map((item) => (
                    <div
                        key={item.title}
                        style={{ maxWidth: 300 }}
                        className="_mgbt-32px _mgbt-24px-sm _mgh-32px"
                    >
                        <div className="_dp-f _alit-fe _jtfct-ct _mgbt-12px _mgbt-12px-sm _h-at _h-128px-sm">
                            <img
                                src={item.imageSrc}
                                alt={item.title}
                                title={item.title}
                                className={item.className}
                                style={item.imageStyle}
                            />
                        </div>
                        <div className="_fs-500 _fs-600-sm _fw-400 _mgbt-8px _mgbt-12px-sm">
                            {item.title}
                        </div>
                        <div className="_ffml-secondary _fs-300 _fs-400-sm _fw-400">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyRei
