const ArrowRight = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="_h-12px _h-16px-sm"
    >
        <path
            d="M11 0.333496L9.11998 2.2135L16.56 9.66683H0.333313V12.3335H16.56L9.11998 19.7868L11 21.6668L21.6666 11.0002L11 0.333496Z"
            fill="currentColor"
        />
    </svg>
)

export const LearnMore = () => {
    return (
        <div className="full-width _pst-rlt _w-100pct _bgcl-primary-main _cl-primary-contrast _pdh-32px _pdh-64px-sm _pdv-32px _pdv-48px-sm">
            <div
                id="learn"
                className="_pst-asl _h-0px _w-100pct"
                style={{
                    marginTop: 'calc((var(--header-height) * -1) - 48px)',
                }}
            />
            <div className="_mgh-at" style={{ maxWidth: 750 }}>
                <div className="_mgbt-32px">
                    <div className="_fs-700 _fs-800-sm _fw-700">Limitless</div>
                    <div className="_fs-600 _fs-700-sm _fw-700">
                        and Boundless
                    </div>
                </div>
                <div className="lo-12 lo-6-sm _gg-24px _gg-48px-sm">
                    <div className="_dp-f _fdrt-cl">
                        <div className="_pst-rlt _f-1 _dp-f _fdrt-cl _bgcl-white _cl-black _pdv-24px _pdv-32px-sm _pdh-24px _pdh-32px-sm _mgbt-24px _mgbt-48px-sm">
                            <div className="_fs-500 _fs-600-sm _fw-700 _mgbt-12px">
                                Know more about REI Chain
                            </div>
                            <div className="_fs-300 _fs-400-sm _mgbt-16px _mgbt-24px-sm">
                                Discover how REI Chain works and you can
                                interact with ecosystem.
                            </div>
                            <a
                                className="rei-button -secondary -disabled _w-fc _mnh-32px _pdh-48px _pdv-12px _pdv-12px-sm _pdh-48px-sm _zid-2"
                                style={{ marginBottom: 165 }}
                            >
                                (Soon)
                            </a>
                            <img
                                width={275}
                                height={275}
                                className="_pst-asl _bt-0px _r-0px _ojf-ct _pdl-32px _pdl-0px-sm _pdbt-4px _pdr-4px"
                                style={{ objectPosition: 'bottom' }}
                                src="./images/home/learn-more/learn-more-box.png"
                            />
                            {/* <img
                                className="_w-256px _w-320px-sm _mxw-100pct _mgt-at _mgl-at _ojf-c _pdbt-8px _pdbt-0px-sm _pdr-8px _pdr-0px-sm"
                                style={{ margin: '-20px -32px -32px auto' }}
                                src="./images/home/learn-more/learn-more-box.png"
                            /> */}
                        </div>
                        <div className="_pst-rlt _dp-f _fdrt-cl _bgcl-white _cl-black _pdv-24px _pdv-32px-sm _pdh-24px _pdh-32px-sm">
                            <div className="_fs-500 _fs-600-sm _fw-700 _mgbt-12px">
                                Become a Foundation Node (Kiso)
                            </div>
                            <div className="_fs-300 _fs-400-sm _mgbt-16px _mgbt-24px-sm">
                                Discover how REI Chain works and you can
                                interact with ecosystem.
                            </div>
                            <div
                                className="rei-button -secondary -disabled _w-fc _mnh-32px _pdh-48px _pdv-12px _pdv-12px-sm _pdh-48px-sm _zid-2"
                                style={{ marginBottom: 75 }}
                            >
                                (Soon)
                            </div>
                            <img
                                width={180}
                                height={180}
                                className="_pst-asl _bt-0px _r-0px _ojf-ct _pdl-24px _pdl-0px-sm _pdbt-12px _pdr-12px"
                                style={{ objectPosition: 'bottom' }}
                                src="./images/home/learn-more/validator-node.png"
                            />
                            {/* <img
                                width={180}
                                className="_mxw-100pct _mgt-at _mgl-at _ojf-c _pdbt-8px _pdbt-0px-sm _pdr-8px _pdr-0px-sm"
                                style={{ margin: '-10px -32px -32px auto' }}
                                src="./images/home/learn-more/validator-node.png"
                            /> */}
                        </div>
                    </div>
                    <div className="_dp-f _fdrt-cl">
                        <div className="_dp-f _fdrt-cl _bgcl-white _cl-black _pdv-24px _pdv-32px-sm _pdh-24px _pdh-32px-sm _mgbt-24px _mgbt-48px-sm">
                            <div className="_fs-500 _fs-600-sm _fw-700 _mgbt-12px">
                                Build on REI Chain
                            </div>
                            <div className="_fs-300 _fs-400-sm _mgbt-16px _mgbt-24px-sm">
                                Build brand new apps and protocals or contribute
                                to existing REI chain codebase.
                            </div>
                            <div className="rei-button -secondary -disabled _w-fc _mnh-32px _pdh-48px _pdv-12px _pdv-12px-sm _pdh-48px-sm _zid-2">
                                (Soon)
                            </div>
                        </div>
                        <div className="_f-1 _dp-f _fdrt-cl _bgcl-white _cl-black _pdv-24px _pdv-32px-sm _pdh-24px _pdh-32px-sm">
                            <div className="_fs-500 _fs-600-sm _fw-700 _mgbt-12px">
                                Join the community
                            </div>
                            <div className="_fs-300 _fs-400-sm _mgbt-16px _mgbt-24px-sm">
                                Click here to become one with the family and
                                learn the latest news here.
                            </div>
                            <div className="rei-button -secondary -disabled _w-fc _mnh-32px _pdh-48px _pdv-12px _pdv-12px-sm _pdh-48px-sm _zid-2">
                                (Soon)
                            </div>
                            {/* <a href="#community" className="rei-button -secondary _w-fc _mnh-32px _pdh-48px _pdv-12px _pdv-12px-sm _pdh-48px-sm _zid-2">
                                <ArrowRight />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore
