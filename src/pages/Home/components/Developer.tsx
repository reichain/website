const LIST = [
    {
        title: 'EVM Compatible',
        description:
            'REI is forked from ETH -a trusted blockchain that will allow Industry dominance, established tech stack, tools, languages, standards and enterprise adoption.',
    },
    {
        title: 'Storage Friendly',
        description:
            'REI chain is a self-sovereign blockchain, it does not mint blocks without transactions, making transactions fast and allowing effective long term storage.',
    },
]

export const Developer = () => {
    return (
        <div className="_pst-rlt _dp-g-sm _pst-rlt _ovfx-clp _pdv-32px _pdv-48px-sm _pdh-32px _pdh-64px-sm">
            <div
                id="developer"
                className="_pst-asl _h-0px _w-100pct"
                style={{
                    marginTop: 'calc(var(--header-height) * -1)',
                }}
            />
            <div className="_fs-700 _fs-800-sm _cl-primary-main _tal-ct _mgbt-8px">
                Developer
            </div>
            <div className="_ffml-secondary _fs-300 _fs-400-sm _cl-text-default-3 _tal-ct _mgbt-24px _mgbt-32px-sm">
                REI Chain delivers unparalleied speed, security and reliability
                Enjoy almost instant transactions and extremely low fee.
            </div>
            <div
                className="_bdcl-primary-light _bdw-2px _bdrd-8px _ovf-hd _mgh-at"
                style={{ maxWidth: 600 }}
            >
                <div className="_dp-f _alit-ct _bgcl-primary-light _h-48px _pdl-24px">
                    {[
                        'rgba(249, 121, 121, 1)',
                        'rgba(255, 238, 0, 1)',
                        'rgba(121, 249, 172, 1)',
                    ].map((item) => (
                        <div
                            key={item}
                            className="_bdrd-max _w-12px _h-12px _mgr-8px"
                            style={{
                                background: item,
                            }}
                        />
                    ))}
                </div>
                <div
                    className=""
                    style={{ background: 'rgba(254, 254, 255, 1)' }}
                >
                    {LIST.map((item, index) => (
                        <div
                            key={item.title}
                            className="_pdv-16px _pdh-32px"
                            style={{
                                borderBottom:
                                    index === LIST.length - 1
                                        ? ''
                                        : '1px solid #9E9E9E',
                            }}
                        >
                            <div className="_cl-text-default-1 _fs-500 _fs-500-sm _mgbt-8px">
                                {item.title}
                            </div>
                            <div
                                className="_ffml-secondary _fs-300 _fs-300-sm"
                                style={{ color: 'rgba(101, 101, 101, 1)' }}
                            >
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Developer
