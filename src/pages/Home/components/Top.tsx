import CircleSpiner from 'components/CircleSpiner/CircleSpiner'

const ArrowRightCircle = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15 8L13.59 9.41L19.17 15H7V17H19.17L13.59 22.59L15 24L23 16L15 8Z"
            fill="black"
        />
        <circle cx="16" cy="16" r="15.5" stroke="black" />
    </svg>
)

export const Top = () => {
    return (
        <>
            <div
                className="home-top full-width _pst-rlt _dp-f _fdrt-cl _alit-ct _zid-1 _tal-ct _pdh-16px"
                style={{
                    paddingTop: 'var(--header-height)',
                }}
            >
                <CircleSpiner
                    className="circle _pst-asl _t-0px"
                    size="1450px"
                    strokeWidth="0.02px"
                    style={
                        {
                            '--transform': 'translateY(-43%) scale(0.4)',
                            '--transform-sm': 'translateY(-50%) scale(0.7)',
                            '--transform-md': 'translateY(-64%)',
                        } as any
                    }
                    dotSize={4}
                />
                <CircleSpiner
                    className="circle _pst-asl _r-0px _t-0px"
                    size="750px"
                    strokeWidth="0.015px"
                    style={
                        {
                            '--transform': 'translate(60%, -35px) scale(0.5)',
                            '--transform-md': 'translate(75%, -35px)',
                            '--transform-lg': 'translate(50%, -35px)',
                        } as any
                    }
                    dotSize={5}
                />
                <CircleSpiner
                    className="circle _pst-asl _r-0px _t-0px _dp-n _dp-b-md"
                    size="750px"
                    strokeWidth="0.015px"
                    style={
                        {
                            '--transform': 'translate(20%, 25%)',
                            '--transform-md': 'translate(60%, 25%) scale(0.8)',
                            '--transform-lg': 'translate(10%, 25%)',
                            '--duration': '10s',
                        } as any
                    }
                    dotSize={5}
                />
                <CircleSpiner
                    className="circle _pst-asl _l-0px _t-0px"
                    size="900px"
                    strokeWidth="0.015px"
                    style={
                        {
                            '--transform': 'translate(-61%, -150px) scale(0.4)',
                            '--transform-md': 'translate(-70%, -50px)',
                            '--transform-lg': 'translate(-50%, -50px)',
                        } as any
                    }
                    dotSize={6}
                />
                <div className="_fs-700 _fs-900-sm _fw-500 _lh-150pct _mgt-32px-sm">
                    Connecting <br />
                    Synthetic World to All
                </div>
                <div
                    className="_ffml-secondary _cl-text-default-3 _fs-300 _fs-400-sm _fw-400 _mgt-12px _mgt-24px-sm"
                    style={{ maxWidth: 1000 }}
                >
                    A foundation network protocol for DApps and Businesses.
                </div>
                <div className="_dp-f _alit-ct _mgt-24px">
                    <a
                        className="rei-button _dp-f _fdrt-cl"
                        target="_blank"
                        href="https://killswitchofficial.gitbook.io/rei-chain"
                        rel="noreferrer"
                    >
                        DISCOVER REI
                    </a>
                </div>
                <div className="lo-12 _gg-12px _gg-16px-sm _gg-24px-lg _fw-w _mgt-64px _mgbt-64px">
                    <a
                        href="https://reiscan.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="REI Scan"
                        className="rei-button -outlined _bgcl-warning-100-hover _dp-f _jtfct-spbtw _pdv-12px _pdh-16px _mnw-256px _mnw-320px-sm"
                        style={{ backgroundColor: 'rgba(255, 253, 231, 1)' }}
                    >
                        <div className="_dp-f _fdrt-cl _tal-l _alit-st _mgr-24px">
                            <span className="_fw-700 _fs-400 _fs-500-sm _mgbt-8px">
                                REI Scan
                            </span>
                            <span className="_fw-400 _fs-200 _fs-300-sm">
                                REI Network Explorer
                            </span>
                        </div>
                        <ArrowRightCircle />
                    </a>
                </div>
            </div>
            <div
                className="_dp-g-sm _pst-rlt _mgh-at _pdh-32px _pdh-64px-sm _ovfx-clp _mgbt-24px _mgbt-12px-md _mgbt-2px-lg"
                style={{ gridTemplateColumns: '3fr 1fr', maxWidth: 1000 }}
            >
                <div className="_mgv-at _cl-text-default-2">
                    <div className="_fs-500 _fs-600-sm _fw-500 _pdr-8px">
                        <span className="_fs-800">Our</span> World Is Changing.
                        <br />
                        <span className="_fs-800">Together</span>, We Can Change
                        It For The Better.
                    </div>
                    <div className="_ffml-secondary _fs-400 _fw-400 _mgt-12px _mgt-24px-sm _pdr-8px _pdr-0px-sm">
                        REI chain is a network protocol that is created to
                        become a Blockchain for use in the world of “Traditional
                        Finance”. The goal of this creation is for everyone to
                        have access to day-to-day spending and the creation of a
                        “Synthetic World” together. Users are able to transfer
                        data or NFT tokens in as fast as 1 second, enabling
                        smooth transactions and smaller gas fees.
                    </div>
                    <div className="_w-fc-sm lo-6 _gg-12px _mgt-24px">
                        <a
                            className="rei-button _pdh-12px _pdh-24px-sm"
                            href="https://killswitchofficial.gitbook.io/rei-chain"
                            target="_blank"
                            rel="noreferrer"
                            title="REI Scan"
                        >
                            DISCOVER REI
                        </a>
                        <a
                            className="rei-button -secondary _cs-nal _pdh-12px _pdh-24px-sm _dp-f _fdrt-cl"
                            target="_blank"
                            rel="noreferrer"
                            title="REI Scan"
                        >
                            <span className="_lh-115pct">White Paper</span>
                            <span className="_fw-500 _fs-300 _cl-text-secondary-3 _mgt-2px">
                                (Soon)
                            </span>
                        </a>
                    </div>
                </div>
                <img
                    className="_mgh-at _w-64px _w-128px-sm _pst-asl _pst-rlt-sm _zid-2"
                    style={{ top: -10, right: -25 }}
                    src="images/home/top/sphere-box.png"
                    alt="box-square"
                />
            </div>
        </>
    )
}

export default Top
